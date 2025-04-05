import React from "react";

const Content = ({ number, numberColor, desc }) => {
  return (
    <div className="flex flex-wrap items-center lg:gap-[4.44444444444vh] gap-4 lg:w-[138.888888889vh] w-[89.744%] mx-auto p-[5.12820512821vw] lg:px-[4.44444444444vh] lg:py-[4vh] bg-[#FFFFFF4D] lg:rounded-[2.44444444444vh] rounded-[22px]">
      <span
        className={`font-black lg:text-[33.3333333333vh] lg:leading-[33.3333333333vh] text-[12vw] leading-[12vw] ${numberColor ? numberColor : ""}`}
      >
        {number}
      </span>
      <div className="lg:w-[80.2222222222vh] lg:text-[3.88888888889vh] lg:leading-[5.444444vh] text-[4vw]">
        <div dangerouslySetInnerHTML={{ __html: desc }}></div>
        <a
          href=""
          download
          className="text-green lg:text-[3.33333333333vh] lg:leading-[4vh] text-[4vw] font-semibold underline"
        >
          Click here to download.
        </a>
      </div>
    </div>
  );
};

export default Content;
