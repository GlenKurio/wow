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
          primary: "#6247AA",
          "primary-content": "#f6f4fe",
          neutral: "#23282E",
          "neutral-content": "#f6f4fe",

          accent: "#EA6947",
          "accent-content": "#f6f4fe",

          info: "#d3e0fb",
          "info-content": "#2563eb",
          success: "#d4e3d2",
          "success-content": "#29741D",
          warning: "#fff1d1",
          "warning-content": "#cb9513",
          error: "#f9d3d7",
          "error-content": "#E22137",
          "base-100": "#202020",
          "base-content": "#f6f4fe",
        },
      },
      {
        businessLight: {
          ...require("daisyui/src/theming/themes")["business"],
          primary: "#6247AA",
          "primary-content": "#f6f4fe",
          neutral: "#23282E",
          "neutral-content": "#f6f4fe",

          accent: "#EA6947",
          "accent-content": "#f6f4fe",

          info: "#d3e0fb",
          "info-content": "#2563eb",
          success: "#d4e3d2",
          "success-content": "#29741D",
          warning: "#fff1d1",
          "warning-content": "#cb9513",
          error: "#f9d3d7",
          "error-content": "#E22137",
          "base-100": "#f6f4fe",
          "base-content": "#202020",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
