/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myColors: {
          100: "#152233", // BG
          200: "#B7F55E", // Contents BG
        },
      },
      fontFamily: {
        myFont: ["Poppins", "sans-serif"],
        fancy: ["Gloria Hallelujah", "cursive"],
      },
    },
  },
  plugins: [],
};
