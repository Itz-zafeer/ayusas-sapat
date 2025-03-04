"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import SwiperButtons from "@/components/common/SwiperButtons";
import useResponsivness from "@/hooks/useResponsivness";
const strengths = [
  {
    image: "/images/product-double-strength/double-strength/cards/1.jpg",
    label: "Maximum Dosage",
  },
  {
    image: "/images/product-double-strength/double-strength/cards/2.jpg",
    label: "Effective Herbs",
  },
  {
    image: "/images/product-double-strength/double-strength/cards/3.jpg",
    label: " Strong formulation",
  },
  {
    image: "/images/product-double-strength/double-strength/cards/4.jpg",
    label: "Potent Natural Actives",
  },
];
const DoubleStrength = () => {
  const doubleStrengthSlider = useRef(null);
  const { isDesktop, isTablet } = useResponsivness();
  const [swiperGap, setSwiperGap] = useState(0);

  useEffect(() => {
    function updateGap() {
      setSwiperGap(
        window.innerWidth >= 1025
          ? (window.innerWidth / 100) * 1.98412698413
          : window.innerWidth >= 641
          ? 24
          : 14
      );
    }
    updateGap();
    window.addEventListener("resize", updateGap);
    return () => window.removeEventListener("resize", updateGap);
  }, []);
  return (
    <section className="lg:pt-[var(--vw107)] lg:pb-[var(--vw195)] py-[62px] relative">
      <div className="atlwh_Full">
        <Image
          fill
          alt="bg"
          src={"/images/product-double-strength/double-strength/bg.jpg"}
        />
        <span className="atlwh_Full bg-[rgba(15,62,37,0.65)] z-[1]"></span>
      </div>
      <div className="relative z-[2]">
        <h2 className="text60 text-white uppercase lg:mb-[var(--vw77)] mb-10 lg:myContainer mx-auto w-[70%] text-center">
          What Makes It <span className="text-yellow">DOUBLE STRENGTH?</span>
        </h2>
        <div className="relative lg:myContainer lg:w-[83.9947089947vw]">
          <Swiper
            onSwiper={(swiper) => (doubleStrengthSlider.current = swiper)}
            navigation
            modules={[Navigation]}
            spaceBetween={swiperGap}
            slidesPerView={"auto"}
            className="w-full px-[20px] lg:px-0"
          >
            {strengths.map((strength, index) => (
              <SwiperSlide
                key={index}
                className="group lg:w-[19.5105820106vw] sm:w-[46.286%] w-[84.286%] cursor-pointer flex flex-col items-center text-center lg:gap-y-[var(--vw40)] gap-y-10"
              >
                <div className="lg:w-[19.5105820106vw] w-full lg:h-[29.8941798942vw] h-[452px] lg:rounded-[calc(2*var(--vw150))] rounded-[300px] overflow-hidden relative">
                  <Image
                    fill
                    alt="image"
                    src={strength.image}
                    className="group-hover:scale-105 transition-all duration-500 ease-out object-cover"
                  />
                </div>
                <span className="lg:text30 mtext30 font-extrabold text-white lg:w-[14.328042vw] w-[76%]">
                  {strength.label}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>

          {(isDesktop && strengths.length > 4) ||
          (isTablet && strengths.length > 2) ||
          (!isDesktop && strengths.length > 1) ? (
            <SwiperButtons
              swiperRef={doubleStrengthSlider}
              colors={"text-white bg-darkblack"}
              positionY={"transform top-1/2 -translate-y-1/2"}
              settingPrev={"left-0"}
              settingNext={"right-0"}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default DoubleStrength;
