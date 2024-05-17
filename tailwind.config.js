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
        'card-login': "0px 0px 64px 0px #00000040",
        'card-user': "0px 2px 10px 0px #0000001A",


      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}