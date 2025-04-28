import React from "react";
import Layout from "@/components/layout/Index";
import ResultPage from "@/components/result-page/Index";

const page = () => {
  return (
    <Layout noCheckout>
      <ResultPage />
    </Layout>
  );
};

export default page;
