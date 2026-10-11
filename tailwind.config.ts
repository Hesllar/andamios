import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        industrial: {
          background: "#FFFFFF",
          surface: "#F3F4F6",
          text: "#1F2937",
          muted: "#4B5563",
          accent: "#C2410C",
          accentHover: "#9A3412",
          border: "#D1D5DB",
          navigation: "#1F2937",
          footer: "#111827",
          onDark: "#F9FAFB",
          mutedOnDark: "#D1D5DB",
          borderOnDark: "#374151",
          highlight: "#FDBA74",
        },
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
export default config;
