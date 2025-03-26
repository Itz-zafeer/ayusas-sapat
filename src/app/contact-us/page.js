import React from "react";
import Layout from "@/components/layout/Index";
import ContactPolicies from "@/components/common/contact-policies/ContactPolicies";

const content = `
     <h3>CONTACT US</h3>
                <p>We’re here to help! If you have any questions or concerns, reach out to us:</p>
                <ul>
                    <li><strong>Email:</strong> <a href="mailto:customercare@ayusas.com">customercare@ayusas.com</a></li>
                    <li><strong>Phone:</strong> <a href="tel:8169718114">8169718114</a></li>
                    <li><strong>Address:</strong> 8th Floor, Tower A, Urmi Estate, Plot 95, Ganpatrao Kadam Marg, Lower Parel West, Mumbai, Maharashtra - 400013</li>
                </ul>`;

const page = () => {
  return (
    <Layout greenHeader noCheckout>
      <ContactPolicies content={content} />
    </Layout>
  );
};

export default page;
