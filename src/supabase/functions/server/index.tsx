import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-db962463/health", (c) => {
  return c.json({ status: "ok" });
});

// Spotify OAuth endpoints - return auth URL for frontend to use
app.get('/make-server-db962463/spotify/auth-url', (c) => {
  try {
    const clientId = Deno.env.get('SPOTIFY_CLIENT_ID');
    
    if (!clientId) {
      console.log('SPOTIFY_CLIENT_ID not found in environment');
      return c.json({ error: 'Spotify Client ID not configured' }, 500);
    }
    
    // Get the base URL from the request
    const url = new URL(c.req.url);
    const baseUrl = `${url.protocol}//${url.host}/functions/v1/make-server-db962463`;
    const redirectUri = `${baseUrl}/spotify/callback`;
    
    console.log('Spotify auth - redirect URI:', redirectUri);
    
    const scopes = 'user-read-currently-playing user-read-playback-state';
    
    const authUrl = `https://accounts.spotify.com/authorize?${new URLSearchParams({
      response_type: 'code',
      client_id: clientId,
      scope: scopes,
      redirect_uri: redirectUri,
    })}`;
    
    console.log('Generated Spotify auth URL');
    return c.json({ authUrl });
  } catch (error) {
    console.log('Error in /spotify/auth-url:', error);
    return c.json({ error: 'Failed to generate Spotify authorization URL', details: error.message }, 500);
  }
});

app.get('/make-server-db962463/spotify/callback', async (c) => {
  const code = c.req.query('code');
  const error = c.req.query('error');
  
  console.log('Spotify callback - code:', code ? 'received' : 'missing', 'error:', error);
  
  if (error) {
    return c.html(`<html><body><h1>Authorization Error</h1><p>${error}</p><p>You can close this window.</p></body></html>`);
  }
  
  if (!code) {
    return c.html('<html><body><h1>Error</h1><p>No authorization code received</p><p>You can close this window.</p></body></html>');
  }
  
  try {
    const clientId = Deno.env.get('SPOTIFY_CLIENT_ID');
    const clientSecret = Deno.env.get('SPOTIFY_CLIENT_SECRET');
    
    if (!clientId || !clientSecret) {
      console.log('Spotify credentials not found in environment');
      return c.html('<html><body><h1>Configuration Error</h1><p>Spotify credentials not configured</p></body></html>');
    }
    
    const url = new URL(c.req.url);
    const baseUrl = `${url.protocol}//${url.host}/functions/v1/make-server-db962463`;
    const redirectUri = `${baseUrl}/spotify/callback`;
    
    console.log('Exchanging code for token with redirect URI:', redirectUri);
    
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.text();
      console.log('Spotify token exchange error:', response.status, errorData);
      return c.html(`<html><body><h1>Token Exchange Error</h1><p>Status: ${response.status}</p><pre>${errorData}</pre></body></html>`);
    }
    
    const data = await response.json();
    console.log('Successfully obtained Spotify tokens');
    
    // Store tokens in KV store
    await kv.set('spotify_access_token', data.access_token);
    await kv.set('spotify_refresh_token', data.refresh_token);
    await kv.set('spotify_token_expires_at', String(Date.now() + (data.expires_in * 1000)));
    
    console.log('Tokens stored in KV store');
    
    return c.html('<html><body style="font-family: sans-serif; padding: 40px; text-align: center;"><h1>✅ Authorization Successful!</h1><p>You can now close this window and return to the app.</p><script>setTimeout(() => window.close(), 2000);</script></body></html>');
  } catch (error) {
    console.log('Error during Spotify callback:', error);
    return c.html(`<html><body><h1>Error</h1><p>${error.message}</p></body></html>`);
  }
});

app.get('/make-server-db962463/spotify/currently-playing', async (c) => {
  try {
    console.log('Fetching currently playing track...');
    
    // Get access token
    let accessToken = await kv.get('spotify_access_token');
    const expiresAtStr = await kv.get('spotify_token_expires_at');
    const expiresAt = expiresAtStr ? parseInt(expiresAtStr) : null;
    
    console.log('Access token exists:', !!accessToken, 'Expires at:', expiresAt);
    
    // Refresh token if expired
    if (!accessToken || !expiresAt || Date.now() >= expiresAt) {
      console.log('Token expired or missing, attempting refresh...');
      const refreshToken = await kv.get('spotify_refresh_token');
      
      if (!refreshToken) {
        console.log('No refresh token found, need authorization');
        return c.json({ error: 'Not authorized. Please authenticate first.', needsAuth: true, isPlaying: false });
      }
      
      const clientId = Deno.env.get('SPOTIFY_CLIENT_ID');
      const clientSecret = Deno.env.get('SPOTIFY_CLIENT_SECRET');
      
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.text();
        console.log('Spotify token refresh error:', response.status, errorData);
        return c.json({ error: 'Failed to refresh token', needsAuth: true, isPlaying: false });
      }
      
      const data = await response.json();
      accessToken = data.access_token;
      
      console.log('Token refreshed successfully');
      
      await kv.set('spotify_access_token', accessToken);
      await kv.set('spotify_token_expires_at', String(Date.now() + (data.expires_in * 1000)));
      
      if (data.refresh_token) {
        await kv.set('spotify_refresh_token', data.refresh_token);
      }
    }
    
    // Fetch currently playing track
    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    
    console.log('Spotify API response status:', response.status);
    
    if (response.status === 204 || response.status === 404) {
      console.log('No track currently playing');
      return c.json({ isPlaying: false });
    }
    
    if (!response.ok) {
      const errorData = await response.text();
      console.log('Spotify currently playing error:', response.status, errorData);
      return c.json({ error: 'Failed to fetch currently playing track', isPlaying: false });
    }
    
    const data = await response.json();
    
    if (!data.is_playing) {
      console.log('Track paused or not playing');
      return c.json({ isPlaying: false });
    }
    
    console.log('Currently playing:', data.item?.name, 'by', data.item?.artists?.map((a: any) => a.name).join(', '));
    
    return c.json({
      isPlaying: true,
      track: {
        name: data.item?.name,
        artist: data.item?.artists?.map((a: any) => a.name).join(', '),
        album: data.item?.album?.name,
        albumArt: data.item?.album?.images?.[0]?.url,
        url: data.item?.external_urls?.spotify,
      },
    });
  } catch (error) {
    console.log('Error fetching currently playing track:', error);
    return c.json({ error: 'Internal server error', details: error.message, isPlaying: false }, 500);
  }
});

Deno.serve(app.fetch);