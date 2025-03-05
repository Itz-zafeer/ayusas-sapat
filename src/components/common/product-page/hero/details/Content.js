import React from "react";

const Content = ({ content }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text40 capitalize lg:mt-[var(--vw12)] lg:mb-[var(--vw8)] mb-2 mt-1">
        {content?.heading}
      </h1>
      <p className="lg:text18 lg:leading-[var(--vw28)] mtext14 font-medium text-black">
        {content?.desc}
      </p>
    </div>
  );
};

export default Content;
