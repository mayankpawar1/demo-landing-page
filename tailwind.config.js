/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue-transparent': 'rgba(0, 49, 69, 0)',
        'custom-blue-70': 'rgba(0, 49, 69, 0.7)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to left, rgba(0, 49, 69, 0), rgba(0, 49, 69, 0.7))',
      },
    },
  },
  plugins: [],
}