"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "./Card";
import SwiperButtons from "./SwiperButtons";
import useResponsivness from "@/hooks/useResponsivness";

const ProductShowcase = ({ data, heading }) => {
  const productShowcaseSwiper = useRef(null);
  const { isDesktop, isTablet } = useResponsivness();
  const [swiperGap, setSwiperGap] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  useEffect(() => {
    setSwiperGap(
      window.innerWidth >= 1025 ? (window.innerWidth / 100) * 2.24867724868 : 10
    );
  }, []);
  useEffect(() => {
    function handleResize() {
      setSwiperGap(
        window.innerWidth >= 1025
          ? (window.innerWidth / 100) * 2.24867724868
          : window.innerWidth >= 641
          ? 10
          : 10
      );
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <div className="lg:py-[var(--vw114)] py-[81px] bg-f5eee1">
        <h2 className="text60 text-darkblack capitalize text-center myContainer">
          {heading}
        </h2>
        <div className="relative lg:mt-[var(--vw70)] mt-10">
          <Swiper
            grabCursor={isDesktop && data.length > 4 ? true : false}
            onSwiper={(swiper) => {
              productShowcaseSwiper.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
              swiper.on("slideChange", () => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              });
            }}
            navigation
            modules={[Navigation]}
            spaceBetween={swiperGap}
            // slidesPerView={isDesktop ? 4 : isTablet ? 2 : 1.3}
            slidesPerView={isTablet ? 2 : "auto"}
            className={`lg:w-[86.310%] px-[30px] lg:px-0`}
          >
            {data.map((product, index) => (
              <SwiperSlide
                key={index}
                className="lg:!w-[22.989%] sm:!w-[49.455%] !w-[75.455%] h-auto flex"
              >
                <Card product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          {isDesktop && data.length > 4 && (
            <SwiperButtons
              productShowcaseSwiper={productShowcaseSwiper}
              isBeginning={isBeginning}
              isEnd={isEnd}
            />
          )}
          {isTablet && data.length > 2 && (
            <SwiperButtons
              productShowcaseSwiper={productShowcaseSwiper}
              isBeginning={isBeginning}
              isEnd={isEnd}
            />
          )}
          {!isDesktop && data.length > 1 && (
            <SwiperButtons
              productShowcaseSwiper={productShowcaseSwiper}
              isBeginning={isBeginning}
              isEnd={isEnd}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
