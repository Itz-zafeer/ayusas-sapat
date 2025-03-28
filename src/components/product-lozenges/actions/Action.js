import React from "react";
import Image from "next/image";

const Action = ({ action }) => {
  return (
    <div className="flex items-center gap-4 lg:gap-[var(--vw30)]">
      <div className="flex size-[60px] min-w-[60px] items-center justify-center rounded-full bg-white lg:size-[var(--vw125)] lg:min-w-[var(--vw125)]">
        <div className="relative size-[32px] lg:size-[var(--vw82)]">
          <Image fill alt="icon" src={action.icon} />
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: action.desc }}
        className="lg:text32 mtext16 font-medium text-white"
      ></div>
    </div>
  );
};

export default Action;
