import React from "react";
import Process from "./Process";

const FarmToBottle = () => {
  return (
    <section className="lg:pt-[var(--vw154)] pt-[78px] bg-f5eee1">
      <div>
        <h2 className="lg:text-vw100 lg:leading-[var(--vw130)] mtext30 font-bold myContainer text-center">
          Farm to <span className="text-yellow">bottle</span>
        </h2>
        <div className="border-y border-darkblack lg:mt-[var(--vw58)] mt-[50px] text-[#030303] flex justify-center lg:px-[var(--vw64)] px-5 py-6 lg:py-[var(--vw32)]">
          <span className="lg:text-vw78 lg:leading-[var(--vw87)] fenix mtext30 leading-[35px] text-center">
            For 100% Pure and Authentic Care
          </span>
        </div>
        <Process
          title1={"We believe in keeping things"}
          title2={"CLEAN & SIMPLE"}
          desc={
            "Every drop of our product is as pure as nature intended. We carefully cultivate and nurture our herbs on our own farms, selecting only the finest, most potent ingredients for our formulations."
          }
          image={"/images/our-story/farm-to-bottle/1.jpg"}
        />
        <Process
          title1={"Quality starts at the "}
          title2={"ROOT"}
          desc={
            "Our herbs are grown without chemicals or additives, preserving their natural healing power. From growing to packaging, we oversee every step, ensuring pure, effective remedies you can trust for stronger lungs and better respiratory health."
          }
          image={"/images/our-story/farm-to-bottle/2.jpg"}
          flipped
        />
      </div>
    </section>
  );
};

export default FarmToBottle;
