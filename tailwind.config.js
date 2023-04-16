/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
        colors: {
          textBlack: "#1a1a1a",
          bgWhite: "#f5f5f5",
          osbDeepBlue: "#0f4770",
          base: "#333",
          lightGrayBlue: "#f5f7fa",
        },
        fontFamily:{
          heading: ["Merriweather", "sans-serif"],
          body: ["Raleway", "sans-serif"],
        }
    },

  },
  plugins: [require("daisyui")],
  daisyui: {
    // themes: [
    //   {
    //     "mytheme": {
    //       primary: "#1a1a1a",
    //       secondary: "#0f4770",
    //       accent: "#37cdbe",
    //       neutral: "#3d4451",
    //       "base-100": "#f5f5f5",
    //       fontFamily:{
    //         h1: ["Merriweather", "sans-serif"],
    //         body: ["Raleway", "sans-serif"],
    //       }
    //     }
    //   }
    // ],
    themes: false,
  },
}

