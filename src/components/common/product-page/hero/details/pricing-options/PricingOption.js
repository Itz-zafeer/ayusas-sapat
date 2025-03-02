import React from "react";

const PricingOption = ({ pricingOption }) => {
  return (
    <div
      style={{
        boxShadow: pricingOption.active ? "0px 4px 0px 0px #D7FADB" : "",
      }}
      className={`${
        pricingOption.active
          ? "border-darkgreen bg-[#EAFBEC]"
          : "border-[#CDCDCD] bg-white"
      }  lg:w-[var(--vw170)] w-[31.676%] lg:rounded-[var(--vw10)] rounded-[6px] lg:border-2 border overflow-hidden`}
    >
      <div className="lg:py-[var(--vw11)] py-2 px-1.5 lg:px-[var(--vw10)] flex flex-col items-start">
        <div className="flex items-center justify-center lg:py-[0.36375661375vw] py-[4.5px] lg:px-[0.69444444444vw] px-[7px] bg-[#286746] lg:rounded-[var(--vw27)] rounded-[18px] lg:text-vw10 lg:leading-[var(--vw13)] text-[8px] leading-[10px] font-bold text-white">
          {pricingOption.discount}
        </div>
        <div className="flex flex-col lg:gap-y-[0.33068783068vw] gap-y-1 lg:mt-[var(--vw15)] mt-2">
          <div className="flex items-center lg:gap-[var(--vw8)] gap-1 text-black">
            <span className="lg:text16 text-[10px] leading-[13px] font-extrabold lg:leading-[var(--vw21)]">
              {pricingOption.pack}
            </span>
            <span className="lg:text12 text-[9px] leading-3 font-medium">
              (200 ml){" "}
            </span>
          </div>
          <div className="flex items-center lg:gap-[var(--vw8)] text-black">
            <span className="lg:text18 mtext12 font-semibold lg:leading-[var(--vw23)]">
              Rs. 649 / Pack
            </span>
          </div>
          <div className="text-c56575A lg:text14 mtext10 lg:leading-[var(--vw18)] font-medium">
            <span>MRP : </span>
            <span className="line-through">Rs.999</span>
          </div>
        </div>
      </div>
      {pricingOption.mostPopular && (
        <div className="bg-[#45B54F] lg:text14 mtext10 font-semibold text-white flex justify-center items-center lg:p-[2.5px] p-[1.5px]">
          Most Popular
        </div>
      )}
    </div>
  );
};

export default PricingOption;
