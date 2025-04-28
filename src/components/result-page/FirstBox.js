import Image from "next/image";
import React from "react";

const FirstBox = ({ number, unit, medium, high, excellent }) => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
      className="first_box flex flex-col lg:rounded-[var(--vw15)] rounded-lg bg-[rgba(255,255,255,0.10)] lg:w-[29.885%] w-[28.7179487179vw] lg:px-[var(--vw12)] lg:py-[var(--vw20)] py-[2.05128205128vw] relative"
    >
      {excellent ? (
        <div className="flex flex-col relative px-[2.5641025641vw] lg:px-0">
          <div className="lg:py-[calc(0.5*var(--vw12))] lg:px-[var(--vw8)] lg:mx-auto lg:bg-green lg:text-vw35 lg:leading-[var(--vw35)] text-[2.05128205128vw] leading-[4.61538461538vw] font-medium lg:text-white">
            <span>
              YOU HAVE <span className="hidden lg:inline">WON!</span>
            </span>
          </div>

          <div className="flex flex-col-reverse lg:flex-col items-start lg:items-center uppercase lg:mt-[0.55555555555vh] lg:px-[var(--vw8)]">
            <button className="dm_sans lg:my-[1.11111111111vw] mt-[4.589744vw] uppercase relative lg:flex justify-center items-center lg:px-[var(--vw17)] lg:py-[var(--vw8)] p-[0.76923076923vw] lg:text-vw15 lg:leading-[var(--vw15)] text-[1.53846153846vw] leading-[1.53846153846vw] font-medium text-darkblack bg-[#FFDA24] lg:rounded-[var(--vw100)] rounded-[100px]">
              <span>CLAIM nOW</span>
            </button>
            <span className="bebas_neue text-[#41FF28] lg:text-white lg:text-[14.2222222222vh] lg:leading-[14.2222222222vh] lg:tracking-[-0.15972222222vw] text-[7.69230769231vw] leading-[7.69230769231vw]">
              50,000
            </span>
            <span className="lg:hidden bebas_neue text-white lg:text-vw128 lg:leading-[var(--vw128)] lg:-tracking-[calc(0.5*var(--vw12))] text-[15.3846153846vw] leading-[11.384615vw]">
              WON
            </span>
          </div>
        </div>
      ) : (
        <>
          <div
            className={`${high ? "lg:hidden" : ""} lg:py-[calc(0.5*var(--vw8))] lg:px-[var(--vw8)] mx-auto lg:bg-green lg:text-vw20 lg:leading-[var(--vw20)] text-[2.05128205128vw] leading-[4.61538461538vw] font-medium lg:text-[#FFDA24]`}
          >
            <span>SPECIAL OFFER FOR YOU</span>
          </div>
          {high ? (
            <>
              <div className="hidden lg:flex lg:gap-[var(--vw8)] justify-center lg:px-[var(--vw16)]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="relative lg:size-[var(--vw56)]">
                    <Image
                      fill
                      alt="star"
                      src={"/images/extra/high_star.svg"}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col uppercase lg:mt-[0.55555555555vh]">
                <div className="flex lg:gap-[var(--vw10)] gap-1 bebas_neue lg:pr-[var(--vw16)]">
                  <div className="flex justify-start lg:justify-end w-full px-[2.05128205128vw] lg:px-0">
                    <div className="absolute bottom-[3.07692307692vw] right-[-1.79487179487vw] lg:right-[unset] lg:-bottom-[var(--vw16)] lg:-left-[var(--vw30)] lg:size-[15.8333333333vw] size-[18.2051282051vw]">
                      <Image
                        fill
                        alt="bottle"
                        src={"/images/extra/high_bottle.png"}
                      />
                    </div>
                    <div className="flex flex-col lg:gap-[var(--vw10)] mr-auto lg:mr-0">
                      <span className="lg:text-vw100 lg:leading-[var(--vw90)] text-[15.3846153846vw] leading-[12.512821vw]">
                        FREE{" "}
                      </span>
                      <span className="lg:text-vw28 lg:leading-[var(--vw28)] text-[3.84615384615vw] leading-[3.84615384615vw]">
                        AYUSAS DS <br className="block lg:hidden" /> BOTTLE
                      </span>
                      <button className="dm_sans lg:mt-[var(--vw10)] mt-[3.58974358974vw] uppercase relative lg:flex justify-center items-center lg:px-[var(--vw17)] lg:py-[1.11111111111vh] p-[0.76923076923vw] lg:text-vw15 lg:leading-[var(--vw15)] text-[1.53846153846vw] leading-[1.53846153846vw] font-medium text-darkblack bg-[#FFDA24] lg:rounded-[var(--vw100)] rounded-[100px] mr-auto lg:mr-0">
                        <span>CLAIM nOW</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col uppercase lg:mt-[4.22222222222vh] mt-[2.05128205128vw]">
              <button className="lg:ml-auto ml-[2.05128205128vw] mr-auto uppercase relative lg:mr-[var(--vw60)] lg:-mb-[var(--vw30)] mb-[2.5vw] flex justify-center items-center lg:px-[var(--vw15)] lg:py-[var(--vw8)] py-[1.02564102564vw] px-[2.05128205128vw] lg:text-vw13 lg:leading-[var(--vw13)] text-[2.05128205128vw] leading-[2.05128205128vw] font-medium text-darkblack bg-[#FFDA24] lg:rounded-[var(--vw100)] rounded-[100px]">
                <span>CLAIM nOW</span>
              </button>
              <div className="flex justify-center lg:justify-start lg:gap-[var(--vw15)] gap-[1.53846153846vw] bebas_neue">
                <div className="flex flex-col">
                  {medium && (
                    <span className="dm_sans lg:ml-[var(--vw10)] lg:text-vw20 lg:leading-[var(--vw20)] font-medium text-[5.12820512821vw] leading-[5.12820512821vw]">
                      FLAT
                    </span>
                  )}
                  <span className="lg:text-vw200 lg:leading-[var(--vw150)] lg:-tracking-[var(--vw10)] text-[20.5128205128vw] leading-[17.512821vw] tracking-[-1.02564102564vw]">
                    {number}
                  </span>
                </div>
                <div className="flex flex-col justify-between">
                  <span className="lg:text-vw30 lg:leading-[var(--vw30)] inter mt-[2.05128205128vw] lg:mt-[1.33333333333vh] text-[5.12820512821vw] leading-[5.12820512821vw]">
                    {unit}
                  </span>
                  <span className="lg:text-vw80 lg:leading-[var(--vw60)] text-[10.2564102564vw] leading-[10.2564102564vw]">
                    OFf
                  </span>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FirstBox;
