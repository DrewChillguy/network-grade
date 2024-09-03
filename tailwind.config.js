/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "hsl(209, 61%, 16%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        laos: ["Noto Sans Lao", "sans-serif"],
      },
    },
  },
  plugins: [],
};
