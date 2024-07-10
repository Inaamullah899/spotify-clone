import { url } from "inspector";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        "app-black": "#121212",
      },
      zIndex: {
        100: "100",
      },
      height: {
        "1/10": "10%",
        "9/10": "90%",
      },
    },
  },
  plugins: [],
};
