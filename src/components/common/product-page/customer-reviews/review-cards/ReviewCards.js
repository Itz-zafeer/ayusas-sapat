import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewCards = () => {
  return (
    <ul className="flex flex-col lg:gap-y-[var(--vw20)] gap-y-5 my-10 lg:mt-0 lg:mb-[var(--vw54)]">
      {[1, 2, 3].map((value, index) => (
        <ReviewCard key={index} />
      ))}
    </ul>
  );
};

export default ReviewCards;
