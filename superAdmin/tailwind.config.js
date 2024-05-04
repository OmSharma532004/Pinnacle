/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-indigo': '#3b327f',
        'soft-purple': '#7758b4',
        'vibrant-purple': '#8c54fb',
        'dusty-purple': '#664ca7',
        'dark-blue': '#141c5c',
        'deep-blue': '#0c1653',
        'light-grey': '#d6cdce',
        'grey-purple': '#9b9dbc',
        'midnight': '#6b6d9b',
      },
      boxShadow: {
        'custom': '0 4px 6px #664ca7',
      }
    },
  },
  plugins: [],
}

