import Image from "next/image";
import Link from "next/link";
import React from "react";

const ClinicalStudy = ({ clinicalStudy }) => {
  return (
    <Link
      href={"/"}
      style={{ boxShadow: "0px 39.9px 42.62px 0px rgba(240, 247, 230, 0.46)" }}
      className="group lg:w-[23.2804232804vw] w-[318px] min-w-[318px] border border-[#9BB59E] lg:rounded-[var(--vw30)] rounded-[27px] overflow-hidden  whitespace-normal"
    >
      <div className="relative w-full lg:h-[17.5264550265vw] h-[242px] overflow-hidden">
        <Image
          fill
          alt="card_image"
          src={clinicalStudy.image}
          className="group-hover:scale-105 transition-all duration-500 ease-out object-cover"
        />
      </div>
      <div className="lg:px-[var(--vw15)] lg:pb-[var(--vw48)] lg:pt-[var(--vw15)] px-[13px] pt-[13px] pb-9">
        <h5 className="lg:text40 font-bold text-[36px] leading-[36px] text-[#286746]">
          {clinicalStudy.heading}
        </h5>
        <div
          dangerouslySetInnerHTML={{ __html: clinicalStudy.desc }}
          className="lg:text14 mtext10 text-darkblack flex flex-col gap-3"
        ></div>
      </div>
    </Link>
  );
};

export default ClinicalStudy;
