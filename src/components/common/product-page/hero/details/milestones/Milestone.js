import React from "react";
import Image from "next/image";

const Milestone = ({ number, name, desc }) => {
  return (
    <div className="flex items-center lg:gap-[var(--vw13)] gap-[9px]">
      <div className="lg:size-[var(--vw96)] size-[66px] relative">
        <div className="atlwh_Full">
          <Image
            fill
            alt="years"
            src={
              "/images/product-double-strength/hero/details/milestones/shape.png"
            }
          />
        </div>
        <div className="w-[47%] flex flex-col items-center text-center absolute left-1/2 -translate-x-1/2 z-[2] lg:top-[var(--vw27)] top-[18px] text-green">
          <span className="lg:text13 text-[9px] leading-[12px] font-extrabold">
            {number}
          </span>
          <span className="lg:text12 text-[8px] leading-[11px]">{name}</span>
        </div>
      </div>
      <div className="flex flex-col lg:gap-1 gap-0.5 text-darkblack capitalize">
        <span className="lg:text16 lg:leading-[var(--vw21)] mtext12 font-extrabold">
          {number} {name}
        </span>
        <span className="lg:text13 mtext12">{desc}</span>
      </div>
    </div>
  );
};

export default Milestone;
