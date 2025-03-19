import Image from "next/image";
import React from "react";

const MiracleHerbs = () => {
  return (
    <section className="relative flex items-center justify-center lg:h-[45.1058201058vw] h-[52vw]">
      <div className="atlwh_Full">
        <Image
          fill
          alt="bg"
          src={"/images/product-lozenges/miracle-herbs/bg.jpg"}
        />
      </div>
      <div className="relative z-[2] flex gap-2 justify-center items-center text-darkblack">
        <span className="sm:text-[21.0317460317vw] sm:leading-[21.0317460317vw] text-6xl font-bold">
          6
        </span>
        <span className="sm:text-vw128 sm:leading-[var(--vw120)] text-4xl leading-[34px] lg:w-[44%] w-[47%] font-bold">
          Miracle Herbs
        </span>
      </div>
    </section>
  );
};

export default MiracleHerbs;
