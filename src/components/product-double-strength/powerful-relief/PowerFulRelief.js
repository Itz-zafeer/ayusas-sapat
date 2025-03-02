import Image from "next/image";
import React from "react";
import Content from "./content/Content";

const PowerFulRelief = () => {
  return (
    <section>
      <div className="flex items-stretch flex-col lg:flex-row">
        <div className="relative lg:w-[49.537037037vw] lg:min-h-[92.328042328vw]">
          <Image
            fill
            alt="banner"
            className="object-cover"
            src={"/images/product-double-strength/powerful-relief/banner.jpg"}
          />
        </div>
        <Content />
      </div>
    </section>
  );
};

export default PowerFulRelief;
