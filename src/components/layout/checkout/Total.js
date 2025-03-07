import React from "react";
import Image from "next/image";

const Total = () => {
  return (
    <div className="bg-white lg:py-[var(--vw25)] py-[9px]">
      <div className="lg:w-[43.5185185185vw] w-[89.744%] mx-auto flex justify-between items-center">
        <span className="lg:text20 mtext14 text-darkblack font-medium capitalize">
          Total: <span className="font-bold">₹ 862.00</span>
        </span>
        <div className="flex items-center lg:gap-2 gap-1 bg-[#B2FFD6] lg:rounded-[var(--vw16)] rounded-[16px] lg:px-[var(--vw12)] lg:py-[calc(0.5*var(--vw12))] py-1 px-2.5">
          <div className="relative lg:size-[var(--vw20)] size-[18px]">
            <Image fill alt="shipping" src={"/images/icons/shipping.svg"} />
          </div>
          <span className="lg:text10 mtext10 uppercase font-bold text-green">
            Free Shipping
          </span>
        </div>
      </div>
    </div>
  );
};

export default Total;
