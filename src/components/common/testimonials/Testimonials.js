"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import SwiperButtons from "@/components/common/SwiperButtons";
import useResponsivness from "@/hooks/useResponsivness";
const testimonials = [
  "/images/product-double-strength/testimonials/1.jpg",
  "/images/product-double-strength/testimonials/2.jpg",
  "/images/product-double-strength/testimonials/3.jpg",
  "/images/product-double-strength/testimonials/4.jpg",
  "/images/product-double-strength/testimonials/5.jpg",
];
const Testimonials = ({ noHeading }) => {
  const testimonialsSlider = useRef(null);
  const { isDesktop, isTablet } = useResponsivness();
  const [swiperGap, setSwiperGap] = useState(0);

  useEffect(() => {
    function updateGap() {
      setSwiperGap(
        window.innerWidth >= 1025
          ? (window.innerWidth / 100) * 1.65343915344
          : window.innerWidth >= 641
          ? 14
          : 14
      );
    }
    updateGap();
    window.addEventListener("resize", updateGap);
    return () => window.removeEventListener("resize", updateGap);
  }, []);

  return (
    <section className="lg:py-[var(--vw90)] py-[43px]">
      {noHeading || (
        <h2 className="text60 myContainer text-center capitalize lg:mb-[var(--vw50)] mb-6">
          Why people trust us
        </h2>
      )}
      <div className="relative lg:myContainer">
        <Swiper
          onSwiper={(swiper) => (testimonialsSlider.current = swiper)}
          navigation
          modules={[Navigation]}
          spaceBetween={swiperGap}
          slidesPerView={"auto"}
          className="w-full px-[20px] lg:px-0"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="lg:w-[15.2116402116vw] lg:h-[24.1402116402vw] w-[46%] sm:h-[65vw] h-[65.3846153846vw] relative cursor-pointer lg:rounded-[var(--vw20)] rounded-[14px] overflow-hidden"
            >
              <Image
                unoptimized
                fill
                alt="small_image"
                src={testimonial}
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {(isDesktop && testimonials.length > 5) ||
        (isTablet && testimonials.length > 2) ||
        (!isDesktop && testimonials.length > 2) ? (
          <SwiperButtons
            swiperRef={testimonialsSlider}
            colors={"text-white bg-darkblack"}
            positionY={"transform top-1/2 -translate-y-1/2"}
            settingPrev={"left-0"}
            settingNext={"right-0"}
          />
        ) : null}
      </div>
    </section>
  );
};

export default Testimonials;
