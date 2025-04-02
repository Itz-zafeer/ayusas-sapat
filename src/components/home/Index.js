import React from "react";
import Hero from "./hero/Hero";
import Features from "./features/Features";
import ProductShowcase from "../common/product-showcase/ProductShowcase";
import NaturalFormulas from "./natural-formulas/NaturalFormulas";
import TriedTested from "./tried-tested/TriedTested";
import QualityAssurance from "../common/quality-assurance/QualityAssurance";
import Story from "./story/Story";
import NaturalIngredients from "./natural-ingredients/NaturalIngredients";
import Location from "./location/Location";
import Testimonials from "./testimonials/Testimonials";
import GrownByUs from "../our-story/grown-by-us/GrownByUs";
import HerbalExpertise from "../our-story/herbal-expertise/HerbalExpertise";
import HerbalInfo from "../our-story/herbal-info/HerbalInfo";
import TastyRefreshing from "../our-story/tasty-refreshing/TastyRefreshing";
import Ayurveda from "../our-story/ayurveda/Ayurveda";
import ExperiencePower from "../our-story/experience-power/ExperiencePower";
import Slogan from "../our-story/Slogan";
import FarmToBottle from "../our-story/farm-to-bottle/FarmToBottle";
import FormulationsApart from "../our-story/formulations-apart/FormulationsApart";
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
];
const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <span className="block w-full h-2.5 bg-white"></span>
      <ProductShowcase data={products} heading={"our bestsellers"} />
      <NaturalFormulas />
      {/* <TriedTested /> */}
      <Testimonials />
      {/* <Story />
      <QualityAssurance />
      <NaturalIngredients /> */}
      <GrownByUs />
      <HerbalExpertise />
      <HerbalInfo />
      <TastyRefreshing />
      <Ayurveda />
      <ExperiencePower />
      <Slogan />
      <FarmToBottle />
      <FormulationsApart />
      <Location />
    </>
  );
};

export default HomePage;
