import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full lg:h-[45.1058201058vw] h-[49vw]">
      <Image
        fill
        alt="banner"
        src={"/images/product-lozenges/banner.jpg"}
        className="object-cover"
      />
    </div>
  );
};

export default Banner;
