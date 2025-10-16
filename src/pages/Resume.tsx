import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { SpotifyNowPlaying } from '../components/SpotifyNowPlaying';

function Group6() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full not-italic text-[22px] text-white"
    >
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] mb-[60px]">Work Experience</p>
      <div className="flex gap-[61px]">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] w-[226px] shrink-0">
          <p className="mb-0">2024 — Present</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">2018 — 2024</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">2017 — 2018</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">2016 — 2017</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">2015 — 2017</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">2011 — 2015</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">2010 — 2013</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">2007 — 2010</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">2006 — 2007</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] flex-1">
          <p className="mb-0">Senior Director, Experience Design at PayPal</p>
          <p className="mb-0">New York City, NY</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Global Head of Design at Gemini</p>
          <p className="mb-0">New York City, NY</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">
            Director, Product Design at Northwestern Mutual
            <br />
            New York City, NY
          </p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Adjunct Professor at School of Visual Arts</p>
          <p className="mb-0">New York City, NY</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Head of Design at The New York Stock Exchange</p>
          <p className="mb-0">New York City, NY</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Head of Design at PS Dept.</p>
          <p className="mb-0">New York City, NY</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Senior Visual Designer at R/GA</p>
          <p className="mb-0">New York City, NY</p>
          <p className="mb-0">↳ Product Design Lead — Nike+ FuelBand SE, Nike+ Training and Nike+ Basketball</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Senior User Interface Designer at FactSet</p>
          <p className="mb-0">New York City, NY</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Design Lead at Body Glove International</p>
          <p className="mb-0">Los Angeles, CA</p>
        </div>
      </div>
    </motion.div>
  );
}

function SideProject() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full not-italic text-[22px] text-white"
    >
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] mb-[60px]">Side Project</p>
      <div className="flex gap-[61px]">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] w-[226px] shrink-0">
          <p className="mb-0">Ongoing</p>
        </div>
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] flex-1 mb-0">Owner/Creative Director at An Honest Living</p>
      </div>
    </motion.div>
  );
}

function Speaking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full not-italic text-[22px] text-white"
    >
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] mb-[60px]">Speaking</p>
      <div className="flex gap-[61px] mb-[72px]">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] w-[226px] shrink-0">
          <p className="mb-0">2020</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] flex-1">
          <p className="mb-0">Designer Side Hustles at IXDA</p>
          <p className="mb-0">New York City, NY</p>
        </div>
      </div>
      <div className="flex gap-[61px]">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] w-[226px] shrink-0">
          <p className="mb-0">2015</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] flex-1">
          <p className="mb-0">Real World Talk at Philadelphia University</p>
          <p className="mb-0">Philadelphia, PA</p>
        </div>
      </div>
    </motion.div>
  );
}

function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full not-italic text-[22px] text-white"
    >
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] mb-[60px]">Awards</p>
      
      <div className="flex gap-[61px] mb-[72px]">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] w-[226px] shrink-0">
          <p className="mb-0">2022</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] flex-1">
          <p className="mb-0">Site of the day - Honorable Mention from Awwwards Gemini's Credit Card Campaign - "What's the best that could happen?"</p>
        </div>
      </div>
      
      <div className="flex gap-[61px] mb-[72px]">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] w-[226px] shrink-0">
          <p className="mb-0">2015</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] flex-1">
          <p className="mb-0">InStyle - Best of Digi from InStyle Magazine</p>
          <p className="mb-0">PS Dept. - Shopping</p>
        </div>
      </div>
      
      <div className="flex gap-[61px] mb-[72px]">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] w-[226px] shrink-0">
          <p className="mb-0">2015</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] flex-1">
          <p className="mb-0">The Best Apps for New York City from TimeOutNY</p>
          <p className="mb-0">PS Dept. - Fashion</p>
        </div>
      </div>
      
      <div className="flex gap-[61px]">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] w-[226px] shrink-0">
          <p className="mb-0">2014</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] flex-1">
          <p className="mb-0">Bronze Pencil - Use of Technology: Product & Mobile</p>
          <p className="mb-0">Integration from The One Club</p>
          <p className="mb-0">Nike+ FuelBand SE - Win The Hour - One Club Bronze Pencil for 2014 Interactive - Use of Technology - Product & Mobile Integration</p>
        </div>
      </div>
    </motion.div>
  );
}

function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full not-italic text-[22px] text-white"
    >
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] mb-[60px]">Features</p>
      
      <div className="flex gap-[61px] mb-[72px]">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] w-[226px] shrink-0">
          <p className="mb-0">2023</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] flex-1">
          <p className="mb-0">#104: Jon Caramanica (NYT)</p>
          <p className="mb-0">Perfectly Imperfect</p>
          <p className="mb-0">↳ "Count on An Honest Living ™ to invent it as it should have been. These high-quality limited-run garments celebrate the city's familiar but niche institutions - OTB, Con Edison, Fung Wah, etc. I bought the cap celebrating the essential 1990s hip-hop club The Tunnel, and if anyone would like to sell me the Peter Luger coach's jacket in XL, hit my DMs." - Jon Caramanica, New York Times, Critic</p>
        </div>
      </div>
      
      <div className="flex gap-[61px] mb-[72px]">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] w-[226px] shrink-0">
          <p className="mb-0">2021</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] flex-1">
          <p className="mb-0 whitespace-pre-wrap">Thank You, Dr. Zizmor The newest fashion trend in New York is — unironically, hyper-specifically - New York itself.</p>
          <p className="mb-0">New York Magazine</p>
        </div>
      </div>
      
      <div className="flex gap-[61px]">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] w-[226px] shrink-0">
          <p className="mb-0">2021</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] flex-1">
          <p className="mb-0">The City Ate My Closet An utterly fractional sampling of some of the most-worn (and most-coveted) New York merch.</p>
          <p className="mb-0">New York Magazine</p>
        </div>
      </div>
    </motion.div>
  );
}

