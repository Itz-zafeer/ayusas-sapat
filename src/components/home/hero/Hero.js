"use client";
import Image from "next/image";
import LinkBtn from "@/components/common/buttons/LinkButton";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
const Hero = () => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={1}
        className="relative w-full home_hero_swiper"
      >
        <SwiperSlide className="minfullVh minfullSvh">
          <section className="minfullVh minfullSvh flex items-end lg:py-[25.9694477086vh] pt-[105px] pb-[210px] relative">
            <div className="atlwh_Full pointer-events-none">
              <div className="atlwh_Full">
                <Image
                  fill
                  alt="hero_image"
                  src={"/images/home/hero/backgrounds/1.png"}
                  className="object-cover"
                />
              </div>
              <span className="atlwh_Full bg-[#00000033]"></span>
            </div>
            <div className="w-full relative z-[2]">
              <div className="lg:myContainer w-[86.744%] mx-auto flex flex-col items-center text-center text-white">
                <h1 className="lg:text-vw150 lg:leading-[var(--vw150)] text-[70px] font-extrabold uppercase">
                  AYUSAS
                </h1>
                <p className="lg:text30 mtext20 font-medium lg:mt-[1.88014101058vh] lg:mb-[3.52526439483vh] mb-5 mt-[6px]">
                  Rooted in Ancient Wisdom, Powered by Science
                </p>
                <LinkBtn
                  text={"Know more"}
                  link={"/"}
                  colors={"bg-yellow text-darkblack"}
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="minfullVh minfullSvh">
          <section className="minfullVh minfullSvh flex items-start lg:pt-[25.9694477086vh] pt-[105px] pb-[210px] relative">
            <div className="atlwh_Full pointer-events-none">
              <div className="atlwh_Full">
                <Image
                  fill
                  alt="hero_image"
                  src={"/images/home/hero/backgrounds/2.jpg"}
                  className="object-cover hidden lg:block"
                />
                <Image
                  fill
                  alt="hero_image"
                  src={"/images/home/hero/backgrounds/2_mob.jpg"}
                  className="object-cover lg:hidden block"
                  style={{ objectPosition: "0px 75px" }}
                />
              </div>
            </div>
            <div className="w-full relative z-[2] flex">
              <div className="lg:ml-[51.7195767196vw] lg:mt-[21.7391304348vh] mt-[61.5384615385vw] flex mx-auto">
                <LinkBtn
                  gapping={
                    "lg:px-[var(--vw52)] lg:py-[var(--vw19)] px-[54.07px] py-[13px]"
                  }
                  text={"Buy Now"}
                  link={"/"}
                  colors={"bg-white text-darkblack"}
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="minfullVh minfullSvh">
          <section className="minfullVh minfullSvh flex items-start lg:items-end lg:pt-[25.9694477086vh] lg:pb-[4vh] pt-[105px] pb-[210px] relative">
            <div className="atlwh_Full pointer-events-none">
              <div className="atlwh_Full">
                <Image
                  fill
                  alt="hero_image"
                  src={"/images/home/hero/backgrounds/3.jpg"}
                  className="object-cover hidden lg:block"
                />
                <Image
                  fill
                  alt="hero_image"
                  src={"/images/home/hero/backgrounds/3_mob.jpg"}
                  className="object-cover lg:hidden block"
                  style={{ objectPosition: "0px 75px" }}
                />
              </div>
            </div>
            <div className="w-full relative z-[2] flex">
              <div className="lg:ml-[var(--vw75)] lg:mt-[21.7391304348vh] mt-[79.538462vw] flex mx-auto">
                <LinkBtn
                  gapping={
                    "lg:px-[var(--vw52)] lg:py-[var(--vw19)] px-[54.07px] py-[13px]"
                  }
                  text={"Buy Now"}
                  link={"/"}
                  colors={"bg-white text-darkblack"}
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className="minfullVh minfullSvh">
          <section className="minfullVh minfullSvh flex items-start lg:pt-[25.9694477086vh] pt-[105px] pb-[210px] relative">
            <div className="atlwh_Full pointer-events-none">
              <div className="atlwh_Full">
                <Image
                  fill
                  alt="hero_image"
                  src={"/images/home/hero/backgrounds/4.jpg"}
                  className="object-cover hidden lg:block"
                />
                <Image
                  fill
                  alt="hero_image"
                  src={"/images/home/hero/backgrounds/4_mob.jpg"}
                  className="object-cover lg:hidden block"
                  style={{ objectPosition: "0px 75px" }}
                />
              </div>
            </div>
            <div className="w-full relative z-[2] flex">
              <div className="lg:ml-[46.719577vw] lg:mt-[23.73913vh] mt-[61.5384615385vw] flex mx-auto">
                <LinkBtn
                  gapping={
                    "lg:px-[var(--vw52)] lg:py-[var(--vw19)] px-[54.07px] py-[13px]"
                  }
                  text={"Buy Now"}
                  link={"/"}
                  colors={"bg-white text-darkblack"}
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
