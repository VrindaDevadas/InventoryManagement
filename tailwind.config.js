/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // Add the safelist property here
  safelist: [
    'text-yellow-500',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8A2BE2',
        'background-dark': '#1E1E2F',
        'component-dark': '#27293D',
        'text-light': '#F1F1F1',
        'text-muted': '#A9A9B3',
        'danger': '#E53E3E',
      }
    },
  },
  plugins: [],
}