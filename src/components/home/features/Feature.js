import Image from "next/image";
import React from "react";

const Feature = ({ feature }) => {
  return (
    <div className="flex flex-col items-center text-center lg:w-[17.8571428571vw] w-[28%]">
      <div className="relative lg:size-[var(--vw121)] sm:size-[45px] size-[35px]">
        <Image fill alt="icon" src={feature.icon} />
      </div>
      <span className="font-bold lg:text24 mtext10 text-darkblack lg:mt-[var(--14)] mt-3">
        {feature.title}
      </span>
    </div>
  );
};

export default Feature;
