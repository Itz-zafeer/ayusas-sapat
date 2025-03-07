import Image from "next/image";
import React from "react";

const HerbalExpertise = () => {
  return (
    <section className="lg:py-[var(--vw199)] relative lg:px-[var(--vw34)] pt-[283px] pb-14 flex justify-center lg:justify-end">
      <div className="atlwh_Full pointer-events-none">
        <div className="atlwh_Full">
          <Image
            fill
            alt="hero_image"
            src={"/images/our-story/herbal-expertise/bg.jpg"}
            className="object-cover"
          />
        </div>
        <span className="atlwh_Full bg-[#0F3E2540]"></span>
      </div>
      <div className="relative lg:w-[42.3941798942vw] w-[89.744%] z-[2] lg:rounded-[var(--vw50)] rounded-[30px] overflow-hidden bg-white lg:px-[var(--vw94)] sm:px-10 px-5 lg:pt-[var(--vw52)] pt-11">
        <div className="lg:w-[34.0608465608vw] w-[94.519%] flex flex-col">
          <span
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#286746",
            }}
            className="felixti lg:text-vw100 lg:leading-[var(--vw117)] text-[60px] leading-[70px] text-[#286746]"
          >
            125 Years{" "}
          </span>
          <span className="lg:text40 mtext22 font-semibold text-darkblack mt-1 lg:mt-0">
            of Herbal Expertise
          </span>
          <p className="lg:text24 mtext14 text-darkblack lg:mt-[var(--vw36)] mt-2.5">
            For over 125 years, we have perfected the art of natural healing,
            creating formulations rooted in time-tested remedies. Every herb we
            use has been trusted for centuries to support respiratory health:
          </p>
        </div>
        <div className="relative lg:w-[18.4523809524vw] lg:h-[17.5264550265vw] size-[191px] lg:mt-[var(--vw15)] mt-5 mx-auto">
          <Image
            fill
            alt="logo"
            src={"/images/our-story/herbal-expertise/logo.svg"}
          />
        </div>
      </div>
    </section>
  );
};

export default HerbalExpertise;
