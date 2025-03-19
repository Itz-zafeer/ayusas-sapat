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
import HowItWorks from "../common/product-page/how-it-works/HowItWorks";
import SafeBanner from "../common/product-page/safe-banner/SafeBanner";
import LungsHelp from "../common/product-page/lungs-help/LungsHelp";
import ParabenFacts from "../common/product-page/paraben-facts/ParabenFacts";
import ScienceBehindAyusas from "../common/product-page/science-behind-ayusas/ScienceBehindAyusas";
import TrustedForYears from "../common/product-page/trusted-for-years/TrustedForYears";
import ClinicalStudies from "../common/product-page/clinical-studies/ClinicalStudies";
import ProductShowcase from "../common/product-showcase/ProductShowcase";
import Faqs from "../common/product-page/faqs/Faqs";
import CustomerReviews from "../common/product-page/customer-reviews/CustomerReviews";
const frequentlyBought = [
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
];
const faqs = [
  {
    question: "What is Ayusas Double Strength Cough Syrup?",
    answer:
      "Ayusas Double Strength Cough Syrup is a 100% natural, paraben-free Ayurvedic formulation designed to provide effective relief from persistent coughs, bronchitis, viral coughs, and smoker's cough. It contains a higher therapeutic dose of herbs to act quickly against deep-seated coughs.",
  },
  {
    question: "What are the key ingredients used in it?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac tortor nec risus tristique convallis.",
  },
  {
    question: "How is this syrup different from regular cough syrups?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nulla at dolor vulputate, vel vehicula odio volutpat.",
  },
  {
    question: "Is this syrup safe for children?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque ligula at lectus fermentum, vel ultrices metus ultrices.",
  },
  {
    question: "How should I take this syrup?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nisl vel eros ullamcorper, a bibendum purus lacinia.",
  },
  {
    question: "Does it cause drowsiness?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Ut eget eros ex.",
  },
  {
    question: "Are there any artificial preservatives in this syrup?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor eros ut arcu volutpat, id pharetra nulla scelerisque.",
  },
  {
    question: "Can I use this syrup for both dry and wet cough?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    question: "Where can I purchase Ayusas Double Strength Cough Syrup?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id justo ac ex sagittis interdum at eget neque.",
  },
  {
    question: "Are there any side effects?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt sapien a purus lobortis, eget bibendum purus vehicula.",
  },
];
const productImages = [
  "/images/product-double-strength/hero/image-slider/1.jpg",
  "/images/product-double-strength/hero/image-slider/2.jpg",
  "/images/product-double-strength/hero/image-slider/3.jpg",
  "/images/product-double-strength/hero/image-slider/4.jpg",
  "/images/product-double-strength/hero/image-slider/5.jpg",
];
const treatmentFeatures = [
  {
    image:
      "/images/product-double-strength/hero/details/treatment-features/1.jpg",
    label: "Persistent Cough",
  },
  {
    image:
      "/images/product-double-strength/hero/details/treatment-features/2.jpg",
    label: "Sore Throat",
  },
  {
    image:
      "/images/product-double-strength/hero/details/treatment-features/3.jpg",
    label: "Smoker’s Cough",
  },
  {
    image:
      "/images/product-double-strength/hero/details/treatment-features/4.jpg",
    label: "Elderly Cough",
  },
  {
    image:
      "/images/product-double-strength/hero/details/treatment-features/5.jpg",
    label: "Bronchitis",
  },
  {
    image:
      "/images/product-double-strength/hero/details/treatment-features/6.jpg",
    label: "Asthma",
  },
  {
    image:
      "/images/product-double-strength/hero/details/treatment-features/7.jpg",
    label: "Chest Congestion",
  },
];
const ProductDoubleStrengthPage = () => {
  return (
    <>
      <Hero
        productImages={productImages}
        treatmentFeatures={treatmentFeatures}
        content={{
          heading: "Double Strength cough syrup",
          desc: " Maximum Strength For Fast Relief | Natural | Non-Drowsy Formula | Great Taste",
        }}
        tags={`Haldi, Yashtimadhu, Tulsi, Adulsa, Kantakari`}
      />
      <MarqueeSlider />
      <QualityAssurance />
      <CycleOfCough />
      <PowerFulRelief />
      <TrustedByDoctors />
      <Testimonials title1={"Why people trust us"} />
      <GetReliefFrom />
      <PureExtracts />
      <DoubleStrength />
      <HowItWorks />
      <SafeBanner />
      <LungsHelp />
      <ParabenFacts />
      <ScienceBehindAyusas />
      <TrustedForYears />
      <ClinicalStudies />
      <ProductShowcase
        data={frequentlyBought}
        heading={"Frequently bought together"}
      />
      <Faqs data={faqs} />
      <CustomerReviews />
    </>
  );
};

export default ProductDoubleStrengthPage;
