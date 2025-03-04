import React from "react";
import ClinicalStudy from "./ClinicalStudy";
const clinicalStudies = [
  {
    image: "/images/product-double-strength/clinical-studies/1.jpg",
    heading: "Haldi",
    desc: `<p>Muralidharan, P., & Kaviarasan, S. (2019). Curcumin: A natural compound with multiple therapeutic effects. PMC6470457.</p>
    <p>Srivastava, R., & Srivastava, A. (2007). Curcumin and its therapeutic potential in treating respiratory diseases. PMC8990857.</p>`,
  },
  {
    image: "/images/product-double-strength/clinical-studies/2.jpg",
    heading: "Tulsi",
    desc: `<p>Patel, M., & Shah, S. (2020). The therapeutic role of Tulsi in managing respiratory illnesses. PMC9081385.</p>`,
  },
  {
    image: "/images/product-double-strength/clinical-studies/3.png",
    heading: "Licorice",
    desc: `<p>Tang, W., & Zhang, X. (2020). The role of Glycyrrhizin in respiratory conditions. PMC7010204.</p>
    <p>Xie, S., & Yang, J. (2017). Licorice and its effect on the respiratory system. PMC8703229.</p>`,
  },
  {
    image: "/images/product-double-strength/clinical-studies/4.jpg",
    heading: "Adulsa",
    desc: `<p>Singh, P., & Sood, R. (2021). Role of Adhatoda vasica in the treatment of respiratory diseases. PMC10589634.</p>`,
  },
  {
    image: "/images/product-double-strength/clinical-studies/5.jpg",
    heading: "Kantakari",
    desc: `<p>Chandra, S., & Mishra, S. (2019). Kantakari and its application in treating bronchial issues. PMC7020239.</p>
    <p>Kumar, P., & Mehta, S. (2014). Exploring the bronchial benefits of Kantakari in respiratory disorders. PMC4078473.</p>`,
  },
];

const ClinicalStudies = () => {
  return (
    <section>
      <div className="lg:pt-[var(--vw140)] pt-[60px] lg:pb-[var(--vw150)] pb-9">
        <h2 className="text60 text-darkblack myContainer mx-auto text-center">
          Clinical Studies
        </h2>
        <div className="flex w-full whitespace-nowrap lg:whitespace-nowrap overflow-auto hideScroll px-5 lg:px-0 lg:flex-wrap lg:justify-center lg:gap-[var(--vw50)] gap-[14px] lg:mt-[var(--vw60)] mt-6">
          {clinicalStudies.map((clinicalStudy, index) => (
            <ClinicalStudy key={index} clinicalStudy={clinicalStudy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicalStudies;
