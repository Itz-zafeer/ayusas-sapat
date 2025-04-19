"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "./Card";
import useResponsivness from "@/hooks/useResponsivness";
import SwiperButtons from "../SwiperButtons";

const ProductShowcase = ({ data, heading, wrapperClasses }) => {
  const productShowcaseSwiper = useRef(null);
  const { isDesktop, isTablet } = useResponsivness();
  const [swiperGap, setSwiperGap] = useState(0);

  useEffect(() => {
    function updateGap() {
      setSwiperGap(
        window.innerWidth >= 1025
          ? (window.innerWidth / 100) * 2.25
          : window.innerWidth >= 641
            ? 10
            : 10
      );
    }
    updateGap();
    window.addEventListener("resize", updateGap);
    return () => window.removeEventListener("resize", updateGap);
  }, []);

  return (
    <section>
      <div
        className={`${wrapperClasses ? wrapperClasses : "bg-f5eee1 lg:py-[var(--vw114)] py-[81px]"}`}
      >
        <h2
          dangerouslySetInnerHTML={{ __html: heading }}
          className="text60 text-darkblack capitalize text-center myContainer"
        ></h2>
        <div className="relative lg:mt-[var(--vw70)] mt-10">
          <Swiper
            grabCursor={isDesktop && data.length > 4}
            onSwiper={(swiper) => (productShowcaseSwiper.current = swiper)}
            navigation
            modules={[Navigation]}
            spaceBetween={swiperGap}
            slidesPerView={"auto"}
            className="lg:w-[86.310%] px-[30px] lg:px-0"
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

          {/* Swiper Buttons - Now handles visibility automatically */}
          {(isDesktop && data.length > 4) ||
          (isTablet && data.length > 2) ||
          (!isDesktop && data.length > 1) ? (
            <SwiperButtons
              swiperRef={productShowcaseSwiper}
              colors={"text-white bg-c0f3e25"}
              positionY={"transform top-1/2 -translate-y-1/2"}
              settingPrev={"left-10"}
              settingNext={"right-10"}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
