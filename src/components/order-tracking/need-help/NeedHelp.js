import Image from "next/image";
import Link from "next/link";
import React from "react";
const contact = [
  {
    link: "/",
    icon: "/images/order-tracking/need-help/contact/1.svg",
  },
  {
    link: "/",
    icon: "/images/order-tracking/need-help/contact/2.svg",
  },
  {
    link: "/",
    icon: "/images/order-tracking/need-help/contact/3.svg",
  },
];
const NeedHelp = () => {
  return (
    <div className="flex items-end sm:justify-center lg:justify-normal lg:gap-x-[var(--vw25)] gap-x-[5.12820512821vw] sm:gap-x-5 lg:pl-[var(--vw64)] lg:pr-[var(--vw39)] lg:pt-[var(--vw23)] lg:pb-[var(--vw34)] px-[6.15384615385vw] sm:px-6 sm:py-6 pt-3 pb-6 bg-green">
      <div className="flex sm:gap-x-[34px] gap-x-[6.15384615385vw] lg:gap-y-[var(--vw25)] flex-row lg:flex-col">
        <div className="flex flex-col sm:flex-row lg:items-center gap-4 lg:gap-x-[var(--vw48)]">
          <span className="text-[#FDC111] text45 font-extrabold capitalize">
            Need Help?
          </span>
          <ul className="flex lg:gap-x-[var(--vw56)] gap-x-[3.07692307692vw] sm:gap-x-3">
            {contact.map((value, index) => (
              <li key={index}>
                <Link
                  href={"/"}
                  className="block relative lg:size-[var(--vw54)] lg:min-w-[var(--vw54)] sm:size-[43px] sm:min-w-[43px] size-[11.0256410256vw] min-w-[11.0256410256vw] "
                >
                  <Image fill alt="contact_icon" src={value.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="font-extrabold lg:text18 sm:mtext12 text-[3.33333333333vw] leading-[4.35897435897vw] flex flex-col sm:flex-row lg:gap-x-[var(--vw24)] gap-y-2 ">
          <button
            style={{
              background:
                "linear-gradient(90deg, #DD1B1B 0%, #E85516 48%, #F83535 100%)",
            }}
            className="text-white lg:px-[var(--vw24)] lg:py-[var(--vw12)] capitalize py-[2.30769230769vw] px-[2.05128205128vw] sm:py-[9px] sm:px-2 lg:w-[18.1878306878vw]"
          >
            cANCEL/ RETURN
          </button>
          <button
            style={{
              background:
                "linear-gradient(90deg, #9BB59E 0%, #D7FADB 48%, #9BB59E 100%)",
            }}
            className="text-darkblack lg:px-[var(--vw24)] lg:py-[var(--vw12)] capitalize py-[2.30769230769vw] px-[2.05128205128vw] sm:py-[9px] sm:px-2 lg:w-[18.1878306878vw]"
          >
            REORDER
          </button>
        </div>
      </div>
      <img
        src="/images/icons/order_tracking_chevron_needhelp.svg"
        alt="chevron"
        className="lg:w-[var(--vw20)] w-[4.128205vw] sm:w-4"
      />
    </div>
  );
};

export default NeedHelp;
