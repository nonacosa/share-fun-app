/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

