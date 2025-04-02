import Image from "next/image";
import React from "react";

const ExtraPage = () => {
  return (
    <>
      <section className="fullVh fullSvh lg:pt-[21.151586369vh] pt-36 bg-[#286746] text-white lg:px-[var(--vw20)] px-5 flex flex-col items-center">
        <div className="flex flex-col items-center text-center lg:w-[68.4523809524vw]">
          <h2 className="text70">Welcome to</h2>
          <p className="text45 capitalize lg:mt-[1.41010575793vh] mt-2 lg:w-[39.6825396825vw]">
            Lung Check Program
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center lg:gap-x-[var(--vw170)] lg:mt-[2.82021151586vh] relative">
            <div className="relative lg:w-[47.9435957697vh] lg:h-[48.5311398355vh]">
              <Image fill alt="wave" src={"/images/extra/wav.png"} />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:size-[34.1950646298vh]">
              <Image fill alt="mic" src={"/images/extra/mic.png"} />
            </div>
            <div className="relative lg:w-[47.9435957697vh] lg:h-[48.5311398355vh]">
              <Image fill alt="wave" src={"/images/extra/wav.png"} />
            </div>
          </div>
          <button className="bg-white lg:rounded-[var(--vw100)] rounded-3xl text-darkblack lg:text26 mtext16 capitalize lg:px-[var(--vw48)] lg:py-[1.58636897767vh]">
            Start your test
          </button>
        </div>
        <div className="flex flex-wrap lg:gap-[var(--vw48)]">
          <span></span>
        </div>
      </section>
    </>
  );
};

export default ExtraPage;
