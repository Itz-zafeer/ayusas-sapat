import React from "react";
import Image from "next/image";

const Summary = () => {
  return (
    <li className="bg-white rounded-[20px] flex flex-wrap gap-0.5 justify-between lg:pl-[var(--vw23)] lg:pr-[var(--vw27)] lg:pt-[var(--vw14)] lg:pb-[var(--vw23)] pt-3 pl-[13px] pr-[15px] pb-[14px] sm:p-6">
      <div className="flex lg:items-center lg:gap-x-[var(--vw18)] sm:gap-x-4 gap-x-2.5">
        <div className="lg:w-[var(--vw88)] lg:min-w-[var(--vw88)] w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] flex flex-col items-center lg:gap-y-[var(--vw23)] gap-y-[13px]">
          <div className="relative w-full lg:h-[var(--vw97)] sm:h-[120px] h-[70px]">
            <Image fill alt="product" src={"/images/checkout/summary/1.jpg"} />
          </div>
          <div className="bg-[#B2FFD6] w-full lg:w-[unset] text-center lg:px-[var(--vw11)] lg:py-[calc(0.5*var(--vw10))] sm:p-1.5 p-0.5 lg:rounded-[var(--vw16)] rounded-[10px] lg:text10 mtext10 uppercase text-[#059212] font-bold">
            15% OFf
          </div>
        </div>
        <div className="flex flex-col lg:gap-y-0 sm:gap-y-2 gap-y-1 lg:w-[23.7433862434vw] w-[36vw] capitalize font-medium">
          <span className="lg:text20 mtext12">
            Ayusas Cough Syrup <br /> for dry cough
          </span>
          <span className="lg:text16 lg:leading-[var(--vw21)] lg:mt-[var(--vw11)] mtext10 text-[#666666]">
            pack of 1
          </span>
          <div className="flex items-center lg:gap-x-[calc(0.5*var(--vw16))] gap-x-1 lg:mt-[var(--vw37)]">
            <span className="lg:text16 lg:leading-[var(--vw21)] mtext12 font-bold ">
              Rs 3402
            </span>
            <span className="lg:text13 mtext10 text-[#818080] line-through">
              Rs 5064
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-y-3 ml-auto">
        <button className="lg:size-[var(--vw24)] sm:size-6 size-[18px] relative">
          <Image fill alt="delete" src={"/images/icons/delete.svg"} />
        </button>
        <div className="mt-auto flex lg:gap-x-[var(--vw15)] gap-x-2 lg:px-[var(--vw10)] lg:py-[calc(0.5*var(--vw16))] sm:p-2 p-[5px] border border-[#DEDEDE] lg:rounded-[var(--vw11)] rounded-[8px]">
          <button className="lg:size-[var(--vw24)] size-[18px] lg:min-w-[var(--vw24)] min-w-[18px] sm:size-6 sm:min-w-6 relative">
            <Image fill alt="minus" src={"/images/icons/minus.svg"} />
          </button>
          <div className="lg:h-[var(--vw24)] h-[18px] lg:min-w-[var(--vw24)] min-w-[18px] sm:h-6 sm:min-w-6 flex justify-center items-center">
            <span className="lg:text20 sm:mtext16 mtext12 font-medium capitalize">
              1
            </span>
          </div>
          <button className="lg:size-[var(--vw24)] size-[18px] lg:min-w-[var(--vw24)] min-w-[18px] sm:size-6 sm:min-w-6 relative">
            <Image fill alt="plus" src={"/images/icons/plus.svg"} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Summary;
