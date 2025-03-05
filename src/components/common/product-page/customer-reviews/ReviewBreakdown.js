import React from "react";
import Image from "next/image";
const ratingData = [
  { stars: 5, percentage: 90, color: "#1F8941" },
  { stars: 4, percentage: 60, color: "#1F8941" },
  { stars: 3, percentage: 40, color: "#1F8941" },
  { stars: 2, percentage: 15, color: "#E97855" },
  { stars: 1, percentage: 10, color: "#BF3104" },
];

const ReviewBreakdown = () => {
  return (
    <div className="flex flex-col lg:gap-y-[calc(0.5*var(--vw8))] gap-y-1 ml-auto">
      {ratingData.map((rating, index) => (
        <div
          key={index}
          className="flex items-center lg:gap-[calc(0.5*var(--vw10))] gap-1"
        >
          <div className="flex items-center lg:gap-[var(--vw2)] gap-0.5">
            <span className="font-bold text-[#35373E] lg:text14 lg:leading-[var(--vw21)] mtext12">
              {rating.stars}
            </span>
            <div className="relative lg:size-[var(--vw12)] lg:min-w-[var(--vw12)] size-2.5 min-w-2.5">
              <Image fill alt="star" src={"/images/icons/gray_star.svg"} />
            </div>
          </div>
          <div className="lg:w-[var(--vw200)] lg:h-[calc(6*var(--vw1))] w-[43.5897435897vw] h-[5px] overflow-hidden bg-[#DBDBDB] rounded-full relative">
            <span
              className="absolute top-0 left-0 h-full rounded-full"
              style={{
                width: `${rating.percentage}%`,
                backgroundColor: rating.color,
              }}
            ></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewBreakdown;
