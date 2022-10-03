/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        border: '0 0 0 1px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
