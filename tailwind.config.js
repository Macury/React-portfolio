/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "work-sans": ["Work Sans", "sans-serif"],
    },
    screens: {
      sm: "540px",
      tb: "700px",
      md: "920px",
      lg: "1120px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      backgroundImage: {
        body: "url('/src/assets/svgs/bg.svg')",
      },
      colors: {
        purple: "#A53DFF",
      },
    },
  },
  plugins: [],
};
