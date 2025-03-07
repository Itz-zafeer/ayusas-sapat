"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useResponsivness from "@/hooks/useResponsivness";
import Card from "./Card";
import SwiperButtons from "@/components/common/SwiperButtons";

const data = [
  {
    image: "/images/common/product-showcase/3.png",
    title: "AYUSAS Sapat Immunity Booster Syrup,",
    desc: "Powerful combination of Kabasura Kudineer and 5 types of Tulsi, Paraben Free, 100% Natural, for low immunity, recurrent cough and ailments (200ml)",
  },
  {
    image: "/images/common/product-showcase/1.png",
    title: "AYUSAS Sapat Immunity Booster Syrup,",
    desc: "Powerful combination of Kabasura Kudineer and 5 types of Tulsi, Paraben Free, 100% Natural, for low immunity, recurrent cough and ailments (200ml)",
  },
  {
    image: "/images/common/product-showcase/2.png",
    title: "AYUSAS Sapat Double Strength Cough Syrup",
    desc: "100% Natural, Paraben-Free And Effective Relief For Persistent Cough, Bronchitis, Viral Cough And Smoker's Cough, (100ml)",
  },
];

const FasterRelief = () => {
  const fasterReliefSwiper = useRef(null);
  const { isDesktop, isTablet } = useResponsivness();
  const [swiperGap, setSwiperGap] = useState(0);

  useEffect(() => {
    function updateGap() {
      setSwiperGap(
        window.innerWidth >= 1025
          ? (window.innerWidth / 100) * 1.71957671958
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
    <div className="lg:pb-[var(--vw36)] pb-6">
      <div className="lg:w-[43.5185185185vw] w-[89.744%] mx-auto text-darkblack flex lg:pt-[var(--vw36)] lg:pb-[var(--vw24)] py-5">
        <span className="lg:text24 mtext18 font-bold capitalize">
          Get Faster Relief
        </span>
      </div>
      <div className="relative">
        <Swiper
          grabCursor={isDesktop && data.length > 4}
          onSwiper={(swiper) => (fasterReliefSwiper.current = swiper)}
          navigation
          modules={[Navigation]}
          spaceBetween={swiperGap}
          slidesPerView={"auto"}
          className="px-[5.12820512821vw] lg:px-[var(--vw30)]"
        >
          {data.map((product, index) => (
            <SwiperSlide
              key={index}
              className="lg:!w-[17.3611111111vw] sm:!w-[46%] !w-[79.55%] h-auto flex"
            >
              <Card product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper Buttons - Now handles visibility automatically */}
        {(isDesktop && data.length > 2) ||
        (isTablet && data.length > 2) ||
        (!isDesktop && data.length > 1) ? (
          <SwiperButtons
            swiperRef={fasterReliefSwiper}
            colors={"text-white bg-darkblack"}
            positionY={"transform top-1/2 -translate-y-1/2"}
            settingPrev={"left-10"}
            settingNext={"right-10"}
          />
        ) : null}
      </div>
    </div>
  );
};

export default FasterRelief;
