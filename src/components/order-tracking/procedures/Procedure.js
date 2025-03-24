import Image from "next/image";
import React from "react";

const Procedure = ({ procedure, index, length }) => {
  return (
    <li className="flex items-center lg:gap-x-[var(--vw14)] gap-x-5 relative">
      {index + 1 === length || (
        <span className="lg:w-[var(--vw14)] lg:min-w-[var(--vw14)] min-w-2.5 w-2.5 bg-yellow lg:h-[168%] h-[160%] absolute left-0 top-1/2"></span>
      )}
      <div className="lg:w-[var(--vw95)] lg:min-w-[var(--vw95)] lg:h-[var(--vw14)] sm:w-[70px] sm:min-w-[70px] w-[17.9487179487vw] min-w-[17.9487179487vw] h-2.5 bg-yellow relative">
        {index + 1 === length && (
          <span className="rounded-full lg:size-[var(--vw38)] size-[28px] absolute top-1/2 -translate-y-1/2 right-[-25%] bg-[#059212]"></span>
        )}
      </div>
      <div className="flex items-center lg:gap-x-[var(--vw25)] gap-x-[19px]">
        <div className="relative lg:size-[var(--vw96)] lg:min-w-[var(--vw96)] sm:size-[69px] sm:min-w-[69px] size-[17.6923076923vw] min-w-[17.6923076923vw]">
          <Image fill alt="icon" src={procedure.icon} />
        </div>
        <div className="flex flex-col text-darkblack">
          <span className="lg:text26 mtext18 font-bold">{procedure.title}</span>
          <span className="lg:text-vw15 lg:leading-[var(--vw20)] mtext10 font-medium">
            {procedure.desc}
          </span>
        </div>
      </div>
    </li>
  );
};

export default Procedure;
