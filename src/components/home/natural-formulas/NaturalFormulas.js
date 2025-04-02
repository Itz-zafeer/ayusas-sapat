"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useResponsivness from "@/hooks/useResponsivness";
import SwiperButtons from "@/components/common/SwiperButtons";

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
  const naturalFormulasSwiper = useRef(null);
  const { isDesktop, isTablet } = useResponsivness();
  const [swiperGap, setSwiperGap] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    function updateGap() {
      setSwiperGap(
        window.innerWidth >= 1025
          ? (window.innerWidth / 100) * 1.98412698413
          : window.innerWidth >= 641
            ? 40
            : 30
      );
    }
    updateGap();
    window.addEventListener("resize", updateGap);
    return () => window.removeEventListener("resize", updateGap);
  }, []);

  return (
    <section className="bg-f5eee1 lg:pb-[var(--vw110)] pb-10">
      <h2 className="text50 capitalize lg:myContainer w-[74.744%] mx-auto">
        Natural Formulas To Help With
      </h2>

      <div className="lg:mt-[var(--vw100)] mt-[54px] relative">
        <Swiper
          grabCursor={isDesktop && formulas.length > 4 ? true : false}
          onSwiper={(swiper) => (naturalFormulasSwiper.current = swiper)}
          navigation
          modules={[Navigation]}
          spaceBetween={swiperGap}
          slidesPerView={"auto"}
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
              <span className="text-darkblack lg:text30 mtext30">
                {formula.title}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
        {((isDesktop && formulas.length > 4) ||
          (isTablet && formulas.length > 2) ||
          (!isDesktop && formulas.length > 1)) && (
          <SwiperButtons
            swiperRef={naturalFormulasSwiper}
            colors="text-white bg-yellow"
            positionY="-bottom-20"
            settingPrev="right-28"
            settingNext="right-10"
          />
        )}
      </div>
    </section>
  );
};

export default NaturalFormulas;
