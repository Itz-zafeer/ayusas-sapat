import React from "react";

const IngredientDetail = ({
  heading,
  desc,
  headingClasses,
  descClasses,
  wrapperClasses,
  lineClasses,
  indicatorImageClasses,
  indicatorImage,
}) => {
  return (
    <li
      className={`${
        wrapperClasses ? wrapperClasses : ""
      } flex flex-col items-start w-full relative`}
    >
      <div className="relative">
        <span
          className={`${
            lineClasses ? lineClasses : ""
          } bg-[#00000075] lg:h-[0.19841269841vw] h-[1px] absolute lg:top-[var(--vw30)] top-[2.82051282051vw] block`}
        ></span>
        {indicatorImage && (
          <img
            src={indicatorImage}
            className={`${
              indicatorImageClasses ? indicatorImageClasses : ""
            } absolute`}
            alt="image"
          />
        )}
        <span
          className={`${
            headingClasses ? headingClasses : ""
          } lg:text40 text-[4.10256410256vw] font-bold bg-f5eee1 relative inline-block break-all whitespace-normal`}
        >
          {heading}
        </span>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: desc }}
        className={`${
          descClasses ? descClasses : ""
        } lg:text18 text-[3.07692307692vw] leading-[4.10256410256vw] text-darkblack lg:mt-[var(--vw10)] mt-1`}
      ></div>
    </li>
  );
};

export default IngredientDetail;
