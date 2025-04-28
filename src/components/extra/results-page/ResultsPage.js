import Image from "next/image";
import React from "react";
import MarqueeSlider from "./marquee-slider/MarqueeSlider";
import ProductShowcase from "@/components/common/product-showcase/ProductShowcase";
import Score from "./Score";
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
            className="atlwh_Full object-cover"
          />
          <span className="bg-[#056D3699] atlwh_Full"></span>
        </div>
        {/* LOW  */}
        {/* <div className="relative z-[2] w-full">
          <MarqueeSlider />
          <div className="lg:w-[87.7777777778vw] w-[86.668%] mx-auto">
            <Score
              score={"LOW"}
              desc={`Time to breathe <span class='text-[#FFDA24]'>better.</span>`}
            />
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
          <div className="lg:hidden mt-[6.41025641026vw] w-full">
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
              wrapperClasses={"bg-transparent pt-[16.6666666667vw]"}
              data={products}
              heading={
                "<span class='text-[5.12820512821vw] leading-[5.12820512821vw] text-white font-light uppercase block'>BROWSE OUR </br> <span class='font-bold'>BEST SELLERS<span><span>"
              }
            />
            <div className="relative lg:size-[33.8888888889vh] size-[50vw] flex justify-center items-center mx-auto mt-[15.8974358974vw] mb-[14.8717948718vw]">
              <div className="size-full absolute top-0 left-0">
                <Image
                  fill
                  alt="curve_text"
                  src={"/images/extra/result/curve_text.png"}
                />
              </div>
              <div className="relative lg:size-[22.3333333333vh] size-[33.0769230769vw]">
                <Image
                  fill
                  alt="lungs"
                  src={"/images/extra/result/lungs.png"}
                />
              </div>
            </div>
          </div>
        </div> */}
        {/* LOW  */}
        {/* MEDIUM */}
        {/* <div className="relative z-[2] w-full">
          <MarqueeSlider />
          <div className="lg:w-[87.7777777778vw] w-[86.668%] mx-auto">
            <Score
              score={"MEDIUM"}
              desc={`Your lungs need a  <span class='text-[#FFDA24] font-medium italic'>little more support.</span>`}
            />
            <div className="flex justify-between flex-wrap lg:gap-[calc(0.5*var(--vw8))] gap-y-[4.61538461538vw] gap-x-[1.02564102564vw] lg:mt-[2.44444444444vh] mt-[4.61538461538vw]">
              <div className="w-full relative text-center lg:hidden flex lg:rounded-[var(--vw8)] rounded-lg bg-[rgba(255,255,255,0.10)] lg:pt-[2.88888888889vh] lg:pb-[5vh] lg:px-[var(--vw26)] px-[5.12820512821vw] pt-[3.58974358974vw] pb-[5.12820512821vw]">
                <div className="absolute left-0 bottom-0 lg:size-[11.4444444444vh] size-[11.7948717949vw]">
                  <Image
                    fill
                    alt="medium_star"
                    src="/images/extra/medium_star.png"
                  />
                </div>
                <div className="absolute right-0 bottom-0 lg:size-[11.4444444444vh] size-[11.7948717949vw]">
                  <Image
                    fill
                    alt="medium_star"
                    src="/images/extra/medium_star.png"
                  />
                </div>
                <p className="w-[88%] mx-auto font-light lg:text-[2.88888888889vh] lg:leading-[3.18888888889vh] text-[4.10256410256vw] leading-[4.95726495726vw]">
                  <span className="text-[5.12820512821vw] font-bold">
                    You’re doing well,
                  </span>{" "}
                  but there’s always room to get even better!
                </p>
              </div>
              <div
                style={{
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                className="flex flex-col lg:rounded-[var(--vw15)] rounded-lg bg-[rgba(255,255,255,0.10)] lg:w-[30%] w-[28.7179487179vw] lg:py-[2.44444444444vh] py-[2.05128205128vw]"
              >
                <div className="lg:py-[0.61111111111vh] lg:px-[var(--vw8)] mx-auto lg:ml-auto lg:mr-[var(--vw8)] lg:bg-green lg:text-[2vh] lg:leading-[2vh] text-[2.05128205128vw] leading-[4.61538461538vw] font-medium lg:text-[#FFDA24]">
                  <span>SPECIAL OFFER FOR YOU</span>
                </div>
                <div className="flex flex-col uppercase lg:mt-[4.22222222222vh] mt-[2.05128205128vw]">
                  <button className="dm_sans lg:hidden lg:ml-auto ml-[2.05128205128vw] mr-auto uppercase relative lg:mr-[var(--vw70)] lg:mb-[-4.22222222222vh] flex justify-center items-center lg:px-[var(--vw15)] lg:py-[0.77777777777vh] py-[1.02564102564vw] px-[2.05128205128vw] lg:text-[1.44444444444vh] lg:leading-[1.44444444444vh] text-[2.05128205128vw] leading-[2.05128205128vw] font-medium text-darkblack bg-[#FFDA24] lg:rounded-[var(--vw100)] rounded-[100px]">
                    <span>CLAIM nOW</span>
                  </button>
                  <div className="flex justify-center lg:justify-normal items-end lg:gap-[var(--vw10)] gap-1 bebas_neue lg:px-[var(--vw8)]">
                    <div className="flex">
                      <div className="flex flex-col">
                        <span className="dm_sans lg:text-[2.22222222222vh] lg:leading-[2.22222222222vh] font-medium mt-[2.05128205128vw] lg:mt-[1.33333333333vh] text-[5.12820512821vw] leading-[5.12820512821vw]">
                          FLAT
                        </span>
                        <span className="lg:text-[22.2222222222vh] lg:leading-[16.2222222222vh] lg:tracking-[-1.11111111111vh] text-[20.5128205128vw] leading-[14.512821vw] tracking-[-1.02564102564vw]">
                          50{" "}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col h-[80%]">
                      <span className="ml-[1.28205128205vw] lg:ml-0 lg:text-[3.33333333333vh] lg:leading-[3.33333333333vh] inter mt-[2.05128205128vw] lg:mt-0 text-[2.5641025641vw] leading-[2.5641025641vw]">
                        RS
                      </span>
                      <span className="mt-auto lg:text-[8.88888888889vh] lg:leading-[8.88888888889vh] text-[10.2564102564vw] leading-[10.2564102564vw]">
                        OFf
                      </span>
                    </div>
                    <button className="dm_sans mb-[1vh] hidden lg:ml-auto ml-[2.05128205128vw] mr-auto uppercase relative lg:mr-0  lg:flex justify-center items-center lg:px-[var(--vw15)] lg:py-[0.77777777777vh] py-[1.02564102564vw] px-[2.05128205128vw] lg:text-[1.66666666667vh] lg:leading-[1.66666666667vh] text-[2.05128205128vw] leading-[2.05128205128vw] font-medium text-darkblack bg-[#FFDA24] lg:rounded-[var(--vw100)] rounded-[100px]">
                      <span>CLAIM nOW</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:gap-y-[2vh] gap-y-[1.79487179487vw] lg:w-[30vw] w-[56.4102564103vw]">
                <div className="lg:hidden flex flex-col lg:w-[30.2777777778vw] w-full lg:rounded-[var(--vw8)] rounded-lg bg-[#FFDA24] lg:bg-[rgba(255,255,255,0.10)] lg:py-[3.55555555556vh] lg:px-[var(--vw14)] px-[3.07692307692vw] py-[2.05128205128vw]">
                  <div className="mb-[2.05128205128vw]">
                    <p className="lg:text-[4.22222222222vh] lg:leading-[4.44444444444vh] text-[3.33333333333vw] leading-[4.35897435897vw] bebas_neue uppercase text-green lg:text-white">
                      get
                      <span className="lg:text-[5.77777777778vh] lg:leading-[5.77777777778vh] bg-[#73E26A] lg:bg-transparent text-green lg:text-[#FFDA24]">
                        ₹50 OFF
                      </span>{" "}
                      on your next Ayusas purchase
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
                <div className="w-full hidden relative lg:flex lg:rounded-[var(--vw8)] bg-[rgba(255,255,255,0.10)] lg:pt-[2.88888888889vh] lg:pb-[5vh] lg:px-[var(--vw26)] px-[5.12820512821vw] py-[1.53846153846vw]">
                  <div className="absolute right-0 bottom-0 lg:size-[11.4444444444vh]">
                    <Image
                      fill
                      alt="medium_star"
                      src="/images/extra/medium_star.png"
                    />
                  </div>
                  <p className="w-[80%] font-light lg:text-[2.88888888889vh] lg:leading-[3.18888888889vh] text-[4.10256410256vw] leading-[4.95726495726vw]">
                    <span className="font-semibold lg:text-[3.55555555556vh]">
                      You’re doing well,
                    </span>
                    <br /> but there’s always room <br /> to get even better!
                  </p>
                </div>
                <div
                  style={{
                    boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.10)",
                  }}
                  className="w-full flex flex-col lg:gap-y-[4.44444444444vh] gap-y-[4.179487vw] lg:rounded-[var(--vw8)] rounded-lg bg-[rgba(255,255,255,0.10)] lg:pt-[1.33333333333vh] lg:pb-[2.66666666667vh] py-[1.53846153846vw] px-[2.05128205128vw] lg:px-[var(--vw26)]"
                >
                  <p className="font-semibold underline underline-offset-2 lg:text-[2.22222222222vh] lg:leading-[3.05555555556vh] text-[2.5641025641vw] leading-[4.10256410256vw]">
                    Strengthen your lungs with these expert approved breathing
                    exercises
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
                    get
                    <span className="lg:text-[5.77777777778vh] lg:leading-[5.77777777778vh] text-[#FFDA24]">
                      ₹50 OFF{" "}
                    </span>{" "}
                    on your next Ayusas purchase
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
                  <span className="relative z-[2]">5</span>
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
                  <span className="relative z-[2]">5</span>
                  <span>0 </span>
                </div>
              </div>
              <span className="lg:text-[3.33333333333vh] lg:leading-[3.33333333333vh] inter mt-[2.05128205128vw] lg:mt-[1.33333333333vh] text-[5.12820512821vw] leading-[5.12820512821vw]">
                %
              </span>
            </div>
          </div>
          <div className="lg:hidden mt-[6.41025641026vw] w-full">
            <div className="mx-[6.41025641026vw] flex">
              <div className="w-[26.1538461538vw] px-[3.58974358974vw] py-[5.64102564103vw] rounded-lg bg-green text-[5.12820512821vw] leading-[5.12820512821vw] font-black">
                GRAB THE OFFER NOW
              </div>
              <div className="flex-1 flex lg:gap-[calc(0.5*var(--vw8))] bebas_neue relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[91%] flex justify-end items-center pr-[7.69230769231vw] lg:pr-[3.33333333333vh] text-green lg:text-[4.44444444444vh] lg:leading-[4.44444444444vh] text-[10.2564102564vw] leading-[10.2564102564vw] bg-[#FFDA24]">
                  OFF
                </div>
                <div className="ml-auto">
                  <div className="lg:text-[17.7777777778vh] lg:leading-[17.7777777778vh] text-[41.0256410256vw] leading-[33.3333333333vw]">
                    <span className="relative z-[2]">5</span>
                    <span>0 </span>
                  </div>
                </div>
                <span className="lg:text-[3.33333333333vh] lg:leading-[3.33333333333vh] inter mt-[2.05128205128vw] lg:mt-[1.33333333333vh] text-[5.12820512821vw] leading-[5.12820512821vw]">
                  RS
                </span>
              </div>
            </div>
            <ProductShowcase
              wrapperClasses={"bg-transparent pt-[16.6666666667vw]"}
              data={products}
              heading={
                "<span class='text-[5.12820512821vw] leading-[5.12820512821vw] text-white font-light uppercase block'>BROWSE OUR </br> <span class='font-bold'>BEST SELLERS<span><span>"
              }
            />
            <div className="relative lg:size-[33.8888888889vh] size-[50vw] flex justify-center items-center mx-auto mt-[15.8974358974vw] mb-[14.8717948718vw]">
              <div className="size-full absolute top-0 left-0">
                <Image
                  fill
                  alt="curve_text"
                  src={"/images/extra/result/curve_text.png"}
                />
              </div>
              <div className="relative lg:size-[22.3333333333vh] size-[33.0769230769vw]">
                <Image
                  fill
                  alt="lungs"
                  src={"/images/extra/result/lungs.png"}
                />
              </div>
            </div>
          </div>
        </div> */}
        {/* MEDIUM */}
        {/* HIGH  */}
        {/* <div className="relative z-[2] w-full">
          <MarqueeSlider />
          <div className="lg:w-[87.7777777778vw] w-[86.668%] mx-auto">
            <Score
              score={"HIGH"}
              desc={`Your lungs say   <span class='text-[#FFDA24] font-medium italic'>thank you!</span>`}
            />
            <div className="flex justify-between flex-wrap lg:gap-[calc(0.5*var(--vw8))] gap-y-[4.61538461538vw] gap-x-[1.02564102564vw] lg:mt-[2.44444444444vh] mt-[4.61538461538vw]">
              <div className="w-full relative text-center lg:hidden flex lg:rounded-[var(--vw8)] rounded-lg bg-[rgba(255,255,255,0.10)] lg:pt-[2.88888888889vh] lg:pb-[5vh] lg:px-[var(--vw26)] px-[5.12820512821vw] py-[2.05128205128vw]">
                <div className="atlwh_Full">
                  <div className="absolute top-0 left-0 lg:size-[6.22222222222vh] size-[8.97435897436vw] -translate-x-1/2 -translate-y-1/2">
                    <Image
                      fill
                      alt="star"
                      src={"/images/extra/high_star.svg"}
                    />
                  </div>
                  <div className="absolute top-0 right-0 lg:size-[6.22222222222vh] size-[8.97435897436vw] translate-x-1/2 -translate-y-1/2">
                    <Image
                      fill
                      alt="star"
                      src={"/images/extra/high_star.svg"}
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 lg:size-[6.22222222222vh] size-[8.97435897436vw] translate-x-1/2 translate-y-[25%]">
                    <Image
                      fill
                      alt="star"
                      src={"/images/extra/high_star.svg"}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 lg:size-[6.22222222222vh] size-[8.97435897436vw] -translate-x-1/2 translate-y-[25%]">
                    <Image
                      fill
                      alt="star"
                      src={"/images/extra/high_star.svg"}
                    />
                  </div>
                </div>
                <p className="relative z-[2] w-[88%] mx-auto font-light lg:text-[2.88888888889vh] lg:leading-[3.18888888889vh] text-[4.10256410256vw] leading-[4.95726495726vw]">
                  <span className="text-[5.12820512821vw] font-bold">
                    Your lungs are doing well!
                  </span>{" "}
                  <br />
                  We want to reward you to further support your lung health
                  journey.
                </p>
              </div>
              <div
                style={{
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                className="px-[2.05128205128vw] lg:px-0 relative flex flex-col lg:rounded-[var(--vw15)] rounded-lg bg-[rgba(255,255,255,0.10)] lg:w-[30%] w-[28.7179487179vw] lg:py-[2.11111111111vh] py-[2.05128205128vw]"
              >
                <div className="lg:hidden lg:py-[0.61111111111vh] lg:px-[var(--vw8)] mx-auto lg:ml-auto lg:mr-[var(--vw8)] lg:bg-green lg:text-[2vh] lg:leading-[2vh] text-[2.05128205128vw] leading-[4.61538461538vw] font-medium lg:text-[#FFDA24]">
                  <span>SPECIAL OFFER FOR YOU</span>
                </div>
                <div className="hidden lg:flex lg:gap-[var(--vw8)] justify-center lg:px-[var(--vw16)]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      key={index}
                      className="relative lg:size-[6.22222222222vh]"
                    >
                      <Image
                        fill
                        alt="star"
                        src={"/images/extra/high_star.svg"}
                      />
                    </div>
                  ))}
                </div>
                <span className="lg:hidden block bebas_neue lg:text-[11.1111111111vh] lg:leading-[10.111111vh] text-[15.3846153846vw] leading-[12.512821vw]">
                  FREE{" "}
                </span>
                <div className="flex flex-col uppercase lg:mt-[0.55555555555vh]">
                  <div className="flex lg:gap-[var(--vw10)] gap-1 bebas_neue lg:pr-[var(--vw16)]">
                    <div className="flex flex-row-reverse lg:flex-row justify-start lg:justify-between w-full">
                      <div className="lg:relative absolute bottom-[3.07692307692vw] right-[-1.79487179487vw] lg:right-[unset] lg:bottom-[unset] lg:size-[20.4444444444vh] size-[18.2051282051vw]">
                        <div className="absolute top-0 left-0 lg:size-[25.3333333333vh] size-full">
                          <Image
                            fill
                            alt="bottle"
                            src={"/images/extra/high_bottle.png"}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col lg:mt-[1.11111111111vh] mr-auto lg:mr-0">
                        <span className="hidden lg:block lg:text-[11.1111111111vh] lg:leading-[10.111111vh] text-[15.3846153846vw] leading-[12.512821vw]">
                          FREE{" "}
                        </span>
                        <span className="lg:text-[3.11111111111vh] lg:leading-[3.11111111111vh] text-[3.84615384615vw] leading-[3.84615384615vw]">
                          AYUSAS DS <br className="block lg:hidden" /> BOTTLE
                        </span>
                        <button className="dm_sans lg:mt-[1.11111111111vw] mt-[3.58974358974vw] uppercase relative lg:flex justify-center items-center lg:px-[var(--vw17)] lg:py-[1.11111111111vh] p-[0.76923076923vw] lg:text-[1.66666666667vh] lg:leading-[1.66666666667vh] text-[1.53846153846vw] leading-[1.53846153846vw] font-medium text-darkblack bg-[#FFDA24] lg:rounded-[var(--vw100)] rounded-[100px]">
                          <span>CLAIM nOW</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:gap-y-[2vh] gap-y-[1.79487179487vw] lg:w-[30vw] w-[56.4102564103vw]">
                <div className="lg:hidden flex flex-col lg:w-[30.2777777778vw] w-full lg:rounded-[var(--vw8)] rounded-lg bg-[#FFDA24] lg:bg-[rgba(255,255,255,0.10)] lg:py-[3.55555555556vh] lg:px-[var(--vw14)] px-[3.07692307692vw] py-[2.05128205128vw]">
                  <div className="mb-[2.05128205128vw]">
                    <p className="lg:text-[4.22222222222vh] lg:leading-[4.44444444444vh] text-[3.33333333333vw] leading-[4.35897435897vw] bebas_neue uppercase text-green lg:text-white">
                      <span className="lg:text-[5.77777777778vh] lg:leading-[5.77777777778vh] bg-[#73E26A] lg:bg-transparent text-green lg:text-[#FFDA24]">
                        FREE Ayusas{" "}
                      </span>{" "}
                      Double Strength Cough Syrup
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
                <div className="w-full hidden relative lg:flex lg:rounded-[var(--vw8)] bg-[rgba(255,255,255,0.10)] lg:pt-[2.88888888889vh] lg:pb-[5vh] lg:px-[var(--vw18)] px-[5.12820512821vw] py-[1.53846153846vw]">
                  <p className="font-light lg:text-[2.44444444444vh] lg:leading-[3.33333333333vh] text-[4.10256410256vw] leading-[4.95726495726vw]">
                    <span className="font-semibold lg:text-[3.33333333333vh]">
                      Your lungs are doing well!
                    </span>
                    <br /> We want to reward you to further <br /> support your
                    lung health journey.
                  </p>
                </div>
                <div
                  style={{
                    boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.10)",
                  }}
                  className="w-full flex flex-col lg:gap-y-[1.66666666667vh] gap-y-[4.179487vw] lg:rounded-[var(--vw8)] rounded-lg bg-[rgba(255,255,255,0.10)] lg:pt-[1.33333333333vh] lg:pb-[2.66666666667vh] py-[1.53846153846vw] px-[2.05128205128vw] lg:px-[var(--vw22)]"
                >
                  <p className="font-semibold underline underline-offset-2 lg:text-[2.22222222222vh] lg:leading-[3.05555555556vh] text-[2.5641025641vw] leading-[4.10256410256vw]">
                    Strengthen your lungs with these expert approved breathing
                    exercises
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
                    Get a FREE <br /> Ayusas Double Strength <br /> Cough Syrup
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-between items-center lg:mt-[5.66666666667vh] bebas_neue">
            <div className="flex items-center relative">
              <div className="flex lg:pl-[6.66666666667vh] text-darkblack lg:text-[4.44444444444vh] lg:leading-[4.44444444444vh] bg-[#FFDA24] lg:py-[1.11111111111vh] lg:w-[30.4444444444vh]">
                FREE
              </div>
              <div className="absolute lg:left-[15.3333333333vh] top-1/2 -translate-y-1/2 lg:size-[25.3333333333vh]">
                <Image
                  fill
                  alt="bottle"
                  src={"/images/extra/high_bottle.png"}
                />
              </div>
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
            <div className="flex items-center relative">
              <div className="absolute lg:right-[15.3333333333vh] top-1/2 -translate-y-1/2 lg:size-[25.3333333333vh]">
                <Image
                  fill
                  alt="bottle"
                  src={"/images/extra/high_bottle.png"}
                />
              </div>
              <div className="flex justify-end lg:pr-[6.66666666667vh] text-darkblack lg:text-[4.44444444444vh] lg:leading-[4.44444444444vh] bg-[#FFDA24] lg:py-[1.11111111111vh] lg:w-[30.4444444444vh]">
                FREE
              </div>
            </div>
          </div>
          <div className="lg:hidden mt-[6.41025641026vw] w-full">
            <div className="mx-[6.41025641026vw] flex items-center">
              <div className="w-[26.1538461538vw] px-[3.58974358974vw] py-[5.64102564103vw] rounded-lg bg-green text-[5.12820512821vw] leading-[5.12820512821vw] font-black">
                GRAB THE OFFER NOW
              </div>
              <div className="flex-1 flex lg:gap-[calc(0.5*var(--vw8))] bebas_neue relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[84%] flex justify-start items-center pl-[2.30769230769vw] lg:pr-[3.33333333333vh] text-green lg:text-[4.44444444444vh] lg:leading-[4.44444444444vh] text-[10.2564102564vw] leading-[10.2564102564vw] bg-[#FFDA24]">
                  FREE
                </div>
                <div className="ml-auto mr-[-2.30769230769vw]">
                  <div className="relative lg:size-[25.3333333333vh] size-[42.3076923077vw]">
                    <Image
                      fill
                      alt="bottle"
                      src={"/images/extra/high_bottle.png"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <ProductShowcase
              wrapperClasses={"bg-transparent pt-[16.6666666667vw]"}
              data={products}
              heading={
                "<span class='text-[5.12820512821vw] leading-[5.12820512821vw] text-white font-light uppercase block'>BROWSE OUR </br> <span class='font-bold'>BEST SELLERS<span><span>"
              }
            />
            <div className="relative lg:size-[33.8888888889vh] size-[50vw] flex justify-center items-center mx-auto mt-[15.8974358974vw] mb-[14.8717948718vw]">
              <div className="size-full absolute top-0 left-0">
                <Image
                  fill
                  alt="curve_text"
                  src={"/images/extra/result/curve_text.png"}
                />
              </div>
              <div className="relative lg:size-[22.3333333333vh] size-[33.0769230769vw]">
                <Image
                  fill
                  alt="lungs"
                  src={"/images/extra/result/lungs.png"}
                />
              </div>
            </div>
          </div>
        </div> */}
        {/* HIGH  */}
        {/* EXCELLENT */}
        <div className="relative z-[2] w-full">
          <MarqueeSlider />
          <div className="lg:w-[87.7777777778vw] w-[86.668%] mx-auto">
            <Score
              score={"EXCELLENT"}
              desc={`WOW! That's    <span class='text-[#FFDA24] font-medium italic'>superhuman lung control!</span>`}
            />
            <div className="flex justify-between flex-wrap lg:gap-[calc(0.5*var(--vw8))] gap-y-[4.61538461538vw] gap-x-[1.02564102564vw] lg:mt-[2.44444444444vh] mt-[4.61538461538vw]">
              <div className="w-full relative text-center lg:hidden flex lg:rounded-[var(--vw8)] rounded-lg bg-[rgba(255,255,255,0.10)] lg:pt-[2.88888888889vh] lg:pb-[5vh] lg:px-[var(--vw26)] px-[5.12820512821vw] py-[2.05128205128vw]">
                <div className="atlwh_Full">
                  <div className="absolute top-0 left-0 lg:size-[6.22222222222vh] size-[8.97435897436vw] -translate-x-1/2 -translate-y-1/2">
                    <Image
                      fill
                      alt="star"
                      src={"/images/extra/high_star.svg"}
                    />
                  </div>
                  <div className="absolute top-0 right-0 lg:size-[6.22222222222vh] size-[8.97435897436vw] translate-x-1/2 -translate-y-1/2">
                    <Image
                      fill
                      alt="star"
                      src={"/images/extra/high_star.svg"}
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 lg:size-[6.22222222222vh] size-[8.97435897436vw] translate-x-1/2 translate-y-[25%]">
                    <Image
                      fill
                      alt="star"
                      src={"/images/extra/high_star.svg"}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 lg:size-[6.22222222222vh] size-[8.97435897436vw] -translate-x-1/2 translate-y-[25%]">
                    <Image
                      fill
                      alt="star"
                      src={"/images/extra/high_star.svg"}
                    />
                  </div>
                </div>
                <p className="relative z-[2] w-[88%] mx-auto font-light lg:text-[2.88888888889vh] lg:leading-[3.18888888889vh] text-[4.10256410256vw] leading-[4.95726495726vw]">
                  <span className="text-[4.61538461538vw] font-bold">
                    Are you secretly a yogi?
                  </span>{" "}
                  <br />
                  Your lungs are in great shape & we’ve got a surprise gift for
                  you
                </p>
              </div>
              <div
                style={{
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                className="relative flex flex-col lg:rounded-[var(--vw15)] rounded-lg bg-[rgba(255,255,255,0.10)] lg:w-[30%] w-[28.7179487179vw] lg:py-[2.77777777778vh] py-[3.07692307692vw] lg:px-0 px-[2.05128205128vw]"
              >
                <div className="lg:py-[0.61111111111vh] lg:px-[var(--vw8)] lg:mx-auto lg:bg-green lg:text-[3.88888888889vh] lg:leading-[3.88888888889vh] text-[2.05128205128vw] leading-[4.61538461538vw] font-medium lg:text-white">
                  <span>
                    YOU HAVE <span className="hidden lg:inline">WON!</span>
                  </span>
                </div>

                <div className="flex flex-col-reverse lg:flex-col items-start lg:items-center uppercase lg:mt-[0.55555555555vh] lg:px-[var(--vw8)]">
                  <button className="dm_sans lg:my-[1.11111111111vw] mt-[4.589744vw] uppercase relative lg:flex justify-center items-center lg:px-[var(--vw17)] lg:py-[0.77777777777vh] p-[0.76923076923vw] lg:text-[1.66666666667vh] lg:leading-[1.66666666667vh] text-[1.53846153846vw] leading-[1.53846153846vw] font-medium text-darkblack bg-[#FFDA24] lg:rounded-[var(--vw100)] rounded-[100px]">
                    <span>CLAIM nOW</span>
                  </button>
                  <span className="bebas_neue text-[#41FF28] lg:text-white lg:text-[14.2222222222vh] lg:leading-[14.2222222222vh] lg:tracking-[-0.15972222222vw] text-[7.69230769231vw] leading-[7.69230769231vw]">
                    50,000
                  </span>
                  <span className="lg:hidden bebas_neue text-white lg:text-[14.2222222222vh] lg:leading-[14.2222222222vh] lg:tracking-[-0.15972222222vw] text-[15.3846153846vw] leading-[11.384615vw]">
                    WON
                  </span>
                </div>
              </div>
              <div className="flex flex-col lg:gap-y-[2vh] gap-y-[1.79487179487vw] lg:w-[30vw] w-[56.4102564103vw]">
                <div className="lg:hidden flex lg:gap-[var(--vw22)] gap-[2.30769230769vw] lg:w-[30.2777777778vw] lg:rounded-[var(--vw8)] lg:bg-[rgba(255,255,255,0.10)] lg:py-[3.55555555556vh] lg:px-[var(--vw18)]">
                  <div className="relative bg-white lg:w-[20.4444444444vh] lg:h-[22.6666666667vh] w-[12.3076923077vw] h-[13.5897435897vw]">
                    <div className="absolute top-1/2 left-0 lg:right-0 -translate-y-1/2 lg:size-[21.5555555556vh] size-[11.5384615385vw]">
                      <Image
                        fill
                        alt="gift"
                        src={"/images/extra/whatsapp_gift.png"}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rotate-90 lg:rotate-0 relative lg:size-[9.44444444444vh] size-[7.17948717949vw]">
                      <div className="relative lg:size-[9.44444444444vh] size-[7.17948717949vw] animate-bounce">
                        <Image
                          fill
                          alt="gift"
                          src={"/images/extra/whatsapp_gift_arrow.png"}
                        />
                      </div>
                    </div>
                    <div className="lg:mt-[3.66666666667vh] mt-[0.76923076923vw]">
                      <p className="lg:text-[4.66666666667vh] lg:leading-[4.66666666667vh] text-[5.12820512821vw] leading-[5.12820512821vw] bebas_neue uppercase text-[#FFDA24] bg-darkgreen lg:px-[0.34722222222vw] px-[0.76923076923vw] py-[0.25641025641vw]">
                        Claim your <br className="hidden lg:block" /> offer here
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full hidden relative lg:flex lg:rounded-[var(--vw8)] bg-[rgba(255,255,255,0.10)] lg:pt-[2.88888888889vh] lg:pb-[5vh] lg:px-[var(--vw20)] px-[5.12820512821vw] py-[1.53846153846vw]">
                  <p className="font-light lg:text-[2.77777777778vh] lg:leading-[3.55555555556vh] text-[4.10256410256vw] leading-[4.95726495726vw]">
                    <span className="font-semibold lg:text-[3.55555555556vh]">
                      Are you secretly a yogi?
                    </span>{" "}
                    <br />
                    Your lungs are in great shape & we’ve got a surprise gift
                    for you
                  </p>
                </div>
                <div
                  style={{
                    boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.10)",
                  }}
                  className="w-full flex flex-col lg:gap-y-[1.66666666667vh] gap-y-[4.179487vw] lg:rounded-[var(--vw8)] rounded-lg bg-[rgba(255,255,255,0.10)] lg:pt-[1.33333333333vh] lg:pb-[2.66666666667vh] py-[1.53846153846vw] px-[2.05128205128vw] lg:px-[var(--vw22)]"
                >
                  <p className="font-semibold underline underline-offset-2 lg:text-[2.22222222222vh] lg:leading-[3.05555555556vh] text-[2.5641025641vw] leading-[4.10256410256vw]">
                    Strengthen your lungs with these expert approved breathing
                    exercises
                  </p>
                  <button className="ml-auto uppercase flex justify-center items-center lg:px-[var(--vw12)] lg:py-[0.66666666666vh] py-[1.28205128205vw] px-[3.07692307692vw] lg:text-[1.11111111111vh] lg:leading-[1.11111111111vh] text-[1.79487179487vw] leading-[1.79487179487vw] font-medium text-darkblack bg-[#FFDA24] lg:rounded-[var(--vw100)] rounded-[100px]">
                    <span>DOWNLOAD</span>
                  </button>
                </div>
              </div>
              <div className="hidden lg:flex lg:gap-[var(--vw22)] lg:w-[30.2777777778vw] lg:rounded-[var(--vw8)] bg-[rgba(255,255,255,0.10)] lg:py-[3.55555555556vh] lg:px-[var(--vw18)]">
                <div className="relative bg-white lg:w-[20.4444444444vh] lg:h-[22.6666666667vh]">
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 lg:size-[21.5555555556vh]">
                    <Image
                      fill
                      alt="gift"
                      src={"/images/extra/whatsapp_gift.png"}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="relative lg:size-[9.44444444444vh] animate-bounce">
                    <Image
                      fill
                      alt="gift"
                      src={"/images/extra/whatsapp_gift_arrow.png"}
                    />
                  </div>
                  <div className="lg:mt-[3.66666666667vh]">
                    <p className="lg:text-[4.66666666667vh] lg:leading-[4.66666666667vh] bebas_neue uppercase text-[#FFDA24] bg-darkgreen lg:px-[0.34722222222vw]">
                      Claim your <br /> offer here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-between items-center lg:mt-[5.66666666667vh] bebas_neue">
            <div className="relative lg:w-[27.1111111111vh] lg:h-[33.7777777778vh]">
              <Image fill alt="confetti" src={"/images/extra/confetti.png"} />
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
            <div className="relative lg:w-[27.1111111111vh] lg:h-[33.7777777778vh] -scale-x-100">
              <Image fill alt="confetti" src={"/images/extra/confetti.png"} />
            </div>
          </div>
          <div className="lg:hidden mt-[6.41025641026vw] w-full">
            <div className="mx-[6.41025641026vw] flex">
              <div className="w-[26.1538461538vw] px-[3.58974358974vw] py-[5.64102564103vw] rounded-lg bg-green text-[5.12820512821vw] leading-[5.12820512821vw] font-black">
                YOU HAVE WON
              </div>
              <div className="flex-1 flex lg:gap-[calc(0.5*var(--vw8))] bebas_neue relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[84%] flex justify-start items-center pl-[2.30769230769vw] lg:pr-[3.33333333333vh] text-green lg:text-[4.44444444444vh] lg:leading-[4.44444444444vh] text-[10.2564102564vw] leading-[10.2564102564vw] bg-[#FFDA24]">
                  FREE
                </div>
              </div>
            </div>
            <ProductShowcase
              wrapperClasses={"bg-transparent pt-[16.6666666667vw]"}
              data={products}
              heading={
                "<span class='text-[5.12820512821vw] leading-[5.12820512821vw] text-white font-light uppercase block'>BROWSE OUR </br> <span class='font-bold'>BEST SELLERS<span><span>"
              }
            />
            <div className="relative lg:size-[33.8888888889vh] size-[50vw] flex justify-center items-center mx-auto mt-[15.8974358974vw] mb-[14.8717948718vw]">
              <div className="size-full absolute top-0 left-0">
                <Image
                  fill
                  alt="curve_text"
                  src={"/images/extra/result/curve_text.png"}
                />
              </div>
              <div className="relative lg:size-[22.3333333333vh] size-[33.0769230769vw]">
                <Image
                  fill
                  alt="lungs"
                  src={"/images/extra/result/lungs.png"}
                />
              </div>
            </div>
          </div>
        </div>
        {/* EXCELLENT */}
      </section>
    </>
  );
};

export default ResultsPage;
