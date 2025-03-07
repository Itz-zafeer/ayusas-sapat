import React from "react";

const OrderSummary = () => {
  return (
    <div className="lg:w-[43.5185185185vw] w-[89.744%] mx-auto text-darkblack border-b border-darkblack lg:pb-[var(--vw23)] pb-5">
      <div className="flex lg:py-[var(--vw24)] py-5">
        <span className="lg:text24 mtext18 font-bold capitalize">
          Order Summary
        </span>
      </div>
      <ul className="flex flex-col lg:gap-y-[calc(0.5*var(--vw16))] gap-y-[5px] font-medium capitalize lg:text20 mtext14">
        <li className="flex justify-between">
          <span className="lg:w-[15.9391534392vw] w-[37.429%]">Total MRP</span>
          <span className="lg:w-[10.1851851852vw] w-[24.001%]">₹ 1,575.00</span>
        </li>
        <li className="flex justify-between">
          <span className="lg:w-[15.9391534392vw] w-[37.429%]"> Discount:</span>
          <span className="lg:w-[10.1851851852vw] w-[24.001%] font-bold text-[#059212]">
            ₹ 713.00
          </span>
        </li>
        <li className="flex justify-between">
          <span className="lg:w-[15.9391534392vw] w-[37.429%]">
            {" "}
            Shipping Fee:
          </span>
          <span className="lg:w-[10.1851851852vw] w-[24.001%] font-bold text-[#059212]">
            ₹ 199 FREE
          </span>
        </li>
        <li className="flex justify-between">
          <span className="lg:w-[15.9391534392vw] w-[37.429%]">
            {" "}
            Total Amount
          </span>
          <span className="lg:w-[10.1851851852vw] w-[24.001%]">₹ 862.00</span>
        </li>
      </ul>
    </div>
  );
};

export default OrderSummary;
