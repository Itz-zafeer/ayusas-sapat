import React from "react";
import Fact from "./Fact";
const icons = [
  {
    icon: "/images/product-double-strength/paraben-facts/icons/1.svg",
  },
  {
    icon: "/images/product-double-strength/paraben-facts/icons/2.svg",
  },
  {
    icon: "/images/product-double-strength/paraben-facts/icons/3.svg",
  },
  {
    icon: "/images/product-double-strength/paraben-facts/icons/4.svg",
  },
];
const harmfulBecause = [
  {
    icon: "/images/product-double-strength/paraben-facts/harmful/1.svg",
    title: "Disrupts hormones",
  },
  {
    icon: "/images/product-double-strength/paraben-facts/harmful/2.svg",
    title: "Long-term health risks",
  },
  {
    icon: "/images/product-double-strength/paraben-facts/harmful/3.svg",
    title: "Skin irritations & allergies",
  },
  {
    icon: "/images/product-double-strength/paraben-facts/harmful/4.svg",
    title: "Hampers kid’s brain health",
  },
];
const Facts = () => {
  return (
    <div className="flex flex-col lg:w-[51.059%] text-white">
      <Fact
        heading={"Parabens are everywhere!"}
        classes={
          "bg-lightgreen lg:pt-[var(--vw121)] lg:pb-[var(--vw105)] sm:py-16 py-9"
        }
        data={icons}
        desc={
          "They are synthetic preservatives found in medicines, cosmetics, and food"
        }
      />
      <Fact
        heading={"Parabens are harmful because"}
        classes={
          "bg-darkgreen lg:pt-[var(--vw124)] lg:pb-[var(--vw143)] sm:py-16 pt-12 pb-[78px]"
        }
        data={harmfulBecause}
      />
    </div>
  );
};

export default Facts;
