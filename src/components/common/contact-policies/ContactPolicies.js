import React from "react";

const ContactPolicies = ({ content }) => {
  return (
    <section className="lg:py-[var(--vw200)] py-36">
      {content && (
        <div
          className="contact_policies_content defaultList"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}
    </section>
  );
};

export default ContactPolicies;
