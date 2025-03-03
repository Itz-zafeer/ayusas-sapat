import React from "react";
import Hero from "../common/product-page/hero/Hero";
import MarqueeSlider from "../common/product-page/marquee-slider/MarqueeSlider";
import QualityAssurance from "../common/quality-assurance/QualityAssurance";
import CycleOfCough from "./cycle-of-cough/CycleOfCough";
import PowerFulRelief from "./powerful-relief/PowerFulRelief";
import TrustedByDoctors from "../common/product-page/trusted-by-doctors/TrustedByDoctors";
import Testimonials from "../common/testimonials/Testimonials";
import GetReliefFrom from "../common/product-page/get-relief-from/GetReliefFrom";
import PureExtracts from "./pure-extracts/PureExtracts";
import DoubleStrength from "./double-strength/DoubleStrength";

const ProductDoubleStrengthPage = () => {
  return (
    <>
      <Hero />
      <MarqueeSlider />
      <QualityAssurance />
      <CycleOfCough />
      <PowerFulRelief />
      <TrustedByDoctors />
      <Testimonials />
      <GetReliefFrom />
      <PureExtracts />
      <DoubleStrength />
    </>
  );
};

export default ProductDoubleStrengthPage;
