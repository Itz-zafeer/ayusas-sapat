import React from "react";
import Reliefs from "./Reliefs";

const Content = () => {
  return (
    <div className="lg:w-[50.462962963vw] bg-f5eee1 lg:pt-[var(--vw158)] pt-10 pb-[74px] lg:pb-[var(--vw124)]">
      <div className="lg:px-[var(--vw43)] px-[27px] capitalize flex flex-col">
        <span className="text-darkblack lg:text50 text-[26px] !font-normal">
          Powerful Relief From
        </span>
        <h3 className="text-green font-semibold lg:text-vw98 lg:leading-[var(--vw100)] text-[50px]">
          Every Cough
        </h3>
      </div>
      <Reliefs />
    </div>
  );
};

export default Content;
