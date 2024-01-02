/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Poppins, sans-serif",
    },

    extend: {},
  },
  daisyui: {
    themes: [
      {
        business: {
          ...require("daisyui/src/theming/themes")["business"],
          accent: "#8E2DE2",

          "base-100": "#2e2e2e",
          "base-content": "#F2EFEA",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
