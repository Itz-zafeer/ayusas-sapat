import React from "react";

const LoadingPage = () => {
  return (
    <section className="minfullVh minfullSvh relative lg:pt-[21.151586369vh] pt-36 bg-[#9DAD3D] text-white lg:px-[var(--vw20)] px-5 flex justify-center">
      <div className="atlwh_Full top-0 pointer-events-none">
        <img
          src="/images/extra/abstract_bg.jpeg"
          alt="abstract_bg"
          className="atlwh_Full object-cover"
        />
      </div>
      <div className="relative z-[2] flex flex-col items-center text-center justify-center w-[90%] mx-auto">
        <p className="hidden lg:block lg:text-[3.88888888889vh] lg:leading-[4.44444444444vh] lg:mb-[4.44444444444vh] mb-6 text-[5vw] capitalize w-[80%]">
          Results Loading...
        </p>
        <div className="relative lg:size-[23.5555555556vh] size-[37.6923076923vw] bg-[#8CC540] border-white border-2 rounded-full">
          <span className="absolute lg:size-[3.77777777778vh] size-[5.89743589744vw] lg:top-[3.777778vh] top-[7vw] left-0 bg-[#286746] rounded-full"></span>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5.12820512821vw] font-medium lg:hidden">
            Results <br /> Loading
          </span>
        </div>
        <h2 className="lg:text-[5.555555555568vh] lg:leading-[6vh] text-[6.41025641026vw] font-thin lg:mt-[4.44444444444vh] mt-[18.9743589744vw]">
          Meanwhile{" "}
          <span className="font-medium italic bodoni_moda block lg:inline">
            Breathe Better
          </span>{" "}
          with us
        </h2>
      </div>
    </section>
  );
};

export default LoadingPage;
