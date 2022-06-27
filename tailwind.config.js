/* eslint-disable global-require */

module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  preserveHtmlElements: false,
  options: {
    keyframes: true,
    safelist: ['html', 'body'],
  },
  darkMode: 'class',

  theme: {
    screens: {
      sPhone: '320px',
      phone: '360px',
      sTablet: '600px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
      xDesktop: '1440px',
      xlDesktop: '1920px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        phone: '1.25rem',
        tablet: '2rem',
        desktop: '4rem',
        xDesktop: '5rem',
      },
    },
    extend: {
      fontFamily: {
        primary: ['', 'sans-serif'],
        secondary: ['', 'serif'],
      },
      colors: {
        primary: {
          light: '',
          main: '#30c5d2',
          dark: '',
        },
        secondary: {
          light: '',
          main: '#471069',
          dark: '',
        },
        background: {
          light: '',
          main: '#121414',
          dark: '',
        },
        shaper: {
          main: '#1F2729',
          dark: '',
          light: '#737380',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
};
