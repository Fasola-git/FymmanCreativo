/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      1: '#f5f5fa',
      2: '#fdede7',
      3: '#f3704e',
      4: '#c3a0c0',
      5: '#a393c6',
      6: '#5b57ab',
      7: '#3f3595',
      8: '#f15934',
      9: '#463c61',
    },
    keyframes: {
      scrollX: {
        '0%': {
          transform: 'translateX(0)'
        },
        '100%': { transform: 'translateX(-100%)'},
      }       
    },

    animation: {
      scrollX: 'scrollX 30s linear infinite',
      scrollXReverse: 'scrollX 30s linear infinite reverse'
    }},
  },
  plugins: [],
});

