import Image from "next/image";
import Link from "next/link";
import React from "react";

const LinkBtn = ({
  link,
  text,
  tag: Tag = Link,
  isLoading,
  isExternal = false,
  fontSizes,
  borderRadius,
  gapping,
  colors,
}) => {
  if (!text) {
    return <></>;
  }

  // Determine the target attribute based on isExternal
  const target = isExternal ? "_blank" : "_self";

  return (
    <Tag
      data-aos="fade-up"
      {...(Tag === Link ? { href: link, target } : {})} // Apply target only if Tag is Link
      className={`${isLoading ? "pointer-events-none" : ""} ${
        fontSizes ? fontSizes : "lg:text20 mtext20"
      } ${
        borderRadius ? borderRadius : "lg:rounded-[var(--vw50)] rounded-[40px]"
      } ${colors ? colors : "bg-green text-white"} ${
        gapping
          ? gapping
          : "lg:px-[var(--vw95)] lg:py-[var(--vw19)] px-[54.07px] py-[13px]"
      } group font-bold group-hover:brightness-125 hover:brightness-125 block`}
    >
      <span className="">{text}</span>
    </Tag>
  );
};

export default LinkBtn;
