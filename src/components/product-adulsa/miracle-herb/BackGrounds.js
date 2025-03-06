import React from "react";
import Image from "next/image";

const BackGrounds = () => {
  return (
    <div className="atlwh_Full">
      <span className="atlwh_Full bg-[rgba(15,62,37,0.65)] z-[3]"></span>

      <div className="atlwh_Full">
        <div className="atlwh_Full">
          <Image
            fill
            alt="bg_image"
            src={"/images/product-adulsa/miracle-herb/bg1.jpg"}
            className="object-cover"
          />
        </div>
        <div className="atlwh_Full">
          <Image
            fill
            alt="bg_image"
            src={"/images/product-adulsa/miracle-herb/bg2.jpg"}
            className="object-cover"
          />
        </div>
        <div className="atlwh_Full h-[120vw]">
          <Image
            fill
            alt="bg_image"
            src={"/images/product-adulsa/miracle-herb/lense.png"}
            className="object-cover mix-blend-color-dodge"
          />
        </div>
      </div>
    </div>
  );
};

export default BackGrounds;
