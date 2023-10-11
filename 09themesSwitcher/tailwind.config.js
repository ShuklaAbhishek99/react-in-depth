/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // this line is important to theme functionality, study more in docs
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}