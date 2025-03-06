"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useResponsivness from "@/hooks/useResponsivness";
import SwiperButtons from "@/components/common/SwiperButtons";
import Image from "next/image";
const data = [
  {
    image: "/images/home/natural-ingredients/1.jpg",
    heading: {
      name: "Kabasura Kudineer",
    },
    chemical: "15+ Herbs",
    desc: `It is a powerful polyherbal formulation from India’s ...     <a href="/">Read more</a>`,
  },
  {
    image: "/images/home/natural-ingredients/2.jpg",
    heading: {
      name: "Haldi",
      translation: "(Turmeric)",
    },
    chemical: "Curcumin",
    desc: `Anti-inflammatory and antioxidant, helps reduce airway inflammation.`,
  },
  {
    image: "/images/home/natural-ingredients/3.jpg",
    heading: {
      name: "Yashtimadhu ",
      translation: "(Licorice)",
    },
    chemical: "Glycyrrhizin",
    desc: `Soothes irritated airways and protects the throat`,
  },
  {
    image: "/images/home/natural-ingredients/4.png",
    heading: {
      name: "Tulsi  ",
      translation: "(Holy Basil)",
    },
    chemical: "Urosolic acid",
    desc: `Clears Mucus & Relieve Congestion`,
  },
];
const ShowCase = () => {
  const productShowcaseSwiper = useRef(null);
  const { isDesktop, isTablet } = useResponsivness();
  const [swiperGap, setSwiperGap] = useState(0);

  useEffect(() => {
    function updateGap() {
      setSwiperGap(
        window.innerWidth >= 1025
          ? (window.innerWidth / 100) * 2.6455026455
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
    <div className="relative lg:mt-[var(--vw70)] mt-10">
      <Swiper
        grabCursor={isDesktop && data.length > 4}
        onSwiper={(swiper) => (productShowcaseSwiper.current = swiper)}
        navigation
        modules={[Navigation]}
        spaceBetween={swiperGap}
        slidesPerView={"auto"}
        className="px-[30px] lg:px-[var(--vw100)]"
      >
        {data?.map((product, index) => (
          <SwiperSlide
            key={index}
            className="group lg:!w-[25.5291005291vw] sm:!w-[49.455%] !w-[84.849%] h-auto"
          >
            <div className="w-full lg:h-[29.828042328vw] h-[327px] relative overflow-hidden">
              <Image
                fill
                alt="image"
                src={product.image}
                className="group-hover:scale-105 transition-all duration-500 ease-out object-cover"
              />
            </div>
            <div className="lg:pt-[var(--vw26)] pt-4 flex flex-col gap-y-2 text-white w-[98%]">
              <h5 className="lg:text34 mtext24 font-semibold">
                {product?.heading?.name}
                {product?.heading?.translation && (
                  <span className="font-normal">
                    {" "}
                    {product?.heading?.translation}
                  </span>
                )}
              </h5>
              <span className="lg:text28 mtext18 text-yellow font-medium italic">
                {product?.chemical}
              </span>
              <div
                dangerouslySetInnerHTML={{ __html: product?.desc }}
                className="lg:text22 mtext14 natural_ingredients_showcase_desc line-clamp-2"
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Buttons - Now handles visibility automatically */}
      {(isDesktop && data.length > 3) ||
      (isTablet && data.length > 2) ||
      (!isDesktop && data.length > 1) ? (
        <SwiperButtons
          swiperRef={productShowcaseSwiper}
          colors={"text-white bg-yellow"}
          positionY={"transform top-1/2 -translate-y-1/2"}
          settingPrev={"left-10"}
          settingNext={"right-10"}
        />
      ) : null}
    </div>
  );
};

export default ShowCase;
