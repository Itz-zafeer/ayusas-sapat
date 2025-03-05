import React from "react";
import ImageSlider from "./image-slider/ImageSlider";
import Details from "./details/Details";

const Hero = ({ productImages, content, treatmentFeatures, tags }) => {
  return (
    <section className="minfullVh minfullSvh lg:pt-[18.8014101058vh] pt-[100px] lg:pb-[8.22561692127vh] pb-[70px]">
      <div className="flex flex-wrap lg:gap-[var(--vw54)] gap-[15px] lg:w-[89.417989418vw] mx-auto">
        <ImageSlider productImages={productImages} />
        <Details
          content={content}
          treatmentFeatures={treatmentFeatures}
          tags={tags}
        />
      </div>
    </section>
  );
};

export default Hero;
