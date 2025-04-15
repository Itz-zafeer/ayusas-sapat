import Image from "next/image";
import React from "react";

const ErrorPage = () => {
  return (
    <section className="minfullVh minfullSvh lg:pt-[21.151586369vh] pt-36 text-white lg:px-[var(--vw20)] px-5 flex justify-center">
      <div className="atlwh_Full top-0 pointer-events-none">
        <img
          src="/images/extra/abstract_bg.jpeg"
          alt="abstract_bg"
          className="atlwh_Full object-cover"
        />
      </div>
      <div className="relative z-[2] flex flex-col items-center text-center justify-center w-[90%] mx-auto">
        <div className="relative lg:size-[22.2222222222vh] size-[30vw]">
          <Image fill alt="emoji" src={"/images/extra/error_emoji.png"} />
        </div>
        <p className="lg:text-[3.88888888889vh] lg:leading-[5.444444vh] lg:my-[2.66666666667vh] my-6 text-[6vw] capitalize w-[80%]">
          We are sorry we could not record.{" "}
          <span className="font-bold block">Please re record</span>
        </p>
        <button className="bg-white text-darkblack lg:rounded-[var(--vw100)] rounded-3xl lg:text-[1.52777777778vw] lg:leading-[1.66666666667vw] mtext14 capitalize lg:px-[1.73611111111vw] lg:py-[0.48611111111vw] px-5 py-1">
          Record again
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;
