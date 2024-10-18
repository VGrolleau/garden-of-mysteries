/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2e8b57',
        'light-green': '#f0fff0',
        'mystery-purple': '#6a0dad',
      },
      fontFamily: {
        'sans': ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
