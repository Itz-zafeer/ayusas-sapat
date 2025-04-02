import React from "react";
import Feature from "./Feature";
const features = [
  {
    icon: "/images/home/features/1.svg",
    title: "NON DROWSY",
    classes: "lg:size-[var(--vw99)] size-10",
  },
  {
    icon: "/images/home/features/2.svg",
    title: "POTENT ACTIVES",
    classes: "lg:size-[var(--vw126)] size-[51px]",
  },
  {
    icon: "/images/home/features/3.svg",
    title: "NO ARTIFICIAL COLORS",
    classes: "lg:size-[var(--vw85)] size-9",
  },
  {
    icon: "/images/home/features/4.svg",
    title: "CHILD SAFE",
    classes: "lg:size-[var(--vw112)] size-[45px]",
  },
  {
    icon: "/images/home/features/5.svg",
    title: "PARABEN FREE",
    classes: "lg:size-[var(--vw82)] size-[35px]",
  },
  {
    icon: "/images/home/features/6.svg",
    title: "NO HEAVY METALS",
    classes: "lg:size-[var(--vw82)] size-9",
  },
];

const Features = () => {
  return (
    <section className="bg-f5eee1 py-7 lg:py-[var(--vw102)]">
      <div className="flex flex-wrap justify-center gap-7 px-5 lg:gap-[var(--vw30)] lg:px-[var(--vw46)] w-full">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
