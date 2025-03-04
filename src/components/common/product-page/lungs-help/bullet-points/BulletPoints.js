import Image from "next/image";
import React from "react";
const helps = [
  {
    icon: "/images/product-double-strength/lungs-help/icons/1.svg",
    title: "Provide oxygen to your body",
  },
  {
    icon: "/images/product-double-strength/lungs-help/icons/2.svg",
    title: "Get rid of CO2",
  },
  {
    icon: "/images/product-double-strength/lungs-help/icons/3.svg",
    title: "Protect against infections",
  },
  {
    icon: "/images/product-double-strength/lungs-help/icons/4.svg",
    title: "Maintain immunity",
  },
];
const BulletPoints = () => {
  return (
    <ul className="flex flex-col lg:gap-y-[var(--vw32)] gap-y-5 lg:mt-[var(--vw40)] mt-6">
      {helps.map((help, index) => (
        <li
          key={index}
          className="flex items-center lg:gap-[var(--vw30)] gap-[7.69230769231vw]"
        >
          <div className="lg:size-[var(--vw82)] lg:min-w-[var(--vw82)] size-[15.8974358974vw] min-w-[15.8974358974vw] relative">
            <Image fill alt="icon" src={help.icon} />
          </div>
          <span className="lg:text24 mtext22 font-medium text-darkblack">
            {help.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default BulletPoints;
