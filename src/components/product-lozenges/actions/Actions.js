import React from "react";
import Banner from "./Banner";
import Action from "./Action";
const actions = [
  {
    icon: "/images/product-lozenges/actions/icons/1.svg",
    desc: `<strong>Coats & Protects</strong> the throat, forming a soothing barrier to ease discomfort. `,
  },
  {
    icon: "/images/product-lozenges/actions/icons/2.svg",
    desc: `<strong>Soothes Irritation</strong>  with natural actives like amla, willow bark, and haldi, helping to calm inflammation.`,
  },
  {
    icon: "/images/product-lozenges/actions/icons/3.svg",
    desc: `<strong>Reduces dryness</strong>  by boosting saliva production and keeping the throat naturally hydrated.`,
  },
  {
    icon: "/images/product-lozenges/actions/icons/4.svg",
    desc: `<strong>Relieves pain</strong>  and discomfort, supporting faster recovery and lasting relief.`,
  },
];
const Actions = () => {
  return (
    <section>
      <div className="flex flex-wrap work_sans overflow-hidden">
        <Banner />
        <div className="lg:w-[57.540%] w-full lg:py-[var(--vw20)] py-10 relative bg-[#FF9C56] flex items-center">
          <img
            src="/images/product-lozenges/actions/art/2.png"
            alt="art"
            className="absolute lg:bottom-[-20%] sm:bottom-[-26%] bottom-[-12%] right-5 lg:w-[33.9947089947vw] w-[45%] pointer-events-none"
          />
          <div className="mx-auto lg:w-[85%] w-[89.744%] flex flex-col lg:gap-y-[var(--vw52)] gap-y-6">
            {actions.map((action, index) => (
              <Action key={index} action={action} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actions;
