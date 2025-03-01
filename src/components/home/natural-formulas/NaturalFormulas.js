"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperButtons from "./SwiperButtons";
import useResponsivness from "@/hooks/useResponsivness";

const formulas = [
  {
    image: "/images/home/formulas/1.jpg",
    title: "Dry+Wet cough",
  },
  {
    image: "/images/home/formulas/2.jpg",
    title: "Sore throat",
  },
  {
    image: "/images/home/formulas/3.jpg",
    title: "Immunity",
  },
  {
    image: "/images/home/formulas/4.jpg",
    title: "Respiratory health",
  },
  {
    image: "/images/home/formulas/5.png",
    title: "Chest congestion",
  },
];
const NaturalFormulas = () => {
  const productShowcaseSwiper = useRef(null);
  const { isDesktop, isTablet } = useResponsivness();
  const [swiperGap, setSwiperGap] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  useEffect(() => {
    setSwiperGap(
      window.innerWidth >= 1025 ? (window.innerWidth / 100) * 1.98412698413 : 30
    );
  }, []);
  useEffect(() => {
    function handleResize() {
      setSwiperGap(
        window.innerWidth >= 1025
          ? (window.innerWidth / 100) * 1.98412698413
          : window.innerWidth >= 641
          ? 40
          : 30
      );
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-c0f3e25 lg:pt-[var(--vw110)] lg:pb-[var(--vw180)] py-[82.5px]">
      <h2 className="text60 text-yellow capitalize text-center lg:myContainer w-[74.744%] mx-auto">
        Natural Formulas To Help With
      </h2>

      <div className="lg:mt-[var(--vw100)] mt-[54px] relative">
        <Swiper
          grabCursor={isDesktop && formulas.length > 4 ? true : false}
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
          slidesPerView={isTablet ? 2.4 : "auto"}
          className=" lg:pl-[var(--vw106)] pl-5"
        >
          {formulas.map((formula, index) => (
            <SwiperSlide
              key={index}
              className="!w-[303px] sm:!w-[270px] lg:!w-[20.0396825397vw] flex flex-col items-center text-center gap-y-[30px] lg:gap-y-[var(--vw30)]"
            >
              <div className="relative size-[303px] sm:size-[230px] lg:size-[20.0396825397vw] rounded-full overflow-hidden">
                <Image fill alt="image" src={formula.image} />
              </div>
              <span className="text-white lg:text30 mtext30">
                {formula.title}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
        {isDesktop && formulas.length > 4 && (
          <SwiperButtons
            productShowcaseSwiper={productShowcaseSwiper}
            isBeginning={isBeginning}
            isEnd={isEnd}
          />
        )}
        {isTablet && formulas.length > 2 && (
          <SwiperButtons
            productShowcaseSwiper={productShowcaseSwiper}
            isBeginning={isBeginning}
            isEnd={isEnd}
          />
        )}
        {!isDesktop && formulas.length > 1 && (
          <SwiperButtons
            productShowcaseSwiper={productShowcaseSwiper}
            isBeginning={isBeginning}
            isEnd={isEnd}
          />
        )}
      </div>
    </section>
  );
};

export default NaturalFormulas;
