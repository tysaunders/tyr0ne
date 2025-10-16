import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { motion, useInView } from "motion/react";
import svgPaths from "./svg-qbozefbpvn";
import logoSvgPaths from "./svg-vy0m5vaehc";
import { SpotifyNowPlaying } from "../components/SpotifyNowPlaying";

function Frame2147210943() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[40px] not-italic text-[14px] text-white pl-[13px] pr-[32px] pt-[124px] pb-[88px]">
      <div className="flex justify-between items-start w-full">
        <a href="https://www.linkedin.com/in/tysaunders/" target="_blank" rel="noopener noreferrer" className="relative shrink-0 uppercase cursor-pointer">LINKEDIN</a>
        <a href="https://www.instagram.com/tyr0ne" target="_blank" rel="noopener noreferrer" className="relative shrink-0 uppercase cursor-pointer">INSTAGRAM</a>
        <p className="relative shrink-0 uppercase">
          <a href="https://open.spotify.com/user/ty_saunders?si=ddb9e3c0c8d847e1" target="_blank" rel="noopener noreferrer" className="cursor-pointer">SPOTIFY</a>
          <SpotifyNowPlaying />
        </p>
        <Link to="/resume#contact" className="relative shrink-0 uppercase cursor-pointer">Contact</Link>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Regular',_sans-serif] font-normal gap-[123px] h-[39px] items-center justify-between leading-[40px] left-[32px] right-[32px] not-italic text-[14px] text-white top-[256px] z-10">
      <p className="h-[39px] relative shrink-0">
        ©2025
        <br aria-hidden="true" />
        <br aria-hidden="true" />
      </p>
      <p className="relative shrink-0 text-center uppercase">Designer</p>
      <p className="relative shrink-0 text-center uppercase">New york city, new york</p>
      <p className="relative shrink-0 text-center uppercase">Resume</p>
      <p className="relative shrink-0 text-right uppercase">contact</p>
    </div>
  );
}

function Frame2147210946() {
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
    <div className="sticky top-0 z-50 bg-black w-full relative" style={{ height: '162px' }}>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal left-[3px] not-italic text-white top-[-10px] z-0" style={{ fontSize: '21vw', lineHeight: '0.85', letterSpacing: '-0.06em', margin: 0, padding: 0 }}>
        <span style={{ letterSpacing: '-0.03em' }}>t</span>ys<span style={{ marginLeft: '5px' }}>a</span><span style={{ marginLeft: '-6px' }}>und</span><span style={{ marginLeft: '-3px' }}>e</span>rs
      </p>
      
      {/* Navigation */}
      <div className="absolute content-stretch flex font-['Inter:Regular',_sans-serif] font-normal items-center justify-between leading-[40px] left-[13px] right-[32px] not-italic text-[14px] text-white z-10" style={{ top: '225px' }}>
        <p className="relative shrink-0">©2025</p>
        <p className="relative shrink-0 text-center uppercase">Designer</p>
        <p className="relative shrink-0 text-center uppercase flex items-center gap-2">
          New York City, New York <Globe size={14} className="inline" /> {formatTime(currentTime)}
        </p>
        <Link to="/resume" className="relative shrink-0 text-center uppercase hover:opacity-70 transition-opacity">Resume</Link>
        <p className="relative shrink-0 text-right uppercase">contact</p>
      </div>
    </div>
  );
}

function Frame2147210947() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-0 pt-0 pb-[39px] relative shrink-0 w-full">
      <Frame2147210946 />
    </div>
  );
}

