/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {},
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    colors: {
      white: '#ffffff',
      gray: '#f0f0f0',
      'black-light': '#212223',
      'black-dark': '#0d0e0e',
      'yellow-light': '#f7e05f',
      'yellow-dark': '#f9d029',
    },
  },
  plugins: [],
};
