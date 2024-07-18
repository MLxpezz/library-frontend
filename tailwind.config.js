/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#3FB3F1",
        "blue-strong": "#0A2D47",
        "blue-light": "#82CDF7",
        "blue-white": "#E1F1FD",
        "blue-medio": "#3FB3F1",
        "blue-medio-strong": "#097BC0"
      }
    },
  },
  plugins: [],
}

