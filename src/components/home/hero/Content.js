import LinkBtn from "@/components/common/buttons/LinkButton";
import React from "react";

const Content = () => {
  return (
    <div className="lg:w-[35.119047619vw] w-[73.334%] lg:ml-[var(--vw100)] ml-[30px] relative z-[2] flex flex-col items-start">
      <h1 className="lg:text60 mtext35 font-extrabold uppercase">
        We’ve got you covered
      </h1>
      <p className="lg:text30 mtext20 font-medium capitalize lg:mt-[1.88014101058vh] lg:mb-[3.52526439483vh] mb-5 mt-[6px]">
        Find relief that’s right for you
      </p>
      <LinkBtn text={"BUY NOW"} link={"/"} />
    </div>
  );
};

export default Content;
