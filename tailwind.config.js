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
          primary: "#a991f7",
          info: "#2563eb",
          success: "#16a34a",
          warning: "#E97F14",
          error: "#ff5555",
        },
      },
      {
        businessLight: {
          ...require("daisyui/src/theming/themes")["business"],
          primary: "#a991f7",
          info: "#2563eb",
          success: "#16a34a",
          warning: "#E97F14",
          error: "#ff5555",
          "base-100": "#f6f4fe",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
