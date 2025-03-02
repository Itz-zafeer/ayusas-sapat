"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import SwiperButtons from "@/components/common/SwiperButtons";
import useResponsivness from "@/hooks/useResponsivness";

const ImageSlider = ({ productImages }) => {
  const heroImageSlider = useRef(null);
  const { isDesktop, isTablet } = useResponsivness();
  const [swiperGap, setSwiperGap] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    function updateGap() {
      setSwiperGap(
        window.innerWidth >= 1025
          ? (window.innerWidth / 100) * 1.25661375661
          : window.innerWidth >= 641
          ? 20
          : 15
      );
    }
    updateGap();
    window.addEventListener("resize", updateGap);
    return () => window.removeEventListener("resize", updateGap);
  }, []);

  return (
    <div className="lg:w-[41.7989417989vw] w-full">
      <div className="w-full lg:h-[76.3807285546vh] h-[402px] relative">
        <Image
          fill
          alt="main_image"
          unoptimized
          className="object-cover"
          src={productImages[activeImage]}
        />
      </div>
      <div className="relative lg:mt-[var(--vw10)] mt-[14px]">
        <Swiper
          onSwiper={(swiper) => (heroImageSlider.current = swiper)}
          navigation
          modules={[Navigation]}
          spaceBetween={swiperGap}
          slidesPerView={"auto"}
          className="w-full px-[20px] lg:px-0"
        >
          {productImages.map((image, index) => (
            <SwiperSlide
              onClick={() => setActiveImage(index)}
              key={index}
              className="lg:!size-[var(--vw144)] !size-[128px] relative cursor-pointer"
            >
              <Image
                unoptimized
                fill
                alt="small_image"
                src={image}
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {(isDesktop && productImages.length > 4) ||
        (isTablet && productImages.length > 5) ||
        (!isDesktop && productImages.length > 2) ? (
          <SwiperButtons
            swiperRef={heroImageSlider}
            colors={"text-white bg-darkblack"}
            positionY={"transform top-1/2 -translate-y-1/2"}
            settingPrev={"left-0"}
            settingNext={"right-0"}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ImageSlider;
