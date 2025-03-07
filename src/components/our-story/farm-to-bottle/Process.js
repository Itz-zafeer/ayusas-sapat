import React from "react";
import Image from "next/image";

const Process = ({ image, title1, title2, desc, flipped }) => {
  return (
    <div
      className={`${
        flipped ? "flex-row-reverse" : "flex-row"
      } flex items-stretch flex-wrap w-full`}
    >
      <div
        className={`${
          flipped ? "lg:w-[48.678%]" : "lg:w-[51.323%]"
        } w-full lg:py-[13.955026455vw] px-5 lg:px-[var(--vw131)] py-10`}
      >
        <div className="lg:w-[28.0423280423vw]">
          <h2 className="text50 !font-semibold text-[#030303] uppercase">
            {""} {title1} {""}
            {""}
            {""}
            <span className="text-[#187C3F]">{title2}</span> {""}
          </h2>
          <p className="lg:text24 mtext16 text-[#030303] lg:w-[27.5132275132vw] w-[96%] lg:mt-[var(--vw40)] mt-[14px]">
            {desc}
          </p>
        </div>
      </div>
      <div
        className={`${
          flipped ? "lg:w-[51.323%]" : "lg:w-[48.678%]"
        }  w-full relative lg:min-h-[55.6878306878vw] h-[453px] lg:h-[unset]`}
      >
        <Image fill alt="banner" src={image} className="object-cover" />
      </div>
    </div>
  );
};

export default Process;
