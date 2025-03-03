import React from "react";
import Image from "next/image";

const BackGrounds = () => {
  return (
    <div className="atlwh_Full overflow-hidden pointer-events-none">
      <div className="atlwh_Full lg:hidden block">
        <div className="absolute top-0 h-1/2 w-full">
          <Image
            fill
            alt="characters"
            src={
              "/images/product-double-strength/safe-banner/mob_characters.jpg"
            }
            className="object-cover"
          />
        </div>
        <span className="bg-[#525930] blur-[36px] absolute h-[30%] w-[120%] left-0 top-1/2 -translate-y-1/2 z-[1]"></span>
        <div className="absolute bottom-0 h-1/2 w-full">
          <Image
            fill
            alt="characters"
            src={"/images/product-double-strength/safe-banner/mob_bg.jpg"}
            className="object-cover"
          />
        </div>
      </div>
      <div className="atlwh_Full hidden lg:block">
        <Image
          fill
          alt="characters"
          src={"/images/product-double-strength/safe-banner/characters.jpg"}
          className="object-cover"
        />
      </div>
      <span className="atlwh_Full safe_banner"></span>
    </div>
  );
};

export default BackGrounds;
