import React from "react";
import Layout from "@/components/layout/Index";
import OurStoryPage from "@/components/our-story/Index";

const page = () => {
  return (
    <Layout greenHeader noCheckout>
      <OurStoryPage />
    </Layout>
  );
};

export default page;
