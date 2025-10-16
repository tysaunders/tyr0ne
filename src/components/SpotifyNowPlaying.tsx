import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  albumArt: string;
  url: string;
}

interface SpotifyData {
  isPlaying: boolean;
  track?: SpotifyTrack;
  error?: string;
  needsAuth?: boolean;
}

export function SpotifyNowPlaying() {
  const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null);
  const [hasAuthorized, setHasAuthorized] = useState(false);
  const [showAuthButton, setShowAuthButton] = useState(false);

  const fetchNowPlaying = async () => {
    try {
      const url = `https://${projectId}.supabase.co/functions/v1/make-server-db962463/spotify/currently-playing`;
      
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${publicAnonKey}`,
        },
      });

      if (!response.ok) {
        const text = await response.text();
        
        try {
          const data = JSON.parse(text);
          setSpotifyData(data);
          
          // Show auth button if needs auth
          if (data.needsAuth) {
            setShowAuthButton(true);
          }
        } catch (e) {
          // If we can't parse the response, show auth button
          setShowAuthButton(true);
        }
        return;
      }

      const data = await response.json();
      setSpotifyData(data);
      
      // If we've successfully fetched data (even if not playing), mark as authorized
      if (!data.needsAuth) {
        setHasAuthorized(true);
        setShowAuthButton(false);
      }
    } catch (error) {
      // Silently handle errors - Spotify integration is optional
      // On network error, show auth button as a fallback
      setShowAuthButton(true);
    }
  };

  useEffect(() => {
    // Small delay before first fetch to let the page load
    const timeout = setTimeout(() => {
      fetchNowPlaying();
    }, 1000);
    
    // Then fetch every 10 seconds
    const interval = setInterval(fetchNowPlaying, 10000);
    
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  const handleAuthorize = async () => {
    try {
      // Fetch the auth URL from the server
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-db962463/spotify/auth-url`,
        {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (!response.ok) {
        return;
      }

      const { authUrl } = await response.json();
      
      // Open Spotify authorization in a new window
      window.open(authUrl, '_blank', 'width=600,height=800');
      
      // Check if authorization succeeded after a delay
      setTimeout(() => {
        fetchNowPlaying();
      }, 5000);
    } catch (error) {
      // Silently handle errors
    }
  };

  // Show auth button if needed
  if (showAuthButton && !hasAuthorized) {
    return (
      <button 
        onClick={handleAuthorize}
        className="ml-2 text-[10px] underline cursor-pointer hover:opacity-70"
      >
        Connect
      </button>
    );
  }

  // If not playing, just show the Spotify link without extra info
  if (!spotifyData?.isPlaying) {
    return null;
  }

  // Show currently playing track
  return (
    <span className="ml-2 lowercase">
      → {spotifyData.track?.name} by {spotifyData.track?.artist}
    </span>
  );
}
