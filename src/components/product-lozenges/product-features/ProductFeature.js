import React from "react";
import Image from "next/image";

const ProductFeature = ({ productFeature }) => {
  return (
    <div className="flex flex-col gap-y-4 items-center text-center lg:w-[18%] w-[47%]">
      <div className="relative lg:size-[var(--vw190)] size-20">
        <Image alt="icon" fill src={productFeature.icon} />
      </div>
      <div className="w-full bg-white lg:p-[var(--vw8)] p-2 rounded-2xl">
        <span className="uppercase lg:text20 mtext16 font-bold text-[#F15A29]">
          {productFeature.title}
        </span>
      </div>
    </div>
  );
};

export default ProductFeature;
