import React from "react";
import BackGrounds from "./backgrounds/BackGrounds";
import Content from "./Content";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="minfullVh minfullSvh flex items-end lg:py-[25.9694477086vh] pt-[105px] relative">
      <BackGrounds />
      <div className="flex flex-col w-full">
        <Content />
        <div className="lg:hidden w-full h-[91.0256410256vw] sm:w-[82%] sm:h-[62vw] relative ml-auto">
          <Image
            fill
            alt="characters"
            src={"/images/home/hero/mob_characters.png"}
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-0 lg:left-[var(--vw35)] left-0 lg:w-[63.4547591069vh] lg:h-[26.3219741481vh] w-[56.669%] h-[24.358974359vw]">
          <Image
            fill
            alt="products"
            src={"/images/home/hero/products.png"}
            className="hidden lg:block"
          />
          <Image
            fill
            alt="products"
            src={"/images/home/hero/mob_products.png"}
            className="lg:hidden block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
