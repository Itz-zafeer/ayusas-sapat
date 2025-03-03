import React from "react";
import BulletPoints from "./BulletPoints";

const Content = () => {
  return (
    <div className=" lg:w-[37.2354497354vw] w-[89.744%] mx-auto lg:mx-0 lg:py-[var(--vw135)] pt-[50px] pb-[35px] relative z-[2]">
      <div className="lg:pr-[var(--vw43)] capitalize flex flex-col">
        <h3 className="text-darkblack text60 lg:text-start text-center">
          How it <span className="text-yellow">works?</span>
        </h3>
      </div>
      <BulletPoints />
    </div>
  );
};

export default Content;
