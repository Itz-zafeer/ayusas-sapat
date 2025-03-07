import React from "react";
import Content from "./Content";
import Image from "next/image";

const Ayurveda = () => {
  return (
    <section className="bg-darkgreen">
      <Content />
      <div className="flex justify-between flex-wrap items-stretch lg:gap-[var(--vw16)] gap-3">
        <div className="flex flex-col lg:gap-y-[var(--vw18)] gap-y-3 lg:w-[47.553%] w-full">
          <div className="w-full lg:h-[33.2671957672vw] h-[274px] sm:h-[70.2564102564vw] relative flex items-end lg:px-[var(--vw31)] px-3 pb-3 sm:pb-10 sm:px-10 lg:pb-[var(--vw20)]">
            <div className="atlwh_Full">
              <Image
                fill
                alt="banner"
                src={"/images/our-story/ayurveda/1.jpg"}
                className="object-cover"
              />
            </div>
            <div className="relative z-[2] w-full lg:rounded-[var(--vw20)] rounded-[10px] overflow-hidden bg-[#0000005c] backdrop-blur-[26px] lg:py-[var(--vw25)] lg:px-[var(--vw36)] px-4 py-3 sm:px-8 sm:py-8">
              <span className="lg:text40 mtext20 text-white text-center !font-medium block">
                Stay true to nature while making wellness effortless.
              </span>
            </div>
          </div>
          <div className="w-full lg:h-[33.2671957672vw] h-[274px] sm:h-[70.2564102564vw] relative flex items-end lg:px-[var(--vw31)] px-3 pb-3 sm:pb-10 sm:px-10 lg:pb-[var(--vw20)]">
            <div className="atlwh_Full">
              <Image
                fill
                alt="banner"
                src={"/images/our-story/ayurveda/2.jpg"}
                className="object-cover"
              />
            </div>
            <div className="relative z-[2] w-full lg:rounded-[var(--vw20)] rounded-[10px] overflow-hidden bg-[#0000005c] backdrop-blur-[26px] lg:py-[var(--vw25)] lg:px-[var(--vw36)] px-4 py-3 sm:px-8 sm:py-8">
              <span className="lg:text40 mtext20 text-white text-center !font-medium block">
                Create solutions that fit modern lifestyles.
              </span>
            </div>
          </div>
        </div>
        <div className="lg:w-[51.257%] w-full lg:min-h-[67.8571428571vw] min-h-[85.051282051vw] relative flex items-end lg:px-[var(--vw31)] px-3 pb-3 sm:pb-10 sm:px-10 lg:pb-[var(--vw20)]">
          <div className="atlwh_Full">
            <Image
              fill
              alt="banner"
              src={"/images/our-story/ayurveda/3.jpg"}
              className="object-cover"
            />
          </div>
          <div className="relative z-[2] w-full lg:rounded-[var(--vw20)] rounded-[10px] overflow-hidden bg-[#0000005c] backdrop-blur-[26px] lg:py-[var(--vw25)] lg:px-[var(--vw36)] px-4 py-3 sm:px-8 sm:py-8">
            <span className="lg:text40 mtext20 text-white text-center !font-medium block">
              Help you breathe better, live better.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ayurveda;
