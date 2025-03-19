import Image from "next/image";
import Link from "next/link";
import React from "react";

const ClinicalStudy = ({ clinicalStudy }) => {
  return (
    <Link href={"/"} className="block w-full">
      <div className="relative w-full lg:h-[17.5264550265vw] h-[242px] overflow-hidden">
        <div className="bg-white rounded-[20px] py-2 px-2.5 flex items-center gap-x-1.5 absolute top-0 left-0 lg:m-[28px] m-5 z-[2]">
          <div className="lg:size-[var(--vw17)] size-4 relative">
            <Image fill alt="search" src={"/images/icons/search.svg"} />
          </div>
          <span className="lg:text12 mtext10 font-medium text-darkblack">
            Research
          </span>
        </div>
        <div className="size-full">
          <Image
            fill
            alt="card_image"
            src={clinicalStudy.image}
            className="group-hover:scale-105 transition-all duration-500 ease-out object-cover"
          />
        </div>
      </div>
      <div className="lg:px-[var(--vw15)] lg:pb-[var(--vw48)] lg:pt-[var(--vw15)] px-[13px] pt-[13px] pb-9">
        <h5 className="lg:text40 font-bold text-[36px] leading-[36px] text-[#286746] uppercase">
          {clinicalStudy.heading}
        </h5>
        <div
          dangerouslySetInnerHTML={{ __html: clinicalStudy.desc }}
          className="lg:text14 mtext10 text-darkblack flex flex-col gap-3 mt-2"
        ></div>
      </div>
    </Link>
  );
};

export default ClinicalStudy;
