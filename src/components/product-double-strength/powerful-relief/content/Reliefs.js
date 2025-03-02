import React from "react";
import Relief from "./Relief";
const reliefs = [
  {
    icon: "/images/product-double-strength/powerful-relief/icons/1.svg",
    title: "Persistent Cough",
  },
  {
    icon: "/images/product-double-strength/powerful-relief/icons/2.svg",
    title: "Chronic Cough",
  },
  {
    icon: "/images/product-double-strength/powerful-relief/icons/3.svg",
    title: "Smoker’s Cough",
  },
  {
    icon: "/images/product-double-strength/powerful-relief/icons/4.svg",
    title: "Post-Viral Cough",
  },
  {
    icon: "/images/product-double-strength/powerful-relief/icons/5.svg",
    title: "Elderly Cough",
  },
  {
    icon: "/images/product-double-strength/powerful-relief/icons/6.svg",
    title: "Whooping Cough",
  },
  {
    icon: "/images/product-double-strength/powerful-relief/icons/7.svg",
    title: "Bronchitis & Asthma Support",
  },
];
const Reliefs = () => {
  return (
    <ul className="flex flex-col lg:gap-y-[var(--vw24)] gap-6 lg:pl-[var(--vw43)] pl-[27px] lg:mt-[var(--vw60)] mt-6">
      {reliefs.map((relief, index) => (
        <Relief key={index} relief={relief} />
      ))}
    </ul>
  );
};

export default Reliefs;
