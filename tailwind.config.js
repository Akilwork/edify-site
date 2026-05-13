/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F3D2E", // deep green
        accent: "#C8A96A",  // gold
      },
      fontFamily: {
        syne: ["var(--font-syne)"],
        playfair: ["var(--font-playfair)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
