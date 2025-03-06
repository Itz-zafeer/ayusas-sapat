import React from "react";
import Hero from "../common/product-page/hero/Hero";
import MarqueeSlider from "../common/product-page/marquee-slider/MarqueeSlider";
import QualityAssurance from "../common/quality-assurance/QualityAssurance";
import Testimonials from "../common/testimonials/Testimonials";
import GetReliefFrom from "../common/product-page/get-relief-from/GetReliefFrom";
import AirQualityStats from "./air-quality-stats/AirQualityStats";
import FeatureHighlight from "./feature-highlight/FeatureHighlight";
import KeyBenefitsBar from "./key-benefits-bar/KeyBenefitsBar";
import TulsiBenefitsChart from "./tulsi-benefits-chart/TulsiBenefitsChart";
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
    question: "What is Ayusas Haldi + 5-Tulsi Cough Syrup?",
    answer:
      "Ayusas Haldi + 5-Tulsi Cough Syrup is a natural Ayurvedic formulation designed to provide relief from cough and allergies. It combines the benefits of five types of Tulsi (Vishnu-Priya, Bisva, Rama, Kala, and Basil Sweet Lemon) known for their anti-allergic properties, along with Haldi (Turmeric) for its anti-bacterial effects.",
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
    question: "Where can I purchase Ayusas Haldi + 5-Tulsi Cough Syrup?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id justo ac ex sagittis interdum at eget neque.",
  },
  {
    question: "Are there any side effects?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt sapien a purus lobortis, eget bibendum purus vehicula.",
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
      <Testimonials />
      <GetReliefFrom />
      <AirQualityStats />
      <FeatureHighlight />
      <KeyBenefitsBar />
      <TulsiBenefitsChart />
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

export default ProductHaldiTulsiPage;
