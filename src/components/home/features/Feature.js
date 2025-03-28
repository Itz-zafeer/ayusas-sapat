import Image from "next/image";
import React from "react";

const Feature = ({ feature }) => {
  return (
    <div className="flex w-[23.143%] flex-col items-center rounded-[10px] bg-f5eee1 text-center lg:w-[14.789%] lg:rounded-[var(--vw50)] lg:px-[var(--vw16)] lg:py-[var(--vw12)] py-1.5 px-3">
      <div className="relative lg:size-[var(--vw99)] size-10">
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${feature.classes}`}
        >
          <Image fill alt="icon" src={feature.icon} />
        </div>
      </div>
      <span className="lg:text20 mtext10 font-bold uppercase text-darkblack lg:mt-[var(--16)] mt-2.5">
        {feature.title}
      </span>
    </div>
  );
};

export default Feature;
