/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      padding: {
        'xl': '1rem',
      },
      maxWidth: {
        '2xl' : '1300px'
      },
      center : true,
    },
    extend: {
      colors:{
        'custom-orange': '#ea7600',
        'custom-orange-100': '#F6841F',
        'custom-gray': '#444',
        'custom-gray-200': '#767676',
        'custom-gray-300': '#f5f5f5',
        'custom-gray-400': '#d9d9d9',
        'custom-black-200': '#1e1e1e',
        'custom-black-25': 'rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'arial': ['Arial', 'sans-serif'],
        'robot': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        '64': ['64px', { lineHeight: '75px' }],
        '32': ['32px', { lineHeight: '37px' }],
        '27': ['27px', { lineHeight: '31px' }],
        '25': ['25px', { lineHeight: '29px' }],
        '19': ['19px', { lineHeight: '23px' }],
        '17': ['17px', { lineHeight: '19px' }],
        '15': ['15px', { lineHeight: '17px' }],
      },
      borderStyle: {
        inset: 'inset',
      },
    },
    screens: {
      'xl': '1200px',
      '2xl': '1440px',
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          '@screen xl': {
            maxWidth: '1180px',
          },
          '@screen 2xl': {
            maxWidth: '1300px',
          },
        }
      })
    }
  ],
};
