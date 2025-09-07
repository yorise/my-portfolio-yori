/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fdf6ec",
        pastelPink: "#f9c6d0",
        pastelBlue: "#a7c7e7",
        pastelGreen: "#b5ead7",
        pastelYellow: "#fff5ba",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