function Frame2147210948() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const text = `I'm a designer with 20+ years of experience building digital products and brand systems. From launching Nike+ apps at R/GA to leading design at The New York Stock Exchange, I help startups and institutions establish design processes, products, and cultures.`;
  const words = text.split(' ');

  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[13px] pr-[32px] py-[10px] relative w-full">
          <p ref={ref} className="font-['Inter:Regular',_sans-serif] font-normal leading-[75px] not-italic text-[64px] text-white tracking-[-2.9px] w-full" style={{ margin: 0 }}>
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                style={{ display: 'inline-block', marginRight: '0.25em' }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame2147210949() {
  return (
    <div className="content-stretch flex flex-col gap-[195px] items-start relative shrink-0 w-full">
      <Frame2147210947 />
      <Frame2147210948 />
    </div>
  );
}

function Group7() {
  return (
    <div className="relative shrink-0 w-full pl-[13px] pr-[32px] pt-[100px] pb-[80px]">
      <div className="flex flex-col gap-[135px]">
        {/* Row 1 - Top row with 5 logos */}
        <div className="flex items-center justify-start gap-[180px]">
          {/* Nike */}
          <div className="flex items-center justify-center" style={{ width: '180px', height: '64.5px' }}>
            <svg style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} fill="none" viewBox="0 0 124 45">
              <path clipRule="evenodd" d={logoSvgPaths.p37720300} fill="white" fillRule="evenodd" />
            </svg>
          </div>
          
          {/* PayPal */}
          <div className="flex items-center justify-center" style={{ width: '222px', height: '75px' }}>
            <svg style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} fill="none" viewBox="0 0 153 52">
              <g>
                <path d="M0 0H152.964V51.3304H0V0Z" fill="black" />
                <path d={logoSvgPaths.p22b69780} fill="white" />
              </g>
            </svg>
          </div>
          
          {/* Gemini */}
          <div className="flex items-center justify-center" style={{ width: '303px', height: '64.5px' }}>
            <svg style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} fill="none" viewBox="0 0 210 45">
              <g>
                <path d={logoSvgPaths.pf262200} fill="white" />
                <path d={logoSvgPaths.p2198fec0} fill="white" />
                <path d={logoSvgPaths.p95de80} fill="white" />
                <path d={logoSvgPaths.p33916f00} fill="white" />
                <path d={logoSvgPaths.pc6fb080} fill="white" />
                <path d={logoSvgPaths.pc504730} fill="white" />
                <path d={logoSvgPaths.p1bfd4600} fill="white" />
              </g>
            </svg>
          </div>
          
          {/* Verizon */}
          <div className="flex items-center justify-center" style={{ width: '303px', height: '67.5px' }}>
            <svg style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} fill="none" viewBox="0 0 211 47">
              <g>
                <path d={logoSvgPaths.p4e21300} fill="white" />
                <path d={logoSvgPaths.p2e9fea00} fill="white" />
                <path d={logoSvgPaths.p152fc900} fill="white" />
                <path d={logoSvgPaths.p2c640c00} fill="white" />
                <path d={logoSvgPaths.pd9af200} fill="white" />
                <path d={logoSvgPaths.p1a1e8300} fill="white" />
                <path d={logoSvgPaths.p17fd0a40} fill="white" />
                <path d={logoSvgPaths.p3fdc9e00} fill="white" />
                <path d={logoSvgPaths.p3f0ed480} fill="white" />
              </g>
            </svg>
          </div>
          
          {/* NYSE */}
          <div className="flex items-center justify-center" style={{ width: '226.5px', height: '90px' }}>
            <svg style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} fill="none" viewBox="0 0 157 62">
              <g>
                <path d={logoSvgPaths.p21425500} fill="white" />
                <path d={logoSvgPaths.p2a237500} fill="white" />
                <path d={logoSvgPaths.p15043300} fill="white" />
                <path d={logoSvgPaths.p1cb26680} fill="white" />
                <path d={logoSvgPaths.pc181000} fill="white" />
              </g>
            </svg>
          </div>
        </div>
        
        {/* Row 2 - Bottom row with 5 logos */}
        <div className="flex items-center justify-start gap-[180px]">
          {/* FactSet */}
          <div className="flex items-center justify-center" style={{ width: '283.5px', height: '54px' }}>
            <svg style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} fill="none" viewBox="0 0 197 38">
              <path d={logoSvgPaths.p1f540af0} fill="white" />
            </svg>
          </div>
          
          {/* Goldman Sachs */}
          <div className="flex items-center justify-center" style={{ width: '141px', height: '141px' }}>
            <svg style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} fill="none" viewBox="0 0 98 98">
              <g>
                <path clipRule="evenodd" d={logoSvgPaths.p2e609800} fill="white" fillRule="evenodd" />
                <path clipRule="evenodd" d={logoSvgPaths.p197b5700} fill="black" fillRule="evenodd" />
                <path clipRule="evenodd" d={logoSvgPaths.p3c6b5b00} fill="black" fillRule="evenodd" />
                <path clipRule="evenodd" d={logoSvgPaths.p2e7bc200} fill="black" fillRule="evenodd" />
                <path clipRule="evenodd" d={logoSvgPaths.p1e9ddb00} fill="black" fillRule="evenodd" />
                <path clipRule="evenodd" d={logoSvgPaths.p2a71b080} fill="black" fillRule="evenodd" />
                <path clipRule="evenodd" d={logoSvgPaths.p2f9407f0} fill="black" fillRule="evenodd" />
                <path clipRule="evenodd" d={logoSvgPaths.p22354380} fill="black" fillRule="evenodd" />
                <path clipRule="evenodd" d={logoSvgPaths.p2f8f8b80} fill="black" fillRule="evenodd" />
                <path clipRule="evenodd" d={logoSvgPaths.pe0b6300} fill="black" fillRule="evenodd" />
                <path clipRule="evenodd" d={logoSvgPaths.p2b2c4700} fill="black" fillRule="evenodd" />
              </g>
            </svg>
          </div>
          
          {/* Northwestern Mutual */}
          <div className="flex items-center justify-center" style={{ width: '423px', height: '51px' }}>
            <svg style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} fill="none" viewBox="0 0 295 35">
              <g>
                <path d={logoSvgPaths.p38dfba40} fill="white" />
                <path d={logoSvgPaths.p907cc00} fill="white" />
                <path d={logoSvgPaths.p2f630b70} fill="white" />
                <path d={logoSvgPaths.p37eeda00} fill="white" />
                <path d={logoSvgPaths.p2d21fc00} fill="white" />
                <path d={logoSvgPaths.p1e1c3880} fill="white" />
                <path d={logoSvgPaths.p146a5800} fill="white" />
                <path d={logoSvgPaths.pee65bf0} fill="white" />
                <path d={logoSvgPaths.p2f56e150} fill="white" />
                <path d={logoSvgPaths.p31236000} fill="white" />
                <path d={logoSvgPaths.p300f5700} fill="white" />
                <path d={logoSvgPaths.p26e2f200} fill="white" />
                <path d={logoSvgPaths.p3a3dc500} fill="white" />
                <path d={logoSvgPaths.p300b97c0} fill="white" />
                <path d={logoSvgPaths.p2c0cad00} fill="white" />
                <path d={logoSvgPaths.p1e131a00} fill="white" />
                <path d={logoSvgPaths.p1c591c80} fill="white" />
                <path d={logoSvgPaths.p27eac980} fill="white" />
                <path d={logoSvgPaths.p1a2aa700} fill="black" />
                <path d={logoSvgPaths.p3ac41880} fill="white" />
                <path d={logoSvgPaths.p25a7b900} fill="white" />
              </g>
            </svg>
          </div>
          
          {/* Body Glove */}
          <div className="flex items-center justify-center" style={{ width: '162px', height: '162px' }}>
            <svg style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} fill="none" viewBox="0 0 113 113">
              <g>
                <path clipRule="evenodd" d={logoSvgPaths.p13e0c600} fill="white" fillRule="evenodd" />
                <path clipRule="evenodd" d={logoSvgPaths.p2d5af780} fill="black" fillRule="evenodd" />
                <path clipRule="evenodd" d={logoSvgPaths.p2cc41e00} fill="white" fillRule="evenodd" />
              </g>
            </svg>
          </div>
          
          {/* PS Dept */}
          <div className="flex items-center justify-center" style={{ width: '90px', height: '159px' }}>
            <svg style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} fill="none" viewBox="0 0 63 111">
              <g>
                <path d={logoSvgPaths.p2d4dd6a0} fill="white" />
                <path d={logoSvgPaths.p3a14a900} fill="white" />
                <path d={logoSvgPaths.p18e02f00} fill="white" />
                <path d={logoSvgPaths.p30bba80} fill="white" />
                <path d={logoSvgPaths.p28fdfa00} fill="white" />
                <path d={logoSvgPaths.pf29ef00} fill="white" />
                <path d={logoSvgPaths.p28087800} fill="white" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2147210950() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <Group7 />
      </div>
    </div>
  );
}

