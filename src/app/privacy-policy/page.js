import React from "react";
import Layout from "@/components/layout/Index";
import ContactPolicies from "@/components/common/contact-policies/ContactPolicies";

const content = `
<h3>PRIVACY POLICY</h3>
<p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from <a href="https://www.ayusas.com">www.ayusas.com</a></p>

<h3>PERSONAL INFORMATION WE COLLECT</h3>
<p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”</p>

<h3>We collect Device Information using the following technologies:</h3>
<ul>
    <li>“Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier.</li>
    <li>“Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
    <li>“Hotjar,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.</li>
</ul>

<p>Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, UPI virtual address, email address, and phone number). We refer to this information as “Order Information.”</p>
<p>When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.</p>

<h3>HOW DO WE USE YOUR PERSONAL INFORMATION?</h3>
<p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).</p>
<p>Additionally, we use this Order Information to: </br> Communicate with you; Screen our orders for potential risk or fraud; and When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</p>

<p>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>

<h3>SHARING YOUR PERSONAL INFORMATION</h3>
<p>We share your Personal Information with third parties to help us use your Personal Information, as described above.</p>
<p>For example, we also use Google Analytics to help us understand how our customers use the Site.</p>
<p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.[INCLUDE IF USING REMARKETING OR TARGETED ADVERTISING]</p>

<h3>BEHAVIOURAL ADVERTISING</h3>
<p>As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you.</p>

<h3>DATA RETENTION</h3>
<p>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>

<h3>MINORS</h3>
<p>The Site is not intended for individuals under the age of 13.</p>

<h3>CHANGES</h3>
<p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.</p>

<h3>CONTACT US</h3>
<p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:customercare@ayusas.com">customercare@ayusas.com</a> using the details provided below:
</p>
<p>8th Floor, Tower A, Urmi Estate, Plot 95, Ganpatrao Kadam Marg, Lower Parel West, Mumbai Maharashtra - 400013</p>
`;

const page = () => {
  return (
    <Layout greenHeader noCheckout>
      <ContactPolicies content={content} />
    </Layout>
  );
};

export default page;
