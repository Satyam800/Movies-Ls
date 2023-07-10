/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      "brand-green": "#4DF69B",
        "brand-amber": "#FF8656",
        "brand-red": "#FF5656",
        "brand-gray": "#7E7E7E",
    },
  },
  plugins: [],
  darkMode: 'class',
}

