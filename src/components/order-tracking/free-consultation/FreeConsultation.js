import React from "react";
import Image from "next/image";
import BackGrounds from "./backgrounds/BackGrounds";

const FreeConsultation = () => {
  return (
    <div className="relative bg-[#FFE8AD]">
      <BackGrounds />
      <div className="flex items-end lg:items-center lg:gap-x-[var(--vw82)] gap-x-[81px] relative z-[2] lg:px-[var(--vw20)] sm:px-16 px-5">
        <div className="flex flex-col w-[48.572%] lg:w-[unset] text-darkblack lg:py-[var(--vw25)] sm:py-10 py-[18.5px]">
          <span className="lg:text20 mtext14 font-bold uppercase">
            Free consultation
          </span>
          <span className="lg:text20 mtext14">with our</span>
          <span
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#F1B315",
            }}
            className="lg:text30 mtext20 font-bold uppercase text-[#059212]"
          >
            Nutritionist
          </span>
        </div>
        <div className="relative z-[1] lg:w-[var(--vw200)] lg:h-[15.0793650794vw] sm:w-[25.641025641vw] sm:h-[27.1794871795vw] w-[82px] h-[88px]">
          <Image
            fill
            alt="doctor"
            src={"/images/order-tracking/consultation/doctor/doctor.png"}
            className="hidden lg:block"
          />
          <Image
            fill
            alt="doctor"
            src={"/images/order-tracking/consultation/doctor/doctor.png"}
            className="lg:hidden block"
          />
        </div>
      </div>
    </div>
  );
};

export default FreeConsultation;
