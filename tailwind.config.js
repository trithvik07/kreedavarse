/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my': "url('../public/about.jpg')",
        'cricket': "url('../public/cricket.jpg')",
        'football': "url('../public/football.jpg')",
        'badminton': "url('../public/badminton.jpg')",
        'volleyball': "url('../public/volleyball.jpg')",
      },
    },
  },
  plugins: [],
}

