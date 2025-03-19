import React from "react";
import Image from "next/image";

const Action = ({ action }) => {
  return (
    <div className="flex items-center lg:gap-[var(--vw30)] gap-4">
      <div className="lg:size-[var(--vw125)] lg:min-w-[var(--vw125)] size-[60px] min-w-[60px] bg-white rounded-full flex items-center justify-center">
        <div className="lg:size-[var(--vw82)] size-[32px] relative">
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
