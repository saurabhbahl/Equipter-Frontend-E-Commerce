/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'custom-orange': '#ea7600',
        'custom-gray': '#444',
        'custom-gray-200': '#767676',
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'arial': ['Arial', 'sans-serif'],
      },
      borderStyle: {
        inset: 'inset',
      },
    },
  },
  plugins: [],
};
