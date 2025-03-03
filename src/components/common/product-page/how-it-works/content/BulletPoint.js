import React from "react";

const BulletPoint = ({ bulletPoint }) => {
  return (
    <li className="flex lg:justify-start justify-center lg:gap-[var(--vw26)] gap-4 items-center lg:px-[var(--vw58)] px-5 lg:py-[var(--vw41)] py-[15px] lg:!border-r-0 lg:!rounded-tr-none lg:!rounded-br-none border border-[#2867466e] lg:rounded-[var(--vw60)] rounded-[60px]">
      <span className="lg:text30 mtext20 text-darkgreen font-semibold">
        {bulletPoint.title}
      </span>
    </li>
  );
};

export default BulletPoint;
