import React from "react";
import Layout from "@/components/layout/Index";
import ExtraPage from "@/components/extra/Index";

const page = () => {
  return (
    <Layout noCheckout>
      <ExtraPage />
    </Layout>
  );
};

export default page;
