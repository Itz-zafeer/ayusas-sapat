"use client";
import React, { useState } from "react";
import Faq from "./Faq";

const Faqs = ({ data }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  return (
    <section className="lg:pt-[var(--vw136)] lg:pb-[var(--vw185)] py-11">
      <div className="myContainer lg:w-[46.164021164vw]">
        <h2 className="lg:text60 mtext30 font-bold text-darkblack text-center">
          FAQs
        </h2>
        <div className="flex flex-col lg:gap-y-[var(--vw21)] sm:gap-y-5 gap-y-2.5 lg:mt-[var(--vw45)] mt-5 poppins">
          {data?.map((faq, index) => (
            <Faq
              key={index}
              index={index}
              faq={faq}
              activeFaq={activeFaq}
              setActiveFaq={setActiveFaq}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
