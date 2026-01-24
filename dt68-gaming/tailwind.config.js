/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1f3a',
          dark: '#0f1220',
          light: '#252b4a',
        },
        gold: {
          DEFAULT: '#ffd700',
          light: '#ffe44d',
          dark: '#ccac00',
        },
        accent: {
          red: '#ff0000',
          blue: '#4169e1',
          purple: '#8b5cf6',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
