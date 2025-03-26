import React from "react";
import Layout from "@/components/layout/Index";
import ContactPolicies from "@/components/common/contact-policies/ContactPolicies";

const content = `    <h3>CANCELLATION AND REFUND POLICY</h3>
                <p>We aim to provide a seamless shopping experience with a fair and transparent cancellation and refund process:</p>
                <ul>
                    <li>
                        <strong>Order Cancellation:</strong><br />
                        Customers can only cancel their order before it is shipped. Cancellations requested after this period may not be eligible for a refund, depending on the order status.
                    </li>
                    <li>
                        <strong>Refund Eligibility:</strong><br />
                        Refunds are only possible if the wrong or broken product is received or if the shipment is lost in transit.
                    </li>
                    <li>
                        <strong>Requesting a Refund:</strong><br />
                        To initiate a refund request, please contact our support team.
                    </li>
                </ul>`;

const page = () => {
  return (
    <Layout greenHeader noCheckout>
      <ContactPolicies content={content} />
    </Layout>
  );
};

export default page;
