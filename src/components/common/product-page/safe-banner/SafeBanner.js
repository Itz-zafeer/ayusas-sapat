import React from "react";
import BackGrounds from "./backgrounds/BackGrounds";

const SafeBanner = () => {
  return (
    <section className="lg:min-h-[130.904817861vh] flex items-end lg:items-center lg:py-[var(--vw200)] py-[100px] min-h-[93vh] relative overflow-hidden">
      <BackGrounds />
      <div className="relative z-[2] w-full text-white lg:px-[var(--vw140)] px-5 flex flex-col uppercase font-extrabold">
        <div className="flex items-center">
          <span className="lg:text-vw90 lg:leading-[var(--vw111)] text-[56px] leading-[70px] font-extrabold">
            Natural
          </span>
          <img
            src={"/images/product-double-strength/safe-banner/leaf.svg"}
            alt="leaf"
            className="lg:w-[var(--vw69)] w-[43px] hidden lg:block"
          />
          <img
            src={"/images/product-double-strength/safe-banner/mob_leaf.svg"}
            alt="leaf"
            className="lg:w-[var(--vw69)] w-[60px] lg:hidden block"
          />
        </div>
        <span className="lg:text-vw80 lg:leading-[var(--vw99)] text-[50px] leading-[62px]">
          Effective
        </span>
        <span className="lg:text-vw197 lg:leading-[var(--vw180)] sm:text-[110px] sm:leading-[124px] text-[31.7948717949vw] leading-[28.2051282051vw]">
          Safe
        </span>
        <span className="lg:text60 text-[38px] leading-[47px]">
          Paraben Free
        </span>
        <span className="lg:text50 text-[33px] leading-[42px]">
          for your Child
        </span>
      </div>
    </section>
  );
};

export default SafeBanner;
