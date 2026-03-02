import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Container } from "@/components/ui";

export function Footer() {
  const legal = ["Terminos", "Privacidad"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <div>Siguenos</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://web.facebook.com/profile.php?id=61588199405677"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook size={26} />
              </a>
              <a
                href="https://www.instagram.com/jaramilloandamiospro/"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram size={26} />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Desarrollado por{" "}
          <a
            href="https://www.linkedin.com/in/hesllar-linzmayer-8665a31a0/"
            target="_blank"
            rel="noopener"
          >
            Hesllar Linzmayer.
          </a>
        </div>
      </Container>
    </div>
  );
}
