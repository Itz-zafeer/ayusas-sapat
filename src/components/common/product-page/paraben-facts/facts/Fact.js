import Image from "next/image";
import React from "react";

const Fact = ({ classes, heading, data, desc }) => {
  return (
    <div className={`${classes ? classes : ""} lg:px-[var(--vw101)] px-6`}>
      <h2 className="lg:text60 mtext30 font-semibold capitalize lg:leading-[var(--vw70)]">
        {heading}
      </h2>
      <div className="flex justify-between sm:justify-start lg:justify-between flex-wrap lg:gap-[var(--vw20)] gap-5 lg:mt-[var(--vw60)] mt-6">
        {data?.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center lg:w-[var(--vw120)] sm:w-[150px] w-[70px]"
          >
            <div className="lg:size-[var(--vw96)] size-[65px] bg-white rounded-full flex items-center justify-center">
              <div className="lg:size-[var(--vw46)] size-[31px] relative">
                <Image fill alt="icon" src={value?.icon} />
              </div>
            </div>
            {value?.title && (
              <span className="lg:text18 mtext12 lg:mt-[var(--vw20)] mt-2.5">
                {value?.title}
              </span>
            )}
          </div>
        ))}
      </div>
      {desc && (
        <p className="lg:text24 mtext16 font-medium lg:mt-[var(--vw45)] mt-6">
          {desc}
        </p>
      )}
    </div>
  );
};

export default Fact;
