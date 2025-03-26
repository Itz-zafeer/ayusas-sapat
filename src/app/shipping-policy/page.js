import React from "react";
import Layout from "@/components/layout/Index";
import ContactPolicies from "@/components/common/contact-policies/ContactPolicies";

const content = `
     <h3>SHIPPING AND DELIVERY POLICY</h3>
                <ol data-type="a">
                    <li>
                        <strong>How long will it take for my order to reach me?</strong><br />
                        As we maintain inventory of all products we sell on our website, you can rest assured that the product will be shipped within 24 working hours of placing your order. 
                        We aspire to get your product delivered at your doorstep within 2-5 days, but at times owing to unforeseen circumstances and delays, deliveries can take slightly longer.
                    </li> 
                    <li>
                        <strong>Is it possible to track my order?</strong><br />
                        As soon as you place your order, a confirmation mail will be sent to your inbox. 
                        Once the order is processed from our end and dispatched from our warehouse, we shall email you the details carrying your tracking number and the link to track your order.
                    </li> 
                    <li>
                        <strong>Do you ship to international locations?</strong><br />
                        Currently, the products listed on our website are only delivered within India.
                    </li>
                </ol>`;

const page = () => {
  return (
    <Layout greenHeader noCheckout>
      <ContactPolicies content={content} />
    </Layout>
  );
};

export default page;
