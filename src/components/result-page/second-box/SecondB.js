import React from "react";

const SecondB = ({ secondBDesc }) => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.10)",
      }}
      className="second_b w-full flex flex-col lg:gap-y-[0.88888888888vh] gap-y-5 lg:rounded-[var(--vw8)] rounded-lg bg-[rgba(255,255,255,0.10)] lg:pt-[1.33333333333vh] lg:pb-[2.66666666667vh] py-[1.53846153846vw] px-[2.05128205128vw] lg:px-[var(--vw26)]"
    >
      {secondBDesc && (
        <div
          dangerouslySetInnerHTML={{ __html: secondBDesc }}
          className="font-semibold underline underline-offset-2 lg:text-vw20 lg:leading-[var(--vw27)] text-[2.5641025641vw] leading-[4.10256410256vw]"
        ></div>
      )}
      <button className="ml-auto uppercase flex justify-center items-center lg:px-[var(--vw12)] lg:py-[calc(0.5*var(--vw12))] py-[1.28205128205vw] px-[3.07692307692vw] lg:text-vw10 lg:leading-[var(--vw10)] text-[1.79487179487vw] leading-[1.79487179487vw] font-medium text-darkblack bg-[#FFDA24] lg:rounded-[var(--vw100)] rounded-[100px]">
        <span>DOWNLOAD</span>
      </button>
    </div>
  );
};

export default SecondB;
