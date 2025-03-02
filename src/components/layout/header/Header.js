"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import useResponsivness from "@/hooks/useResponsivness";
const navBarLinks = [
  {
    lable: "Home",
    link: "/",
  },
  {
    lable: "Shop",
    link: "/shop",
  },
  {
    lable: "Offers",
    link: "/offers",
  },
  {
    lable: "About us",
    link: "/about-us",
  },
  {
    lable: "Our Story",
    link: "/our-story",
  },
];
const Header = ({ greenHeader }) => {
  const { isDesktop } = useResponsivness;
  const pathname = usePathname();
  const [sidebar, setSidebar] = useState(false);
  function toggleSidebar() {
    if (!isDesktop) {
      const body = document.querySelector("body");
      body.classList.toggle("active");
      setSidebar(!sidebar);
    }
  }
  return (
    <header
      className={`absolute z-10 w-full top-0 left-0 lg:py-[2.58519388954vh] lg:px-[var(--vw97)] px-5 py-[18px] ${
        greenHeader
          ? "bg-c0f3e25 text-white green_header"
          : "lg:text-c818080 text-white bg-white"
      } `}
    >
      <div className="flex justify-between items-center">
        <Link
          href={"/"}
          className="block relative z-[2] lg:w-[var(--vw89)] lg:h-[var(--vw59)] sm:w-[16%] sm:h-[10vw] w-[55px] h-[37px]"
        >
          <Image fill alt="header_logo" src={"/images/icons/header_logo.svg"} />
        </Link>
        <nav
          className={`${
            sidebar
              ? "opacity-100 pointer-events-auto translate-x-0"
              : "opacity-0 pointer-events-none -translate-x-full"
          } transition-all duration-300 ease-out lg:translate-x-0 lg:opacity-100 lg:pointer-events-auto px-5 lg:px-0 flex items-center justify-center lg:justify-normal absolute top-0 left-0 w-full fullVh fullSvh lg:!size-[unset] lg:static bg-c0f3e25 lg:bg-transparent`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-[var(--vw40)]  gap-6 lg:text18 mtext24 w-full lg:w-[unset]">
            {navBarLinks.map((navBarLink, index) => (
              <li
                key={index}
                className={`${
                  navBarLink.link === pathname ? "active" : ""
                } border-b lg:border-0 pb-3 lg:pb-0 nav_link`}
              >
                <Link href={`${navBarLink.link}`} className="dsa">
                  {navBarLink.lable}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={toggleSidebar}
          className="size-6 sm:size-9 block lg:hidden relative z-[2]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-full"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
              className={`${
                greenHeader
                  ? "fill-white"
                  : sidebar
                  ? "fill-white"
                  : "fill-darkblack"
              }`}
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
