import React from "react";
import Layout from "@/components/layout/Index";
import OrderTrackingPage from "@/components/order-tracking/Index";

const page = () => {
  return (
    <Layout greenHeader noCheckout>
      <OrderTrackingPage />
    </Layout>
  );
};

export default page;
