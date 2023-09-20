/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-in-left": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-in-right": {
          "0%": {
            transform: "translate(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-in-up": {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-in-down": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },

          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "slide-in-up": "slide-in-up 1s forwards",
        "slide-in-left": "slide-in-left 1s forwards",
        "slide-in-right": "slide-in-right 1s forwards",
        "slide-in-down": "slide-in-down 1s forwards",
      },
    },
    //At some places we specificly use this font. This is how we add that. Instead of signature, you can use whatever you want.
    fontFamily: { signature: ["Great Vibes"] },
  },
  plugins: [],
};
