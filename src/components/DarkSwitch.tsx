"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center order-last ">
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="bg-white p-2 text-gray-300 rounded-full outline-none focus:outline-none "
        >
          <span className="sr-only">Light Mode</span>

          <IoMoonOutline className="h-[24px] w-[24px]  text-black" />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="bg-black p-2 text-gray-500 rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-gray-100 focus:ring-opacity-20"
        >
          <span className="sr-only">Dark Mode</span>
          <IoSunnyOutline className="h-[24px] w-[24px] text-white" />
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;
