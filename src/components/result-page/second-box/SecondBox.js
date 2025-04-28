import React from "react";
import SecondA from "./SecondA";
import SecondB from "./SecondB";
import ThirdBox from "../ThirdBox";

const SecondBox = ({
  secondADesc,
  secondBDesc,
  medium,
  high,
  thirdBoxDesc,
  excellent,
}) => {
  return (
    <div className="second_box flex flex-col lg:gap-y-[var(--vw16)] gap-y-[1.79487179487vw] lg:w-[30vw] w-[56.4102564103vw]">
      <div className="lg:hidden">
        <ThirdBox thirdBoxDesc={thirdBoxDesc} excellent={excellent} />
      </div>
      <div className="hidden lg:block">
        <SecondA
          secondADesc={secondADesc}
          medium={medium}
          high={high}
          excellent={excellent}
        />
      </div>
      <SecondB secondBDesc={secondBDesc} />
    </div>
  );
};

export default SecondBox;
