import Image from "next/image";
import React from "react";
import LinkBtn from "../buttons/LinkButton";

const Card = ({ product }) => {
  return (
    <div>
      <div className="w-full lg:py-[var(--vw50)] py-[22px] inter">
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
      <div className="text-center">
        <LinkBtn
          text={"ADD TO CART"}
          link={"/"}
          gapping={"px-0 lg:py-[var(--vw17)]"}
        />
      </div>
    </div>
  );
};

export default Card;
