"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useResponsivness from "@/hooks/useResponsivness";
import SwiperButtons from "@/components/common/SwiperButtons";
import Image from "next/image";
const behinds = [
  {
    image: "/images/product-lozenges/science-behind/images/1.jpg",
    heading: "We Carefully Select Our Herbs",
    desc: "Our journey begins on sustainable farms, where we select pure herbs like Yashtimadhu, Indian Willowbark, Haldi, etc. grown without harmful chemicals",
  },
  {
    image: "/images/product-lozenges/science-behind/images/2.jpg",
    heading: "We Extract the Natural Actives",
    desc: "Through our Naturo-Active Extraction process, we gently extract the most potent compounds while preserving their natural strength for maximum health benefits.",
  },
  {
    image: "/images/product-lozenges/science-behind/images/3.jpg",
    heading: "We Formulate Our Lozenges",
    desc: "We use the purest extracts to make an effective and soothing lozenge, ensuring that every ingredient works seamlessly to provide lasting relief.",
  },
];

const ScienceBehindSwiper = () => {
  const ScienceBehindSwiper = useRef(null);
  const { isDesktop, isTablet } = useResponsivness();
  const [swiperGap, setSwiperGap] = useState(0);

  useEffect(() => {
    function updateGap() {
      setSwiperGap(
        window.innerWidth >= 1025
          ? (window.innerWidth / 100) * 1.98412698413
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
    <div className="relative lg:mt-[var(--vw24)] mt-6">
      <Swiper
        onSwiper={(swiper) => (ScienceBehindSwiper.current = swiper)}
        navigation
        modules={[Navigation]}
        spaceBetween={swiperGap}
        slidesPerView={"auto"}
        className="px-4 lg:px-[var(--vw200)]"
      >
        {behinds.map((behind, index) => (
          <SwiperSlide
            key={index}
            style={{
              boxShadow: "0px 44px 47px 0px rgba(240, 247, 230, 0.46)",
            }}
            className="group relative lg:!w-[21.6931216931vw] !w-[318px] lg:pt-[var(--vw34)] lg:pb-[var(--vw63)] pt-6 pb-10 lg:rounded-[var(--vw10)] rounded-[10px] bg-[#d7fadba6] h-auto"
          >
            {index + 1 >= behinds.length || (
              <div className="absolute w-[140px] flex flex-col gap-y-7 lg:top-[15.0793650794vw] top-[26%] right-[-25%] pointer-events-none">
                <span className="w-full h-0.5 bg-white"></span>
                <span className="w-full h-0.5 bg-white"></span>
                <span className="w-full h-0.5 bg-white"></span>
              </div>
            )}
            <div className="lg:w-[17.5264550265vw] w-[80%] mx-auto">
              <div className="relative lg:h-[28.4391534392vw] h-[350px] w-full lg:rounded-[calc(2*var(--vw150))] rounded-[300px] overflow-hidden">
                <Image
                  fill
                  alt="image"
                  src={behind.image}
                  className="group-hover:scale-105 transition-all duration-500 ease-out object-cover"
                />
              </div>
              <div className="lg:mt-[var(--vw40)] mt-6">
                <h4 className="lg:text32 lg:leading-[var(--vw30)] mtext20 text-green font-semibold">
                  {behind.heading}
                </h4>
                <p className="text-darkgreen lg:text30 lg:leading-[var(--vw27)] mtext18 font-light lg:mt-[var(--vw26)] mt-3">
                  {behind.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {(isDesktop && behinds.length > 3) ||
      (isTablet && behinds.length > 2) ||
      (!isDesktop && behinds.length > 1) ? (
        <SwiperButtons
          swiperRef={ScienceBehindSwiper}
          colors={"text-white bg-black"}
          positionY={"transform top-1/2 -translate-y-1/2"}
          settingPrev={"left-44"}
          settingNext={"right-10"}
        />
      ) : null}
    </div>
  );
};

export default ScienceBehindSwiper;
