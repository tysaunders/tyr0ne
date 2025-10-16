import imgScreenshot20251013At101745Pm1 from "figma:asset/4c61dfc9d54eb301f90af20051278bcd778d40cf.png";

function Frame2() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',_sans-serif] font-normal gap-[128.73px] h-[40.817px] items-center justify-center leading-[41.863px] not-italic relative shrink-0 text-[14.652px] text-[rgba(255,0,246,0.5)] w-full">
      <p className="h-[40.817px] relative shrink-0 w-[117.217px]">
        ©2025
        <br aria-hidden="true" />
        <br aria-hidden="true" />
      </p>
      <p className="relative shrink-0 text-center uppercase w-[171.64px]">Designer</p>
      <p className="relative shrink-0 text-center uppercase w-[469.916px]">New york city, new york</p>
      <p className="relative shrink-0 text-center uppercase w-[142.335px]">Resume</p>
      <p className="relative shrink-0 text-right uppercase w-[166.407px]">contact</p>
    </div>
  );
}

function Frame2147210946() {
  return (
    <div className="absolute content-stretch flex flex-col h-[255.366px] items-end justify-between left-[11px] top-[52px] w-[1644.18px]">
      <p className="font-['Inter:Regular',_sans-serif] font-['Inter:Semi_Bold',_sans-serif] font-normal font-semibold leading-[167.453px] not-italic relative shrink-0 text-[0px] text-[345.373px] text-[rgba(255,0,246,0.5)] tracking-[-20.7224px] w-full">
        <span className="tracking-[-10.3612px]">t</span>ysaunders
      </p>
      <Frame2 />
    </div>
  );
}

export default function Group8() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[1132px] left-0 top-0 w-[1665px]" data-name="Screenshot 2025-10-13 at 10.17.45 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251013At101745Pm1} />
      </div>
      <div className="absolute bg-[rgba(255,0,246,0.5)] h-[1132px] left-0 top-0 w-[20px]" />
      <Frame2147210946 />
      <div className="absolute bg-[rgba(255,0,246,0.5)] h-[1132px] left-[1644px] top-0 w-[20px]" />
    </div>
  );
}