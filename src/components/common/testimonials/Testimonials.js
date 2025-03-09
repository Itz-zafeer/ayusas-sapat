"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import SwiperButtons from "@/components/common/SwiperButtons";
import useResponsivness from "@/hooks/useResponsivness";
import FsLightbox from "fslightbox-react";
const testimonials = [
  {
    video: {
      src: "https://cdn4.fireworktv.com/medias/2022/11/30/1669787161-vqipnbht/watermarked/540/Nishiguavaserum.mp4",
      poster: "/images/product-double-strength/testimonials/1.jpg",
    },
  },
  {
    video: {
      src: "https://cdn1.fireworktv.com/medias/2022/11/30/1669787243-hwinkbup/watermarked/540/Glutatransformationtanaz.mp4",
      poster: "/images/product-double-strength/testimonials/2.jpg",
    },
  },
  {
    video: {
      src: "https://cdn4.fireworktv.com/medias/2022/11/30/1669787161-vqipnbht/watermarked/540/Nishiguavaserum.mp4",
      poster: "/images/product-double-strength/testimonials/3.jpg",
    },
  },
  {
    video: {
      src: "https://cdn1.fireworktv.com/medias/2022/11/30/1669786996-bfdrhput/watermarked/540/Shreyajamunadhomepage.mp4",
      poster: "/images/product-double-strength/testimonials/4.jpg",
    },
  },
  {
    video: {
      src: "https://cdn4.fireworktv.com/medias/2022/11/30/1669787161-vqipnbht/watermarked/540/Nishiguavaserum.mp4",
      poster: "/images/product-double-strength/testimonials/5.jpg",
    },
  },
];
const Testimonials = ({ noHeading }) => {
  const videoUrls = testimonials.map((item) => item.video.src);
  const [toggler, setToggler] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);
  const testimonialsSlider = useRef(null);
  const { isDesktop, isTablet } = useResponsivness();
  const [swiperGap, setSwiperGap] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);

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
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (activeVideo && activeVideo !== videoRef.current) {
      activeVideo.pause();
      activeVideo.currentTime = 0; // Reset previous video
    }
    setActiveVideo(videoRef.current);
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };
  return (
    <>
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
                onClick={() => {
                  setSlideIndex(index);
                  setToggler(!toggler);
                }}
                key={index}
                className="group lg:w-[15.2116402116vw] lg:h-[24.1402116402vw] w-[46%] sm:h-[65vw] h-[65.3846153846vw] relative cursor-pointer lg:rounded-[var(--vw20)] rounded-[14px] overflow-hidden"
              >
                {/* <Image
                unoptimized
                fill
                alt="small_image"
                src={testimonial}
                className="group-hover:scale-105 transition-all duration-500 ease-out object-cover"
              /> */}
                <video
                  ref={videoRef}
                  src={testimonial?.video?.src}
                  poster={testimonial?.video?.poster}
                  className="object-cover absolute inset-0 size-full group-hover:scale-[1.04] transition-all duration-500"
                  preload="auto"
                  loading="lazy"
                  loop
                  muted
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                ></video>
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
      <FsLightbox toggler={toggler} slide={slideIndex} sources={videoUrls} />
    </>
  );
};

export default Testimonials;
