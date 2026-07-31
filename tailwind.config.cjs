/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./data/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: { glass: "0 24px 70px rgba(30, 64, 175, 0.14)" },
      colors: { navy: "#172554" }
    }
  },
  plugins: []
};
