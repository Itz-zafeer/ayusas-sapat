import React from "react";
import Summary from "./Summary";

const ProductSummary = () => {
  return (
    <div className="lg:w-[43.5185185185vw] w-[89.744%] mx-auto text-darkblack">
      <div className="flex justify-between items-center lg:py-[var(--vw27)] py-5">
        <span className="lg:text24 mtext18 font-bold capitalize">
          Product Summary
        </span>
        <div
          style={{
            background:
              "linear-gradient(93deg, #F83535 2.17%, #FE8551 49.12%, #F83535 107.91%)",
          }}
          className="lg:rounded-[var(--vw20)] italic font-bold lg:text16 lg:leading-[var(--vw21)] text-[10px] leading-[13px] text-white rounded-[20px] lg:px-[var(--vw19)] px-[11px] lg:py-[calc(0.5*var(--vw16))] py-[5px]"
        >
          saved rs.455
        </div>
      </div>
      <ul className="flex flex-col lg:gap-y-[var(--vw17)] gap-y-[14px]">
        <Summary />
        <Summary />
      </ul>
    </div>
  );
};

export default ProductSummary;
