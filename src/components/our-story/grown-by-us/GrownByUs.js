"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useResponsivness from "@/hooks/useResponsivness";
import SwiperButtons from "@/components/common/SwiperButtons";
import Image from "next/image";
import Content from "./Content";
const data = [
  {
    image: "/images/our-story/grown-by-us/1.jpg",
    desc: "Harness the miracle of Indian herbs using clean, sustainable practices.",
  },
  {
    image: "/images/our-story/grown-by-us/2.jpg",
    desc: "Extract their purest essence with cutting-edge technology.",
  },
  {
    image: "/images/our-story/grown-by-us/3.jpg",
    desc: "Craft formulations that are authentic, potent, and effective.",
  },
];
const GrownByUs = () => {
  const productShowcaseSwiper = useRef(null);
  const { isDesktop, isTablet } = useResponsivness();
  const [swiperGap, setSwiperGap] = useState(0);

  useEffect(() => {
    function updateGap() {
      setSwiperGap(
        window.innerWidth >= 1025
          ? (window.innerWidth / 100) * 3.1746031746
          : window.innerWidth >= 641
          ? 25
          : 14
      );
    }
    updateGap();
    window.addEventListener("resize", updateGap);
    return () => window.removeEventListener("resize", updateGap);
  }, []);

  return (
    <section className="bg-[#F4EEE0] lg:py-[var(--vw127)] py-[58px]">
      <Content />
      <div className="relative lg:mt-[var(--vw72)] mt-[72px]">
        <Swiper
          grabCursor={isDesktop && data.length > 4}
          onSwiper={(swiper) => (productShowcaseSwiper.current = swiper)}
          navigation
          modules={[Navigation]}
          spaceBetween={swiperGap}
          slidesPerView={"auto"}
          className="px-[30px] lg:px-[var(--vw100)]"
        >
          {data?.map((product, index) => (
            <SwiperSlide
              key={index}
              className="group cursor-pointer bg-[#EDE7CF] lg:!w-[26.455026455vw] sm:!w-[47.455%] !w-[54.549%] h-auto lg:rounded-[var(--vw40)] rounded-[20px] overflow-hidden"
            >
              <div className="w-full lg:h-[26.9841269841vw] sm:h-[36.6666666667vw] h-[182px] relative overflow-hidden">
                <Image
                  fill
                  alt="image"
                  src={product.image}
                  className="group-hover:scale-105 transition-all duration-500 ease-out object-cover"
                />
              </div>
              <div className="lg:text24 font-medium mtext14 lg:pt-[var(--vw16)] pt-2.5 lg:pb-[var(--vw32)] sm:pt-8 pb-8 lg:mx-[var(--vw34)] mx-4 lg:w-[20.5026455026vw] w-[76.669%]">
                <p>{product.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper Buttons - Now handles visibility automatically */}
        {(isDesktop && data.length > 3) ||
        (isTablet && data.length > 2) ||
        (!isDesktop && data.length > 1) ? (
          <SwiperButtons
            swiperRef={productShowcaseSwiper}
            colors={"text-white bg-yellow"}
            positionY={"transform top-1/2 -translate-y-1/2"}
            settingPrev={"left-10"}
            settingNext={"right-10"}
          />
        ) : null}
      </div>
    </section>
  );
};

export default GrownByUs;
