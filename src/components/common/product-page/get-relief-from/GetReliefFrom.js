import React from "react";
import ReliefFrom from "./ReliefFrom";
const reliefFroms = [
  {
    icon: "/images/product-double-strength/get-relief-from/1.svg",
    title: "Wet Cough",
  },
  {
    icon: "/images/product-double-strength/get-relief-from/2.svg",
    title: "Dry Cough",
  },
  {
    icon: "/images/product-double-strength/get-relief-from/3.svg",
    title: "Sore Throat",
  },
  {
    icon: "/images/product-double-strength/get-relief-from/4.svg",
    title: "Low immunity",
  },
];
const GetReliefFrom = () => {
  return (
    <div className="myContainer text-center lg:pb-[var(--vw90)] pb-[66px]">
      <h2 className="text60 capitalize lg:mb-[var(--vw43)] mb-5">
        Get relief from
      </h2>
      <div className="flex justify-center flex-wrap lg:gap-[var(--vw30)] gap-x-[18px] gap-y-6">
        {reliefFroms.map((reliefFrom, index) => (
          <ReliefFrom key={index} reliefFrom={reliefFrom} />
        ))}
      </div>
    </div>
  );
};

export default GetReliefFrom;
