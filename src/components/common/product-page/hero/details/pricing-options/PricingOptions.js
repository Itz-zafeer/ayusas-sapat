import React from "react";
import PricingOption from "./PricingOption";
const pricingOptions = [
  {
    discount: "Save 50%",
    pack: "Pack of 1",
    active: true,
  },
  {
    discount: "Save 80%",
    pack: "Pack of 2",
    mostPopular: true,
  },
  {
    discount: "Save 80%",
    pack: "Pack of 2",
  },
];
const PricingOptions = () => {
  return (
    <div className="lg:mt-[var(--vw22)] mt-3 flex items-start flex-wrap lg:gap-[var(--vw14)] gap-2">
      {pricingOptions.map((pricingOption, index) => (
        <PricingOption key={index} pricingOption={pricingOption} />
      ))}
    </div>
  );
};

export default PricingOptions;
