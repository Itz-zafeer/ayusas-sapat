import React from "react";

const Banner = () => {
  return (
    <div className="flex bg-green lg:py-[var(--vw15)] py-[7px]">
      <span className="lg:text18 mtext12 text-white lg:w-[43.5185185185vw] w-[89.744%] mx-auto">
        Add products of <span className="text-yellow font-bold">₹ 199</span> to
        get <span className="text-yellow font-bold">50% Off</span>
      </span>
    </div>
  );
};

export default Banner;
