import React from "react";
import Image from "next/image";

const BackGrounds = () => {
  return (
    <div className="atlwh_Full">
      <span className="atlwh_Full bg-[rgba(15,62,37,0.65)] backdrop-blur-[9px] z-[1]"></span>

      <div className="atlwh_Full">
        <Image
          fill
          alt="bg"
          src={"/images/product-haldi-tulsi/air-quality-stats/bg.jpg"}
        />
      </div>
    </div>
  );
};

export default BackGrounds;
