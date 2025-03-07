import Image from "next/image";
import React from "react";

const ExperiencePower = () => {
  return (
    <section>
      <div className="flex items-stretch flex-wrap">
        <div className="lg:w-[45.040%] bg-f5eee1 lg:py-[var(--vw176)] px-5 lg:px-[var(--vw100)] pt-[80px] pb-[50px]">
          <div className="lg:w-[28.0423280423vw] w-[99%]">
            <div className="lg:size-[var(--vw121)] size-[97px] relative">
              <Image
                fill
                alt="banner"
                src={"/images/our-story/experience-power/logo.svg"}
                className="object-cover"
              />
            </div>
            <h2 className="lg:text60 mtext30 font-bold lg:my-[var(--vw26)] mt-6 mb-3">
              Experience the Power of AYUSAS
            </h2>
            <p className="lg:text26 lg:leading-[var(--vw34)] mtext16 text-[#030303]">
              Ayusas is more than just a brand—it’s a journey back to our roots,
              to a time when nature was the best healer. With clean, natural,
              and Ayurvedic-backed formulations, we bring you the easiest way to
              enjoy the benefits of powerful herbs every day.
            </p>
          </div>
        </div>
        <div className="lg:w-[54.961%] relative lg:min-h-[68.253968254vw] w-full sm:h-[62.384615385vw] h-[489px] lg:h-[unset]">
          <Image
            fill
            alt="banner"
            src={"/images/our-story/experience-power/banner.jpg"}
            className="object-cover hidden lg:block"
          />
          <Image
            fill
            alt="banner"
            src={"/images/our-story/experience-power/mob_banner.jpg"}
            className="object-cover lg:hidden block"
          />
        </div>
      </div>
    </section>
  );
};

export default ExperiencePower;
