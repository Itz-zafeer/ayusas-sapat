import React from "react";
import BackGrounds from "./BackGrounds";
import Card from "./Card";
const highlights = [
  {
    icon: "/images/product-haldi-tulsi/feature-highlight/icons/1.svg",
    label: "Natural herbs with antiviral effect ",
  },
  {
    icon: "/images/product-haldi-tulsi/feature-highlight/icons/2.svg",
    label: "Strong Natural actives",
  },
  {
    icon: "/images/product-haldi-tulsi/feature-highlight/icons/3.svg",
    label: "Quick acting",
  },
];
const FeatureHighlight = () => {
  return (
    <div className="relative">
      <BackGrounds />
      <div className="flex flex-wrap justify-center lg:gap-[var(--vw44)] gap-6 relative z-[2] lg:pt-[var(--vw194)] lg:pb-[var(--vw136)] py-[78px]">
        {highlights.map((highlight, index) => (
          <Card key={index} highlight={highlight} />
        ))}
      </div>
    </div>
  );
};

export default FeatureHighlight;
