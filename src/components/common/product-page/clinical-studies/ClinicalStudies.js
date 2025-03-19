"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useResponsivness from "@/hooks/useResponsivness";
import SwiperButtons from "@/components/common/SwiperButtons";
import ClinicalStudy from "./ClinicalStudy";
const clinicalStudies = [
  {
    image: "/images/product-double-strength/clinical-studies/1.jpg",
    heading: "Haldi",
    desc: `<p>Muralidharan, P., & Kaviarasan, S. (2019). Curcumin: A natural compound with multiple therapeutic effects. PMC6470457.</p>
    <p>Srivastava, R., & Srivastava, A. (2007). Curcumin and its therapeutic potential in treating respiratory diseases. PMC8990857.</p>`,
  },
  {
    image: "/images/product-double-strength/clinical-studies/2.jpg",
    heading: "Tulsi",
    desc: `<p>Patel, M., & Shah, S. (2020). The therapeutic role of Tulsi in managing respiratory illnesses. PMC9081385.</p>`,
  },
  {
    image: "/images/product-double-strength/clinical-studies/3.png",
    heading: "Licorice",
    desc: `<p>Tang, W., & Zhang, X. (2020). The role of Glycyrrhizin in respiratory conditions. PMC7010204.</p>
    <p>Xie, S., & Yang, J. (2017). Licorice and its effect on the respiratory system. PMC8703229.</p>`,
  },
  {
    image: "/images/product-double-strength/clinical-studies/4.jpg",
    heading: "Adulsa",
    desc: `<p>Singh, P., & Sood, R. (2021). Role of Adhatoda vasica in the treatment of respiratory diseases. PMC10589634.</p>`,
  },
  {
    image: "/images/product-double-strength/clinical-studies/5.jpg",
    heading: "Kantakari",
    desc: `<p>Chandra, S., & Mishra, S. (2019). Kantakari and its application in treating bronchial issues. PMC7020239.</p>
    <p>Kumar, P., & Mehta, S. (2014). Exploring the bronchial benefits of Kantakari in respiratory disorders. PMC4078473.</p>`,
  },
];

const ClinicalStudies = ({ noPadding, headingColor, headingPosition }) => {
  const clinicalStudiesSwiper = useRef(null);
  const { isDesktop, isTablet } = useResponsivness();
  const [swiperGap, setSwiperGap] = useState(0);

  useEffect(() => {
    function updateGap() {
      setSwiperGap(
        window.innerWidth >= 1025
          ? (window.innerWidth / 100) * 3.30687830688
          : window.innerWidth >= 641
          ? 25
          : 14
      );
    }
    updateGap();
    window.addEventListener("resize", updateGap);
    return () => window.removeEventListener("resize", updateGap);
  }, []);

  return (
    <section>
      <div
        className={`${
          noPadding
            ? ""
            : " lg:pt-[var(--vw140)] pt-[60px] lg:pb-[var(--vw150)] pb-9"
        }`}
      >
        <h2
          className={`${headingColor ? headingColor : "text-darkblack"} ${
            headingPosition ? headingPosition : "text-start"
          } text60  myContainer mx-auto text-center italic !font-semibold`}
        >
          Clinical Studies
        </h2>

        <div className="relative lg:mt-[var(--vw24)] mt-6">
          <Swiper
            grabCursor={isDesktop && clinicalStudies.length > 4}
            onSwiper={(swiper) => (clinicalStudiesSwiper.current = swiper)}
            navigation
            modules={[Navigation]}
            spaceBetween={swiperGap}
            slidesPerView={"auto"}
            className="px-4 lg:px-0"
          >
            {clinicalStudies.map((clinicalStudy, index) => (
              <SwiperSlide
                key={index}
                style={{
                  boxShadow: "0px 44px 47px 0px rgba(240, 247, 230, 0.46)",
                }}
                className="group lg:!w-[23.2804232804vw] !w-[318px] border border-[#9BB59E] lg:rounded-[var(--vw30)] rounded-[27px] overflow-hidden bg-white h-auto"
              >
                <ClinicalStudy key={index} clinicalStudy={clinicalStudy} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper Buttons - Now handles visibility automatically */}
          {(isDesktop && clinicalStudies.length > 3) ||
          (isTablet && clinicalStudies.length > 2) ||
          (!isDesktop && clinicalStudies.length > 1) ? (
            <SwiperButtons
              swiperRef={clinicalStudiesSwiper}
              colors={"text-white bg-black"}
              positionY={"transform top-1/2 -translate-y-1/2"}
              settingPrev={"left-10"}
              settingNext={"right-10"}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ClinicalStudies;
