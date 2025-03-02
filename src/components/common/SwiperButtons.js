import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SwiperButtons = ({
  swiperRef,
  colors,
  positionY,
  settingPrev,
  settingNext,
}) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;

    // Update state when Swiper slides change
    const updateState = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    updateState();
    swiper.on("slideChange", updateState);

    return () => {
      swiper.off("slideChange", updateState);
    };
  }, [swiperRef]);

  return (
    <>
      <button
        className={`absolute ${settingPrev} ${positionY} z-[2] p-3 rounded-full shadow-md transition-opacity ${colors} hidden lg:block ${
          isBeginning ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isBeginning}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        className={`absolute ${settingNext} ${positionY} z-[2] p-3 rounded-full shadow-md transition-opacity ${colors} hidden lg:block ${
          isEnd ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
      >
        <ChevronRight size={20} />
      </button>
    </>
  );
};

export default SwiperButtons;
