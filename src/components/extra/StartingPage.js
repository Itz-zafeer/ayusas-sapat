import React from "react";
import Image from "next/image";

const steps = [
  {
    icon: "/images/extra/icons/1.svg",
    desc: `grab your phone & hold it closer to your mouth`,
  },
  {
    icon: "/images/extra/icons/2.svg",
    desc: `Hit record & say <span class='bg-green text-white'>“Ayusaaaaaaaaaaaaaaaaas”</span> </br> for as long as you can!`,
  },
  {
    icon: "/images/extra/icons/3.svg",
    desc: `Happy with your result? <span class='font-bold text-green capitalize'>Tap submit!</span>`,
  },
];
const StartingPage = () => {
  return (
    <>
      <section className="minfullVh minfullSvh lg:pt-[21.151586369vh] pt-36 bg-[#9DAD3D] text-white lg:px-[var(--vw20)] px-5 flex justify-center">
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
        <div className="relative z-[2] flex flex-col items-center justify-center">
          <div className="flex flex-col  lg:gap-y-[1.33333333333vh] gap-y-2 items-center text-center lg:w-[71.875vw]">
            <h2 className="lg:text-[7.77777777778vh] lg:leading-[8.22222222222vh] text-[6.5vw] font-black">
              Your lungs work 24/7 <span className="text-green">.</span>
            </h2>
            <p className="lg:text-[3.33333333333vh] lg:leading-[4.33333333333vh] text-[5vw] capitalize lg:w-[55.9027777778vw] w-[90%]">
              Let’s test how strong they are. It’ll only take a min!
            </p>
            <button className="bg-white lg:rounded-[var(--vw100)] rounded-3xl text-darkblack lg:text-[2.88888888889vh] lg:leading-[3.44444444444vh] mtext16 capitalize lg:px-[5.33333333333vh] lg:py-[1.5vh] px-6 py-2 lg:mt-[1.33333333333vh] mt-3">
              Start your test
            </button>
          </div>
          <div className="flex justify-center lg:gap-x-[var(--vw170)] gap-x-[16vw] lg:mt-[-4vh] relative z-[-1]">
            <div className="relative lg:w-[45.3333333333vh] lg:h-[45.8888888889vh] size-[40vw]">
              <Image fill alt="wave" src={"/images/extra/wav.png"} />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:size-[20.3333333333vh] size-[20vw] bg-[#FF8854] border-white border-2 rounded-full">
              <span className="absolute lg:size-[3.22222222222vh] size-[4vw] lg:top-[3.22222222222vh] top-[1vw] left-0 bg-[#286746] rounded-full"></span>
            </div>
            <div className="relative lg:w-[45.3333333333vh] lg:h-[45.8888888889vh] size-[40vw]">
              <Image fill alt="wave" src={"/images/extra/wav.png"} />
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap items-center bg-f5eee1">
        <div className="bg-green lg:w-[22.0833333333vw] lg:min-w-[22.0833333333vw] w-full flex jus items-center relative lg:py-[6.38888888889vw] lg:px-[4.66666666667vw] px-5 py-20 overflow-hidden">
          <img
            src="/images/extra/steps.png"
            alt="steps"
            className="absolute lg:top-0 bottom-0 left-0 lg:w-[13.4027777778vw] w-[36%]"
          />
          <span className="lg:text30 mtext18 text-white uppercase relative z-[2] mx-auto">
            STEPS TO <br /> FOLLOW:
          </span>
        </div>
        <div className="flex justify-center lg:justify-start flex-wrap lg:gap-[8.33333333333vw] gap-6 py-10 lg:py-0 lg:px-[2.5vw] px-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:gap-[var(--vw12)] gap-3 items-center text-center first:lg:w-[14.4166666667vw] lg:w-[20.2083333333vw] last:lg:w-[14.4166666667vw] sm:w-[32%] last:sm:w-[32%] first:sm:w-[32%] last:w-[59%] w-[70%] first:w-[59%]`}
            >
              <div className="relative lg:size-[6.66666666667vw] size-12">
                <Image fill src={step.icon} alt="icon" />
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: step.desc }}
                className="text-darkblack lg:text-[1.38888888889vw] lg:leading-[1.70138888889vw] mtext16"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StartingPage;
