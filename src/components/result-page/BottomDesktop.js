import Image from "next/image";
import React from "react";

const BottomDesktop = ({ medium, high, excellent }) => {
  return (
    <>
      {excellent ? (
        <div className="hidden lg:flex justify-between items-center lg:mt-[5.66666666667vh] bebas_neue">
          <div className="relative lg:w-[27.1111111111vh] lg:h-[33.7777777778vh]">
            <Image fill alt="confetti" src={"/images/extra/confetti.png"} />
          </div>
          <div className="relative lg:size-[33.8888888889vh] flex justify-center items-center">
            <div className="size-full absolute top-0 left-0">
              <Image
                fill
                alt="curve_text"
                src={"/images/extra/result/curve_text.png"}
              />
            </div>
            <div className="relative lg:size-[22.3333333333vh]">
              <Image fill alt="lungs" src={"/images/extra/result/lungs.png"} />
            </div>
          </div>
          <div className="relative lg:w-[27.1111111111vh] lg:h-[33.7777777778vh] -scale-x-100">
            <Image fill alt="confetti" src={"/images/extra/confetti.png"} />
          </div>
        </div>
      ) : high ? (
        <div className="hidden lg:flex justify-between items-center lg:mt-[5.66666666667vh] bebas_neue">
          <div className="flex items-center relative">
            <div className="flex lg:pl-[6.66666666667vh] text-darkblack lg:text-[4.44444444444vh] lg:leading-[4.44444444444vh] bg-[#FFDA24] lg:py-[1.11111111111vh] lg:w-[30.4444444444vh]">
              FREE
            </div>
            <div className="absolute lg:left-[15.3333333333vh] top-1/2 -translate-y-1/2 lg:size-[25.3333333333vh]">
              <Image fill alt="bottle" src={"/images/extra/high_bottle.png"} />
            </div>
          </div>
          <div className="relative lg:size-[21.1805555556vw] flex justify-center items-center">
            <div className="size-full absolute top-0 left-0">
              <Image
                fill
                alt="curve_text"
                src={"/images/extra/result/curve_text.png"}
              />
            </div>
            <div className="relative lg:size-[13.9583333333vw]">
              <Image fill alt="lungs" src={"/images/extra/result/lungs.png"} />
            </div>
          </div>
          <div className="flex items-center relative">
            <div className="absolute lg:right-[15.3333333333vh] top-1/2 -translate-y-1/2 lg:size-[25.3333333333vh]">
              <Image fill alt="bottle" src={"/images/extra/high_bottle.png"} />
            </div>
            <div className="flex justify-end lg:pr-[6.66666666667vh] text-darkblack lg:text-[4.44444444444vh] lg:leading-[4.44444444444vh] bg-[#FFDA24] lg:py-[1.11111111111vh] lg:w-[30.4444444444vh]">
              FREE
            </div>
          </div>
        </div>
      ) : medium ? (
        <div className="hidden lg:flex justify-between items-center lg:mt-[5.66666666667vh]">
          <div className="flex lg:gap-[calc(0.5*var(--vw8))] bebas_neue">
            <div className="relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[97%] flex justify-end lg:pr-[2.333333vh] text-darkblack lg:text-[4.44444444444vh] lg:leading-[4.44444444444vh] bg-[#FFDA24]">
                OFF
              </div>
              <div className="lg:text-[17.7777777778vh] lg:leading-[17.7777777778vh] text-[20.5128205128vw] leading-[20.5128205128vw]">
                <span className="relative z-[2]">5</span>
                <span>0 </span>
              </div>
            </div>
            <span className="lg:text-[3.33333333333vh] lg:leading-[3.33333333333vh] inter mt-[2.05128205128vw] lg:mt-[1.33333333333vh] text-[5.12820512821vw] leading-[5.12820512821vw]">
              %
            </span>
          </div>
          <div className="relative lg:size-[21.1805555556vw] flex justify-center items-center">
            <div className="size-full absolute top-0 left-0">
              <Image
                fill
                alt="curve_text"
                src={"/images/extra/result/curve_text.png"}
              />
            </div>
            <div className="relative lg:size-[13.9583333333vw]">
              <Image fill alt="lungs" src={"/images/extra/result/lungs.png"} />
            </div>
          </div>
          <div className="flex lg:gap-[calc(0.5*var(--vw8))] bebas_neue lg:pr-[4.88888888889vh] relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[57%] flex justify-end lg:pr-[4.333333vh] text-darkblack lg:text-[4.44444444444vh] lg:leading-[4.44444444444vh] bg-[#FFDA24]">
              OFF
            </div>
            <div className="">
              <div className="lg:text-[17.7777777778vh] lg:leading-[17.7777777778vh] text-[20.5128205128vw] leading-[20.5128205128vw]">
                <span className="relative z-[2]">5</span>
                <span>0 </span>
              </div>
            </div>
            <span className="lg:text-[3.33333333333vh] lg:leading-[3.33333333333vh] inter mt-[2.05128205128vw] lg:mt-[1.33333333333vh] text-[5.12820512821vw] leading-[5.12820512821vw]">
              %
            </span>
          </div>
        </div>
      ) : (
        <div className="hidden lg:flex justify-between items-center lg:mt-[var(--vw30)]">
          <div className="flex lg:gap-[calc(0.5*var(--vw8))] bebas_neue">
            <div className="relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[97%] flex justify-end lg:pr-[3.33333333333vh] text-darkblack lg:text-[4.44444444444vh] lg:leading-[4.44444444444vh] bg-[#FFDA24]">
                OFF
              </div>
              <div className="lg:text-[17.7777777778vh] lg:leading-[17.7777777778vh] text-[20.5128205128vw] leading-[20.5128205128vw]">
                <span className="relative z-[2]">1</span>
                <span>0 </span>
              </div>
            </div>
            <span className="lg:text-[3.33333333333vh] lg:leading-[3.33333333333vh] inter mt-[2.05128205128vw] lg:mt-[1.33333333333vh] text-[5.12820512821vw] leading-[5.12820512821vw]">
              %
            </span>
          </div>
          <div className="relative lg:size-[21.1805555556vw] flex justify-center items-center">
            <div className="size-full absolute top-0 left-0">
              <Image
                fill
                alt="curve_text"
                src={"/images/extra/result/curve_text.png"}
              />
            </div>
            <div className="relative lg:size-[13.9583333333vw]">
              <Image fill alt="lungs" src={"/images/extra/result/lungs.png"} />
            </div>
          </div>
          <div className="flex lg:gap-[calc(0.5*var(--vw8))] bebas_neue lg:pr-[4.88888888889vh] relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[57%] flex justify-end lg:pr-[3.33333333333vh] text-darkblack lg:text-[4.44444444444vh] lg:leading-[4.44444444444vh] bg-[#FFDA24]">
              OFF
            </div>
            <div className="">
              <div className="lg:text-[17.7777777778vh] lg:leading-[17.7777777778vh] text-[20.5128205128vw] leading-[20.5128205128vw]">
                <span className="relative z-[2]">1</span>
                <span>0 </span>
              </div>
            </div>
            <span className="lg:text-[3.33333333333vh] lg:leading-[3.33333333333vh] inter mt-[2.05128205128vw] lg:mt-[1.33333333333vh] text-[5.12820512821vw] leading-[5.12820512821vw]">
              %
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomDesktop;
