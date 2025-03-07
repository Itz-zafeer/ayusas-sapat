import React from "react";
import Image from "next/image";
import BackGrounds from "./backgrounds/BackGrounds";

const FreeConsultation = () => {
  return (
    <div className="relative bg-[#FFE8AD]">
      <BackGrounds />
      <div className="flex items-end lg:items-center lg:gap-x-[var(--vw140)] gap-x-[53px] relative z-[2] lg:px-[var(--vw60)] sm:px-16 px-5">
        <div className="flex flex-col w-[48.572%] lg:w-[unset] text-darkblack lg:py-[var(--vw25)] sm:py-10 py-[18.5px]">
          <span className="lg:text24 mtext14 font-bold uppercase">
            Free consultation
          </span>
          <span className="lg:text24 mtext14">with our</span>
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
        <div className="relative z-[1] lg:w-[10.9788359788vw] lg:h-[10.2513227513vw] sm:w-[100px] sm:h-[106px] w-[82px] h-[88px]">
          <Image
            fill
            alt="doctor"
            src={"/images/checkout/consultation/doctor/doctor.png"}
            className="hidden lg:block"
          />
          <Image
            fill
            alt="doctor"
            src={"/images/checkout/consultation/doctor/doctor.png"}
            className="lg:hidden block"
          />
        </div>
      </div>
    </div>
  );
};

export default FreeConsultation;
