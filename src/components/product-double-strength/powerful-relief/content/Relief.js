import React from "react";
import Image from "next/image";

const Relief = ({ relief }) => {
  return (
    <li className="flex   lg:gap-[var(--vw26)] gap-4 items-center lg:px-[var(--vw60)] px-5 lg:py-[var(--vw18)] py-[27.5px] !border-r-0 !rounded-tr-none !rounded-br-none border border-[#2867464A] lg:rounded-[var(--vw60)] rounded-[60px]">
      <div className="relative lg:size-[var(--vw69)] lg:min-w-[var(--vw69)] size-[50px] min-w-[50px]">
        <Image fill alt="icon" src={relief.icon} />
      </div>
      <span className="lg:text30 mtext24 text-darkblack font-semibold">
        {relief.title}
      </span>
    </li>
  );
};

export default Relief;
