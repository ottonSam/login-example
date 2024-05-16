import {colorsTheme} from './src/styles/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: colorsTheme
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}