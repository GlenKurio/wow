/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Quicksand, sans-serif",
    },

    extend: {},
  },
  daisyui: {
    themes: [
      {
        business: {
          ...require("daisyui/src/theming/themes")["business"],
          accent: "#B387FA",
        },
      },
      {
        businessLight: {
          ...require("daisyui/src/theming/themes")["business"],
          accent: "#B387FA",
          "base-100": "white",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
