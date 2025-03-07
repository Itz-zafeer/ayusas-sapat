import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-green lg:rounded-tr-[var(--vw14)] lg:rounded-tl-[var(--vw14)] rounded-tr-[7px] rounded-tl-[7px]">
      <div className="lg:py-[var(--vw34)] py-5 lg:w-[43.5185185185vw] relative w-[89.744%] mx-auto">
        <div
          style={{
            background:
              "linear-gradient(90deg, #DD1B1B 0%, #E85516 48%, #F83535 100%)",
          }}
          className="absolute lg:-top-[var(--vw15)] -top-2 left-0 font-extrabold lg:text14 mtext10 text-white lg:px-[var(--vw22)] px-[11px] lg:py-[calc(0.5*var(--vw16))] py-[2.5px]"
        >
          Extra 10% on prepaid
        </div>
        <div className="flex justify-between items-center">
          <span className="lg:text30 mtext18 text-white font-extrabold uppercase">
            PLACE ORDER
          </span>
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-[1px]">
              <div className="relative lg:size-[var(--vw31)] lg:min-w-[var(--vw31)] size-7 min-w-7">
                <Image fill alt="icon" src={"/images/icons/checkout/1.svg"} />
              </div>
              <div className="relative lg:size-[var(--vw31)] lg:min-w-[var(--vw31)] size-7 min-w-7">
                <Image fill alt="icon" src={"/images/icons/checkout/2.svg"} />
              </div>
              <div className="relative lg:size-[var(--vw31)] lg:min-w-[var(--vw31)] size-7 min-w-7">
                <Image fill alt="icon" src={"/images/icons/checkout/3.svg"} />
              </div>
            </div>
            <div className="relative lg:w-[var(--vw20)] lg:min-w-[var(--vw20)] lg:h-[var(--vw39)] w-[14px] h-7 min-w-[14px] ">
              <Image fill alt="icon" src={"/images/icons/checkout/arrow.svg"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
