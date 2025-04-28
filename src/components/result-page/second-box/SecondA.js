import Image from "next/image";
import React from "react";

const SecondA = ({ secondADesc, medium, high, excellent }) => {
  return (
    <div className="second_a relative w-full flex justify-center lg:justify-start text-center lg:text-start lg:rounded-[var(--vw8)] rounded-lg bg-[rgba(255,255,255,0.10)] lg:py-[var(--vw26)] lg:px-[var(--vw26)] px-[5.12820512821vw] py-[1.53846153846vw] mt-[5.12820512821vw] lg:mt-0">
      <div className="atlwh_Full pointer-events-none">
        {high || excellent ? (
          <div className="lg:hidden atlwh_Full">
            <div className="absolute top-0 left-0 lg:size-[6.22222222222vh] size-[8.97435897436vw] -translate-x-1/2 -translate-y-1/2">
              <Image fill alt="star" src={"/images/extra/high_star.svg"} />
            </div>
            <div className="absolute top-0 right-0 lg:size-[6.22222222222vh] size-[8.97435897436vw] translate-x-1/2 -translate-y-1/2">
              <Image fill alt="star" src={"/images/extra/high_star.svg"} />
            </div>
            <div className="absolute bottom-0 right-0 lg:size-[6.22222222222vh] size-[8.97435897436vw] translate-x-1/2 translate-y-[25%]">
              <Image fill alt="star" src={"/images/extra/high_star.svg"} />
            </div>
            <div className="absolute bottom-0 left-0 lg:size-[6.22222222222vh] size-[8.97435897436vw] -translate-x-1/2 translate-y-[25%]">
              <Image fill alt="star" src={"/images/extra/high_star.svg"} />
            </div>
          </div>
        ) : medium ? (
          <>
            <div className="absolute right-0 bottom-0 lg:size-[var(--vw103)] size-[11.7948717949vw]">
              <Image
                fill
                alt="medium_star"
                src="/images/extra/medium_star.png"
              />
            </div>
            <div className="absolute left-0 bottom-0 lg:size-[var(--vw103)] size-[11.7948717949vw] lg:hidden">
              <Image
                fill
                alt="medium_star"
                src="/images/extra/medium_star.png"
              />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      {secondADesc && (
        <div
          dangerouslySetInnerHTML={{ __html: secondADesc }}
          className={`${excellent || medium || high ? "medium" : ""} desc relative z-[2] font-light lg:text-vw26 lg:leading-[var(--vw34)] text-[4.10256410256vw] leading-[4.95726495726vw]`}
        ></div>
      )}
    </div>
  );
};

export default SecondA;
