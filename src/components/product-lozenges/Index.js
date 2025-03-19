import React from "react";
import Hero from "../common/product-page/hero/Hero";
import QualityAssurance from "../common/quality-assurance/QualityAssurance";
import MarqueeSlider from "../common/product-page/marquee-slider/MarqueeSlider";
import Testimonials from "../common/testimonials/Testimonials";
import ProductFeatures from "./product-features/ProductFeatures";
import Banner from "./Banner";
import MiracleHerbs from "./miracle-herbs/MiracleHerbs";
import Actions from "./actions/Actions";
import InstantRelief from "./instant-relief/InstantRelief";
import ClinicalStudies from "../common/product-page/clinical-studies/ClinicalStudies";
import ProductShowcase from "../common/product-showcase/ProductShowcase";
import Faqs from "../common/product-page/faqs/Faqs";
import CustomerReviews from "../common/product-page/customer-reviews/CustomerReviews";
import TrustedForYears from "../common/product-page/trusted-for-years/TrustedForYears";
import ParabenFacts from "../common/product-page/paraben-facts/ParabenFacts";

const productImages = [
  "/images/product-lozenges/hero/image-slider/1.jpg",
  "/images/product-lozenges/hero/image-slider/2.jpg",
  "/images/product-lozenges/hero/image-slider/3.jpg",
  "/images/product-lozenges/hero/image-slider/4.jpg",
  "/images/product-lozenges/hero/image-slider/5.jpg",
];
const treatmentFeatures = [
  {
    image:
      "/images/product-double-strength/hero/details/treatment-features/2.jpg",
    label: "Sore Throat",
  },
  {
    image:
      "/images/product-double-strength/hero/details/treatment-features/2.jpg",
    label: "Throat Irritation",
  },
  {
    image: "/images/product-adulsa/hero/details/treatment-features/4.jpg",
    label: "Stuffy Nose",
  },
  {
    image:
      "/images/product-double-strength/hero/details/treatment-features/1.jpg",
    label: "Persistent Cough",
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
    question: "What are Ayusas Lozenges?",
    answer:
      "Ayusas Lozenges are natural lozenges formulated with extracts like Yashtimadhu, Haldi, Amla, Indian willow bark, Menthol, and Yashad Bhasma. These ingredients work together to provide quick relief from sore throat, cough, and cold symptoms.",
  },
  {
    question: " How do these lozenges help with sore throat and cough?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac tortor nec risus tristique convallis.",
  },
  {
    question: "Are there any side effects associated with Ayusas Lozenges?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nulla at dolor vulputate, vel vehicula odio volutpat.",
  },
  {
    question: " Can children use Ayusas Lozenges?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque ligula at lectus fermentum, vel ultrices metus ultrices.",
  },
  {
    question: "How should I store Ayusas Lozenges?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nisl vel eros ullamcorper, a bibendum purus lacinia.",
  },
  {
    question: "Are Ayusas Lozenges suitable for vegetarians?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Ut eget eros ex.",
  },
  {
    question: "Can I use Ayusas Lozenges alongside other medications?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor eros ut arcu volutpat, id pharetra nulla scelerisque.",
  },
  {
    question: "How often can I consume Ayusas Lozenges?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
];
const ProductLozengesPage = () => {
  return (
    <>
      <Hero
        productImages={productImages}
        treatmentFeatures={treatmentFeatures}
        content={{
          heading: "Ayusas Lozenges",
          desc: " Fast-Acting Sore Throat Relief",
        }}
        tags={`Yashtimadhu, Haldi, Amla, Indian Willow Bark, Menthol, Yashad Bhasma`}
      />
      <MarqueeSlider />
      <QualityAssurance />
      <div className="bg-[#FF9C56]">
        <Testimonials
          title1={"Why people"}
          title2={" love us?"}
          headingClasses={"text-darkblack"}
          sectionClasses={"lg:py-[var(--vw40)] py-10"}
        />
        <ProductFeatures />
      </div>
      <Banner />
      <MiracleHerbs />
      <Actions />
      <span className="w-full bg-[#FFF4EA] lg:h-[35px] h-6 block"></span>
      <div className="bg-[#FF9C56]">
        <InstantRelief />
        <ClinicalStudies
          noPadding
          headingColor={"text-white"}
          headingPosition={"text-end"}
        />
      </div>
      <ProductShowcase
        data={frequentlyBought}
        heading={"Frequently bought together"}
      />
      <ParabenFacts />
      <TrustedForYears />
      <Faqs data={faqs} />
      <CustomerReviews />
    </>
  );
};

export default ProductLozengesPage;
