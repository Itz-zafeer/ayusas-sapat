import React from "react";

const Score = ({ score, desc }) => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
      className="relative lg:rounded-[var(--vw8)] bg-[rgba(255,255,255,0.10)] lg:mt-[2.88888888889vh] mt-[8.97435897436vw]"
    >
      <div className="atlwh_Full overflow-hidden">
        <div className="flex flex-wrap lg:gap-[0.16666666666vw] gap-[0.76923076923vw] w-full uppercase text-[rgba(255,255,255,0.05)] font-black lg:text-[3.11111111111vh] lg:leading-[3.66666666667vh] text-[6.92307692308vw] leading-[8.20512820513vw]">
          {Array.from({ length: 170 }).map((_, index) => (
            <span key={index}> {score}</span>
          ))}
        </div>
      </div>
      <div className="relative z-[2] lg:px-[var(--vw34)] px-[6.66666666667vw] lg:pb-[3.77777777778vh] lg:pt-[2vh] pt-[5.64102564103vw] sm:pb-[9.384615vw] pb-[15.3846153846vw] flex flex-wrap items-start justify-between lg:gap-[var(--vw50)]">
        <div className="text-green lg:text-[#000000E5] text-center uppercase bebas_neue lg:text-[3.11111111111vh] lg:leading-[3.11111111111vh] text-[4.10256410256vw] leading-[4.10256410256vw] border-white border lg:border-[0.11111111111vh] bg-[#FFDA24] lg:py-[0.16666666666vh] lg:px-[var(--vw36)] px-[0.82051282051vw] py-[0.38461538461vw] flex items-center justify-center">
          <span className="block">
            YOUR <br className="lg:hidden" /> rESULT
          </span>
        </div>
        <div className="lg:flex-1 w-full lg:w-auto order-2 lg:order-[unset] flex flex-col items-center text-center">
          <h1 className="lg:text-[13.3333333333vh] lg:leading-[13.3333333333vh] text-[15.3846153846vw] leading-[15.3846153846vw] uppercase font-black">
            {score}
          </h1>
          <div
            className="lg:text-[2.77777777778vh] lg:leading-[3.66666666667vh] text-[3.58974358974vw] leading-[5.64102564103vw] text-[#FFFFFFE5]"
            dangerouslySetInnerHTML={{
              __html: desc,
            }}
          ></div>
        </div>
        <div className="text-green lg:text-[#000000E5] text-center uppercase bebas_neue lg:text-[3.11111111111vh] lg:leading-[3.11111111111vh] text-[4.10256410256vw] leading-[4.10256410256vw] border-white border lg:border-[0.11111111111vh] bg-[#FFDA24] lg:py-[0.16666666666vh] lg:px-[var(--vw36)] px-[0.82051282051vw] py-[0.38461538461vw] flex items-center justify-center">
          <span className="block">
            YOUR <br className="lg:hidden" /> rESULT
          </span>
        </div>
      </div>
    </div>
  );
};

export default Score;
