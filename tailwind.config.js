/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Poppins, sans-serif",
    },

    extend: {
      backgroundImage: {
        "hero-bg-blob-1": "url('/hero-blobs/blob1.svg')",
        "hero-bg-blob-2": "url('/hero-blobs/blob2.svg')",
        "hero-bg-blob-3": "url('/hero-blobs/blob3.svg')",
        "hero-bg-blob-4": "url('/hero-blobs/blob4.svg')",
      },
      animation: {
        "blob-1": "blob-1 30s linear infinite both",
        "blob-2": "blob-2 30s linear infinite both",
        "blob-3": "blob-3 30s linear infinite both",
        "blob-4": "blob-3 30s linear infinite both",
      },
      keyframes: {
        "blob-1": {
          "0%, 100%": {
            transform: "transalteX(0)",
          },

          "50%": {
            transform: "translateX(80%) translateY(-49%) rotate(180deg)",
          },
        },
        "blob-2": {
          "0%, 100%": {
            transform: "transalteX(0)",
          },

          "50%": {
            transform: "translateX(-35%) translateY(29%) rotate(270deg)",
          },
        },
        "blob-3": {
          "0%, 100%": {
            transform: "transalteX(0) transalteY(0)",
          },

          "50%": {
            transform: "translateX(-65%) translateY(49%) rotate(270deg)",
          },
        },
        "blob-4": {
          "0%, 100%": {
            transform: "transalteX(0) transalteY(0)",
          },

          "50%": {
            transform: "translateX(-75%) translateY(-59%) rotate(270deg)",
          },
        },
      },
    },
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
