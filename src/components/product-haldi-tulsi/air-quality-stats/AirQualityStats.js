import React from "react";
import BackGrounds from "./BackGrounds";
import Image from "next/image";

const AirQualityStats = () => {
  return (
    <section className="relative">
      <BackGrounds />
      <div className="relative z-[2] lg:pt-[var(--vw145)] pt-12 lg:pb-[var(--vw160)] pb-[70px]">
        <div className="flex flex-col lg:w-[76.1243386243vw] mx-auto">
          <div className="flex flex-wrap lg:justify-between justify-center lg:gap-[var(--vw10)] gap-2.5 items-center w-full lg:mb-[var(--vw60)] mb-5 px-[5.12820512821vw] lg:px-0">
            <span className="lg:text-vw198 lg:leading-[var(--vw150)] text-[55px] leading-10 text-yellow font-bold">
              82%
            </span>
            <span className="lg:text40 mtext14 w-[59%] text-white font-medium lg:w-[45.3042328042vw]">
              of Indians are breathing air that doesn’t meet the national air
              quality standard
            </span>
          </div>
          <div className="flex items-stretch">
            <div className="bg-[#B30E0E] lg:text24 mtext12 font-bold text-white lg:py-[0.6283068783vw] lg:px-[var(--vw34)] px-[10.5px] py-2">
              Source
            </div>
            <div className="bg-[#F83535] lg:text16 text-[8px] font-medium text-white lg:py-[1.07804232804vw] lg:px-[var(--vw20)] px-2.5 py-1 grow-[1]">
              Bajaj, V. (2023, January 5). Pollution kills 1.5 million a year;
              no Indian lives in WHO-standard air, says study. The Indian
              Express
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between lg:mt-[var(--vw105)] mt-[45px] relative lg:w-[81.4814814815vw] lg:mx-auto mx-[5.12820512821vw] text-white">
          <div className="pointer-events-none absolute z-[2] lg:top-[var(--vw44)] top-4 left-1/2 -translate-x-1/2 lg:w-[66.1375661376vw] lg:h-[44.0476190476vw] w-[93.8461538462vw] h-[62.5641025641vw]">
            <Image
              fill
              alt="lungs"
              src={"/images/product-haldi-tulsi/air-quality-stats/lungs.png"}
            />
          </div>
          <ul className="flex flex-col lg:gap-y-[var(--vw77)] gap-y-[8.97435897436vw] lg:w-[23.4126984127vw] w-[24.8717948718vw]">
            <li className="flex flex-col lg:gap-y-[var(--vw20)] gap-3  relative">
              <div className="lg:w-[34.5899470899vw] w-[35.1282051282vw] absolute right-[-19vw] lg:right-[-72%] lg:top-[var(--vw44)] top-[5vw]">
                <img
                  src="/images/product-haldi-tulsi/air-quality-stats/dashed_border.svg"
                  alt="dashed_border"
                  className="w-full hidden lg:block"
                />
                <img
                  src="/images/product-haldi-tulsi/air-quality-stats/mob_dashed_border.svg"
                  alt="dashed_border"
                  className="w-full lg:hidden block"
                />
              </div>

              <div className="flex items-center justify-center lg:size-[var(--vw82)] size-[9.23076923077vw] rounded-full border border-white">
                <div className="relative lg:size-[var(--vw49)] size-[5.64102564103vw]">
                  <Image
                    fill
                    alt="icon"
                    src={
                      "/images/product-haldi-tulsi/air-quality-stats/icons/1.svg"
                    }
                  />
                </div>
              </div>
              <span className="lg:text30 mtext12 font-bold">
                Reduced Lung Function
              </span>
            </li>
            <li className="flex flex-col lg:gap-y-[var(--vw20)] gap-3 relative">
              <div className="lg:w-[34.5899470899vw] w-[35.1282051282vw] absolute right-[-19vw] lg:right-[-72%] lg:top-[var(--vw44)] top-[5vw]">
                <img
                  src="/images/product-haldi-tulsi/air-quality-stats/dashed_border.svg"
                  alt="dashed_border"
                  className="w-full hidden lg:block"
                />
                <img
                  src="/images/product-haldi-tulsi/air-quality-stats/mob_dashed_border.svg"
                  alt="dashed_border"
                  className="w-full lg:hidden block"
                />
              </div>

              <div className="flex items-center justify-center lg:size-[var(--vw82)] size-[9.23076923077vw] rounded-full border border-white">
                <div className="relative lg:size-[var(--vw57)] size-[6.41025641026vw]">
                  <Image
                    fill
                    alt="icon"
                    src={
                      "/images/product-haldi-tulsi/air-quality-stats/icons/2.svg"
                    }
                  />
                </div>
              </div>
              <span className="lg:text30 mtext12 font-bold">Low energy</span>
            </li>
            <li className="hidden lg:flex flex-col lg:gap-y-[var(--vw20)] gap-3 relative">
              <div className="lg:w-[28.589947vw] w-[35.1282051282vw] absolute right-[-46%] lg:right-[-46%] lg:top-[var(--vw44)] top-[5vw]">
                <img
                  src="/images/product-haldi-tulsi/air-quality-stats/dashed_border.svg"
                  alt="dashed_border"
                  className="w-full hidden lg:block"
                />
                <img
                  src="/images/product-haldi-tulsi/air-quality-stats/mob_dashed_border.svg"
                  alt="dashed_border"
                  className="w-full lg:hidden block"
                />
              </div>

              <div className="flex items-center justify-center lg:size-[var(--vw82)] size-[9.23076923077vw] rounded-full border border-white">
                <div className="relative lg:size-[var(--vw53)] size-[5.89743589744vw]">
                  <Image
                    fill
                    alt="icon"
                    src={
                      "/images/product-haldi-tulsi/air-quality-stats/icons/3.svg"
                    }
                  />
                </div>
              </div>
              <span className="lg:text30 mtext12 font-bold">Aging</span>
            </li>
          </ul>
          <ul className="flex flex-col items-end lg:gap-y-[var(--vw77)] gap-y-[8.97435897436vw] lg:w-[23.4126984127vw] w-[24.8717948718vw]">
            <li className="flex flex-col items-end text-end lg:gap-y-[var(--vw20)] gap-3 relative">
              <div className="lg:w-[34.5899470899vw] w-[35.1282051282vw] absolute left-[-18vw] sm:left-[-23vw] lg:left-[-77%] lg:top-[var(--vw44)] top-[5vw]">
                <img
                  src="/images/product-haldi-tulsi/air-quality-stats/dashed_border.svg"
                  alt="dashed_border"
                  className="w-full hidden lg:block"
                />
                <img
                  src="/images/product-haldi-tulsi/air-quality-stats/mob_dashed_border.svg"
                  alt="dashed_border"
                  className="w-full lg:hidden block"
                />
              </div>
              <div className="flex items-center justify-center lg:size-[var(--vw82)] size-[9.23076923077vw] rounded-full border border-white">
                <div className="relative lg:size-[var(--vw47)] size-[5.38461538462vw]">
                  <Image
                    fill
                    alt="icon"
                    src={
                      "/images/product-haldi-tulsi/air-quality-stats/icons/4.svg"
                    }
                  />
                </div>
              </div>
              <span className="lg:text30 mtext12 font-bold">
                Reduced mental clarity
              </span>
            </li>
            <li className="flex flex-col items-end text-end lg:gap-y-[var(--vw20)] gap-3 relative">
              <div className="lg:w-[34.5899470899vw] w-[35.1282051282vw] absolute left-[-18vw] sm:left-[-26vw] lg:-left-full lg:top-[var(--vw44)] top-[5vw]">
                <img
                  src="/images/product-haldi-tulsi/air-quality-stats/dashed_border.svg"
                  alt="dashed_border"
                  className="w-full hidden lg:block"
                />
                <img
                  src="/images/product-haldi-tulsi/air-quality-stats/mob_dashed_border.svg"
                  alt="dashed_border"
                  className="w-full lg:hidden block"
                />
              </div>
              <div className="flex items-center justify-center lg:size-[var(--vw82)] size-[9.23076923077vw] rounded-full border border-white">
                <div className="relative lg:size-[var(--vw60)] size-[6.66666666667vw]">
                  <Image
                    fill
                    alt="icon"
                    src={
                      "/images/product-haldi-tulsi/air-quality-stats/icons/5.svg"
                    }
                  />
                </div>
              </div>
              <span className="lg:text30 mtext12 font-bold">
                Weakened immunity
              </span>
            </li>
          </ul>
          <ul className="lg:hidden w-full mt-[17.9487179487vw] sm:mt-[20.9487179487vw]">
            <li className="flex flex-col items-center mx-auto w-[97px] lg:gap-y-[var(--vw20)] gap-3 relative">
              <div className="lg:w-[34.5899470899vw] w-[35.1282051282vw] absolute left-1/2 -translate-x-1/2 lg:top-[var(--vw44)] -top-[112%]">
                <img
                  src="/images/product-haldi-tulsi/air-quality-stats/dashed_border.svg"
                  alt="dashed_border"
                  className="w-full hidden lg:block"
                />
                <img
                  src="/images/product-haldi-tulsi/air-quality-stats/mob_dashed_border.svg"
                  alt="dashed_border"
                  className="w-full lg:hidden block rotate-90"
                />
              </div>
              <div className="flex items-center justify-center lg:size-[var(--vw82)] size-[9.23076923077vw] rounded-full border border-white">
                <div className="relative lg:size-[var(--vw53)] size-[5.89743589744vw]">
                  <Image
                    fill
                    alt="icon"
                    src={
                      "/images/product-haldi-tulsi/air-quality-stats/icons/3.svg"
                    }
                  />
                </div>
              </div>
              <span className="lg:text30 mtext12 font-bold">Aging</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AirQualityStats;
