import Image from "next/image";
import React from "react";
import MarqueeSlider from "./marquee-slider/MarqueeSlider";
import ProductShowcase from "@/components/common/product-showcase/ProductShowcase";
const products = [
  {
    image: "/images/common/product-showcase/1.png",
    title: "AYUSAS Sapat Haldi + 5-Tulsi Cough Syrup",
    desc: "100% Natural, Paraben-free and effective relief for seasonal allergies, pollution and cough, (100ml)",
  },
  {
    image: "/images/common/product-showcase/2.png",
    title: "AYUSAS Sapat Double Strength Cough Syrup",
    desc: "100% Natural, Paraben-Free And Effective Relief For Persistent Cough, Bronchitis, Viral Cough And Smoker's Cough, (100ml)",
  },
  {
    image: "/images/common/product-showcase/3.png",
    title: "AYUSAS Sapat Immunity Booster Syrup,",
    desc: "Powerful combination of Kabasura Kudineer and 5 types of Tulsi, Paraben Free, 100% Natural, for low immunity, recurrent cough and ailments (200ml)",
  },
  {
    image: "/images/common/product-showcase/4.png",
    title: "AYUSAS Sapat Immunity Booster Syrup,",
    desc: "Powerful combination of Kabasura Kudineer and 5 types of Tulsi, Paraben Free, 100% Natural, for low immunity, recurrent cough and ailments (200ml)",
  },
];
const ResultsPage = () => {
  return (
    <>
      <section className="minfullVh minfullSvh lg:pt-[14vh] pt-[18.4615384615vw] lg:pb-[6.66666666667vh] text-white relative flex">
        <div className="atlwh_Full top-0 pointer-events-none overflow-hidden">
          <img
            src="/images/extra/abstract_bg.jpeg"
            alt="abstract_bg"
            className="w-full h-full lg:h-auto absolute top-0 left-0 object-cover"
          />
          <span className="bg-[#056D3699] atlwh_Full"></span>
        </div>
        <div className="relative z-[2]">
          <MarqueeSlider />
          <div className="lg:w-[87.7777777778vw] w-[86.668%] mx-auto">
            <div
              style={{
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
              className="relative lg:rounded-[var(--vw8)] bg-[rgba(255,255,255,0.10)] lg:mt-[2.88888888889vh] mt-[8.97435897436vw]"
            >
              <div className="atlwh_Full overflow-hidden">
                <div className="flex flex-wrap lg:gap-[0.16666666666vw] gap-[0.76923076923vw] w-full uppercase text-[rgba(255,255,255,0.05)] font-black lg:text-[3.11111111111vh] lg:leading-[3.66666666667vh] text-[6.92307692308vw] leading-[8.20512820513vw]">
                  {Array.from({ length: 170 }).map((_, index) => (
                    <span key={index}> low</span>
                  ))}
                </div>
              </div>
              <div className="relative z-[2] lg:px-[var(--vw34)] px-[6.66666666667vw] lg:pb-[3.77777777778vh] lg:pt-[2vh] pt-[5.64102564103vw] sm:pb-[9.384615vw] pb-[15.3846153846vw] flex flex-wrap items-start justify-between lg:gap-[var(--vw50)]">
                <div className="text-green lg:text-[#000000E5] text-center uppercase bebas_neue lg:text-[3.11111111111vh] lg:leading-[3.11111111111vh] text-[4.10256410256vw] leading-[4.10256410256vw] border-white border lg:border-[0.11111111111vh] bg-[#FFDA24] lg:py-[0.16666666666vh] lg:px-[var(--vw36)] px-[0.82051282051vw] py-[0.38461538461vw] flex items-center justify-center">
                  <span className="block">
                    YOUR <br className="lg:hidden" /> rESULT
                  </span>
                </div>
                <div className="lg:flex-1 w-full lg:w-auto order-2 lg:order-[unset] flex flex-col items-center text-center">
                  <h1 className="lg:text-[13.3333333333vh] lg:leading-[13.3333333333vh] text-[15.3846153846vw] leading-[15.3846153846vw] uppercase font-black">
                    low
                  </h1>
                  <div
                    className="lg:text-[2.77777777778vh] lg:leading-[3.66666666667vh] text-[3.58974358974vw] leading-[5.64102564103vw] text-[#FFFFFFE5]"
                    dangerouslySetInnerHTML={{
                      __html: `Time to breathe <span className='text-[#FFDA24]'>better.</span>
`,
                    }}
                  ></div>
                </div>
                <div className="text-green lg:text-[#000000E5] text-center uppercase bebas_neue lg:text-[3.11111111111vh] lg:leading-[3.11111111111vh] text-[4.10256410256vw] leading-[4.10256410256vw] border-white border lg:border-[0.11111111111vh] bg-[#FFDA24] lg:py-[0.16666666666vh] lg:px-[var(--vw36)] px-[0.82051282051vw] py-[0.38461538461vw] flex items-center justify-center">
                  <span className="block">
                    YOUR <br className="lg:hidden" /> rESULT
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap lg:gap-[var(--vw12)] gap-y-[4.61538461538vw] gap-x-[1.02564102564vw] lg:mt-[2.44444444444vh] mt-[4.61538461538vw]">
              <div className="w-full lg:hidden flex lg:rounded-[var(--vw8)] rounded-lg bg-[rgba(255,255,255,0.10)] lg:pt-[2.88888888889vh] lg:pb-[5vh] lg:px-[var(--vw26)] px-[5.12820512821vw] py-[1.53846153846vw]">
                <p className="font-light lg:text-[2.88888888889vh] lg:leading-[3.18888888889vh] text-[4.10256410256vw] leading-[4.95726495726vw]">
                  You might need to take some{" "}
                  <span className="italic font-bold">extra care</span> of your
                  lungs. Don’t worry, we’ve got you covered!
                </p>
              </div>
              <div
                style={{
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                className="flex flex-col lg:rounded-[var(--vw15)] rounded-lg bg-[rgba(255,255,255,0.10)] lg:w-[25.4861111111vw] w-[28.7179487179vw] lg:py-[2.44444444444vh] py-[2.05128205128vw]"
              >
                <div className="lg:py-[0.5vh] lg:px-[var(--vw8)] mx-auto lg:bg-green lg:text-[2.22222222222vh] lg:leading-[2.22222222222vh] text-[2.05128205128vw] leading-[4.61538461538vw] font-medium lg:text-[#FFDA24]">
                  <span>SPECIAL OFFER FOR YOU</span>
                </div>
                <div className="flex flex-col uppercase lg:mt-[4.22222222222vh] mt-[2.05128205128vw]">
                  <button className="lg:ml-auto ml-[2.05128205128vw] mr-auto uppercase relative lg:mr-[var(--vw70)] lg:mb-[-4.22222222222vh] flex justify-center items-center lg:px-[var(--vw15)] lg:py-[0.77777777777vh] py-[1.02564102564vw] px-[2.05128205128vw] lg:text-[1.44444444444vh] lg:leading-[1.44444444444vh] text-[2.05128205128vw] leading-[2.05128205128vw] font-medium text-darkblack bg-[#FFDA24] lg:rounded-[var(--vw100)] rounded-[100px]">
                    <span>CLAIM nOW</span>
                  </button>
                  <div className="flex items-baseline bebas_neue">
                    <div className="flex">
                      <span className="lg:text-[22.2222222222vh] lg:leading-[22.2222222222vh] lg:tracking-[-1.11111111111vh] text-[20.5128205128vw] leading-[20.5128205128vw] tracking-[-1.02564102564vw]">
                        10{" "}
                      </span>
                      <span className="ml-[1.28205128205vw] lg:ml-0 lg:text-[3.33333333333vh] lg:leading-[3.33333333333vh] inter mt-[2.05128205128vw] lg:mt-[1.33333333333vh] text-[5.12820512821vw] leading-[5.12820512821vw]">
                        %
                      </span>
                    </div>
                    <span className="ml-[-4.10256410256vw] lg:ml-0 lg:text-[8.88888888889vh] lg:leading-[8.88888888889vh] text-[10.2564102564vw] leading-[10.2564102564vw]">
                      OFf
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:gap-y-[2vh] gap-y-[1.79487179487vw] lg:w-[30vw] w-[56.4102564103vw]">
                <div className="lg:hidden flex flex-col lg:w-[30.2777777778vw] w-full lg:rounded-[var(--vw8)] rounded-lg bg-[#FFDA24] lg:bg-[rgba(255,255,255,0.10)] lg:py-[3.55555555556vh] lg:px-[var(--vw14)] px-[3.07692307692vw] py-[2.05128205128vw]">
                  <div className="mb-[2.05128205128vw]">
                    <p className="lg:text-[4.22222222222vh] lg:leading-[4.44444444444vh] text-[3.33333333333vw] leading-[4.35897435897vw] bebas_neue uppercase text-green lg:text-white">
                      Here’s your{" "}
                      <span className="lg:text-[5.77777777778vh] lg:leading-[5.77777777778vh] bg-[#73E26A] lg:bg-transparent text-green lg:text-[#FFDA24]">
                        10% OFF
                      </span>{" "}
                      on <br className="hidden lg:block" /> any Ayusas product
                    </p>
                  </div>
                  <div className="flex items-stretch lg:h-[8.11111111111vh] h-[6.66666666667vw]">
                    <label
                      htmlFor="code"
                      className="lg:px-[var(--vw14)] px-[1.79487179487vw] h-full lg:w-[20.9722222222vw] bg-white"
                    >
                      <input
                        type="text"
                        id="code"
                        className="lg:w-[20.9722222222vw] size-full bg-white outline-none lg:text-[2.22222222222vh] placeholder:lg:text-[2.22222222222vh] placeholder:text-[#056D3699] text-green text-[3.84615384615vw] placeholder:text-[3.84615384615vw]"
                        placeholder="UNIQUE CODE"
                      />
                    </label>
                    <button className="bg-[#B0BF3D] gap-0.5 lg:gap-1 flex items-center lg:px-[var(--vw8)] px-[1.02564102564vw]">
                      <span className="text-darkblack lg:text-[2.22222222222vh] lg:leading-[2.22222222222vh] text-[2.5641025641vw] leading-[2.5641025641vw]">
                        COPY
                      </span>
                      <div className="relative lg:size-[3.22222222222vh] size-[3.07692307692vw]">
                        <Image fill alt="copy" src={"/images/icons/copy.svg"} />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="w-full hidden lg:flex lg:rounded-[var(--vw8)] bg-[rgba(255,255,255,0.10)] lg:pt-[2.88888888889vh] lg:pb-[5vh] lg:px-[var(--vw26)] px-[5.12820512821vw] py-[1.53846153846vw]">
                  <p className="font-light lg:text-[2.88888888889vh] lg:leading-[3.18888888889vh] text-[4.10256410256vw] leading-[4.95726495726vw]">
                    You might need to take some{" "}
                    <span className="italic font-bold">extra care</span> of your
                    lungs. Don’t worry, we’ve got you covered!
                  </p>
                </div>
                <div
                  style={{
                    boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.10)",
                  }}
                  className="w-full flex flex-col lg:gap-y-[0.88888888888vh] gap-y-[7.17948717949vw] lg:rounded-[var(--vw8)] rounded-lg bg-[rgba(255,255,255,0.10)] lg:pt-[1.33333333333vh] lg:pb-[2.66666666667vh] py-[1.53846153846vw] px-[2.05128205128vw] lg:px-[var(--vw26)]"
                >
                  <p className="font-semibold underline underline-offset-2 lg:text-[2.22222222222vh] lg:leading-[3.05555555556vh] text-[2.5641025641vw] leading-[4.10256410256vw]">
                    Claim Your Free Guide <br className="hidden lg:block" /> to
                    Breathing Better
                  </p>
                  <button className="ml-auto uppercase flex justify-center items-center lg:px-[var(--vw12)] lg:py-[0.66666666666vh] py-[1.28205128205vw] px-[3.07692307692vw] lg:text-[1.11111111111vh] lg:leading-[1.11111111111vh] text-[1.79487179487vw] leading-[1.79487179487vw] font-medium text-darkblack bg-[#FFDA24] lg:rounded-[var(--vw100)] rounded-[100px]">
                    <span>DOWNLOAD</span>
                  </button>
                </div>
              </div>
              <div className="hidden lg:flex flex-col lg:w-[30.2777777778vw] lg:rounded-[var(--vw8)] bg-[rgba(255,255,255,0.10)] lg:py-[3.55555555556vh] lg:px-[var(--vw14)]">
                <div className="flex items-stretch lg:h-[8.11111111111vh]">
                  <label
                    htmlFor="code"
                    className="lg:px-[var(--vw14)] h-full lg:w-[20.9722222222vw] bg-white"
                  >
                    <input
                      type="text"
                      id="code"
                      className="lg:w-[20.9722222222vw] size-full bg-white outline-none lg:text-[2.22222222222vh] placeholder:lg:text-[2.22222222222vh] placeholder:text-[#056D3699] text-green"
                      placeholder="UNIQUE CODE"
                    />
                  </label>
                  <button className="bg-[#B0BF3D] flex items-center lg:px-[var(--vw8)]">
                    <span className="text-darkblack lg:text-[2.22222222222vh] lg:leading-[2.22222222222vh]">
                      COPY
                    </span>
                    <div className="relative lg:size-[3.22222222222vh]">
                      <Image fill alt="copy" src={"/images/icons/copy.svg"} />
                    </div>
                  </button>
                </div>
                <div className="lg:mt-[3.55555555556vh]">
                  <p className="lg:text-[4.22222222222vh] lg:leading-[4.44444444444vh] bebas_neue uppercase">
                    Here’s your{" "}
                    <span className="lg:text-[5.77777777778vh] lg:leading-[5.77777777778vh] text-[#FFDA24]">
                      10% OFF
                    </span>{" "}
                    on <br /> any Ayusas product
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-between items-center lg:mt-[5.66666666667vh]">
            <div className="flex lg:gap-[calc(0.5*var(--vw8))] bebas_neue">
              <div className="relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[97%] flex justify-end lg:pr-[3.33333333333vh] text-darkblack lg:text-[4.44444444444vh] lg:leading-[4.44444444444vh] bg-[#FFDA24]">
                  OFF
                </div>
                <div className="lg:text-[17.7777777778vh] lg:leading-[17.7777777778vh] text-[20.5128205128vw] leading-[20.5128205128vw]">
                  <span className="relative z-[2]">1</span>
                  <span>0 </span>
                </div>
              </div>
              <span className="lg:text-[3.33333333333vh] lg:leading-[3.33333333333vh] inter mt-[2.05128205128vw] lg:mt-[1.33333333333vh] text-[5.12820512821vw] leading-[5.12820512821vw]">
                %
              </span>
            </div>
            <div className="relative lg:size-[33.8888888889vh] flex justify-center items-center">
              <div className="size-full absolute top-0 left-0">
                <Image
                  fill
                  alt="curve_text"
                  src={"/images/extra/result/curve_text.png"}
                />
              </div>
              <div className="relative lg:size-[22.3333333333vh]">
                <Image
                  fill
                  alt="lungs"
                  src={"/images/extra/result/lungs.png"}
                />
              </div>
            </div>
            <div className="flex lg:gap-[calc(0.5*var(--vw8))] bebas_neue lg:pr-[4.88888888889vh] relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[57%] flex justify-end lg:pr-[3.33333333333vh] text-darkblack lg:text-[4.44444444444vh] lg:leading-[4.44444444444vh] bg-[#FFDA24]">
                OFF
              </div>
              <div className="">
                <div className="lg:text-[17.7777777778vh] lg:leading-[17.7777777778vh] text-[20.5128205128vw] leading-[20.5128205128vw]">
                  <span className="relative z-[2]">1</span>
                  <span>0 </span>
                </div>
              </div>
              <span className="lg:text-[3.33333333333vh] lg:leading-[3.33333333333vh] inter mt-[2.05128205128vw] lg:mt-[1.33333333333vh] text-[5.12820512821vw] leading-[5.12820512821vw]">
                %
              </span>
            </div>
          </div>
          <div className="lg:hidden flex flex-col mt-[6.41025641026vw] w-full">
            <div className="mx-[6.41025641026vw] flex">
              <div className="w-[26.1538461538vw] px-[3.58974358974vw] py-[5.64102564103vw] rounded-lg bg-green text-[5.12820512821vw] leading-[5.12820512821vw] font-black">
                GRAB THE OFFER NOW
              </div>
              <div className="flex-1 flex lg:gap-[calc(0.5*var(--vw8))] bebas_neue relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[91%] flex justify-end items-center pr-[7.69230769231vw] lg:pr-[3.33333333333vh] text-white lg:text-[4.44444444444vh] lg:leading-[4.44444444444vh] text-[10.2564102564vw] leading-[10.2564102564vw] bg-green">
                  OFF
                </div>
                <div className="ml-auto">
                  <div className="lg:text-[17.7777777778vh] lg:leading-[17.7777777778vh] text-[41.0256410256vw] leading-[33.3333333333vw]">
                    <span className="relative z-[2]">1</span>
                    <span>0 </span>
                  </div>
                </div>
                <span className="lg:text-[3.33333333333vh] lg:leading-[3.33333333333vh] inter mt-[2.05128205128vw] lg:mt-[1.33333333333vh] text-[5.12820512821vw] leading-[5.12820512821vw]">
                  %
                </span>
              </div>
            </div>
            <ProductShowcase
              data={products}
              heading={"BROWSE OUR BEST SELLERS"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ResultsPage;
