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
        "blob-1": "blob-1 10s linear infinite",
      },
      keyframes: {
        "blob-1": {
          "0%": {
            transform: "rotate(0) translateX(0) translateY(0)",
          },

          "50%": {
            transform: "rotate(180deg) translateX(50px) translateY(25px)",
          },
          "100%": {
            transform: "rotate(-180deg) translateX(-50px) translateY(-25px)",
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
