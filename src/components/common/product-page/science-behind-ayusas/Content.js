import React from "react";

const Content = ({ headingWidth, wrapperClasses, heading, desc }) => {
  return (
    <div
      className={`${
        wrapperClasses ? wrapperClasses : ""
      } flex flex-col pb-[30px] lg:pb-0 border-b border-[#286746] lg:border-0`}
    >
      <h4
        className={`${
          headingWidth ? headingWidth : ""
        } lg:text30 mtext22 font-semibold text-[#286746]`}
      >
        {heading}
      </h4>
      <p className="text-darkblack lg:text16 mtext14 mt-2">{desc}</p>
    </div>
  );
};

export default Content;
