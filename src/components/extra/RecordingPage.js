import Image from "next/image";
import React from "react";
const steps = [
  {
    icon: "/images/extra/icons/1.svg",
    desc: `<span class='lg:block lg:w-[14.2222222222vh] capitalize'>grab your phone & hold it closer to your mouth</span>`,
  },
  {
    icon: "/images/extra/icons/2.svg",
    desc: `<span class='lg:block lg:w-[23vh]'>Hit record & say <div class='lg:bg-[#B0C165] text-white'>“Ayusaaaaaaaaaaaaaaaaas”</div> for as long as you can!</span>`,
  },
  {
    icon: "/images/extra/icons/3.svg",
    desc: `<span class='lg:block lg:w-[14.2222222222vh] capitalize'> Happy with your result?
<span class='font-bold lg:text-[#B0C165] block'>Tap submit!</span></span>`,
  },
];
const RecordingPage = () => {
  return (
    <>
      <section className="minfullVh minfullSvh lg:pt-[14vh] sm:pt-52 pt-28 text-white relative flex">
        <div className="atlwh_Full top-0 pointer-events-none">
          <img
            src="/images/extra/abstract_bg.jpeg"
            alt="abstract_bg"
            className="w-full absolute top-0 left-0 object-cover"
          />
        </div>
        <div className="relative z-[2] flex flex-col-reverse lg:flex-col w-full">
          <div className="relative z-[2] lg:bg-green w-full mb-auto lg:mb-0">
            <div className="atlwh_Full hidden lg:block">
              <img
                src="/images/extra/pattern1.png"
                alt="leaf"
                className="absolute left-0 top-0 lg:w-[15.4444444444vh] w-[30%]"
              />
              <img
                src="/images/extra/pattern3.png"
                alt="leaf"
                className="absolute right-0 lg:top-[-2.22222222222vh] top-0 lg:w-[22.4444444444vh] w-[30%]"
              />
            </div>
            <div className="relative z-[2] flex justify-center lg:justify-normal lg:gap-[3.44444444444vh] gap-[3.07692307692vw] w-full flex-wrap lg:items-center lg:py-[3.44444444444vh] lg:px-[6.52777777778vw] px-5 pt-[5.12820512821vw] mb-[9.23076923077vw] lg:mb-0">
              <div className="flex items-center justify-center lg:justify-normal lg:w-[20.0694444444vw] w-full">
                <span className="lg:text-[3.33333333333vh] lg:leading-[3.6vh] text-[3.84615384615vw] capitalize underline lg:no-underline">
                  Test your lungs <br className="hidden lg:block" />
                  <span className="lg:text-[2.66666666667vh] lg:leading-[3.33333333333vh] lg:normal-case">
                    by following these steps:
                  </span>
                </span>
              </div>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`px-[2.5641025641vw] lg:p-0 pt-[3.07692307692vw] pb-[5.12820512821vw] flex flex-col lg:flex-row lg:gap-[1.18055555556vw] gap-3 items-center lg:w-auto w-[23.3333333333vw] bg-[#FFFFFF4D] lg:bg-transparent rounded-[10px] lg:rounded-none`}
                >
                  <div className="relative lg:size-[7.77777777778vh] size-[9.23076923077vw] lg:min-w-[7.77777777778vh]">
                    <Image fill src={step.icon} alt="icon" />
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: step.desc }}
                    className="lg:text-[1.77777777778vh] lg:leading-[2vh] text-[2.82051282051vw] break-all lg:break-normal text-center lg:text-start"
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto flex flex-col items-center lg:w-[84.6527777778vw] w-full lg:pt-[7.11111111111vh]">
            <div className="flex flex-col lg:gap-y-[1.33333333333vh] items-center text-center lg:w-[71.875vw] w-[75.641025641vw]">
              <h2 className="lg:text-[3.33333333333vh] lg:leading-[4.33333333333vh] text-[5.12820512821vw] font-medium capitalize">
                Take a DEEEEEEEEEEP breath while we prepare for the test.
              </h2>
              <p className="italic underline underline-offset-2 lg:text-[1.66666666667vh] lg:leading-[2vh] text-[2.82051282051vw] capitalize lg:w-[77.8%]">
                It will automatically start recording after the countdown.
              </p>
            </div>
            <div className="flex items-center lg:gap-[11.7361111111vw] gap-[40.5128205128vw] relative mt-[14.948718vw] lg:mt-0">
              <div className="lg:w-[45.4444444444vh] lg:h-[45.8888888889vh] size-[28.2051282051vw] relative">
                <Image fill alt="wave" src={"/images/extra/wav.png"} />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:size-[20.3333333333vh] size-[37.6923076923vw] bg-[#8CC540] border-white border-2 rounded-full">
                <span className="absolute lg:size-[3.22222222222vh] size-[5.89743589744vw] lg:top-[2.222222vh] top-[5vw] left-0 bg-[#286746] rounded-full"></span>
                <span className="font-black ;g:text-[11vh] text-[10.2564102564vw] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  3
                </span>
              </div>
              <div className="lg:w-[45.4444444444vh] lg:h-[45.8888888889vh] size-[28.2051282051vw] relative">
                <Image fill alt="wave" src={"/images/extra/wav.png"} />
              </div>
            </div>
            <button className="lg:hidden bg-white lg:rounded-[var(--vw100)] rounded-3xl text-darkblack lg:text-[2.88888888889vh] lg:leading-[3.44444444444vh] text-[3.58974358974vw] capitalize lg:px-[5.33333333333vh] lg:py-[1.5vh] px-7 py-0.5 lg:mt-[1.33333333333vh] mt-[10.2564102564vw]">
              Stop
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecordingPage;
