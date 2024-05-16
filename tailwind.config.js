import {colorsTheme} from './src/styles/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: colorsTheme,
      boxShadow: {
        'card': "0px 0px 64px 0px #00000040"

      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}