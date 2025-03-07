import Image from "next/image";
import React from "react";
const formulations = [
  {
    icon: "/images/our-story/formulations-apart/icons/1.svg",
    heading: "Pure & Safe",
    desc: "All formulations are free from parabens and harmful chemicals making it child-safe.",
  },
  {
    icon: "/images/our-story/formulations-apart/icons/2.svg",
    heading: "Commitment to nature",
    desc: "Ensuring only pure ingredients are used with no artificial additives.",
  },
  {
    icon: "/images/our-story/formulations-apart/icons/3.svg",
    heading: "Ayurveda meets science",
    desc: "A perfect blend of ancient wisdom and modern research, ensuring fast relief without compromising safety.",
  },
  {
    icon: "/images/our-story/formulations-apart/icons/4.svg",
    heading: "Standardized Natural actives",
    desc: "We use potent natural actives that not only ensure quick relief but also long-term respiratory support",
  },
];
const FormulationsApart = () => {
  return (
    <section>
      <div className={`flex items-stretch flex-wrap w-full`}>
        <div
          className={` lg:w-[50%] w-full bg-darkgreen lg:py-[var(--vw142)] py-16`}
        >
          <div className="lg:w-[39.7486772487vw] w-[89.744%] mx-auto">
            <h2 className="text50 !font-semibold text-yellow uppercase">
              What Sets Our Formulations Apart?
            </h2>
            <ul className="flex flex-col lg:gap-y-[var(--vw80)] gap-y-10 lg:mt-[var(--vw82)] mt-[30px]">
              {formulations.map((formulation, index) => (
                <li
                  key={index}
                  className="flex items-start lg:gap-x-[var(--vw30)] gap-x-5"
                >
                  <div className="relative lg:size-[var(--vw54)] size-[30px] lg:min-w-[var(--vw54)] min-w-[30px]">
                    <Image fill alt="icon" src={formulation.icon} />
                  </div>
                  <div className="flex flex-col lg:gap-y-[var(--vw14)] gap-y-[14px] text-white">
                    <h6 className="lg:text28 mtext20 font-semibold">
                      {formulation.heading}
                    </h6>
                    <p className="lg:text20 mtext16">{formulation.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={` lg:w-[50%] w-full relative lg:min-h-[77.380952381vw] h-[592px] lg:h-[unset]`}
        >
          <Image
            fill
            alt="banner"
            src={"/images/our-story/formulations-apart/banner.jpg"}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FormulationsApart;
