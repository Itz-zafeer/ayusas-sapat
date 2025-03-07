import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Checkout from "./checkout/Checkout";

const Layout = ({ children, greenHeader, noCheckout }) => {
  return (
    <>
      <Header greenHeader={greenHeader} />
      {noCheckout || <Checkout />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
