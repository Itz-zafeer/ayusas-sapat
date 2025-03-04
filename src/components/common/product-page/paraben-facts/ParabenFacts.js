import React from "react";
import Facts from "./facts/Facts";
import Banner from "./banner/Banner";

const ParabenFacts = () => {
  return (
    <section>
      <div className="flex flex-wrap flex-col-reverse lg:flex-row items-stretch">
        <Facts />
        <Banner />
      </div>
    </section>
  );
};

export default ParabenFacts;
