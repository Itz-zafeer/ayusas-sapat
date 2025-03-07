import LinkBtn from "@/components/common/buttons/LinkButton";
import Image from "next/image";
import React from "react";

const Card = ({ product }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="h-full bg-white text-darkblack w-full lg:py-[var(--vw50)] py-9 inter lg:rounded-[var(--vw30)] overflow-hidden rounded-[20px] border border-[#9BB59E]">
        <div className="relative lg:w-[var(--vw151)] lg:h-[var(--vw190)] w-[151px] h-[190px] mx-auto">
          <Image fill alt="product_image" src={product.image} />
        </div>
        <div className="lg:px-[var(--vw12)] px-3 lg:mt-[var(--vw34)] mt-6">
          <h4 className="lg:text-vw17 lg:leading-[var(--vw20)] text-[17px] leading-[20px] font-semibold">
            {product.title}
          </h4>
          <p className="lg:text14 sm:mtext14 text-[14px] leading-[14.5px] lg:mt-[var(--vw10)] mt-3">
            {product.desc}
          </p>
        </div>
      </div>
      <div className="text-center lg:mt-[calc(-1*var(--vw31))] -mt-6 lg:w-full w-[94.101%] mx-auto">
        <LinkBtn
          text={"ADD TO CART"}
          link={"/"}
          gapping={"px-0 lg:py-[var(--vw19)] py-[13.5px]"}
          fontSizes={"lg:text18 mtext18"}
        />
      </div>
    </div>
  );
};

export default Card;
