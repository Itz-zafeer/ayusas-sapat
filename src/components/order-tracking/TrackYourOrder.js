import React from "react";

const TrackYourOrder = () => {
  return (
    <div className="flex flex-col lg:gap-y-[var(--vw8)] gap-y-0.5 bg-green lg:pt-[calc(0.5*var(--vw12))] lg:pb-0 py-2">
      <div className="flex justify-between items-center lg:px-[var(--vw26)] px-5">
        <span className="lg:text24 mtext16 font-bold text-white w-full">
          Track Your Order
        </span>
        <img
          src="/images/icons/order_tracking_back_chevron.svg"
          alt="order_tracking_back_chevron"
          className="lg:w-[var(--vw120)] w-[58px] lg:min-w-[var(--vw120)] min-w-[58px]"
        />
      </div>
      <div className="bg-green lg:bg-[#9BB59E] lg:px-[var(--vw26)] px-5 lg:py-[var(--vw8)]">
        <span className="lg:text24 mtext16 text-white w-full">
          #123456 | Placed on March 18, 2025
        </span>
      </div>
    </div>
  );
};

export default TrackYourOrder;
