import React from "react";
import BackGround from "./BackGround";

const Banner = () => {
  return (
    <div className="lg:w-[48.942%] w-full flex items-center lg:py-[var(--vw150)] pt-[98px] pb-[122px] px-5 relative lg:px-[var(--vw105)]">
      <BackGround />
      <div className="relative z-[2] flex flex-col text-white font-bold">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="lg:text-vw67 lg:leading-[var(--vw66)] text-[40px] leading-[52px] uppercase">
            We are
          </span>
          <img
            src={"/images/product-double-strength/paraben-facts/leaf.png"}
            alt="leaf"
            className="lg:w-[var(--vw69)] w-[41] hidden lg:block"
          />
          <img
            src={"/images/product-double-strength/paraben-facts/leaf.png"}
            alt="leaf"
            className="lg:w-[var(--vw69)] w-[41] lg:hidden block"
          />
        </div>

        <span className="lg:text-vw193 lg:leading-[var(--vw180)] sm:text-[100px] sm:leading-[117px] text-[30vw] leading-[25.641025641vw]">
          100%
        </span>
        <span className="lg:text-vw103 lg:leading-[var(--vw92)] text-[62px] leading-[62px]">
          Paraben Free
        </span>
      </div>
    </div>
  );
};

export default Banner;
