import Image from "next/image";
import React from "react";
import BackGrounds from "./BackGrounds";

const TriedTested = () => {
  return (
    <div className="relative lg:pt-[var(--vw32)] sm:pt-[180px] pt-[112px]">
      <BackGrounds />
      <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-x-[var(--vw162)] gap-y-3 relative z-[2] lg:pl-[var(--vw51)]">
        <div className="relative lg:w-[37.7645502646vw] lg:h-[16.7989417989vw] w-full h-[52.8205128205vw]">
          <Image
            fill
            alt="products"
            src={"/images/home/tried-tested/products.png"}
            className="hidden lg:block"
          />
          <Image
            fill
            alt="products"
            src={"/images/home/tried-tested/mob_products.png"}
            className="lg:hidden block"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start text-center lg:text-start text-darkblack dm_serif w-[89.744%] mx-auto lg:w-[unset]">
          <span className="lg:text-vw50 lg:leading-[var(--vw69)] text-[36px] leading-[48px]">
            Tried & Tested By
          </span>
          <div>
            <span className="lg:text-vw69 lg:leading-[var(--vw95)] text-[73px]">
              50 Lakh+
            </span>
            <span className="lg:text-vw50 lg:leading-[var(--vw69)] text-[36px] leading-[48px] block lg:inline">
              Customers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriedTested;
