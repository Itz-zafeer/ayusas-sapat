import React from "react";
import Marquee from "react-fast-marquee";

const KeyBenefitsBar = () => {
  return (
    <div className="bg-white">
      <Marquee
        pauseOnHover
        speed={100}
        className="lg:py-[var(--vw44)] py-[25.5px]"
      >
        {[
          "PARABEN FREE",
          "CHILD SAFE",
          "FAST ACTING",
          "FREE FROM HEAVY METALS",
        ].flatMap((value, index) => [
          <span
            key={`text-${index}`}
            className="lg:text-vw36 lg:leading-[var(--vw40)] mtext30 fenix font-normal uppercase text-darkblack lg:mx-[var(--vw22)] mx-[14px]"
          >
            {value}
          </span>,

          <span
            key={index}
            className="block lg:size-[var(--vw14)] lg:min-w-[var(--vw14)] size-[14px] min-w-[14px] bg-darkblack rounded-full overflow-hidden"
          ></span>,
        ])}
      </Marquee>
    </div>
  );
};

export default KeyBenefitsBar;
