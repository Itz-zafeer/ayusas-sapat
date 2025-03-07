import React from "react";

const Slogan = () => {
  return (
    <div className="relative lg:py-[var(--vw178)] py-[23.5897435897vw]">
      <div className="atlwh_Full">
        <div className="atlwh_Full hidden lg:block">
          <img
            src="/images/our-story/slogan/1.png"
            alt="leaf"
            className="lg:w-[var(--vw100)] absolute lg:left-[var(--vw183)] lg:bottom-[var(--vw117)]"
          />
          <img
            src="/images/our-story/slogan/2.png"
            alt="leaf"
            className="lg:w-[var(--vw50)] absolute lg:left-[50.0661375661vw] lg:top-[var(--vw109)]"
          />
          <img
            src="/images/our-story/slogan/3.png"
            alt="leaf"
            className="lg:w-[var(--vw119)] absolute lg:right-[18.1878306878vw] lg:bottom-[var(--vw50)]"
          />
        </div>
        <div className="atlwh_Full lg:hidden block">
          <img
            src="/images/our-story/slogan/mob/1.png"
            alt="leaf"
            className="w-[9.23076923077vw] absolute left-[6.66666666667vw] bottom-[18.2051282051vw]"
          />
          <img
            src="/images/our-story/slogan/mob/2.png"
            alt="leaf"
            className="w-[9.74358974359vw] absolute left-[46.6666666667vw] top-[11.2820512821vw]"
          />
          <img
            src="/images/our-story/slogan/mob/3.png"
            alt="leaf"
            className="w-[16.1538461538vw] absolute right-[12.8205128205vw] bottom-[8.46153846154vw]"
          />
        </div>
      </div>
      <div className="myContainer lg:w-[70.3703703704vw] relative z-[2]">
        <span className="block slogan text-center text-[6.15384615385vw] leading-[7.94871794872vw] font-medium lg:text-vw80 lg:leading-[var(--vw104)]">
          Because when you breathe better, you live better.
        </span>
      </div>
    </div>
  );
};

export default Slogan;
