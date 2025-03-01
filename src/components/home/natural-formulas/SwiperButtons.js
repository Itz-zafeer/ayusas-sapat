import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SwiperButtons = ({ productShowcaseSwiper, isBeginning, isEnd }) => {
  return (
    <>
      <button
        className={`absolute left-10 top-1/2 transform -translate-y-1/2 z-[2] bg-yellow text-white p-3 rounded-full shadow-md transition-opacity ${
          isBeginning ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => productShowcaseSwiper.current?.slidePrev()}
        disabled={isBeginning}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        className={`absolute right-10 top-1/2 transform -translate-y-1/2 z-[2] bg-yellow text-white p-3 rounded-full shadow-md transition-opacity ${
          isEnd ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => productShowcaseSwiper.current?.slideNext()}
        disabled={isEnd}
      >
        <ChevronRight size={20} />
      </button>
    </>
  );
};

export default SwiperButtons;
