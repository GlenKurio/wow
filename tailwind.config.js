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
        "bento-1": "url('/bento-grid/g-1.webp')",
        "bento-2": "url('/bento-grid/g-2.png')",
        "bento-3": "url('/bento-grid/g-3.png')",
        "bento-4": "url('/bento-grid/g-4.webp')",
        details: "url('/screens.webp')",
      },
      animation: {
        "blob-1": "blob-1 30s linear infinite ",
        "blob-2": "blob-2 30s linear infinite ",
        "blob-3": "blob-3 30s linear infinite ",
        "blob-4": "blob-3 30s linear infinite ",
      },
      keyframes: {
        "blob-1": {
          "0%, 100%": {
            transform: "transalteX(0)",
          },

          "50%": {
            transform: "translateX(450px) translateY(190px) rotate(180deg)",
          },
        },
        "blob-2": {
          "0%, 100%": {
            transform: "transalteX(0)",
          },

          "50%": {
            transform: "translateX(-350px) translateY(-390px) rotate(270deg)",
          },
        },
        "blob-3": {
          "0%, 100%": {
            transform: "transalteX(0) transalteY(0)",
          },

          "50%": {
            transform: "translateX(450px) translateY(-350px) rotate(370deg)",
          },
        },
        "blob-4": {
          "0%, 100%": {
            transform: "transalteX(0) transalteY(0)",
          },

          "50%": {
            transform: "translateX(-350px) translateY(390px) rotate(170deg)",
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
          "base-100": "#363537",
          "base-content": "#F2EFEA",
          success: "#2FBF71",
          warning: "#ED7D3A",
          error: "#EF2D56",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
