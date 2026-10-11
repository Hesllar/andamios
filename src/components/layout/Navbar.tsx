"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";


import { useScrollToElement } from "@/hooks";
import { Container } from "@/components/ui";
import logo from "../../../public/img/logo.png";

interface Props {
  sectionRef: React.RefObject<HTMLDivElement | null>[];
}

const navigation = ["Inicio", "Servicios", "Galería", "Clientes"];

export const Navbar = ({ sectionRef }: Props) => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const scrollToElement = useScrollToElement();

  const handleOnClick = (sectionId: number) => {
    scrollToElement(sectionRef[sectionId], 96, "smooth");
  };

  return (
    <nav className="fixed top-0 z-50 h-20 w-full border-b border-industrial-highlight/20 bg-industrial-navigation text-industrial-onDark shadow-sm">
      <Container
        className="relative !py-0 flex h-full items-center justify-between"
      >
        {/* Logo */}
        <Link href="/" className="shrink-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-industrial-highlight">
          <div className="flex items-center">
            <Image
              src={logo}
              width={160}
              height={56}
              alt="Jaramillo Andamios Pro"
              className="max-h-14 object-contain"
              style={{ height: "auto" }}
              priority
            />
          </div>
        </Link>

        <>
          <button
            type="button"
            onClick={() => {
              setOpenMenuMobile((isOpen) => !isOpen);
            }}
            aria-label={openMenuMobile ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={openMenuMobile}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-md text-industrial-onDark transition-colors hover:bg-industrial-borderOnDark hover:text-industrial-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-industrial-highlight lg:hidden"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
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
            id="mobile-navigation"
            className={clsx(
              "absolute inset-x-0 top-20 w-full flex-col gap-1 border-b border-industrial-borderOnDark bg-industrial-navigation px-4 py-2 text-industrial-onDark shadow-sm sm:px-16 lg:hidden",
              {
                flex: openMenuMobile,
                hidden: !openMenuMobile,
              },
            )}
          >
            {navigation.map((item, index) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setOpenMenuMobile(false);
                  handleOnClick(index);
                }}
                className="min-h-11 w-full rounded-md px-4 py-3 text-left font-medium text-industrial-onDark transition-colors hover:bg-industrial-borderOnDark hover:text-industrial-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-industrial-highlight"
              >
                {item}
              </button>
            ))}
            <a
              href="https://wa.me/56962109122"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpenMenuMobile(false)}
              className="my-2 inline-flex min-h-11 items-center justify-center rounded-md bg-industrial-accent px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-industrial-accentHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-industrial-highlight"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </>

        {/* Desktop menu */}
        <div className="hidden gap-4 text-center lg:flex lg:items-center">
          <ul className="flex items-center justify-end gap-1 list-none">
            {navigation.map((item, index) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => handleOnClick(index)}
                  className="inline-block rounded-md px-3 py-2 text-base font-medium text-industrial-onDark transition-colors hover:bg-industrial-borderOnDark hover:text-industrial-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-industrial-highlight"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/56962109122"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-md bg-industrial-accent px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-industrial-accentHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-industrial-highlight"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </Container>
    </nav>
  );
};
