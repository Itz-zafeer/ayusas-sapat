import React from "react";
import Layout from "@/components/layout/Index";
import HomePage from "@/components/home/Index";

const page = () => {
  return (
    <Layout greenHeader noCheckout>
      <HomePage />
    </Layout>
  );
};

export default page;
