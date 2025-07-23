"use client";

import Link from "next/link";
import Image from "next/image";

import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import logo from "../../public/img/logo.webp";
import clsx from "clsx";
import { useState } from "react";
import { useScrollToElement } from "@/hooks";

interface Props {
  sectionRef: React.RefObject<HTMLDivElement>[];
}

const navigation = ["Inicio", "Servicios", "Galería", "Clientes"];

export const Navbar = ({ sectionRef }: Props) => {
  const [inElement, setInElement] = useState(false);

  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  const scrollToElement = useScrollToElement();

  const handleOnClick = (sectionId: number) => {
    scrollToElement(sectionRef[sectionId], 100, "smooth");
  };

  return (
    <div className="w-full fixed top-0 z-50  bg-white sm:rounded sm:bg-white/85 sm:backdrop-blur-3xl dark:bg-gray-900 shadow-md">
      <nav
        className={clsx(
          "container relative flex flex-wrap items-center justify-between mx-auto transition-all duration-300 ease-in-out",
          {
            "p-4 lg:p-8": inElement,
            "p-4 lg:py-2 lg:px-6": !inElement,
          }
        )}
        onMouseEnter={() => setInElement(true)}
        onMouseLeave={() => setInElement(false)}
      >
        {/* Logo  */}
        <Link href="/">
          <div className="flex items-center space-x-2 text-2xl font-medium text-trueGray-800 dark:text-gray-100">
            <Image src={logo} width="45" alt="N" height="45" className="" />
            <div>
              <p>Andamios</p>
              <p>J&V</p>
            </div>
          </div>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
        </div>

        <>
          <button
            onClick={() => {
              setOpenMenuMobile(!openMenuMobile);
            }}
            aria-label="Toggle Menu"
            className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
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
              }
            )}
          >
            {navigation.map((item, index) => (
              <span
                key={item}
                onClick={() => {
                  setOpenMenuMobile(!openMenuMobile);
                  handleOnClick(index);
                }}
                className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
              >
                {item}
              </span>
            ))}
          </div>
        </>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <li className="mr-3 nav__item" key={item}>
                <span
                  onClick={() => {
                    if (!sectionRef[index].current) return;
                    setInElement(false);
                    handleOnClick(index);
                  }}
                  className="cursor-pointer inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
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
