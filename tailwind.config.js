/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#0a192f",
        "light-navy-blue": "#0F2749",
        "baby-green": 'rgba(100,255,218,0.1)',
        "baby-blue": "#ccd6f6",
        "ashy-blue": "#8892b0",
      },
      fontFamily: {
        'inco': ['Inconsolata', 'monospace'],
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
