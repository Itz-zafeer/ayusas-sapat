import Image from "next/image";
import React from "react";
import KeyPoints from "./key-points/KeyPoints";

const TrustedByDoctors = () => {
  return (
    <section className="bg-darkgreen lg:pt-[var(--vw134)] pt-16">
      <div className="flex flex-col items-center">
        <h2 className="myContainer text-center lg:text-vw80 lg:leading-[var(--vw100)] mtext24 capitalize text-white lg:w-[72.4206349206vw] font-semibold">
          Trusted by <span className="text-yellow">DOCTORS</span> for its fast
          and effective action
        </h2>
        <div className="relative lg:size-[65.4100529101vw] size-[95.8974358974vw] sm:size-[374px] lg:mt-[var(--vw19)] lg:mb-0 mt-[22px] mb-10">
          <Image
            fill
            alt="doctor"
            src={
              "/images/product-double-strength/trusted-by-doctors/doctor.svg"
            }
          />
        </div>
        <KeyPoints />
      </div>
    </section>
  );
};

export default TrustedByDoctors;
