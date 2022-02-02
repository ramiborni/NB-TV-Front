module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F98F18",
        "card-color": "#F2F2F2",
      },
    },
  },
  plugins: [require('daisyui'),require("tailwindcss-dir")],
};
