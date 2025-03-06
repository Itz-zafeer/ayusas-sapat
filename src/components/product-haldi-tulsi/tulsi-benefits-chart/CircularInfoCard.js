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
      <div className="lg:size-[var(--vw102)] lg:min-w-[var(--vw102)] size-[9.23076923077vw] min-w-[9.23076923077vw] relative rounded-full overflow-hidden border lg:border-[3px] border-white">
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
          } lg:text26 text-[3.07692307692vw] leading-[4.10256410256vw] font-bold text-white uppercase`}
        >
          {heading}
        </h5>
        <p
          className={`${
            descClasses ? descClasses : ""
          } lg:text24 text-[2.82051282051vw] leading-[3.33333333333vw] text-white capitalize`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default CircularInfoCard;
