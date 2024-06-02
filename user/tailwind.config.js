/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '1/4': '25%',
      },
    },
  },
  plugins: [],
}

