import React from "react";
import Hero from "../common/product-page/hero/Hero";
import MarqueeSlider from "../common/product-page/marquee-slider/MarqueeSlider";
import QualityAssurance from "../common/quality-assurance/QualityAssurance";
import AirQualityStats from "./air-quality-stats/AirQualityStats";
const productImages = [
  "/images/product-haldi-tulsi/hero/image-slider/1.jpg",
  "/images/product-haldi-tulsi/hero/image-slider/2.jpg",
  "/images/product-haldi-tulsi/hero/image-slider/3.jpg",
  "/images/product-haldi-tulsi/hero/image-slider/4.jpg",
  "/images/product-haldi-tulsi/hero/image-slider/5.jpg",
];
const treatmentFeatures = [
  {
    image: "/images/product-haldi-tulsi/hero/details/treatment-features/1.jpg",
    label: "Unhealthy Lungs",
  },
  {
    image: "/images/product-haldi-tulsi/hero/details/treatment-features/2.jpg",
    label: "Toxin & Mucus Buildup",
  },
  {
    image: "/images/product-haldi-tulsi/hero/details/treatment-features/3.jpg",
    label: "Breathing difficulty",
  },
  {
    image: "/images/product-haldi-tulsi/hero/details/treatment-features/4.jpg",
    label: "Pollution related breathing issues",
  },
  {
    image: "/images/product-haldi-tulsi/hero/details/treatment-features/5.jpg",
    label: "Low immunity",
  },
];
const ProductHaldiTulsiPage = () => {
  return (
    <>
      <Hero
        productImages={productImages}
        treatmentFeatures={treatmentFeatures}
        content={{
          heading: "Haldi Tulsi Cough Syrup",
          desc: "Your Daily Dose of Lung Care",
        }}
        tags={`5 Types of Tulsi: Vishnu-Priya + Bisva + Rama+ Kala + Basil Sweet Lemon  <a href='/'>Read More</a>`}
      />
      <MarqueeSlider />
      <QualityAssurance />
      <AirQualityStats />
      <MarqueeSlider />
      <QualityAssurance />
    </>
  );
};

export default ProductHaldiTulsiPage;
