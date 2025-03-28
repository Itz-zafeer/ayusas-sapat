import React from "react";
import BackGrounds from "./backgrounds/BackGrounds";
import Content from "./Content";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="minfullVh minfullSvh relative flex items-end pt-[105px] lg:py-[25.9694477086vh]">
      <BackGrounds />
      <div className="flex w-full flex-col">
        <Content />
        <div className="relative ml-auto h-[91.0256410256vw] w-full sm:h-[62vw] sm:w-[82%] lg:hidden">
          <Image
            fill
            alt="characters"
            src={"/images/home/hero/mob_characters.png"}
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 h-[24.358974359vw] w-[56.669%] lg:left-[var(--vw35)] lg:h-[26.3219741481vh] lg:w-[63.4547591069vh]">
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
            className="block lg:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
