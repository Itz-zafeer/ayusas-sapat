import React from "react";
import TreatmentFeature from "./TreatmentFeature";
const treatmentFeatures = [
  {
    image:
      "/images/product-double-strength/hero/details/treatment-features/1.jpg",
    label: "Persistent Cough",
  },
  {
    image:
      "/images/product-double-strength/hero/details/treatment-features/2.jpg",
    label: "Sore Throat",
  },
  {
    image:
      "/images/product-double-strength/hero/details/treatment-features/3.jpg",
    label: "Smoker’s Cough",
  },
  {
    image:
      "/images/product-double-strength/hero/details/treatment-features/4.jpg",
    label: "Elderly Cough",
  },
  {
    image:
      "/images/product-double-strength/hero/details/treatment-features/5.jpg",
    label: "Bronchitis",
  },
  {
    image:
      "/images/product-double-strength/hero/details/treatment-features/6.jpg",
    label: "Asthma",
  },
  {
    image:
      "/images/product-double-strength/hero/details/treatment-features/7.jpg",
    label: "Chest Congestion",
  },
];

const TreatmentFeatures = () => {
  return (
    <div className="flex flex-wrap lg:gap-[var(--vw30)] gap-[4vw] justify-start lg:mt-[var(--vw16)] mt-4">
      {treatmentFeatures.map((treatmentFeature, index) => (
        <TreatmentFeature key={index} treatmentFeature={treatmentFeature} />
      ))}
    </div>
  );
};

export default TreatmentFeatures;
