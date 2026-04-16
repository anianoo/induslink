/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      borderRadius: {
        sm: "2px",
        DEFAULT: "3px",
        md: "4px",
        lg: "5px",
        xl: "6px",
        "2xl": "7px",
        "3xl": "9px",
      },
    },
  },
  plugins: [],
};
