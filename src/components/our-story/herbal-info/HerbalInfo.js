import Image from "next/image";
import React from "react";
const infos = [
  {
    icon: "/images/our-story/herbal-info/1.svg",
    desc: "Haldi, Tulsi, Yashtimadhu, Adulsa, Kantakari, Giloy, Harda, and more",
  },
  {
    icon: "/images/our-story/herbal-info/2.svg",
    desc: "Modern science confirms their ability to reduce inflammation and boost immunity.",
  },
  {
    icon: "/images/our-story/herbal-info/3.svg",
    desc: "Used for centuries in Ayurvedic and Siddha texts for cough relief, congestion, and lung health.",
  },
];
const HerbalInfo = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-stretch flex-wrap">
      <div className="lg:w-[50%] lg:min-h-[55.291005291vw] h-[404px] lg:h-[unset] relative">
        <Image
          fill
          alt="banner"
          src={"/images/our-story/herbal-info/banner.jpg"}
          className="object-cover"
        />
      </div>
      <div className="lg:w-[50%] bg-f5eee1 lg:px-[var(--vw66)] lg:py-[var(--vw190)] pt-16 pb-12">
        <ul className="lg:w-[38.955026455vw] w-[89.744%] mx-auto lg:mx-0 flex flex-col lg:gap-y-[var(--vw60)] gap-y-8">
          {infos.map((info, index) => (
            <li
              key={index}
              className="flex lg:gap-x-[var(--vw30)] gap-x-5 last:border-0 last:pb-0 border-b border-[#9AADA3] lg:pb-[var(--vw40)] pb-7"
            >
              <div className="relative lg:size-[var(--vw62)] lg:min-w-[var(--vw62)] size-[54px] min-w-[54px]">
                <Image fill alt="icon" src={info.icon} />
              </div>
              <span className="lg:text24 mtext18 text-darkblack lg:w-[31.1507936508vw]">
                {info.desc}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HerbalInfo;
