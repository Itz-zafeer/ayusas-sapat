import React from "react";
import ShowCase from "./ShowCase";

const NaturalIngredients = () => {
  return (
    <section className="bg-darkgreen">
      <div className="lg:pt-[var(--vw92)] pt-[55px] lg:pb-[var(--vw196)] pb-14">
        <h2 className="myContainer text-center text50 text-white">
          What makes our solution{" "}
          <span className="text-yellow">Natural + Quick acting</span>?
        </h2>
        <div className="border-y border-white lg:mt-[var(--vw74)] lg:mb-[var(--vw106)] my-8 text-white flex justify-center lg:px-[var(--vw64)] px-5 py-4 lg:py-[var(--vw18)]">
          <span className="lg:text50 uppercase fenix mtext22 text-center">
            100% Natural herbs & potent natural active extracts
          </span>
        </div>
        <ShowCase />
      </div>
    </section>
  );
};

export default NaturalIngredients;
