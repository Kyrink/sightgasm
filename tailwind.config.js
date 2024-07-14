/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'astro': ['astro', 'sans-serif'],
        'Rhapsody': ['Rhapsody', 'sans-serif'],
        'Hamida': ['Hamida', 'sans-serif'],
        'Anargya': ['Anargya', 'sans-serif'],
        "helvetica-neue": "'Helvetica Neue'",
      },
    },
  },
  plugins: [],
}
