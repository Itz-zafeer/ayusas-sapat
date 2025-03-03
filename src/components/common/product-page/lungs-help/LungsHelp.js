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
const LungsHelp = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[44.9735449735vw] bg-f5eee1">
          <div className="lg:w-[calc(2*var(--vw200))] w-[70%] lg:pt-[16.2037037037vw] lg:pb-[15.2116402116vw] py-[55px] mx-auto flex flex-col">
            <h2 className="lg:text-vw70 lg:leading-[var(--vw91)] text-[50px] leading-[65px] text-[#286746] font-bold">
              Lungs <span className="text-darkblack">help</span>
            </h2>
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
          </div>
        </div>
        <div className="lg:w-[54.961%] lg:h-[68.253968254vw] w-full sm:h-[126.153846154vw] h-[492px] relative">
          <Image
            fill
            alt="banner"
            className="object-cover"
            src={"/images/product-double-strength/lungs-help/banner.jpg"}
          />
        </div>
      </div>
    </section>
  );
};

export default LungsHelp;
