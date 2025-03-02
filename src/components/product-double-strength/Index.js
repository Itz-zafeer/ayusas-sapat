import React from "react";
import Hero from "../common/product-page/hero/Hero";
import MarqueeSlider from "../common/product-page/marquee-slider/MarqueeSlider";
import QualityAssurance from "../common/quality-assurance/QualityAssurance";
import CycleOfCough from "./cycle-of-cough/CycleOfCough";
import PowerFulRelief from "./powerful-relief/PowerFulRelief";
import TrustedByDoctors from "../common/product-page/trusted-by-doctors/TrustedByDoctors";

const ProductDoubleStrengthPage = () => {
  return (
    <>
      <Hero />
      <MarqueeSlider />
      <QualityAssurance />
      <CycleOfCough />
      <PowerFulRelief />
      <TrustedByDoctors />
    </>
  );
};

export default ProductDoubleStrengthPage;
