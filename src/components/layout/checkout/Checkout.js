"use client";
import React, { useState } from "react";
import ProgressBar from "./progress-bar/ProgressBar";
import FreeConsultation from "./free-consultation/FreeConsultation";
import ProductSummary from "./product-summary/ProductSummary";
import OrderSummary from "./order-summary/OrderSummary";
import Header from "./Header";
import FasterRelief from "./faster-relief/FasterRelief";
import Total from "./Total";
import Banner from "./Banner";
import Footer from "./Footer";

const Checkout = () => {
  const [checkOutactive, setCheckOutActive] = useState(false);
  return (
    <div
      className={`${
        checkOutactive ? "block" : "hidden"
      } atlwh_Full minfullVh minfullSvh h-[unset] flex justify-end z-[20] checkout`}
    >
      <span className="atlwh_Full bg-[#00000033] hidden lg:block"></span>
      <div className="lg:w-[47.2883597884vw] bg-[#F6F6F6] w-full relative z-[2]">
        <Header />
        <ProgressBar />
        <FreeConsultation />
        <ProductSummary />
        <OrderSummary />
        <FasterRelief />
        <Banner />
        <Total />
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
