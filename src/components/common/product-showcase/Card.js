import Image from "next/image";
import React from "react";
import LinkBtn from "../buttons/LinkButton";

const Card = ({ product }) => {
  return (
    <div className="flex flex-col">
      <div className="h-full bg-white text-darkblack w-full lg:py-[var(--vw50)] py-9 inter lg:rounded-[var(--vw30)] overflow-hidden rounded-[20px] border border-[#9BB59E]">
        <div className="relative lg:w-[var(--vw178)] lg:h-[15.0793650794vw] w-[141px] h-[181px] mx-auto">
          <Image fill alt="product_image" src={product.image} />
        </div>
        <div className="lg:px-[var(--vw16)] px-4 lg:mt-[var(--vw36)] mt-6">
          <h4 className="lg:text20 text-[15px] leading-[17px] font-semibold">
            {product.title}
          </h4>
          <p className="lg:text16 mtext12 leading-[14.5px] lg:mt-[var(--vw10)] mt-3">
            {product.desc}
          </p>
        </div>
      </div>
      <div className="text-center lg:mt-[calc(-1*var(--vw31))] -mt-6 lg:w-[18.7169312169vw] w-[80.322%] mx-auto">
        <LinkBtn
          text={"ADD TO CART"}
          link={"/"}
          gapping={"px-0 lg:py-[var(--vw19)] py-[13.5px]"}
          fontSizes={"lg:text20 mtext14"}
        />
      </div>
    </div>
  );
};

export default Card;
