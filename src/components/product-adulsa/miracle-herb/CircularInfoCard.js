import Image from "next/image";
import React from "react";

const CircularInfoCard = ({
  wrapperClasses,
  contentWrapperClasses,
  heading,
  desc,
  headingClasses,
  image,
  descClasses,
}) => {
  return (
    <div
      className={`${
        wrapperClasses ? wrapperClasses : ""
      }  absolute lg:gap-[var(--vw20)] gap-[2.5641025641vw] flex`}
    >
      <div className="lg:size-[var(--vw142)] lg:min-w-[var(--vw142)] size-[10.5128205128vw] min-w-[10.5128205128vw] relative rounded-full overflow-hidden">
        <Image fill alt="image" src={image} className="object-cover" />
      </div>
      <div
        className={`flex flex-col  lg:gap-[var(--vw12)] gap-[1.02564102564vw] ${
          contentWrapperClasses ? contentWrapperClasses : ""
        }`}
      >
        <h5
          className={`${
            headingClasses ? headingClasses : ""
          } lg:text60 font-extrabold text-[5.12820512821vw] leading-[5.89743589744vw] text-white`}
        >
          {heading}
        </h5>
        <p
          className={`${
            descClasses ? descClasses : ""
          } lg:text30 font-semibold text-[2.82051282051vw] leading-[3.33333333333vw] text-white`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default CircularInfoCard;
