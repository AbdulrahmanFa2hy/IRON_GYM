import rtlPlugin from "tailwindcss-rtl";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000", // Adding explicit black color
        red: {
          600: "#DC2626", // Main brand red color
          700: "#B91C1C", // Darker red for hover states
        },
        gray: {
          400: "#9CA3AF", // Text color
          700: "#374151", // Border color
          800: "#1F2937", // Background color
          900: "#111827", // Card background
        },
      },
      fontFamily: {
        serif: ["Roboto Serif", "system-ui", "serif"],
        arabic: ["Noto Naskh Arabic", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [rtlPlugin],
};
