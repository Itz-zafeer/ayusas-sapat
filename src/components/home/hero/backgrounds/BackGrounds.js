import Image from "next/image";
import React from "react";

const BackGrounds = () => {
  return (
    <div className="atlwh_Full pointer-events-none">
      <div className="atlwh_Full">
        <Image
          fill
          alt="bg"
          src={"/images/home/hero/bg.jpg"}
          className="object-cover"
        />
      </div>
      <div className="hidden lg:block absolute bottom-0 right-0 lg:w-[151.468860165vh] lg:h-[91.6568742656vh] w-full h-[355px]">
        <Image fill alt="characters" src={"/images/home/hero/characters.png"} />
      </div>
      <div className="absolute bottom-0 lg:left-[var(--vw35)] left-0 lg:w-[63.4547591069vh] lg:h-[26.3219741481vh] w-[221px] h-[95px]">
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
  );
};

export default BackGrounds;
