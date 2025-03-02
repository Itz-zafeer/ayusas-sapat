import Image from "next/image";
import React from "react";

const TreatmentFeature = ({ treatmentFeature }) => {
  return (
    <div className="lg:w-[var(--vw130)] w-[21.357%] flex flex-col items-center text-center lg:gap-[var(--vw10)] gap-1.5">
      <div className="relative lg:size-[var(--vw79)] sm:size-16 size-[50px] rounded-full overflow-hidden">
        <Image fill alt="treatment_feature" src={treatmentFeature.image} />
      </div>
      <span className="lg:text14 mtext12 text-black font-semibold">
        {treatmentFeature.label}
      </span>
    </div>
  );
};

export default TreatmentFeature;
