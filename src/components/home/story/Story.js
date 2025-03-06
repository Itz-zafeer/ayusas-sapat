import Image from "next/image";
import React from "react";
import Stats from "./stats/Stats";
import LinkBtn from "@/components/common/buttons/LinkButton";

const Story = () => {
  return (
    <section>
      <div className="flex flex-wrap items-stretch">
        <div className="lg:w-[45.503%] w-full lg:min-h-[61.5740740741vw] lg:h-[unset] h-[451px] relative">
          <Image
            fill
            alt="banner"
            src={"/images/home/story/banner.jpg"}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center lg:gap-y-[var(--vw62)] gap-y-[34px] lg:w-[54.498%] w-full lg:py-[var(--vw160)] px-6 pt-7 pb-[52px] lg:px-[var(--vw100)] bg-darkgreen">
          <Stats />
          <LinkBtn
            text={"KNOW OUR STORY"}
            link={"/"}
            colors={"bg-yellow text-darkblack"}
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
