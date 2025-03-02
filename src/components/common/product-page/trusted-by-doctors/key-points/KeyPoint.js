import Image from "next/image";
import React from "react";

const KeyPoint = ({ keyPoint }) => {
  return (
    <div className="border-[#FFFFFF75] border-b lg:border-b-0 lg:border-r last:border-0 last:lg:border-r-0 flex lg:flex-col items-center gap-x-[70px] lg:gap-x-0 lg:text-center lg:w-[25%] w-full lg:px-[var(--vw24)] lg:mx-0 px-6 mx-[15.5px] py-[15px]">
      <div className="relative lg:size-[var(--vw55)] size-[47px] lg:min-w-[var(--vw55)] min-w-[47px]">
        <Image fill alt="icon" src={keyPoint.icon} />
      </div>
      <span className="lg:text30 mtext20 font-semibold text-white lg:mt-[var(--vw10)]">
        {keyPoint.title}
      </span>
    </div>
  );
};

export default KeyPoint;
