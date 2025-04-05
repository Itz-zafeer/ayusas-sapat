import Image from "next/image";
import React from "react";

const ErrorPage = () => {
  return (
    <section className="minfullVh minfullSvh lg:pt-[21.151586369vh] pt-36 bg-[#9DAD3D] text-white lg:px-[var(--vw20)] px-5 flex justify-center">
      <div className="relative z-[2] flex flex-col items-center text-center justify-center w-[90%] mx-auto">
        <div className="relative lg:size-[22.2222222222vh] size-[30vw]">
          <Image fill alt="emoji" src={"/images/extra/error_emoji.png"} />
        </div>
        <p className="lg:text-[3.88888888889vh] lg:leading-[5.444444vh] lg:mt-[6.66666666667vh] mt-6 text-[6vw] capitalize w-[80%]">
          We are sorry we could not record.{" "}
          <span className="font-bold block">Please re record</span>
        </p>
      </div>
    </section>
  );
};

export default ErrorPage;
