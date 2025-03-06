import React from "react";
import BackGrounds from "./BackGrounds";
import Content from "./Content";
import Image from "next/image";
import CircularInfoCard from "./CircularInfoCard";

const TulsiBenefitsChart = () => {
  return (
    <section className="relative overflow-hidden">
      <BackGrounds />
      <div className="relative z-[2] lg:pt-[var(--vw183)] pt-9">
        <Content />
        <div className="relative lg:w-[84.6560846561vw] lg:h-[44.5767195767vw] w-[99.7435897436vw] h-[61.2820512821vw] mx-auto lg:mt-[18.3201058201vw] mt-[37.4358974359vw]">
          <div className="atlwh_Full">
            <div className="atlwh_Full">
              <Image
                fill
                alt="hand"
                src={
                  "/images/product-haldi-tulsi/tulsi-benefits-chart/hand.png"
                }
                className="hidden lg:block"
              />
              <Image
                fill
                alt="hand"
                src={
                  "/images/product-haldi-tulsi/tulsi-benefits-chart/mob_hand.png"
                }
                className="lg:hidden block"
              />
            </div>
            <span
              style={{ textShadow: "0px 27px 8.3px rgba(0, 0, 0, 0.40)" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block lg:text-[13.510978836vw] text-[52px] font-bold uppercase text-[#E2FFAF]"
            >
              5
            </span>
          </div>
          <div className="absolute lg:w-[55.291005291vw] lg:h-[28.1084656085vw] w-[77.6923076923vw] h-[41.2820512821vw] lg:-top-[var(--vw61)] top-[-9.48717948718vw] lg:left-[14.417989418vw] left-1/2 -translate-x-1/2 lg:translate-x-0">
            <div className="atlwh_Full">
              <Image
                fill
                alt="curve"
                src={
                  "/images/product-haldi-tulsi/tulsi-benefits-chart/curve.svg"
                }
                className="hidden lg:block"
              />
              <Image
                fill
                alt="curve"
                src={
                  "/images/product-haldi-tulsi/tulsi-benefits-chart/mob_curve.svg"
                }
                className="lg:hidden block"
              />
            </div>
            <CircularInfoCard
              heading={"Vishnu-Priya Tulsi"}
              desc={"Clears congestion & supports lung function"}
              wrapperClasses={
                "flex-col lg:items-center lg:text-center lg:w-[20.3703703704vw] w-[24.1025641026vw] lg:bottom-[-13.5582010582vw] lg:-left-[var(--vw150)] bottom-[-25.641025641vw] left-[-5.12820512821vw]"
              }
              image={
                "/images/product-haldi-tulsi/tulsi-benefits-chart/card-images/1.jpg"
              }
              headingClasses={"w-[18.9743589744vw] lg:w-[unsset]"}
            />
            <CircularInfoCard
              heading={"Bisva Tulsi"}
              desc={"Naturally clears mucus"}
              wrapperClasses={
                "flex-row-reverse lg:items-[unset] items-end lg:!gap-[var(--vw20)] !gap-0 lg:bottom-[var(--vw140)] bottom-[19.2307692308vw] left-[-8.71794871795vw] lg:-left-[var(--vw150)]"
              }
              contentWrapperClasses={"lg:w-[var(--vw151)]"}
              headingClasses={"lg:w-[unset] w-[14.1025641026vw]"}
              descClasses={"w-[14.1025641026vw] lg:w-[unset]"}
              image={
                "/images/product-haldi-tulsi/tulsi-benefits-chart/card-images/2.jpg"
              }
            />
            <CircularInfoCard
              heading={"Kala Tulsi"}
              desc={"Reduces inflammation "}
              wrapperClasses={
                "flex-col-reverse items-center text-center lg:top-[-9vw] top-[-15.3846153846vw] left-1/2 -translate-x-1/2"
              }
              contentWrapperClasses={
                "lg:w-[16.7328042328vw] w-[29.7435897436vw]"
              }
              image={
                "/images/product-haldi-tulsi/tulsi-benefits-chart/card-images/3.jpg"
              }
            />
            <CircularInfoCard
              heading={"Rama Tulsi"}
              desc={"Protects against infections"}
              wrapperClasses={
                "lg:items-center items-end lg:!gap-[var(--vw20)] !gap-0 lg:bottom-[var(--vw140)] bottom-[19.2307692308vw] lg:-right-[14.2195767196vw] right-[-8.71794871795vw]"
              }
              contentWrapperClasses={
                "lg:w-[var(--vw200)] w-[13.0769230769vw] items-end text-end"
              }
              image={
                "/images/product-haldi-tulsi/tulsi-benefits-chart/card-images/4.jpg"
              }
            />
            <CircularInfoCard
              heading={"Basil Sweet Lemon Tulsi"}
              desc={"Supports easy breathing for better oxygen intake."}
              wrapperClasses={
                "flex-col lg:items-center lg:text-center items-end text-end lg:w-[23.3465608466vw] lg:bottom-[-13.5582010582vw] lg:-right-[var(--vw175)] bottom-[-25.641025641vw] right-[-5.12820512821vw]"
              }
              contentWrapperClasses={
                "lg:items-center lg:text-center items-end text-end"
              }
              descClasses={"w-[27.9487179487vw] lg:w-[unset]"}
              headingClasses={"w-[23.3333333333vw] lg:w-[unset]"}
              image={
                "/images/product-haldi-tulsi/tulsi-benefits-chart/card-images/5.jpg"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TulsiBenefitsChart;