function Frame2147210951() {
  return (
    <div className="content-stretch flex flex-col gap-[66px] items-start relative shrink-0 w-full">
      <Frame2147210949 />
      <Frame2147210950 />
    </div>
  );
}

function Frame2147210935() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-[16.76px] items-start leading-[48px] not-italic text-[40px] text-white tracking-[-2.4px] w-full">
      <p className="relative shrink-0 w-full">My Principles</p>
      <p className="relative shrink-0 w-full">
        I hold{' '}
        <span className="inline-flex items-center justify-center w-[31.126px] h-[31.126px] rounded-full border border-[#B3B3B4] text-[17.786px] font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#b3b3b4] tracking-[0.8004px] uppercase align-middle mx-1">1</span>
        {' '}a strong appreciation for adaptability,{' '}
        <span className="inline-flex items-center justify-center w-[31.126px] h-[31.126px] rounded-full border border-[#B3B3B4] text-[17.786px] font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#b3b3b4] tracking-[0.8004px] uppercase align-middle mx-1">2</span>
        {' '}a penchant for challenging conventional wisdom,{' '}
        <span className="inline-flex items-center justify-center w-[31.126px] h-[31.126px] rounded-full border border-[#B3B3B4] text-[17.786px] font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#b3b3b4] tracking-[0.8004px] uppercase align-middle mx-1">3</span>
        {' '}unwavering convictions,{' '}
        <span className="inline-flex items-center justify-center w-[31.126px] h-[31.126px] rounded-full border border-[#B3B3B4] text-[17.786px] font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#b3b3b4] tracking-[0.8004px] uppercase align-middle mx-1">4</span>
        {' '}a commitment to honesty,{' '}
        <span className="inline-flex items-center justify-center w-[31.126px] h-[31.126px] rounded-full border border-[#B3B3B4] text-[17.786px] font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#b3b3b4] tracking-[0.8004px] uppercase align-middle mx-1">5</span>
        {' '}a dedication to acting with genuine intent,{' '}
        <span className="inline-flex items-center justify-center w-[31.126px] h-[31.126px] rounded-full border border-[#B3B3B4] text-[17.786px] font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#b3b3b4] tracking-[0.8004px] uppercase align-middle mx-1">6</span>
        {' '}a deep respect for others,{' '}
        <span className="inline-flex items-center justify-center w-[31.126px] h-[31.126px] rounded-full border border-[#B3B3B4] text-[17.786px] font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#b3b3b4] tracking-[0.8004px] uppercase align-middle mx-1">7</span>
        {' '}a belief in treating others as extensions of ourselves (the golden rule),{' '}
        <span className="inline-flex items-center justify-center w-[31.126px] h-[31.126px] rounded-full border border-[#B3B3B4] text-[17.786px] font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#b3b3b4] tracking-[0.8004px] uppercase align-middle mx-1">8</span>
        {' '}a fervent curiosity, and{' '}
        <span className="inline-flex items-center justify-center w-[31.126px] h-[31.126px] rounded-full border border-[#B3B3B4] text-[17.786px] font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#b3b3b4] tracking-[0.8004px] uppercase align-middle mx-1">9</span>
        {' '}a reverence for those who wield agency.
      </p>
    </div>
  );
}

function Group2() {
  return (
    <div className="pl-[13px] pr-[35px] py-[38px]">
      <Frame2147210935 />
    </div>
  );
}

function Frame2147210952() {
  return (
    <div className="relative shrink-0 w-full">
      <Group2 />
    </div>
  );
}

function Frame2147210953() {
  return (
    <div className="content-stretch flex flex-col gap-[124px] items-start relative w-full">
      <Frame2147210951 />
      <Frame2147210952 />
    </div>
  );
}

export default function Component00Index() {
  return (
    <div className="bg-black relative w-full min-h-screen" data-name="00_index">
      <Frame2147210953 />
      <Frame2147210943 />
    </div>
  );
}
