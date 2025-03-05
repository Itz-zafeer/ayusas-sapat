import React from "react";
import Image from "next/image";

const StarRating = () => {
  return (
    <div className="flex flex-col lg:gap-y-[var(--vw8)] gap-y-1.5 w-full lg:w-[unset] order-2 lg:order-[unset]">
      <div className="flex lg:gap-[var(--vw8)]">
        {[1, 2, 3, 4, 5].map((value, index) => (
          <div
            key={index}
            className="relative lg:size-[var(--vw32)] lg:min-w-[var(--vw32)] size-[22px] min-w-[22px]"
          >
            <Image
              fill
              alt="star"
              src={
                "/images/product-double-strength/hero/details/rating/star.svg"
              }
            />
          </div>
        ))}
      </div>
      <span className="lg:text18 lg:leading-[var(--vw26)] mtext14 font-medium text-black">
        95% of buyers are satiesfied
      </span>
      <span className="lg:text16 lg:leading-[var(--vw22)] mtext12 font-medium text-[#676870]">
        349 ratings & 10 Reviews
      </span>
    </div>
  );
};

export default StarRating;
