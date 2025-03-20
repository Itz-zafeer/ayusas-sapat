import Image from "next/image";
import React from "react";

const InstantRelief = () => {
  return (
    <div className="flex flex-wrap justify-center w-full lg:justify-between lg:px-[var(--vw55)] relative work_sans">
      <div className="atlwh_Full pointer-events-none overflow-hidden">
        <img
          src="/images/product-lozenges/instant-relief/text.png"
          alt="text"
          className="absolute top-[-16vw] pointer-events-none lg:w-[50.5291005291vw] w-[62%]"
        />
        <img
          src="/images/product-lozenges/actions/art/2.png"
          alt="art"
          className="absolute lg:top-[-70%] sm:top-[-56%] top-[-32%] right-5 lg:w-[33.9947089947vw] w-[45%]"
        />
      </div>
      <img
        src="/images/product-lozenges/actions/art/3.png"
        alt="art"
        className="absolute lg:bottom-[-86%] sm:bottom-[-84%] bottom-[-63%] left-0 lg:w-[23.4788359788vw] w-[45%]"
      />
      <div className="flex flex-col lg:pt-[21.2301587302vw] pt-[30.7692307692vw] w-[89.744%] lg:w-auto">
        <span className="text60 !font-medium text-white">
          with the goodness of
        </span>
        <span className="text-[#FFDD57] italic font-black sm:text-vw100 sm:leading-[var(--vw98)] text-3xl leading-[30px] lg:mt-[var(--vw12)]">
          Haldi & <br /> Vitamin C
        </span>
      </div>
      <div className="lg:w-[36.1772486772vw] lg:h-[45.1058201058vw] w-[200px] h-[260px] relative">
        <Image
          fill
          alt="vitamin"
          src={"/images/product-lozenges/instant-relief/vitamin.png"}
        />
      </div>
    </div>
  );
};

export default InstantRelief;
