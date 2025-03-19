"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useResponsivness from "@/hooks/useResponsivness";
import FsLightbox from "fslightbox-react";
import SwiperButtons from "../SwiperButtons";
import MyLightBox from "../MyLightBox/Index";

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

const Testimonials = ({
  noHeading,
  headingClasses,
  title1,
  title2,
  title2Classes,
  sectionClasses,
}) => {
  const videoUrls = testimonials.map((item) => item.video.src);
  const [slideIndex, setSlideIndex] = useState(0);
  const [showLightBox, setShowLightBox] = useState(false);
  const [showNow, setShowNow] = useState(false);
  const testimonialsSlider = useRef(null);
  const { isDesktop, isTablet } = useResponsivness();
  const [activeIndex, setActiveIndex] = useState(null);
  const [swiperGap, setSwiperGap] = useState(0);
  const videoRefs = useRef([]); // Store multiple refs for each video

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

  const handleMouseEnter = (index) => {
    // Pause/reset all other videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Play the hovered video
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
    setActiveIndex(index);
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };
  const handleOpen = () => {
    setShowLightBox(true);
    if (!showLightBox) {
      setTimeout(() => {
        const container = document.querySelector(".lightboxContainer");
        container.classList.remove("opacity-0");
        container.classList.remove("pointer-events-none");
        setShowNow(true);
      }, 1500);
    } else {
      const container = document.querySelector(".lightboxContainer");
      container.classList.remove("opacity-0");
      container.classList.remove("pointer-events-none");
      setTimeout(() => {
        setShowNow(true);
      }, 1500);
    }
  };
  return (
    <>
      <section
        className={`${
          sectionClasses ? sectionClasses : "lg:py-[var(--vw90)] py-[43px]"
        }`}
      >
        {noHeading || (
          <h2
            className={`${headingClasses ? headingClasses : ""} ${
              title2 ? "font-normal" : "font-bold"
            } lg:text-vw60 lg:leading-[var(--vw78)] mtext24 myContainer text-center capitalize lg:mb-[var(--vw50)] mb-6`}
          >
            {title1}{" "}
            {title2 && (
              <span
                className={`${title2Classes ? title2Classes : ""} font-bold`}
              >
                {title2}
              </span>
            )}
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
                onClick={() => handleOpen(index)}
                key={index}
                className="group lg:w-[15.2116402116vw] lg:h-[24.1402116402vw] w-[46%] sm:h-[65vw] h-[65.3846153846vw] relative cursor-pointer lg:rounded-[var(--vw20)] rounded-[14px] overflow-hidden"
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={testimonial?.video?.src}
                  poster={testimonial?.video?.poster}
                  className="object-cover absolute inset-0 size-full group-hover:scale-[1.04] transition-all duration-500"
                  preload="none" // Prevents video from loading automatically
                  loading="lazy"
                  loop
                  muted
                  controls={false}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
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
      {showLightBox && (
        <MyLightBox
          slideNo={slideIndex}
          autoPlay
          showNow={showNow}
          setShowNow={setShowNow}
          sources={videoUrls.map((src) => ({ source: src, type: "video" }))}
        />
      )}
    </>
  );
};

export default Testimonials;
