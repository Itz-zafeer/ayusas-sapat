import Image from "next/image";
import React from "react";
import BulletPoints from "./bullet-points/BulletPoints";

const LungsHelp = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[44.9735449735vw] bg-f5eee1">
          <div className="lg:w-[calc(2*var(--vw200))] w-[70%] lg:pt-[16.2037037037vw] lg:pb-[15.2116402116vw] py-[55px] mx-auto flex flex-col">
            <h2 className="lg:text-vw70 lg:leading-[var(--vw91)] text-[50px] leading-[65px] text-[#286746] font-bold">
              Lungs <span className="text-darkblack">help</span>
            </h2>
            <BulletPoints />
          </div>
        </div>
        <div className="lg:w-[54.961%] lg:h-[68.253968254vw] w-full sm:h-[126.153846154vw] h-[492px] relative">
          <Image
            fill
            alt="banner"
            className="object-cover"
            src={"/images/product-double-strength/lungs-help/banner.jpg"}
          />
        </div>
      </div>
    </section>
  );
};

export default LungsHelp;
