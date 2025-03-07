import React from "react";

const BulletPoint = ({ bulletPoint }) => {
  return (
    <li className="flex flex-col lg:pl-[var(--vw100)] px-5 lg:py-[var(--vw22)] py-[29.5px] !border-l-0 !rounded-tl-none !rounded-bl-none border border-[#2867466E] lg:rounded-[var(--vw60)] rounded-[60px]">
      <span className="lg:text35 mtext24 text-darkgreen font-semibold">
        {bulletPoint.title}
      </span>
      <span className="lg:text24 mtext16 text-[#030303]">
        {bulletPoint.desc}
      </span>
    </li>
  );
};

export default BulletPoint;
