/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          osbDeepBlue: "#0f4770",
        }
    },
  },
  plugins: [require("daisyui")],
}

