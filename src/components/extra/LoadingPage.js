import React from "react";

const LoadingPage = () => {
  return (
    <section className="minfullVh minfullSvh lg:pt-[21.151586369vh] pt-36 bg-[#9DAD3D] text-white lg:px-[var(--vw20)] px-5 flex justify-center">
      <div className="relative z-[2] flex flex-col items-center text-center justify-center w-[90%] mx-auto">
        <div className="relative lg:size-[49.5555555556vh] size-[50vw] bg-[#FF8854] border-white border-2 rounded-full">
          <span className="absolute lg:size-[7.88888888889vh] size-[8vw] lg:top-[6.77777777778vh] top-[7vw] left-0 bg-[#286746] rounded-full"></span>
        </div>
        <p className="lg:text-[3.88888888889vh] lg:leading-[4.44444444444vh] lg:mt-[4.44444444444vh] mt-6 text-[5vw] capitalize w-[80%]">
          Results Loading...
        </p>
      </div>
    </section>
  );
};

export default LoadingPage;
