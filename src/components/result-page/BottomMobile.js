import React from "react";
import ProductShowcase from "../common/product-showcase/ProductShowcase";
import Image from "next/image";
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
export const BottomMobile = ({ medium, high, excellent }) => {
  return (
    <>
      <div className="lg:hidden mt-[6.41025641026vw] w-full">
        {excellent ? (
          <div className="mx-[6.41025641026vw] flex">
            <div className="w-[26.1538461538vw] px-[3.58974358974vw] py-[5.64102564103vw] rounded-lg bg-green text-[5.12820512821vw] leading-[5.12820512821vw] font-black">
              YOU HAVE WON
            </div>
            <div className="flex-1 flex lg:gap-[calc(0.5*var(--vw8))] bebas_neue relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[84%] flex justify-start items-center pl-[2.30769230769vw] lg:pr-[3.33333333333vh] text-green lg:text-[4.44444444444vh] lg:leading-[4.44444444444vh] text-[10.2564102564vw] leading-[10.2564102564vw] bg-[#FFDA24]">
                FREE
              </div>
              <div className="ml-auto mr-[2.30769230769vw]">
                <div className="relative lg:size-[25.3333333333vh] size-[30.7692307692vw]">
                  <Image fill alt="bottle" src={"/images/extra/exc_gift.png"} />
                </div>
              </div>
            </div>
          </div>
        ) : high ? (
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
        ) : medium ? (
          <div className="mx-[6.41025641026vw] flex">
            <div className="w-[26.1538461538vw] px-[3.58974358974vw] py-[5.64102564103vw] rounded-lg bg-green text-[5.12820512821vw] leading-[5.12820512821vw] font-black">
              GRAB THE OFFER NOW
            </div>
            <div className="flex-1 flex lg:gap-[calc(0.5*var(--vw8))] bebas_neue relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[88%] flex justify-end items-center pr-[4.692308vw] lg:pr-[3.33333333333vh] text-green lg:text-[4.44444444444vh] lg:leading-[4.44444444444vh] text-[10.2564102564vw] leading-[10.2564102564vw] bg-[#FFDA24]">
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
        ) : (
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
        )}
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
            <Image fill alt="lungs" src={"/images/extra/result/lungs.png"} />
          </div>
        </div>
      </div>
    </>
  );
};
