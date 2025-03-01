import React from "react";
import Hero from "./hero/Hero";
import Features from "./features/Features";
import ProductShowcase from "../common/product-showcase/ProductShowcase";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <ProductShowcase />
    </>
  );
};

export default HomePage;
