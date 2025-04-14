import React from "react";
import Image from "next/image";

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
const StartingPage = () => {
  return (
    <>
      <section className="minfullVh minfullSvh lg:pt-[14.1vh] sm:pt-52 pt-28 text-white relative flex">
        <div className="atlwh_Full top-0 pointer-events-none">
          <img
            src="/images/extra/abstract_bg.jpeg"
            alt="abstract_bg"
            className="atlwh_Full object-cover"
          />
          <img
            src="/images/extra/mob_pattern.png"
            alt="mob_pattern"
            className="lg:w-[17.1794871795vw] lg:hidden absolute top-[23vw] right-[13vw]"
          />
        </div>
        <div className="relative z-[2] flex flex-wrap">
          <div className="relative z-[2] lg:bg-green w-full order-1 lg:order-[unset]">
            <div className="atlwh_Full hidden lg:block">
              <img
                src="/images/extra/pattern1.png"
                alt="leaf"
                className="absolute left-0 top-0 lg:w-[15.4444444444vh] w-[30%]"
              />
              <img
                src="/images/extra/pattern2.png"
                alt="leaf"
                className="absolute right-0 lg:top-[-2.22222222222vh] top-0 lg:w-[27vh] w-[30%]"
              />
            </div>
            <div className="relative z-[2] flex justify-center lg:justify-normal lg:gap-[3.44444444444vh] gap-[3.07692307692vw] w-full flex-wrap lg:items-center lg:py-[3.44444444444vh] lg:px-[6.52777777778vw] px-5 pt-[11.0256410256vw]">
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
          <div className="flex flex-col items-center justify-center lg:w-[84.6527777778vw] w-full lg:pt-[5.11111111111vh]">
            <div className="flex flex-col lg:gap-y-[1.33333333333vh] items-center text-center lg:w-[58.681vw]">
              <h2 className="lg:text-[5.555555555568vh] lg:leading-[6vh] text-[6.5vw] font-black capitalize">
                Your lungs work 24/7
              </h2>
              <p className="lg:text-[3.33333333333vh] lg:leading-[4.33333333333vh] text-[3.84615384615vw] capitalize lg:w-[77.8%] w-[90%]">
                Lets test how strong they are.
              </p>
            </div>
            <div className="lg:w-[85vh] flex items-center gap-[40.5128205128vw] relative lg:rounded-[var(--vw35)] lg:h-[23.2222222222vh] lg:my-[4.66666666667vh] mt-[17.9487179487vw] mb-[7.69230769231vw] lg:border-4 lg:bg-[#FFFFFF1A] lg:border-white">
              <div className="lg:w-[32.1111111111vh] lg:h-[32.3333333333vh] size-[28.2051282051vw] relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-[3.88888888889vh]">
                <Image fill alt="wave" src={"/images/extra/wav.png"} />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:size-[14.2222222222vh] size-[37.6923076923vw] bg-[#8CC540] border-white border-2 rounded-full">
                <span className="absolute lg:size-[2.22222222222vh] size-[5.89743589744vw] lg:top-[2.222222vh] top-[5vw] left-0 bg-[#286746] rounded-full"></span>
              </div>
              <div className="lg:w-[32.1111111111vh] lg:h-[32.3333333333vh] size-[28.2051282051vw] relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-[3.88888888889vh]">
                <Image fill alt="wave" src={"/images/extra/wav.png"} />
              </div>
            </div>
            <button className="bg-white lg:rounded-[var(--vw100)] rounded-3xl text-darkblack lg:text-[2.88888888889vh] lg:leading-[3.44444444444vh] text-[2.82051282051vw] font-bold lg:font-normal capitalize lg:px-[5.33333333333vh] lg:py-[1.5vh] px-6 py-1.5 lg:mt-[1.33333333333vh] mt-3">
              Start your test
            </button>
          </div>
          <div className="lg:flex-1 w-[75.8974358974vw] lg:w-auto mx-auto lg:mx-0 flex flex-col items-center lg:items-start lg:bg-green bg-[#056D364D] rounded-[10px] lg:rounded-none lg:px-[3.77777777778vh] lg:pt-[4vh] mt-[13.5897435897vw] mb-[9.23076923077vw] lg:my-0 pb-[4.87179487179vw] px-[5.89743589744vw] order-3 lg:order-[unset]">
            <span className="hidden lg:block lg:text-[2.22222222222vh] lg:leading-[2.66666666667vh] text-[4.10256410256vw] font-semibold lg:font-normal">
              Play this video for a better understanding of the process.
            </span>
            <span className="pt-[1.846154vw] lg:pt-0 lg:hidden block uppercase underline lg:text-[2.22222222222vh] lg:leading-[2.66666666667vh] text-[4.10256410256vw] font-semibold lg:font-normal">
              SCROLL TO WATCH THE VIDEO
            </span>
            <div className="relative lg:size-[4.33333333333vh] lg:mt-[0.7vh] -mt-[6vw] size-[7.69230769231vw] -order-1 lg:order-[unset]">
              <Image
                fill
                alt="chevron"
                src={"/images/icons/down_arrow_extra.svg"}
              />
            </div>
            <div className="relative lg:h-[43vh] w-full overflow-hidden hidden lg:block">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 lg:size-[43vh]">
                <Image fill alt="phone" src={"/images/extra/phone.png"} />
              </div>
            </div>
            <div className="w-[64.1025641026vw] h-[45.1282051282vw] bg-white lg:hidden flex justify-center items-center mt-[3.33333333333vw]">
              <span className="text-[4.10256410256vw] font-semibold uppercase text-darkblack">
                VIDEO
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartingPage;
