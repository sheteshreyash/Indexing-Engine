/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#F5F5DC',
        cyan: '#00ffff',
        darkturquoise:'#00ced1',
        springgreen: '#00ff7f'
      },
    },
  },
  plugins: [],
}