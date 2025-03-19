import React from "react";
import ProductFeature from "./ProductFeature";
const productFeatures = [
  {
    icon: "/images/product-lozenges/product-features/1.svg",
    title: "INSTANT RELIEF",
  },
  {
    icon: "/images/product-lozenges/product-features/2.svg",
    title: "NATURAL ACTIVES",
  },
  {
    icon: "/images/product-lozenges/product-features/3.svg",
    title: "100 % NATURAL",
  },
  {
    icon: "/images/product-lozenges/product-features/4.svg",
    title: "TASTES GREAT",
  },
  {
    icon: "/images/product-lozenges/product-features/5.svg",
    title: "PARABEN FREE",
  },
];
const ProductFeatures = () => {
  return (
    <div className="myContainer pb-10">
      <h2 className="text50 !font-medium capitalize text-[#292220] text-center">
        Product Features
      </h2>
      <div className="flex justify-center lg:gap-[var(--vw30)] gap-x-[18px] gap-y-6 flex-wrap lg:mt-16 mt-6">
        {productFeatures.map((productFeature, index) => (
          <ProductFeature key={index} productFeature={productFeature} />
        ))}
      </div>
    </div>
  );
};

export default ProductFeatures;
