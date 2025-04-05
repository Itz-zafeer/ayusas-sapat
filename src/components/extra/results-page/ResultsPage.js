import Image from "next/image";
import React from "react";
import Content from "./Content";

const ResultsPage = () => {
  return (
    <>
      <section className="minfullVh minfullSvh lg:pb-[21.151586369vh] lg:pt-[39.151586vh] py-[20vh] bg-[#9DAD3D] text-white">
        <div className="atlwh_Full lg:top-[11.3333333333vh] top-[8%] pointer-events-none">
          <img
            src="/images/extra/leaf.png"
            alt="leaf"
            className="absolute left-0 top-0 lg:w-[32vh] w-[30%]"
          />
          <img
            src="/images/extra/leaf.png"
            alt="leaf"
            className="absolute right-0 top-0 lg:w-[32vh] w-[30%] -scale-x-100"
          />
        </div>
        <Content
          number={32}
          numberColor={"text-[#FFFF8C]"}
          desc={` <span class="block lg:text-[4.66666666667vh] lg:leading-[5.33333333333vh] text-[5vw] font-bold">
            You’re doing well,
          </span>
          but there’s always 
          <span class="bg-green">room to get even better!</span> Strengthen
          your lungs with these expert approved breathing exercises.`}
        />
        {/* <Content
          number={14}
          numberColor={"text-[#D73D0A]"}
          desc={` <span class="block lg:text-[4.66666666667vh] lg:leading-[5.33333333333vh] text-[5vw] font-bold">
           Hey, no stress! 
          </span>
         Your lungs just
          <span class="bg-green">need a little care.</span>
          Try these expert recommended breathing exercises.`}
        /> 
        <Content
          number={50}
          numberColor={"text-[#459F00]"}
          desc={` <span class="block lg:text-[4.66666666667vh] lg:leading-[5.33333333333vh] text-[5vw] font-semibold">
          Wow, your lungs are in great shape!
          </span>
         Keep them strong and healthy with these expert-recommended breathing exercises.`}
        />*/}
        <div className="lg:w-[138.888888889vh] w-[89.744%] mx-auto lg:mt-[5.55555555556vh] mt-[6vw]">
          <div className="flex justify-between">
            <div className="lg:text-[3.88888888889vh] lg:leading-[5.444444vh] text-[4vw] lg:pl-[2.22222222222vh] pl-[5.12820512821vw] lg:w-[16.2222222222vh] w-[22vw] text-left">
              1 - 20
            </div>
            <div className="lg:text-[3.88888888889vh] lg:leading-[5.444444vh] text-[4vw] lg:w-[16.2222222222vh] w-[22vw] text-center">
              21 - 45
            </div>
            <div className="lg:text-[3.88888888889vh] lg:leading-[5.444444vh] text-[4vw] lg:pr-[2.22222222222vh] pr-[5.12820512821vw] lg:w-[16.2222222222vh] w-[22vw] text-right">
              46 - 75
            </div>
          </div>
          <div className="relative lg:mt-[3.33333333333vh] mt-[3vw]">
            <img
              src="/images/extra/temperature_measure_bar.png"
              alt="bar"
              className="w-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            />
            <img
              src="/images/extra/temperature_measure_cube.png"
              alt="cube"
              className="lg:w-[5.33333333333vh] w-[5vw] relative z-[1] lg:ml-[30vh] ml-[24vw]"
            />
          </div>
          <div className="flex justify-between bg-[#F1F1F1] text-[#286746] uppercase lg:mt-[2.22222222222vh] mt-[3vw]">
            <div className="lg:text-[3.88888888889vh] lg:leading-[5.444444vh] text-[4vw] lg:pl-[2.22222222222vh] pl-[5.12820512821vw] lg:w-[16.2222222222vh] w-[22vw] text-left">
              LOW
            </div>
            <div className="lg:text-[3.88888888889vh] lg:leading-[5.444444vh] text-[4vw] lg:w-[16.2222222222vh] w-[22vw] text-center">
              MEDIUM
            </div>
            <div className="lg:text-[3.88888888889vh] lg:leading-[5.444444vh] text-[4vw] lg:pr-[2.22222222222vh] pr-[5.12820512821vw] lg:w-[16.2222222222vh] w-[22vw] text-right">
              HIGH
            </div>
          </div>
          <div className="flex justify-between lg:mt-[3.33333333333vh] mt-[3vw]">
            <div className="lg:w-[16.2222222222vh] w-[22vw] lg:pl-[2.22222222222vh] pl-[5.12820512821vw] flex justify-start">
              <div className="lg:size-[8.66666666667vh] size-[8vw] relative">
                <Image fill alt="emoji" src="/images/extra/emojis/sad.png" />
              </div>
            </div>
            <div className="lg:w-[16.2222222222vh] w-[22vw] flex justify-center">
              <div className="lg:size-[8.66666666667vh] size-[8vw] relative">
                <Image fill alt="emoji" src="/images/extra/emojis/happy.png" />
              </div>
            </div>
            <div className="lg:w-[16.2222222222vh] w-[22vw] lg:pr-[2.22222222222vh] pr-[5.12820512821vw] flex justify-end">
              <div className="lg:size-[8.66666666667vh] size-[8vw] relative">
                <Image
                  fill
                  alt="emoji"
                  src="/images/extra/emojis/heart_eyes.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResultsPage;
