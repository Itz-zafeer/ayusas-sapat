import React from "react";
import Image from "next/image";

const BackGround = () => {
  return (
    <div className="atlwh_Full pointer-events-none">
      <div className="relative atlwh_Full">
        <Image
          fill
          alt="banner"
          className="object-cover"
          src={"/images/product-double-strength/paraben-facts/banner.jpg"}
        />
      </div>
      <span className="atlwh_Full paraben_facts_banner_overlay"></span>
    </div>
  );
};

export default BackGround;
