function Frame2() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Regular',_sans-serif] font-normal gap-[123px] h-[39px] items-center justify-center leading-[40px] left-[32px] not-italic text-[14px] text-white top-[256px] w-[1518px]">
      <p className="h-[39px] relative shrink-0 w-[112px]">
        ©2025
        <br aria-hidden="true" />
        <br aria-hidden="true" />
      </p>
      <p className="relative shrink-0 text-center uppercase w-[164px]">Designer</p>
      <p className="relative shrink-0 text-center uppercase w-[449px]">New york city, new york</p>
      <p className="relative shrink-0 text-center uppercase w-[136px]">Resume</p>
      <p className="relative shrink-0 text-right uppercase w-[159px]">contact</p>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-black relative size-full">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-['Inter:Semi_Bold',_sans-serif] font-normal font-semibold leading-[160px] left-[3px] not-italic text-[0px] text-[330px] text-white top-[51px] tracking-[-19.8px] w-[1571px]">
        <span className="tracking-[-9.9px]">t</span>ysaunders
      </p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[70px] left-[32px] not-italic text-[60px] text-white top-[398px] tracking-[-3.6px] w-[1504px]">{`I'm a designer with 20+ years of experience building digital products and brand systems. From launching Nike+ apps at R/GA to leading design at The New York Stock Exchange, I help startups and institutions establish design processes, products, and cultures.`}</p>
      <Frame2 />
    </div>
  );
}