import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-green flex justify-between items-center lg:px-[var(--vw46)] lg:py-[var(--vw24)] px-5 py-[14.5px]">
      <span className="lg:text24 mtext16 text-white font-bold">
        Shopping Cart
      </span>
      <button className="lg:size-[var(--vw35)] size-5 relative">
        <Image fill alt="close_icon" src={"/images/icons/close.svg"} />
      </button>
    </div>
  );
};

export default Header;
