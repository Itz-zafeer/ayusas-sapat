import React from "react";

const BackGrounds = () => {
  return (
    <div className="atlwh_Full pointer-events-none">
      <div className="atlwh_Full">
        <img
          src="/images/checkout/consultation/ellipse/ellipse.png"
          alt="ellipse"
          className="absolute top-0 left-0 lg:w-[22.3544973545vw] w-[185px] hidden lg:block"
        />
        <img
          src="/images/checkout/consultation/ellipse/mob_ellipse.png"
          alt="ellipse"
          className="absolute top-0 left-0 lg:w-[22.3544973545vw] sm:w-[250px] w-[185px] lg:hidden block"
        />
      </div>
      <div className="atlwh_Full">
        <img
          src="/images/checkout/consultation/tag/free_tag.png"
          alt="free_tag"
          className="absolute top-0 lg:right-[14.880952381vw] lg:w-[5.42328042328vw] w-[49px] hidden lg:block"
        />
        <img
          src="/images/checkout/consultation/tag/mob_free_tag.png"
          alt="free_tag"
          className="absolute top-0 lg:right-[14.880952381vw] right-[124px] sm:right-[380px] lg:w-[5.42328042328vw] w-[49px] lg:hidden block"
        />
      </div>
      <div className="atlwh_Full">
        <div className="atlwh_Full">
          <img
            src="/images/checkout/consultation/fruits/1.png"
            alt="fruits"
            className="absolute bottom-0 lg:right-[var(--vw180)] lg:w-[var(--vw148)] w-[49px] hidden lg:block"
          />
          <img
            src="/images/checkout/consultation/fruits/mob1.png"
            alt="fruits"
            className="absolute bottom-0 lg:right-[var(--vw180)] sm:right-[300px] right-[98px] lg:w-[var(--vw148)] w-[82] lg:hidden block"
          />
        </div>
        <div className="atlwh_Full">
          <img
            src="/images/checkout/consultation/fruits/2.png"
            alt="fruits"
            className="absolute bottom-0 right-0 lg:w-[15.7407407407vw] w-[49px] hidden lg:block"
          />
          <img
            src="/images/checkout/consultation/fruits/mob2.png"
            alt="fruits"
            className="absolute bottom-0 right-0 lg:w-[15.7407407407vw] w-[130px] lg:hidden block"
          />
        </div>
      </div>
    </div>
  );
};

export default BackGrounds;
