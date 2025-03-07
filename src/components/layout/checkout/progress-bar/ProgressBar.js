import React from "react";
import Image from "next/image";

const ProgressBar = () => {
  return (
    <div className="flex justify-center bg-[#EFFBF2] lg:pt-[var(--vw37)] lg:pb-[var(--vw41)] pt-[6.41025641026vw] pb-[5.89743589744vw]">
      <div className="lg:w-[calc(3*var(--vw200))] w-[89.744%] flex flex-col lg:gap-y-[var(--vw39)] gap-y-[41px] sm:gap-y-[7vw]">
        <div className="w-full lg:h-[var(--vw14)] h-[2.05128205128vw] bg-[#E6DCDC] lg:rounded-[var(--vw24)] rounded-[14px] relative">
          <div className="atlwh_Full lg:w-[73.334%] w-[73.143%] bg-green lg:rounded-[var(--vw24)] rounded-[14px]"></div>
          <div className="atlwh_Full lg:h-[var(--vw32)] h-[5.64102564103vw] top-1/2 -translate-y-1/2">
            <div className="absolute top-0 lg:left-[var(--vw177)] left-[19.4871794872vw] flex justify-center items-center lg:w-[var(--vw32)] w-[5.64102564103vw] h-full bg-green rounded-full overflow-hidden">
              <div className="lg:size-[var(--vw17)] size-[2.82051282051vw] relative">
                <Image fill alt="gift" src={"/images/icons/gift.svg"} />
              </div>
            </div>
            <div className="absolute top-0 lg:left-[25.2645502646vw] left-[50.7692307692vw] flex justify-center items-center lg:w-[var(--vw32)] w-[5.64102564103vw] h-full bg-green rounded-full overflow-hidden">
              <div className="lg:size-[var(--vw17)] size-[2.82051282051vw] relative">
                <Image fill alt="gift" src={"/images/icons/gift.svg"} />
              </div>
            </div>
            <div className="absolute top-0 right-0 flex justify-center items-center lg:w-[var(--vw32)] w-[5.64102564103vw] h-full bg-green rounded-full overflow-hidden">
              <div className="lg:size-[var(--vw17)] size-[2.82051282051vw] relative">
                <Image fill alt="gift" src={"/images/icons/gift.svg"} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start lg:gap-[var(--vw18)] gap-2.5">
          <div className="relative lg:size-[var(--vw30)] lg:min-w-[var(--vw30)] size-5 min-w-5 sm:size-[5.12820512821vw] sm:min-w-[5.12820512821vw]">
            <Image fill alt="solar_star" src={"/images/icons/solar_star.svg"} />
          </div>
          <span className="text-darkblack mt-1 lg:text-vw20 lg:leading-[var(--vw26)] mtext14 sm:text-[3.58974358974vw] sm:leading-[4.61538461538vw]">
            Add product of{" "}
            <span className="font-semibold text-[#DD1B1B]">Rs400</span> more to
            get{" "}
            <span className="font-semibold text-[#DD1B1B]">free delivery</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
