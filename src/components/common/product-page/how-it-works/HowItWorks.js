import Image from "next/image";
import React from "react";
import Content from "./content/Content";

const HowItWorks = () => {
  return (
    <section>
      <div className="flex justify-end items-start flex-col-reverse lg:flex-row relative bg-fbf9f7">
        <div className="lg:absolute lg:top-0 lg:left-0 relative lg:h-[68.9153439153vw] sm:h-[111.282051282vw] h-[434px] w-full lg:w-[calc(10*var(--vw100))]">
          <Image
            fill
            alt="banner"
            className="object-cover hidden lg:block"
            src={"/images/product-double-strength/how-it-works/banner.png"}
          />
          <Image
            fill
            alt="banner"
            className="object-cover lg:hidden block"
            src={"/images/product-double-strength/how-it-works/mob_banner.png"}
          />
        </div>
        <Content />
      </div>
    </section>
  );
};

export default HowItWorks;
