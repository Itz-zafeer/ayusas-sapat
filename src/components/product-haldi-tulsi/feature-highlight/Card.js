import React from "react";
import Image from "next/image";

const Card = ({ highlight }) => {
  return (
    <div className="lg:w-[19.0476190476vw] w-[73.847%] flex flex-col items-center text-center lg:rounded-[var(--vw40)] rounded-[40px] border border-white lg:p-[var(--vw24)] p-6">
      <div className="relative lg:size-[var(--vw42)] sm:size-12 size-[42px]">
        <Image fill alt="icon" src={highlight.icon} />
      </div>
      <span className="lg:text24 mtext24 font-medium text-white lg:mt-[var(--vw14)] mt-3">
        {highlight.label}
      </span>
    </div>
  );
};

export default Card;
