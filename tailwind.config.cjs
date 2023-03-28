/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts, html}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {
        gray: {
          100: "#F5F5F5",
          200: "#EBEBEB",
          400: "#B3B3B3",
          500: "#808080",
          700: "#4D4D4D",
          900: "#131313",
        },
      },
    },
  },
  plugins: [],
};
