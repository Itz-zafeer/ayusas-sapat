import React from "react";
import TreatmentFeature from "./TreatmentFeature";

const TreatmentFeatures = ({ treatmentFeatures }) => {
  return (
    <div className="flex flex-wrap lg:gap-[var(--vw30)] gap-[4vw] justify-start lg:mt-[var(--vw16)] mt-4">
      {treatmentFeatures?.map((treatmentFeature, index) => (
        <TreatmentFeature key={index} treatmentFeature={treatmentFeature} />
      ))}
    </div>
  );
};

export default TreatmentFeatures;
