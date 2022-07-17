/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-red': '#FF2D62'
        ,
      },
      fontFamily: {
        'caustic': ['caustic', 'sans-serif'],
        
      }
    },
  },
  plugins: [],
}