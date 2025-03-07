import LinkBtn from "@/components/common/buttons/LinkButton";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="minfullVh minfullSvh flex items-end lg:py-[25.9694477086vh] pt-[105px] pb-[210px] relative">
      <div className="atlwh_Full pointer-events-none">
        <div className="atlwh_Full">
          <Image
            fill
            alt="hero_image"
            src={"/images/our-story/hero.png"}
            className="object-cover"
          />
        </div>
        <span className="atlwh_Full bg-[#00000033]"></span>
      </div>
      <div className="w-full relative z-[2]">
        <div className="lg:myContainer w-[86.744%] mx-auto flex flex-col items-center text-center text-white">
          <h1 className="lg:text-vw150 lg:leading-[var(--vw150)] text-[70px] font-extrabold uppercase">
            AYUSAS
          </h1>
          <p className="lg:text30 mtext20 font-medium lg:mt-[1.88014101058vh] lg:mb-[3.52526439483vh] mb-5 mt-[6px]">
            Rooted in Ancient Wisdom, Powered by Science
          </p>
          <LinkBtn
            text={"Know more"}
            link={"/"}
            colors={"bg-yellow text-darkblack"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
