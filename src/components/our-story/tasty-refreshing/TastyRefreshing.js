import Image from "next/image";
import React from "react";
import Content from "./Content";
import BulletPoints from "./bullet-points/BulletPoints";

const TastyRefreshing = () => {
  return (
    <section className="relative flex flex-wrap">
      <div className="atlwh_Full z-[1] pointer-events-none">
        <div className="hidden lg:block absolute bottom-0 right-0 lg:w-[80.753968254vw] w-full h-[147.948717949vw] lg:h-[68.7830687831vw]">
          <Image
            fill
            alt="little_child"
            src={"/images/our-story/tasty-refreshing/little_child.png"}
            className="hidden lg:block"
          />
          <Image
            fill
            alt="little_child"
            src={"/images/our-story/tasty-refreshing/mob_little_child.png"}
            className="lg:hidden block"
          />
        </div>
        <div className="atlwh_Full hidden lg:block">
          <img
            src="/images/our-story/tasty-refreshing/leafs/1.png"
            alt="leaf"
            className="absolute lg:w-[var(--vw100)] lg:top-[21.2301587302vw] lg:right-[51.9841269841vw]"
          />
          <img
            src="/images/our-story/tasty-refreshing/leafs/2.png"
            alt="leaf"
            className="absolute lg:w-[var(--vw50)] lg:top-[var(--vw118)] lg:right-[28.4391534392vw]"
          />
          <img
            src="/images/our-story/tasty-refreshing/leafs/3.png"
            alt="leaf"
            className="absolute lg:w-[var(--vw119)] lg:right-[var(--vw52)] lg:top-[21.2301587302vw]"
          />
        </div>
      </div>
      <div className="flex flex-wrap relative w-full">
        <div className="lg:w-[49.802%] w-full bg-f5eee1 lg:py-[var(--vw185)] pt-[54px] pb-[60px]">
          <Content />
          <BulletPoints />
        </div>
        <div className="lg:w-[50.199%] lg:min-h-[74.537037037vw] w-full bg-[#E4DCBD] relative">
          <div className="w-full h-[147.948717949vw] relative lg:hidden block mt-[53px]">
            <Image
              fill
              alt="little_child"
              src={"/images/our-story/tasty-refreshing/little_child.png"}
              className="hidden lg:block"
            />
            <Image
              fill
              alt="little_child"
              src={"/images/our-story/tasty-refreshing/mob_little_child.png"}
              className="lg:hidden block"
            />
          </div>
          <div className="atlwh_Full lg:hidden block pointer-events-none">
            <img
              src="/images/our-story/tasty-refreshing/leafs/mob_1.png"
              alt="leaf"
              className="absolute w-[10.7692307692vw] top-[10.7692307692vw] right-[46.1538461538vw]"
            />
            <img
              src="/images/our-story/tasty-refreshing/leafs/mob_2.png"
              alt="leaf"
              className="absolute w-[10.7692307692vw] top-[43.5897435897vw] right-[21.5384615385vw]"
            />
            <img
              src="/images/our-story/tasty-refreshing/leafs/mob_3.png"
              alt="leaf"
              className="absolute w-[8.97435897436vw] top-[18.2051282051vw] right-[7.69230769231vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TastyRefreshing;
