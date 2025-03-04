import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full lg:w-[49.868%] h-[499px] lg:h-[unset] sm:h-[127.948717949vw] lg:min-h-[77.380952381vw]">
      <Image
        fill
        alt="banner"
        src={"/images/product-double-strength/trusted-for-years/banner.jpg"}
        className="object-cover hidden lg:block"
      />
      <Image
        fill
        alt="banner"
        src={"/images/product-double-strength/trusted-for-years/mob_banner.jpg"}
        className="object-cover lg:hidden block"
      />
    </div>
  );
};

export default Banner;
