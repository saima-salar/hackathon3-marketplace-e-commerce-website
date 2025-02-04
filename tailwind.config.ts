import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font here
      },
      colors: {
        bgprimary: "#FBEBB5", // Custom background color
        bgsecondary: "#FFF9E5",
        bgtertiary: "#FAF4F4",
        textWhite: "#FFFFFF", // White text color
        textBlack: "#000000", // Black text color
        textDarkGrey: "#9F9F9F", // Dark grey text color
        textLightGrey: "#D9D9D9", // Light grey text color
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
