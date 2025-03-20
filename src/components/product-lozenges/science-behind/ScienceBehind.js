import React from "react";
import ScienceBehindSwiper from "./ScienceBehindSwiper";

const ScienceBehind = () => {
  return (
    <section className="relative">
      <div className="atlwh_Full pointer-events-none">
        <img
          src="/images/product-lozenges/science-behind/art/1.png"
          alt="art"
          className="absolute top-[-18%] sm:w-[32%] w-[60%] left-0 lg:w-[21.4947089947vw]"
        />
        <img
          src="/images/product-lozenges/science-behind/art/2.png"
          alt="art"
          className="absolute top-[-14%] sm:w-[32%] w-[60%] right-0 lg:w-[30.5555555556vw] hidden lg:block"
        />
      </div>
      <div className="myContainer relative z-[2] flex flex-col items-center text-center lg:mt-[var(--vw65)] mt-10">
        <h2 className="text50 lg:leading-[var(--vw50)] uppercase !font-medium text-white ">
          The Science Behind{" "}
          <span className="text60 lg:leading-[var(--vw60)] block">
            Ayusas LOZENGES
          </span>
        </h2>
        <p className="text-[#286746] lg:text35 mtext18 font-semibold lg:mt-[var(--vw50)] mt-8">
          We believe in keeping things pure, just as nature intended.
        </p>
      </div>
      <ScienceBehindSwiper />
    </section>
  );
};

export default ScienceBehind;
