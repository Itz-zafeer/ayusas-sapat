import React from "react";
import Image from "next/image";

const ReliefFrom = ({ reliefFrom }) => {
  return (
    <div className="lg:w-[18.3862433862vw] w-[45.715%] lg:pt-[var(--vw67)] pt-[38px] pb-4 px-4 lg:pb-[var(--vw28)] lg:px-[var(--vw16)] bg-darkgreen lg:rounded-[var(--vw30)] rounded-[16px] flex flex-col lg:gap-y-[var(--vw34)] gap-y-5 items-center">
      <div className="lg:size-[var(--vw113)] size-[65px] relative">
        <Image fill alt="icon" src={reliefFrom.icon} />
      </div>
      <span className="lg:text28 mtext16 font-bold text-white">
        {reliefFrom.title}
      </span>
    </div>
  );
};

export default ReliefFrom;
