"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";


import { useScrollToElement } from "@/hooks";
import logo from "../../../public/img/logo.png";

interface Props {
  sectionRef: React.RefObject<HTMLDivElement | null>[];
}

const navigation = ["Inicio", "Servicios", "Galería", "Clientes"];

export const Navbar = ({ sectionRef }: Props) => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const scrollToElement = useScrollToElement();

  const handleOnClick = (sectionId: number) => {
    scrollToElement(sectionRef[sectionId], 100, "smooth");
  };

  return (
    <div className="w-full fixed top-0 z-50 bg-[#14151e]/90 backdrop-blur-md border-b border-orange-500/25 shadow-lg shadow-black/40 px-6 py-3 transition-all duration-300 ease-in-out hover:p-4 hover:lg:p-8">
      <nav
        className="container  relative flex flex-wrap items-center justify-between mx-auto "
      >
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center">
            <Image
              src={logo}
              width={160}
              height={56}
              alt="Jaramillo Andamios Pro"
              className="drop-shadow-sm"
              style={{ height: "auto" }}
              priority
            />
          </div>
        </Link>

        <>
          <button
            onClick={() => {
              setOpenMenuMobile(!openMenuMobile);
            }}
            aria-label="Toggle Menu"
            className="px-2 py-1 text-gray-300 rounded-md lg:hidden hover:text-orange-400 focus:text-orange-400 focus:outline-none transition-colors"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {openMenuMobile && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!openMenuMobile && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>

          <div
            className={clsx(
              "flex flex-wrap w-full transition-all duration-300 ease-in-out lg:hidden",
              {
                "opacity-100 visible translate-y-0": openMenuMobile,
                "opacity-0 invisible -translate-y-2 h-0": !openMenuMobile,
              },
            )}
          >
            {navigation.map((item, index) => (
              <span
                key={item}
                onClick={() => {
                  setOpenMenuMobile(!openMenuMobile);
                  handleOnClick(index);
                }}
                className="w-full px-4 py-2 -ml-4 text-gray-300 rounded-md hover:text-orange-400 focus:text-orange-400 focus:outline-none transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </>

        {/* Desktop menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <li className="mr-3 nav__item" key={item}>
                <span
                  onClick={() => {
                    if (!sectionRef[index].current) return;
                  
                    handleOnClick(index);
                  }}
                  className="cursor-pointer inline-block px-4 py-2 text-lg font-medium text-gray-200 no-underline rounded-md hover:text-orange-400 focus:text-orange-400 focus:outline-none transition-colors"
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
