/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    // Add any other paths to your templates here
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example color
        secondary: '#F59E0B', // Example color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}