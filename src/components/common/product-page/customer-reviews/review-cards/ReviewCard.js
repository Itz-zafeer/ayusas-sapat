import Image from "next/image";
import React from "react";

const ReviewCard = () => {
  return (
    <li className="lg:pt-[var(--vw20)] lg:pb-0 pb-5 border-b lg:border-b-0 lg:border-t border-[#DBDBDB]">
      <div className="flex flex-col lg:gap-y-[var(--vw20)]  gap-y-5">
        <div className="flex flex-wrap justify-between items-end gap-4">
          <div className="flex lg:gap-[var(--vw18)] gap-[18px]">
            <div className="flex items-center lg:gap-[calc(4*var(--vw1))] lg:px-[var(--vw10)] lg:py-[calc(6*var(--vw1))] px-2.5 py-1.5 gap-2.5 bg-[#1F8941] rounded-[5px] text-white">
              <span className="lg:text16 lg:leading-[var(--vw22)] mtext16 font-bold">
                5
              </span>
              <div className="relative lg:size-[var(--vw16)] lg:min-w-[var(--vw16)] size-4 min-w-4">
                <Image fill alt="star" src={"/images/icons/white_star.svg"} />
              </div>
            </div>
            <div className="flex flex-col gap-0.5 text-black">
              <span className="lg:text18 mtext16 font-medium">Anna, Delhi</span>
              <span className="lg:text14 mtext12">27 December 2023</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative lg:size-[var(--vw37)] lg:min-w-[var(--vw37)] size-[22px] min-w-[22px]">
              <Image fill alt="star" src={"/images/icons/verified.svg"} />
            </div>
            <span className="lg:text16 lg:leading-[var(--vw22)] text-[10px] leading-[14px] text-darkblack font-semibold uppercase">
              Verified buyer
            </span>
          </div>
        </div>
        <span className="lg:text16 lg:leading-[var(--vw22)] mtext14 text-black font-medium">
          Superb
        </span>
      </div>
    </li>
  );
};

export default ReviewCard;
