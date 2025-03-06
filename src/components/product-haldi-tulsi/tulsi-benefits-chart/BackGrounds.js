import React from "react";
import Image from "next/image";

const BackGrounds = () => {
  return (
    <div className="atlwh_Full">
      <span className="atlwh_Full bg-[rgba(15,62,37,0.65)] z-[1]"></span>

      <div className="atlwh_Full">
        <Image
          fill
          alt="bg_image"
          src={"/images/product-haldi-tulsi/tulsi-benefits-chart/bg.png"}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default BackGrounds;
