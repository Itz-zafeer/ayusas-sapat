import React from "react";
import BulletPoint from "./BulletPoint";
const bulletPoints = [
  {
    title: "Refreshing",
    desc: "A natural, revitalizing experience.",
  },
  {
    title: "Convenient",
    desc: "Easy to consume anytime, anywhere.",
  },
  {
    title: "Tasty",
    desc: "Herbal goodness without the bitterness.",
  },
];
const BulletPoints = () => {
  return (
    <ul className="flex flex-col lg:gap-y-[var(--vw34)] gap-[30px] lg:mt-[var(--vw90)] mt-11 lg:w-[39.1534391534vw] w-[91.029%]">
      {bulletPoints.map((bulletPoint, index) => (
        <BulletPoint key={index} bulletPoint={bulletPoint} />
      ))}
    </ul>
  );
};

export default BulletPoints;