function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full not-italic text-[22px] text-white"
    >
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] mb-[60px]">Education</p>
      <div className="flex gap-[61px]">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] w-[226px] shrink-0">
          <p className="mb-0">2002 — 2006</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] flex-1">
          <p className="mb-0">Bachelor of Graphic Design Communications at Philadelphia University</p>
          <p className="mb-0">Philadelphia, PA</p>
        </div>
      </div>
    </motion.div>
  );
}

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="contact" 
      className="relative w-full not-italic text-[22px] text-white"
    >
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] mb-[60px]">Contact</p>
      
      <div className="flex gap-[61px] mb-[72px]">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] w-[226px] shrink-0">
          <p className="mb-0 text-[rgba(255,255,255,0.5)]">Personal</p>
          <p className="mb-0">Instagram</p>
          <p className="mb-0">Email</p>
          <p className="mb-0">Mobile</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] flex-1">
          <p className="mb-0">&nbsp;</p>
          <a 
            href="https://www.instagram.com/tyr0ne" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-70 transition-opacity block mb-0 cursor-pointer"
          >
            @tyr0ne
          </a>
          <a 
            href="mailto:ty.m.saunders@gmail.com" 
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'mailto:ty.m.saunders@gmail.com';
            }}
            className="hover:opacity-70 transition-opacity block mb-0 cursor-pointer"
          >
            ty.m.saunders@gmail.com
          </a>
          <a 
            href="tel:+16103482990" 
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'tel:+16103482990';
            }}
            className="hover:opacity-70 transition-opacity block cursor-pointer"
          >
            +1 610-348-2990
          </a>
        </div>
      </div>
      
      <div className="flex gap-[61px]">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] w-[226px] shrink-0">
          <p className="mb-0 text-[rgba(255,255,255,0.5)]">Side Project</p>
          <p className="mb-0">Instagram</p>
          <p className="mb-0">Website</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] flex-1">
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0"><a href="https://www.instagram.com/itsanhonestliving/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">@itsanhonestliving</a></p>
          <p className="mb-0"><a href="https://www.itsanhonestliving.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">www.itsanhonestliving.com</a></p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Resume() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      second: '2-digit',
      hour12: true 
    }).toLowerCase();
  };

  return (
    <div className="bg-black relative w-full min-h-screen">
      {/* Header with tysaunders and Navigation */}
      <div className="relative w-full" style={{ height: '162px' }}>
        <Link to="/" className="absolute font-['Inter:Regular',_sans-serif] font-normal left-[3px] not-italic text-white top-[-10px] z-0 cursor-pointer" style={{ fontSize: '21vw', lineHeight: '0.85', letterSpacing: '-0.06em', margin: 0, padding: 0 }}>
          <span style={{ letterSpacing: '-0.03em' }}>t</span>ys<span style={{ marginLeft: '5px' }}>a</span><span style={{ marginLeft: '-6px' }}>und</span><span style={{ marginLeft: '-3px' }}>e</span>rs
        </Link>
        
        {/* Navigation */}
        <div className="absolute content-stretch flex font-['Inter:Regular',_sans-serif] font-normal items-center justify-between leading-[40px] left-[13px] right-[32px] not-italic text-[14px] text-white z-10" style={{ top: '225px' }}>
          <Link to="/" className="relative shrink-0">©2025</Link>
          <Link to="/" className="relative shrink-0 text-center uppercase">Designer</Link>
          <p className="relative shrink-0 text-center uppercase flex items-center gap-2">
            New York City, New York <Globe size={14} className="inline" /> {formatTime(currentTime)}
          </p>
          <Link to="/resume" className="relative shrink-0 text-center uppercase hover:opacity-70 transition-opacity">Resume</Link>
          <a href="#contact" className="relative shrink-0 text-right uppercase cursor-pointer">contact</a>
        </div>
      </div>

      {/* Resume Content */}
      <div className="pl-[13px] pr-[32px] pt-[197px] pb-[124px] flex flex-col gap-[108px]">
        <Group6 />
        <SideProject />
        <Speaking />
        <Awards />
        <Features />
        <Education />
        <Contact />
      </div>

      {/* Footer */}
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[40px] not-italic text-[14px] text-white pl-[13px] pr-[32px] pt-[124px] pb-[88px]">
        <div className="flex justify-between items-start w-full">
          <a href="https://www.linkedin.com/in/tysaunders/" target="_blank" rel="noopener noreferrer" className="relative shrink-0 uppercase cursor-pointer">LINKEDIN</a>
          <a href="https://www.instagram.com/tyr0ne" target="_blank" rel="noopener noreferrer" className="relative shrink-0 uppercase cursor-pointer">INSTAGRAM</a>
          <p className="relative shrink-0 uppercase">
            <a href="https://open.spotify.com/user/ty_saunders?si=ddb9e3c0c8d847e1" target="_blank" rel="noopener noreferrer" className="cursor-pointer">SPOTIFY</a>
            <SpotifyNowPlaying />
          </p>
          <a href="#contact" className="relative shrink-0 uppercase cursor-pointer">Contact</a>
        </div>
      </div>
    </div>
  );
}
