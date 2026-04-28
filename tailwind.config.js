/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003527",
        secondary: "#904d00",
        tertiary: "#2e2f27",
        background: "#f8f9ff",
        gold: "#D97706",
        emerald: "#064E3B",
        cream: "#FDFCF0",
        sand: "#F7F5E9",
      },
      fontFamily: {
        serif: ["Noto Serif", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
}
