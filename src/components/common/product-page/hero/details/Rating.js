import Image from "next/image";
import React from "react";

const Rating = () => {
  return (
    <div className="flex items-center lg:gap-[var(--vw10)] gap-2.5 lg:text20 mtext14 text-black">
      <span className="font-medium">4.5</span>
      <div className="flex items-center lg:gap-[var(--vw2)] gap-0.5">
        {[1, 2, 3, 4].map((value, index) => (
          <div
            key={index}
            className="relative lg:size-[var(--vw24)] lg:min-w-[var(--vw24)] size-6 min-w-6"
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
        <div className="relative lg:size-[var(--vw24)] lg:min-w-[var(--vw24)] size-6 min-w-6">
          <Image
            fill
            alt="star_half"
            src={
              "/images/product-double-strength/hero/details/rating/star_half.svg"
            }
          />
        </div>
      </div>
      <span>(349 ratings)</span>
    </div>
  );
};

export default Rating;
