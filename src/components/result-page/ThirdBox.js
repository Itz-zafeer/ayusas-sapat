import Image from "next/image";
import React from "react";

const ThirdBox = ({ thirdBoxDesc, excellent }) => {
  return (
    <div
      className={`third_box flex flex-col-reverse lg:flex-col lg:gap-y-[var(--vw30)] gap-y-2 lg:w-[30.2777777778vw] lg:rounded-[var(--vw8)] lg:py-[var(--vw32)] lg:px-[var(--vw14)] rounded-lg ${excellent ? "lg:bg-[rgba(255,255,255,0.10)]" : "bg-[#FFDA24] lg:bg-[rgba(255,255,255,0.10)] px-[3.07692307692vw] py-[2.05128205128vw]"}`}
    >
      {excellent ? (
        <div className="flex lg:gap-[var(--vw22)] gap-[2.30769230769vw] lg:w-[30.2777777778vw] lg:rounded-[var(--vw8)] lg:py-[3.55555555556vh] lg:px-[var(--vw18)]">
          <div className="relative bg-white lg:w-[var(--vw184)] lg:h-[var(--vw204)] w-[12.3076923077vw] h-[13.5897435897vw]">
            <div className="absolute top-1/2 left-0 lg:left-[unset] lg:right-0 -translate-y-1/2 lg:size-[var(--vw194)] size-[11.5384615385vw]">
              <Image fill alt="gift" src={"/images/extra/whatsapp_gift.png"} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="rotate-90 lg:rotate-0 relative lg:size-[var(--vw85)] size-[7.17948717949vw]">
              <div className="relative lg:size-[var(--vw85)] size-[7.17948717949vw] animate-bounce">
                <Image
                  fill
                  alt="gift"
                  src={"/images/extra/whatsapp_gift_arrow.png"}
                />
              </div>
            </div>
            <div className="lg:mt-[var(--vw32)] mt-[0.76923076923vw]">
              <p className="lg:text-vw42 lg:leading-[var(--vw42)] text-[5.12820512821vw] leading-[5.12820512821vw] bebas_neue uppercase text-[#FFDA24] bg-darkgreen lg:px-[0.34722222222vw] px-[0.76923076923vw] py-[0.25641025641vw]">
                Claim your <br className="hidden lg:block" /> offer here
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-stretch lg:h-[8.11111111111vh] h-[6.66666666667vw]">
            <label
              htmlFor="code"
              className="lg:px-[var(--vw14)] px-[1.79487179487vw] h-full lg:w-[20.9722222222vw] bg-white"
            >
              <input
                type="text"
                id="code"
                className="lg:w-[20.9722222222vw] size-full bg-white outline-none lg:text-[2.22222222222vh] placeholder:lg:text-[2.22222222222vh] placeholder:text-[#056D3699] text-green text-[3.84615384615vw] placeholder:text-[3.84615384615vw]"
                placeholder="UNIQUE CODE"
              />
            </label>
            <button className="bg-[#B0BF3D] gap-0.5 lg:gap-1 flex items-center lg:px-[var(--vw8)] px-[1.02564102564vw]">
              <span className="text-darkblack lg:text-[2.22222222222vh] lg:leading-[2.22222222222vh] text-[2.5641025641vw] leading-[2.5641025641vw]">
                COPY
              </span>
              <div className="relative lg:size-[3.22222222222vh] size-[3.07692307692vw]">
                <Image fill alt="copy" src={"/images/icons/copy.svg"} />
              </div>
            </button>
          </div>
          <div>
            {thirdBoxDesc && (
              <div
                dangerouslySetInnerHTML={{ __html: thirdBoxDesc }}
                className="desc lg:text-vw38 lg:leading-[var(--vw42)] text-[3.33333333333vw] leading-[4.35897435897vw] bebas_neue uppercase text-green lg:text-white"
              ></div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ThirdBox;
