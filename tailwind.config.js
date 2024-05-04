/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-1": "#bdbdbd",
        "gray-2": "#e9e9e9",
        "gray-3": "#efefef",
        "orange-1": "#ff6a00",
      },
    },
  },
  plugins: [],
};
