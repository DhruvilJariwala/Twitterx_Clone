/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        hover: 'rgba(231, 233, 234, 0.1)', 
        rightbar:'rgb(22,24,28)',
        rightbarhover:'rgb(62,65,68,0.4)',
        rightbartext:'rgb(113,118,123)',
      },
    },
  },
  plugins: [],
}

