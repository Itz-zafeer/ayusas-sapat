import React from "react";
import Image from "next/image";

const Faq = ({ faq, index, activeFaq, setActiveFaq }) => {
  const isOpen = index === activeFaq;
  return (
    <details
      open={isOpen}
      className={`${
        isOpen ? "border-green" : "border-[#DEDEDE]"
      } lg:p-[var(--vw20)] lg:rounded-[var(--vw10)] sm:p-5 p-2.5 rounded-[10px] border cursor-pointer`}
    >
      <summary
        onClick={(e) => {
          e.preventDefault(); // Prevent default toggle behavior
          setActiveFaq(isOpen ? null : index);
        }}
        className="flex justify-between items-start lg:gap-x-[var(--vw20)] gap-3"
      >
        <h5 className="lg:text-vw22 lg:leading-[var(--vw28)] mtext14 leading-[21px] text-[#292220] font-medium">
          {faq?.question}
        </h5>
        <div
          className={`${
            isOpen ? "rotate-0" : "rotate-180"
          } transition relative lg:size-[var(--vw30)] lg:min-w-[var(--vw30)] size-[18px] min-w-[18px]`}
        >
          <Image fill alt="chevron" src={"/images/icons/faq_chevron.svg"} />
        </div>
      </summary>
      <div
        className={`${
          isOpen ? "opacity-100" : "opacity-0"
        } transition-opacity duration-700 ansdet lg:pt-[var(--vw20)] pt-2.5`}
      >
        <p className="lg:text16 lg:leading-[var(--vw24)] mtext12 leading-[18px] text-[#484848]">
          {faq?.answer}
        </p>
      </div>
    </details>
  );
};

export default Faq;
