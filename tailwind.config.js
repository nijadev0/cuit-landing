/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      boxShadow: {
        1: "0px 2px 6px 0px rgba(208, 208, 208, 0.25)",
        2: "0px 4px 20px 0px rgba(104, 104, 104, 0.25)"
      },
      colors: {
        baseline: {
          primary: "#F0001F",
        },
        grey: {
          barrier: "#EBEDEF",
          black: "#414853",
          concencrated: "#212427",
          footer: "#F6F7F8",
          "secondary-5": "#CED2D8",
          smooth: "#586479",
        },
      },
    },
  },
  plugins: [],
};
