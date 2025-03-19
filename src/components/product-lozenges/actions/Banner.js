import React from "react";

const Banner = () => {
  return (
    <div className="lg:w-[42.461%] w-full bg-f5eee1 lg:min-h-[52.7116402116vw] relative flex items-center justify-center">
      <div className="atlwh_Full pointer-events-none">
        <img
          src="/images/product-lozenges/actions/art/1.png"
          alt="art"
          className="absolute top-0 left-0 lg:w-[24.8677248677vw] w-[35%]"
        />
        <img
          src="/images/product-lozenges/actions/art/2.png"
          alt="art"
          className="absolute bottom-0 right-0 lg:w-[33.9947089947vw] w-[45%]"
        />
      </div>
      <div className="relative z-[2] flex flex-wrap justify-center lg:justify-start text-center lg:text-start lg:gap-6 gap-3 text-[#FF6A00] font-bold w-full lg:px-[var(--vw30)] lg:py-[var(--vw90)] px-5 py-14">
        <span className="sm:text-vw128 sm:leading-[var(--vw128)] text-4xl leading-[34px] italic w-full">
          Lozenges
        </span>
        <span className="sm:text-vw110 sm:leading-[var(--vw102)] text-3xl leading-[30px]">
          in
        </span>
        <span className="sm:text-vw110 sm:leading-[var(--vw102)] text-3xl leading-[30px] font-black">
          ACTION
        </span>
      </div>
    </div>
  );
};

export default Banner;
