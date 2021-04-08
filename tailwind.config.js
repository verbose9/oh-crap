const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Rubik', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        'blue-gray': colors.blueGray,
        'cool-gray': colors.coolGray,
        gray: colors.gray,
        'true-gray': colors.trueGray,
        'warm-gray': colors.warmGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
