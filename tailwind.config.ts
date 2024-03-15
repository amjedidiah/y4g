import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        dark: "#010000",
        primary: "#fbab0d",
        secondary: "#cf0a05",
      },
    },
  },
  plugins: [],
};
export default config;
