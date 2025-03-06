import React from "react";

const Content = () => {
  return (
    <div className="myContainer lg:w-[72.2222222222vw] flex flex-col lg:gap-y-[var(--vw36)] gap-y-3 items-center text-center">
      <h2 className="lg:text-vw80 lg:leading-[var(--vw100)] mtext24 font-bold text-white lg:w-[66.335978836vw]">
        Why our formulation is {" "}
        <span className="text-yellow block">Nature’s No. 1 shield</span>
      </h2>
      <img
        src="/images/product-haldi-tulsi/tulsi-benefits-chart/stroke.png"
        alt="stroke"
        className="lg:w-[60.7142857143vw] w-[67.429%]"
      />
      <p className="lg:text40 mtext12 uppercase text-white !font-normal">
        <span className="font-bold">5 types</span> of tulsi for maximum
        respiratory support
      </p>
    </div>
  );
};

export default Content;
