/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom50: "#ebfafc",
        custom75: "#d6faff",
        custom100: "#8AE7F7",
        custom200: "#61CDE2",
        custom300: "#3ED0E3",
        custom400: "#28AABF",
        custom500: "#1F7B8C",
        custom600: "#165860",
        custom700: "#0C2E33",
        custom800: "#031506",
        custom900: "#000000",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
