"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./Card";
const products = [
  {
    image: "/images/common/product-showcase/1.png",
    title: "AYUSAS Sapat Haldi + 5-Tulsi Cough Syrup",
    desc: "100% Natural, Paraben-free and effective relief for seasonal allergies, pollution and cough, (100ml)",
  },
  {
    image: "/images/common/product-showcase/2.png",
    title: "AYUSAS Sapat Double Strength Cough Syrup",
    desc: "100% Natural, Paraben-Free And Effective Relief For Persistent Cough, Bronchitis, Viral Cough And Smoker's Cough, (100ml)",
  },
  {
    image: "/images/common/product-showcase/3.png",
    title: "AYUSAS Sapat Immunity Booster Syrup,",
    desc: "Powerful combination of Kabasura Kudineer and 5 types of Tulsi, Paraben Free, 100% Natural, for low immunity, recurrent cough and ailments (200ml)",
  },
  {
    image: "/images/common/product-showcase/4.png",
    title: "AYUSAS Sapat Immunity Booster Syrup,",
    desc: "Powerful combination of Kabasura Kudineer and 5 types of Tulsi, Paraben Free, 100% Natural, for low immunity, recurrent cough and ailments (200ml)",
  },
  {
    image: "/images/common/product-showcase/4.png",
    title: "AYUSAS Sapat Immunity Booster Syrup,",
    desc: "Powerful combination of Kabasura Kudineer and 5 types of Tulsi, Paraben Free, 100% Natural, for low immunity, recurrent cough and ailments (200ml)",
  },
  {
    image: "/images/common/product-showcase/4.png",
    title: "AYUSAS Sapat Immunity Booster Syrup,",
    desc: "Powerful combination of Kabasura Kudineer and 5 types of Tulsi, Paraben Free, 100% Natural, for low immunity, recurrent cough and ailments (200ml)",
  },
];
const ProductShowcase = () => {
  const productShowcaseSwiper = useRef(null);
  const [swiperGap, setSwiperGap] = useState(0);

  useEffect(() => {
    setSwiperGap(
      window.innerWidth >= 1025 ? (window.innerWidth / 100) * 2.31481481481 : 10
    );
  }, []);
  useEffect(() => {
    function handleResize() {
      setSwiperGap(
        window.innerWidth >= 1025
          ? (window.innerWidth / 100) * 2.31481481481
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
          our bestsellers
        </h2>
        <div className="relative lg:mt-[var(--vw70)] mt-10">
          <Swiper
            style={{
              maskImage:
                "linear-gradient(to right, rgba(245, 238, 225, 0), rgba(0, 0, 0, 1) 1%, rgba(0, 0, 0, 1) 99%, rgba(0, 0, 0, 0))",
            }}
            onSwiper={(swiper) => (productShowcaseSwiper.current = swiper)}
            navigation
            modules={[Navigation]}
            spaceBetween={swiperGap}
            slidesPerView={4}
            className="lg:w-[86.310%] px-[30px] lg:px-0"
          >
            {products.map((product, index) => (
              <SwiperSlide
                key={index}
                className="bg-white text-darkblack lg:!w-[22.989%] !w-[75.455%] lg:rounded-[var(--vw30)] overflow-hidden rounded-[20px] border border-[#9BB59E]"
              >
                <Card product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md z-10"
            onClick={() => productShowcaseSwiper.current?.slidePrev()}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md z-10"
            onClick={() => productShowcaseSwiper.current?.slideNext()}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
