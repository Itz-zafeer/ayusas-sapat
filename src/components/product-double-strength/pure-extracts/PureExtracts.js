import React from "react";
import Content from "./Content";
import Image from "next/image";

const PureExtracts = () => {
  return (
    <section className="bg-f5eee1 lg:pt-[var(--vw84)] pt-[57px]">
      <div className="myContainer">
        <Content />
        <div className="lg:w-[70.378307vw] mx-auto flex justify-between relative lg:pb-[var(--vw133)] pb-[18.4615384615vw]">
          <ul
            className={`flex flex-col items-start lg:w-[19.6428571429vw] w-[34.6153846154vw] lg:pt-[var(--vw104)] pt-[18.9743589744vw]`}
          >
            <li className="flex flex-col items-start w-full relative">
              <span className="hidden bg-[#00000075] h-[3px] lg:w-[27.399471vw] lg:block absolute lg:top-[var(--vw30)] top-0 lg:right-[-12.148148vw]"></span>
              <img
                src="/images/product-double-strength/pure-extracts/mob-shapes/1.png"
                alt=""
                className="absolute top-[2.5vw] right-0 block lg:hidden w-[23.8461538462vw]"
              />
              <span
                className="lg:text40 mtext16 font-bold bg-f5eee1 relative z-[2] lg:pr-[var(--vw12)] pr-2 
                    inline-block break-words whitespace-normal"
              >
                Adulsa
              </span>
              <div className="lg:text18 mtext12 text-darkblack lg:mt-[var(--vw10)] mt-1">
                (Vasicine) <br /> Relaxes the airways
              </div>
            </li>
            <li className="flex flex-col items-start w-full relative lg:mt-[var(--vw106)] mt-[18.4615384615vw]">
              <span className="bg-[#00000075] h-[3px] lg:w-[27.399471vw] block absolute lg:top-[var(--vw30)] top-0 lg:right-[-12.148148vw]"></span>
              <span
                className="lg:text40 mtext16 font-bold bg-f5eee1 relative z-[2] lg:pr-[var(--vw12)] 
                    inline-block break-words whitespace-normal"
              >
                Ashwagandha
              </span>
              <div className="lg:text18 mtext12 text-darkblack lg:mt-[var(--vw10)] mt-1">
                (Withaferin) <br /> Reduces stress & <br /> supports immunity
              </div>
            </li>
            <li className="flex flex-col items-start w-full relative lg:mt-[var(--vw60)] mt-[10vw]">
              <span className="bg-[#00000075] h-[3px] lg:w-[27.399471vw] block absolute lg:top-[var(--vw30)] top-0 lg:right-[-12.148148vw]"></span>
              <span
                className="lg:text40 mtext16 font-bold bg-f5eee1 relative z-[2] lg:pr-[var(--vw12)] 
                    inline-block break-words whitespace-normal"
              >
                Haldi
              </span>
              <div className="lg:text18 mtext12 text-darkblack lg:mt-[var(--vw10)] mt-1">
                (curcumin) <br /> Reduces Inflammation
              </div>
            </li>
          </ul>

          <div className="absolute z-[2] left-[16.1538461538vw] lg:left-1/2 lg:-translate-x-1/2 lg:w-[45.8333333333vw] lg:h-[53.7037037037vw] h-[65.8974358974vw] w-[62.572%] lg:-top-[var(--vw95)] top-[24.358974359vw]">
            <Image
              fill
              alt="product"
              src={"/images/product-double-strength/pure-extracts/product.png"}
            />
          </div>
          <ul
            className={`flex flex-col lg:gap-y-[var(--vw99)] gap-y-[17.6923076923vw] lg:items-start items-end lg:w-[18.0555555556vw] w-[33.5897435897vw] lg:pt-[var(--vw78)] pt-[9.23076923077vw]`}
          >
            <li className="flex flex-col items-start w-full relative">
              <span className="bg-[#00000075] h-[3px] lg:w-[5.399471vw] block absolute lg:top-[var(--vw30)] top-0 lg:left-[-3.148148vw]"></span>
              <span
                className="lg:text40 mtext16 font-bold bg-f5eee1 relative z-[2] lg:pl-[var(--vw12)] 
                    inline-block break-words whitespace-normal"
              >
                Yashtimadhu
              </span>
              <div className="lg:text18 mtext12 text-darkblack lg:mt-[var(--vw10)] mt-1 lg:pl-[var(--vw12)]">
                (Glycyrrhizin) <br /> Soothes & protects the throat
              </div>
            </li>
            <li className="flex flex-col items-start lg:w-full w-[21.7948717949vw] relative lg:mt-0 mt-[10.5128205128vw]">
              <span className="bg-[#00000075] h-[3px] lg:w-[12.399471vw] block absolute lg:top-[var(--vw30)] top-0 lg:left-[-9.148148vw]"></span>
              <span
                className="lg:text40 mtext16 font-bold bg-f5eee1 relative z-[2] lg:pl-[var(--vw12)] 
                    inline-block break-words whitespace-normal"
              >
                Kantakari
              </span>
              <div className="lg:text18 mtext12 text-darkblack lg:mt-[var(--vw10)] mt-1 lg:pl-[var(--vw12)]">
                (Solasodine) <br /> Breaks down thick mucus
              </div>
            </li>
            <li className="flex flex-col items-start lg:w-full w-[30.2564102564vw] relative">
              <span className="bg-[#00000075] h-[3px] lg:w-[14.399471vw] block absolute lg:top-[var(--vw30)] top-0 lg:left-[-12.148148vw]"></span>
              <span
                className="lg:text40 mtext16 font-bold bg-f5eee1 relative z-[2] lg:pl-[var(--vw12)] 
                    inline-block break-words whitespace-normal"
              >
                Tulsi
              </span>
              <div className="lg:text18 mtext12 text-darkblack lg:mt-[var(--vw10)] mt-1 lg:pl-[var(--vw12)]">
                (Urosolic acid) <br /> Clears Mucus & Relieve Congestion
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PureExtracts;
