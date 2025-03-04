import Image from "next/image";
import React from "react";
import Content from "./Content";

const ScienceBehindAyusas = () => {
  return (
    <section className="lg:pt-[var(--vw120)] pt-[72px] pb-16 lg:pb-[var(--vw160)] bg-f5eee1">
      <h2 className="text-darkblack lg:text60 mtext20 font-bold capitalize lg:w-[41.8650793651vw] w-[89.744%] text-center mx-auto ">
        The Science Behind{" "}
        <span className="uppercase lg:text-vw120 lg:leading-[var(--vw120)] text-[40px] leading-[40px] text-[#286746] block">
          Ayusas
        </span>
      </h2>
      <div className="lg:mt-[var(--vw170)] mt-12 relative">
        <div className="lg:absolute lg:top-0 lg:left-0 relative w-full sm:h-[77.6923076923vw] h-[303px] lg:h-[65.6084656085vw] pointer-events-none">
          <Image
            fill
            alt="shape"
            src={
              "/images/product-double-strength/science-behind-ayusas/shape.png"
            }
            className="hidden lg:block"
          />
          <Image
            fill
            alt="shape"
            src={
              "/images/product-double-strength/science-behind-ayusas/mob_shape.png"
            }
            className="lg:hidden block"
          />
        </div>
        <div className="flex flex-wrap lg:gap-x-[14.8148148148vw] lg:gap-y-[36.044973545vw] gap-[30px] lg:pl-[var(--vw100)] lg:pr-[var(--vw67)] relative z-[2] lg:pt-[var(--vw172)] pt-14 lg:w-full mx-auto lg:mx-0 w-[89.744%]">
          <Content
            heading={"We Grow Our Own Herbs"}
            desc={
              "Our journey begins on sustainable farms where we grow herbs like Adulsa, Yashtimadhu, Kantakari, Tulsi, and Haldi, nurtured without harmful chemicals, just as nature intended."
            }
            wrapperClasses={"lg:w-[33.9947089947vw] lg:pt-[var(--vw68)]"}
          />
          <Content
            heading={"We Extract the Natural Actives"}
            desc={
              "Through our specialized Naturo-Active Extraction process, we gently draw out the most potent, beneficial compounds while preserving their natural strength, ensuring maximum health benefits."
            }
            wrapperClasses={"lg:w-[15.2777777778vw] ml-auto"}
          />
          <Content
            heading={"We Formulate It Into Our Syrup"}
            desc={
              "Our expert formulation process blends these natural actives into Sapat Ayusas Adulsa Cough Syrup. Carefully crafted for effectiveness, it delivers fast relief while staying true to its Ayurvedic roots."
            }
            wrapperClasses={"lg:w-[30.4232804233vw]"}
            headingWidth={"lg:w-[18.3121693122vw]"}
          />
          <Content
            heading={"Made Child-Safe"}
            desc={`Because we care for every member of your family, our syrup is made with child-safe considerations. It's free from harsh chemicals, non-drowsy, and crafted to be gentle yet effective, making it suitable for both kids and adults.`}
            wrapperClasses={
              "lg:w-[31.8783068783vw] lg:pt-[var(--vw97)] !border-0 !pb-0"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ScienceBehindAyusas;
