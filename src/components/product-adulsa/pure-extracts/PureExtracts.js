"use client";
import React from "react";
import Content from "./Content";
import Image from "next/image";
import IngredientDetail from "./IngredientDetail";
import useResponsivness from "@/hooks/useResponsivness";

const PureExtracts = () => {
  const { isMobile } = useResponsivness();
  return (
    <section className="bg-f5eee1 lg:pt-[var(--vw84)] pt-[57px]">
      <div className="myContainer">
        <Content />
        <div className="lg:w-[70.9656084656vw] w-[96%] mx-auto flex justify-between relative lg:pb-[var(--vw133)] pb-[18.4615384615vw]">
          <ul
            className={`flex flex-col items-start lg:w-[19.6428571429vw] w-[34.6153846154vw] lg:pt-[var(--vw104)] pt-[18.9743589744vw]`}
          >
            <IngredientDetail
              heading={"Adulsa"}
              desc={` (Vasicine) <br /> Relaxes the airways `}
              lineClasses={"lg:w-[33.9947089947vw] left-0 hidden lg:block"}
              headingClasses={`lg:pr-[var(--vw12)]`}
              indicatorImage={
                "/images/product-double-strength/pure-extracts/mob-shapes/1.png"
              }
              indicatorImageClasses={
                "w-[23.8461538462vw] min-w-[23.8461538462vw] top-[2.82051282051vw] right-[-25.641025641vw] lg:hidden"
              }
            />

            <IngredientDetail
              wrapperClasses={
                "lg:mt-[var(--vw197)] mt-[18.4615384615vw] !w-[20.2564102564vw] lg:!w-full"
              }
              heading={"Haldi"}
              desc={`        (curcumin) <br /> Reduces Inflammation

`}
              lineClasses={"lg:w-[33.9947089947vw] left-0 w-[36vw]"}
              headingClasses={`lg:pr-[var(--vw12)] pr-[3.07692307692vw]`}
            />
            <IngredientDetail
              heading={"Tulsi"}
              desc={`(Urosolic acid) <br /> Clears Mucus & Relieve Congestion`}
              lineClasses={"lg:w-[26.994709vw] right-0"}
              wrapperClasses={`lg:pl-[var(--vw12)] lg:mt-[var(--vw99)] ml-[10.5128205128vw] mt-[12.0512820513vw] lg:hidden flex`}
              indicatorImage={
                "/images/product-double-strength/pure-extracts/mob-shapes/5.png"
              }
              indicatorImageClasses={
                "w-[24.6153846154vw] min-w-[24.6153846154vw] top-0 right-[-25.641025641vw] lg:hidden"
              }
            />
          </ul>
          <div className="absolute z-[2] left-1/2 -translate-x-1/2 lg:w-[45.8333333333vw] lg:h-[53.7037037037vw] h-[65.8974358974vw] w-[56.4102564103vw] lg:-top-[var(--vw95)] top-[24.358974359vw]">
            <Image
              fill
              alt="product"
              src={"/images/product-double-strength/pure-extracts/product.png"}
              className="hidden lg:block"
            />
            <Image
              fill
              alt="product"
              src={
                "/images/product-double-strength/pure-extracts/mob_product.png"
              }
              className="lg:hidden block"
            />
          </div>
          <ul
            className={`flex flex-col items-end lg:w-[18.0555555556vw] w-[34.6153846154vw] lg:pt-[var(--vw78)] pt-[9.23076923077vw]`}
          >
            <IngredientDetail
              heading={"Yashtimadhu"}
              desc={`(Glycyrrhizin) Soothes & protects the throat`}
              lineClasses={"lg:w-[26.994709vw] right-0 hidden lg:block"}
              wrapperClasses={`lg:pl-[var(--vw12)] pl-[3.07692307692vw]`}
              indicatorImage={
                "/images/product-double-strength/pure-extracts/mob-shapes/3.png"
              }
              indicatorImageClasses={
                "w-[6.15384615385vw] min-w-[6.15384615385vw] top-[2.82051282051vw] left-[-6.641026vw] lg:hidden"
              }
            />
            <IngredientDetail
              heading={"Kantakari"}
              desc={`(Solasodine) <br /> Breaks down thick mucus`}
              lineClasses={"lg:w-[26.994709vw] w-[40vw] right-0"}
              wrapperClasses={`lg:pl-[var(--vw12)] pl-[3.07692307692vw] lg:mt-[var(--vw99)] mt-[28.2051282051vw] lg:!w-full !w-[24.8717948718vw]`}
            />
            <IngredientDetail
              heading={"Tulsi"}
              desc={`(Urosolic acid) <br /> Clears Mucus & Relieve Congestion`}
              lineClasses={"lg:w-[26.994709vw] right-0"}
              wrapperClasses={`lg:pl-[var(--vw12)] lg:mt-[var(--vw99)] hidden lg:flex`}
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PureExtracts;
