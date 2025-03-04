import React from "react";
import Banner from "./Banner";
import Content from "./Content";

const TrustedForYears = () => {
  return (
    <section>
      <div className="flex items-stretch flex-wrap flex-col lg:flex-row w-full">
        <Banner />
        <Content />
      </div>
    </section>
  );
};

export default TrustedForYears;
