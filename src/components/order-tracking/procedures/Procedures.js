import React from "react";
import Procedure from "./Procedure";

const procedures = [
  {
    icon: "/images/order-tracking/icons/1.svg",
    title: "Ordered",
    desc: "Estimated Delivery Date: 02 March 2024",
  },
  {
    icon: "/images/order-tracking/icons/2.svg",
    title: "Packed",
    desc: "Pick Up Date: 29 Feb 2024",
  },
  {
    icon: "/images/order-tracking/icons/3.svg",
    title: "Shipped",
    desc: "Shipped from Warehouse - Tracking ID: 987654",
  },
  {
    icon: "/images/order-tracking/icons/4.svg",
    title: "Out for Delivery",
    desc: "Courier Name & Contact Info",
  },
  {
    icon: "/images/order-tracking/icons/5.svg",
    title: "Delivered",
    desc: "Recievers Name: ",
  },
];

const Procedures = () => {
  return (
    <div className="flex justify-start sm:justify-center lg:justify-start lg:pb-[var(--vw80)] pb-6">
      <ul className="flex flex-col lg:mx-[var(--vw78)] mx-8 lg:gap-y-[var(--vw60)] gap-y-10">
        {procedures.map((procedure, index) => (
          <Procedure
            key={index}
            procedure={procedure}
            index={index}
            length={procedures.length}
          />
        ))}
      </ul>
    </div>
  );
};

export default Procedures;
