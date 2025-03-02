import React from "react";
import KeyPoint from "./KeyPoint";
const keyPoints = [
  {
    icon: "/images/product-double-strength/trusted-by-doctors/icons/1.svg",
    title: "No Alcohol",
  },
  {
    icon: "/images/product-double-strength/trusted-by-doctors/icons/2.svg",
    title: "Effective Relief",
  },
  {
    icon: "/images/product-double-strength/trusted-by-doctors/icons/3.svg",
    title: "Non-drowsy formula",
  },
  {
    icon: "/images/product-double-strength/trusted-by-doctors/icons/4.svg",
    title: "No side effects",
  },
];

const KeyPoints = () => {
  return (
    <div className="myContainer flex flex-wrap lg:w-[85.119047619vw] bg-lightgreen lg:rounded-[var(--vw40)] rounded-[40px]  !rounded-br-none !rounded-bl-none lg:pt-[var(--vw31)] lg:pb-[var(--vw45)] py-[15px]">
      {keyPoints.map((keyPoint, index) => (
        <KeyPoint key={index} keyPoint={keyPoint} />
      ))}
    </div>
  );
};

export default KeyPoints;
