import React from "react";
import Milestone from "./Milestone";

const Milestones = () => {
  return (
    <div className="flex flex-wrap lg:gap-[var(--vw25)] gap-4 lg:mt-[var(--vw10)] mt-5">
      <Milestone number={"125+"} name={"Years"} desc={"Of expertise"} />
      <Milestone number={"100+"} name={"million"} desc={"Product Sold"} />
    </div>
  );
};

export default Milestones;
