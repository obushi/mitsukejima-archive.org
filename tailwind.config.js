/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ice: "#f8fafc",
        accent: "#0f766e",
        gold: "#c2b280",
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', "sans-serif"],
        serif: ['"Shippori Mincho"', "serif"],
        mono: ['"Courier New"', "monospace"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 1.5s ease-out forwards",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};