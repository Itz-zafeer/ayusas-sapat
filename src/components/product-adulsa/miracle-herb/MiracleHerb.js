import React from "react";
import BackGrounds from "./BackGrounds";
import Image from "next/image";
import CircularInfoCard from "./CircularInfoCard";
const cards = [
  {
    icon: "/images/product-adulsa/miracle-herb/new-icons/1.svg",
    desc: "Helps dilute thick & sticky mucus ",
    boxWidth: "w-full sm:w-[47%] lg:w-[20.8994708995vw]",
    iconClasses:
      "size-14 sm:size-20 sm:-bottom-2 bottom-0 lg:size-[11.3756613757vw] lg:-bottom-[var(--vw34)]",
  },
  {
    icon: "/images/product-adulsa/miracle-herb/new-icons/2.svg",
    desc: "Breaks down mucus",
    boxWidth: "w-full sm:w-[47%] lg:w-[23.7433862434vw]",
    iconClasses:
      "size-14 sm:size-20 sm:-bottom-2 bottom-0 lg:size-[10.119047619vw] bottom-0",
  },
  {
    icon: "/images/product-adulsa/miracle-herb/new-icons/3.svg",
    desc: "Helps tiny hair sweep the mucus out",
    boxWidth: "w-full sm:w-[47%] lg:w-[24.2724867725vw]",
    iconClasses:
      "size-14 sm:size-20 sm:-bottom-2 bottom-0 lg:size-[9.58994708995vw] lg:-bottom-[var(--vw13)]",
  },
  {
    icon: "/images/product-adulsa/miracle-herb/new-icons/4.svg",
    desc: "Improves airflow",
    boxWidth: "w-full sm:w-[47%] lg:w-[20.8994708995vw]",
    iconClasses:
      "size-14 sm:size-20 sm:-bottom-2 bottom-0 lg:size-[9.72222222222vw] lg:-bottom-[var(--vw12)]",
  },
  {
    icon: "/images/product-adulsa/miracle-herb/new-icons/5.svg",
    desc: "Mucus is cleared & cough reflex stops",
    boxWidth: "w-full sm:w-[47%] lg:w-[23.7433862434vw]",
    iconClasses:
      "size-14 sm:size-20 sm:-bottom-2 bottom-0 lg:size-[8.06878306878vw] lg:-bottom-[var(--vw11)]",
  },
];
const MiracleHerb = () => {
  return (
    // <section className="relative overflow-hidden">
    //   <BackGrounds />
    //   <div className="relative z-[5] lg:pt-[var(--vw110)] pt-9">
    //     <h2 className="text60 lg:myContainer mx-auto w-[77.744%] text-center text-white capitalize">
    //       Why is Adulsa the miracle herb?
    //     </h2>
    //     <div className="relative lg:w-[91.0052910053vw] w-[94.103%] mx-auto lg:mt-[37.6984126984vw] mt-[48.4615384615vw]">
    //       <div className="lg:w-[25.7275132275vw] lg:h-[27.5132275132vw] w-[57.6923076923vw] h-[57.9487179487vw] relative mx-auto lg:mb-[calc(0.5*var(--vw12))]">
    //         <Image
    //           fill
    //           alt="hand"
    //           src={"/images/product-adulsa/miracle-herb/leaf.png"}
    //           className="hidden lg:block"
    //         />
    //         <Image
    //           fill
    //           alt="hand"
    //           src={"/images/product-adulsa/miracle-herb/mob_leaf.png"}
    //           className="lg:hidden block"
    //         />
    //       </div>
    //       <div className="absolute lg:w-[55.291005291vw] lg:h-[27.2486772487vw] w-[66.6666666667vw] h-[35.1282051282vw] lg:-top-[15.6746031746vw] top-[-17.4358974359vw] left-1/2 -translate-x-1/2">
    //         <div className="atlwh_Full">
    //           <Image
    //             fill
    //             alt="curve"
    //             src={"/images/product-adulsa/miracle-herb/curve.svg"}
    //             className="hidden lg:block"
    //           />
    //           <Image
    //             fill
    //             alt="curve"
    //             src={"/images/product-adulsa/miracle-herb/mob_curve.svg"}
    //             className="lg:hidden block"
    //           />
    //         </div>
    //         <CircularInfoCard
    //           heading={"1"}
    //           desc={"Helps dilute the thick & sticky mucus"}
    //           wrapperClasses={
    //             "lg:w-[unset] w-[24.1025641026vw] flex-col items-center lg:flex-row-reverse lg:items-start lg:text-end lg:-bottom-[var(--vw90)] lg:-left-[18.5185185185vw] bottom-[-23.0769230769vw] left-[-12.8205128205vw]"
    //           }
    //           image={"/images/product-adulsa/miracle-herb/cards-images/1.jpg"}
    //           contentWrapperClasses={
    //             "w-[24.1025641026vw] lg:w-[15.1455026455vw]"
    //           }
    //         />
    //         <CircularInfoCard
    //           heading={"2"}
    //           desc={"Breaks down mucus"}
    //           wrapperClasses={
    //             "flex-row-reverse lg:gap-[var(--vw20)] !gap-0 items-end lg:items-start lg:text-end lg:bottom-[var(--vw200)] lg:-left-[21.8253968254vw] bottom-[17.9487179487vw] left-[-12.8205128205vw]"
    //           }
    //           image={"/images/product-adulsa/miracle-herb/cards-images/2.jpg"}
    //           contentWrapperClasses={
    //             "w-[18.9743589744vw] lg:w-[24.8677248677vw]"
    //           }
    //         />
    //         <CircularInfoCard
    //           heading={"3"}
    //           desc={"Helps tiny hair sweep the mucus out"}
    //           wrapperClasses={
    //             "flex-col-reverse lg:w-[22.4867724868vw] items-center text-center lg:top-[-17.1957671958vw] top-[-21.0256410256vw] left-1/2 -translate-x-1/2"
    //           }
    //           image={"/images/product-adulsa/miracle-herb/cards-images/3.jpg"}
    //         />
    //         <CircularInfoCard
    //           heading={"4"}
    //           desc={"Improves airflow"}
    //           wrapperClasses={
    //             "items-center lg:items-start lg:text-start lg:bottom-[var(--vw200)] lg:-right-[14.5502645503vw] bottom-[15.3846153846vw] right-[-15.3846153846vw]"
    //           }
    //           image={"/images/product-adulsa/miracle-herb/cards-images/4.jpg"}
    //           contentWrapperClasses={
    //             "w-[16.4102564103vw] lg:w-[16.4682539683vw] lg:items-start lg:text-start"
    //           }
    //         />
    //         <CircularInfoCard
    //           heading={"5"}
    //           desc={"Mucus is cleared and cough reflex stops"}
    //           wrapperClasses={
    //             "flex-col w-[18.4615384615vw] lg:w-[unset] lg:flex-row lg:items-start lg:text-start lg:-bottom-[var(--vw160)] lg:-right-[16.5343915344vw] bottom-[-25.641025641vw] right-[-12.3076923077vw]"
    //           }
    //           image={"/images/product-adulsa/miracle-herb/cards-images/5.jpg"}
    //           contentWrapperClasses={
    //             "w-[18.4615384615vw] lg:w-[13.3597883598vw] lg:items-start lg:text-start"
    //           }
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="lg:pb-[var(--vw90)] pb-20">
      <div className="lg:w-[76.5873015873vw] w-[89.744%] mx-auto flex flex-col items-center">
        <div className="bg-darkgreen lg:rounded-[var(--vw100)] rounded-[100px] lg:px-[var(--vw48)] lg:py-[var(--vw8)] px-5 py-3">
          <p className="lg:text-vw45 lg:leading-[var(--vw50)] font-light text-white">
            <span className="font-bold">Adulsa:</span> The Miracle Herb That
            Heals Naturally!
          </p>
        </div>
        <div className="flex flex-wrap justify-center lg:gap-[var(--vw55)] gap-4 lg:mt-[var(--vw90)] mt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.boxWidth ? card.boxWidth : ""} relative lg:px-[var(--vw20)] lg:pt-[var(--vw30)] lg:pb-[var(--vw102)] px-4 pt-6 pb-12 sm:pb-16 bg-darkgreen lg:rounded-[var(--vw20)] rounded-[20px]`}
            >
              <div className="flex items-center lg:gap-[var(--vw10)] gap-2.5 text-white">
                <span className="text70">1</span>
                <p className="lg:text-vw27 lg:leading-[var(--vw29)] mtext18">
                  {card.desc}
                </p>
              </div>
              <div
                className={`absolute right-0 ${card.iconClasses ? card.iconClasses : ""}`}
              >
                <Image fill alt="icon" src={card.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiracleHerb;
