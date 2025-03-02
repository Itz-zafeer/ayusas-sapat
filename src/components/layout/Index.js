import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({ children, greenHeader }) => {
  return (
    <>
      <Header greenHeader={greenHeader} />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
