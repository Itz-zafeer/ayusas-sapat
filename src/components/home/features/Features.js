import React from "react";
import Feature from "./Feature";
const features = [
  {
    icon: "/images/home/features/1.svg",
    title: "NON DROWSY",
  },
  {
    icon: "/images/home/features/2.svg",
    title: "PARABEN FREE",
  },
  {
    icon: "/images/home/features/3.svg",
    title: "NO ARTIFICIAL COLORS",
  },
  {
    icon: "/images/home/features/4.svg",
    title: "CHILD SAFE",
  },
  {
    icon: "/images/home/features/5.svg",
    title: "STANDARDIZED NATURO ACTIVES",
  },
  {
    icon: "/images/home/features/6.svg",
    title: "FREE FROM HEAVY METALS",
  },
];

const Features = () => {
  return (
    <section className="lg:pb-[var(--vw104)] lg:pt-[var(--vw77)] pt-6 pb-8">
      <div className="myContainer flex justify-center flex-wrap lg:gap-[var(--vw42)] gap-[14px] lg:py-[var(--vw70)] py-[50px] lg:w-[85.582010582vw] border border-darkblack lg:rounded-[var(--vw30)] rounded-[20px]">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
