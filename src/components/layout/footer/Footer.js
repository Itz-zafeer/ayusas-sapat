import Image from "next/image";
import Link from "next/link";
import React from "react";
const navigations = [
  {
    heading: "Quick links",
    links: [
      {
        label: "Home",
        link: "/",
      },
      {
        label: "Shop",
        link: "/shop",
      },
      {
        label: "How it works",
        link: "/how-it-works",
      },
      {
        label: "About us",
        link: "/about-us",
      },
      {
        label: "Science",
        link: "/science",
      },
      {
        label: "Contact us",
        link: "/contact-us",
      },
    ],
  },
  {
    heading: "Legal",
    links: [
      {
        label: "Refund policy",
        link: "/refund-policy",
      },
      {
        label: "Shipping policy",
        link: "/shipping-policy",
      },
      {
        label: "Privacy policy",
        link: "/privacy-policy",
      },
      {
        label: "Terms of service",
        link: "/terms-of-service",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="lg:pt-[var(--vw96)] lg:pb-[var(--vw112)] pt-11 pb-[72px] bg-f5eee1 text-darkblack">
      <div className="myContainer flex justify-between flex-wrap gap-8">
        <div className="lg:w-[25.1322751323vw] flex flex-col lg:gap-y-[var(--vw30)] gap-y-[22px]">
          <Link
            href={"/"}
            className="block relative z-[2] lg:w-[var(--vw155)] lg:h-[var(--vw104)] sm:w-[22%] sm:h-[10vw] w-[117px] h-[78px]"
          >
            <Image
              fill
              alt="header_logo"
              src={"/images/icons/header_logo.svg"}
            />
          </Link>
          <p className="lg:text24 mtext20">Download the free app</p>
          <span className="lg:text40 mtext30 font-semibold">
            Holistic care, Reinvented for you.
          </span>
          <div className="flex gap-4 mt-3">
            <div className="lg:size-[var(--vw65)] size-[65px] bg-white rounded-[14px] flex justify-center items-center">
              <div className="lg:size-[var(--vw26)] size-[26px] relative">
                <Image
                  fill
                  alt="playstore"
                  src={"/images/icons/playstore.svg"}
                />
              </div>
            </div>
            <div className="lg:size-[var(--vw65)] size-[65px] bg-white rounded-[14px] flex justify-center items-center">
              <div className="lg:size-[var(--vw28)] size-[28px] relative">
                <Image fill alt="apple" src={"/images/icons/apple.svg"} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:gap-[var(--vw49)] gap-8 flex-wrap font-light lg:text18 lg:leading-[var(--vw23)] mtext18 leading-[23px]">
          <div className="flex lg:gap-[var(--vw49)] gap-[49px] flex-wrap">
            {navigations.map((navigation, index) => (
              <div
                key={index}
                className="flex flex-col lg:gap-y-[var(--vw14)] gap-y-[14px]"
              >
                <h5 className="lg:text24 mtext24 font-semibold">
                  {navigation.heading}
                </h5>
                {navigation.links.map((link, ind) => (
                  <ul
                    key={ind}
                    className="flex flex-col lg:gap-y-[var(--vw20)]"
                  >
                    <li className="opacity_Hover">
                      <Link href={`${link.link}`}>{link.label}</Link>
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:gap-y-[var(--vw40)] gap-y-[40px] lg:w-[18.8492063492vw] w-[81.429%]">
            <div className="flex flex-col lg:gap-y-[var(--vw20)] gap-y-[20px]">
              <h5 className="lg:text24 mtext24 font-semibold">Office name</h5>
              <p className="lg:leading-[var(--vw28)]">
                Office Address, company aaddress
              </p>
            </div>
            <div className="flex flex-col lg:gap-y-[var(--vw20)] gap-y-[20px]">
              <h5 className="lg:text24 mtext24 font-semibold">Support</h5>
              <ul className="flex flex-col lg:gap-y-[var(--vw14)] gap-y-[14px]">
                <li className="opacity_Hover">
                  <Link
                    href={"mailto:customercare@ayusas"}
                    className="flex items-center lg:gap-[var(--vw10)] gap-2.5"
                  >
                    <div className="size-[18px] min-w-[18px] relative">
                      <Image fill alt="mail" src={"/images/icons/mail.svg"} />
                    </div>
                    <p>customercare@ayusas</p>
                  </Link>
                </li>
                <li className="opacity_Hover">
                  <Link
                    href={"tel:+91 9134556576868"}
                    className="flex items-center lg:gap-[var(--vw10)] gap-2.5"
                  >
                    <div className="size-[18px] min-w-[18px] relative">
                      <Image fill alt="phone" src={"/images/icons/phone.svg"} />
                    </div>
                    <p>+91 9134556576868</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col lg:gap-y-[var(--vw20)] gap-y-[20px]">
              <h5 className="lg:text24 mtext24 font-semibold">Follow us on</h5>
              <ul className="flex lg:gap-[var(--vw17)] gap-[17px]">
                <li className="opacity_Hover">
                  <Link
                    href={"/"}
                    target="_blank"
                    className="size-[35px] relative block"
                  >
                    <Image fill alt="fb" src={"/images/icons/fb.svg"} />
                  </Link>
                </li>
                <li className="opacity_Hover">
                  <Link
                    href={"/"}
                    target="_blank"
                    className="size-[35px] relative block"
                  >
                    <Image
                      fill
                      alt="instagram"
                      src={"/images/icons/instagram.svg"}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
