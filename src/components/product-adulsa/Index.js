import React from "react";
import Hero from "../common/product-page/hero/Hero";
import MarqueeSlider from "../common/product-page/marquee-slider/MarqueeSlider";
import QualityAssurance from "../common/quality-assurance/QualityAssurance";
import Testimonials from "../common/testimonials/Testimonials";
import GetReliefFrom from "../common/product-page/get-relief-from/GetReliefFrom";
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
import MiracleHerb from "./miracle-herb/MiracleHerb";
import PureExtracts from "./pure-extracts/PureExtracts";
const productImages = [
  "/images/product-adulsa/hero/image-slider/1.jpg",
  "/images/product-adulsa/hero/image-slider/2.jpg",
  "/images/product-adulsa/hero/image-slider/3.jpg",
  "/images/product-adulsa/hero/image-slider/4.jpg",
  "/images/product-adulsa/hero/image-slider/5.jpg",
];
const treatmentFeatures = [
  {
    image: "/images/product-adulsa/hero/details/treatment-features/1.jpg",
    label: " dry and wet cough",
  },
  {
    image: "/images/product-adulsa/hero/details/treatment-features/2.jpg",
    label: " sore throat",
  },
  {
    image: "/images/product-adulsa/hero/details/treatment-features/3.jpg",
    label: "respiratory health",
  },
  {
    image: "/images/product-adulsa/hero/details/treatment-features/4.jpg",
    label: "Stuffy Nose",
  },
];
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
    question:
      "Are Ayusas products free from harmful preservatives and allergens?",
    answer: `Ayusas cough syrups are uniquely crafted for children with natural, safe, and paraben-free formulations. They contain carefully selected active ingredients to address specific types of coughs while ensuring a pleasant taste for easy consumption. The syrups are free from harmful preservatives, making them a reliable choice for parents seeking natural and effective remedies for their children's respiratory health.`,
  },
  {
    question: "How do I choose the right cough syrup for my child's symptoms?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, libero non hendrerit tempor, purus velit pharetra erat, nec feugiat lectus elit nec lacus.`,
  },
  {
    question: "Where can I buy Ayusas products?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod nisl eget eros facilisis, in dictum sapien gravida.`,
  },
  {
    question: "Are Ayusas syrups safe for long-term use?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Vivamus nec tincidunt risus, ut pharetra magna.`,
  },
  {
    question: "How should I store the products after opening?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id tristique magna. Etiam ut massa vitae nunc laoreet eleifend.`,
  },
  {
    question: "What is the recommended dosage for different age groups?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec purus et eros ullamcorper consequat sed non quam.`,
  },
];

const ProductAdulsaPage = () => {
  return (
    <>
      <Hero
        productImages={productImages}
        treatmentFeatures={treatmentFeatures}
        content={{
          heading: "Adulsa Cough Syrup",
          desc: "Fast Acting, Natural Cough Relief Syrup",
        }}
        tags={`Haldi, Yashtimadhu, Tulsi, Adulsa, Kantakari `}
      />
      <MarqueeSlider />
      <QualityAssurance />
      <Testimonials />
      <GetReliefFrom />
      <PureExtracts />
      <MiracleHerb />
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

export default ProductAdulsaPage;
