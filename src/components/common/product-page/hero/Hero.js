import React from "react";
import ImageSlider from "./image-slider/ImageSlider";
import Details from "./details/Details";
const productImages = [
  "/images/product-double-strength/hero/image-slider/1.jpg",
  "/images/product-double-strength/hero/image-slider/2.jpg",
  "/images/product-double-strength/hero/image-slider/3.jpg",
  "/images/product-double-strength/hero/image-slider/4.jpg",
  "/images/product-double-strength/hero/image-slider/5.jpg",
];
const Hero = () => {
  return (
    <section className="minfullVh minfullSvh lg:pt-[18.8014101058vh] pt-[100px] lg:pb-[8.22561692127vh] pb-[70px]">
      <div className="flex flex-wrap lg:gap-[var(--vw54)] gap-[15px] lg:w-[89.417989418vw] mx-auto">
        <ImageSlider productImages={productImages} />
        <Details />
      </div>
    </section>
  );
};

export default Hero;
