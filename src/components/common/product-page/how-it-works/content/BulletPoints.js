import React from "react";
import BulletPoint from "./BulletPoint";
const bulletPoints = [
  {
    title: "Soothes Throat",
  },
  {
    title: "Clears Cough & Mucus",
  },
  {
    title: "Fights viruses & bacteria",
  },
  {
    title: "Supports immunity ",
  },
];
const BulletPoints = () => {
  return (
    <ul className="flex flex-col lg:gap-y-[var(--vw47)] gap-[28px] lg:mt-[var(--vw60)] mt-6">
      {bulletPoints.map((bulletPoint, index) => (
        <BulletPoint key={index} bulletPoint={bulletPoint} />
      ))}
    </ul>
  );
};

export default BulletPoints;
