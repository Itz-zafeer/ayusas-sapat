import React from "react";
import Image from "next/image";
import BackGrounds from "./BackGrounds";

const CycleOfCough = () => {
  return (
    <section className="relative lg:pt-[var(--vw106)] py-[71px]">
      <BackGrounds />
      <div className="lg:w-[73.2142857143vw] myContainer flex flex-col items-center text-center relative z-[2]">
        <h2 className="text-white lg:text-vw89 lg:leading-[var(--vw116)] text-[34px] leading-[44px] capitalize font-bold">
          BREAK THE <span className="text-yellow">CYCLE</span> OF CONSTANT COUGH
        </h2>
        <div className="relative lg:w-[54.5634920635vw] lg:h-[53.835978836vw] w-full sm:w-[70%] sm:h-[79vw] h-[110vw] lg:mt-[calc(-1*var(--vw38))] sm:mt-0 mt-[-3.07692307692vw]">
          <Image
            fill
            alt="cycle"
            className="object-cover"
            src={"/images/product-double-strength/cycle-of-cough/cycle.svg"}
          />
        </div>
      </div>
    </section>
  );
};

export default CycleOfCough;
