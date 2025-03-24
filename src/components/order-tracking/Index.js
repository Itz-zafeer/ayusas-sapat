import React from "react";
import TrackYourOrder from "./TrackYourOrder";
import Image from "next/image";
import Procedures from "./procedures/Procedures";
import FreeConsultation from "./free-consultation/FreeConsultation";
import NeedHelp from "./need-help/NeedHelp";

const OrderTrackingPage = () => {
  return (
    <div className="lg:w-[47.2883597884vw] mx-auto w-full lg:my-[var(--vw200)] my-[30.7692307692vw] bg-[#EFFBF2]">
      <TrackYourOrder />
      <div className="lg:w-[41.2037037037vw] lg:h-[19.7751322751vw] w-[91.795%] h-[44.1025641026vw] relative mx-auto lg:mb-[var(--vw90)] mb-[70px] lg:mt-[var(--vw58)] mt-14">
        <Image fill alt="banner" src={"/images/order-tracking/banner.png"} />
      </div>
      <Procedures />
      <FreeConsultation />
      <NeedHelp />
    </div>
  );
};

export default OrderTrackingPage;
