import React from "react";
import Rating from "./Rating";
import Content from "./Content";
import TreatmentFeatures from "./treatment-features/TreatmentFeatures";
import Milestones from "./milestones/Milestones";
import PricingOptions from "./pricing-options/PricingOptions";
import LinkBtn from "@/components/common/buttons/LinkButton";

const Details = ({ content, treatmentFeatures, tags }) => {
  return (
    <div className="lg:w-[44.0476190476vw] px-5 lg:px-0">
      <Rating />
      <Content content={content} />
      <TreatmentFeatures treatmentFeatures={treatmentFeatures} />
      <Milestones />
      <div className="lg:mt-[var(--vw12)] mt-5 flex flex-col lg:gap-[var(--vw12)] gap-3">
        <div className="flex lg:gap-[var(--vw88)] gap-[88px] lg:text20 mtext18 leading-[28px] lg:leading-[var(--vw28)]">
          <span className="font-semibold text-darkblack underline underline-offset-8">
            Ingredients
          </span>
          <span className="font-medium text-c818080">How to take</span>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: tags }}
          className="hero_tags"
        ></div>
      </div>
      <PricingOptions />
      <div className="flex flex-wrap items-center lg:gap-1.5 gap-2 text-black lg:mt-[var(--vw26)] mt-9">
        <span className="lg:text20 mtext14 line-through">Rs.999</span>
        <span className="lg:text30 mtext22 font-bold">Rs.649</span>
        <span className="lg:text20 mtext14 font-medium">Inc. of all taxes</span>
        <div className="relative flex justify-center items-center lg:px-[var(--vw24)] px-[19px] lg:py-1.5 py-[4.5px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="atlwh_Full"
            viewBox="0 0 112 33"
            fill="none"
          >
            <path
              d="M12.8962 4.5697C13.5778 3.29167 14.897 2.48197 16.3452 2.45286L107.875 0.613064C110.627 0.557758 112.611 3.23298 111.759 5.84996L103.986 29.7377C103.45 31.385 101.915 32.5 100.183 32.5H4.66666C1.64698 32.5 -0.283772 29.2821 1.13725 26.6176L12.8962 4.5697Z"
              fill="#F83535"
            />
          </svg>
          <span className="relative z-[2] text-white lg:text16 lg:leading-[var(--vw21)] text-[13px] leading-[17px] font-extrabold">
            35% OFF
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-stretch lg:gap-[var(--vw28)] gap-[18px] lg:mt-[var(--vw18)] mt-[18px]">
        <LinkBtn
          text={"ADD TO CART"}
          link={"/"}
          fontSizes={"lg:text20 mtext14"}
          gapping={
            "lg:py-[var(--vw19)] py-[13px] lg:px-[var(--vw75)] px-[36px]"
          }
          colors={"bg-e0e0e0 text-darkblack"}
        />
        <LinkBtn
          text={"BUY NOW"}
          link={"/"}
          fontSizes={"lg:text20 mtext14"}
          gapping={
            "lg:py-[var(--vw19)] py-[13px] lg:px-[var(--vw75)] px-[36px]"
          }
          colors={"bg-green text-white"}
        />
      </div>
    </div>
  );
};

export default Details;
