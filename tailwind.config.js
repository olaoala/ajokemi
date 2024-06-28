const { hover } = require("@testing-library/user-event/dist/hover");

// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      gridTemplateColumns: {
        // Simple 16 column grid
        // '16': 'repeat(16, minmax(0, 1fr))',
        // '120': 'repeat(2, minmax(100px, 1fr) 100px)'
      },
      fontFamily: {
        playwrite: ['Manrope', 'sans-serif'],
      },
      backgroundColor:{
        blue: '#111B37' ,
        gray: '#ABB2B9',
        grayHover: '#EBEDEF',
        graybg:'#C0C0C0',
        hover: ' rgba(255, 255, 255, 0.055)'
      },
      boxShadow: {
        'custom': ' radial-gradient(circle, rgba(17,27,55,0.2359068627450981) 15%, rgba(162,173,204,0.31994047619047616) 50%, rgba(17,27,55,1) 87%)',
      }
    },
  },
  plugins: [],
}




