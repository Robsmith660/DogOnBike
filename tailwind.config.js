/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Blue
        'galaxy-blue': '#0C1446',

        // Neon Pink/Purple
        'neon-pink': '#FF6AC1',
        'neon-purple': '#B751F6',

        // Electric Blue/Green
        'electric-blue': '#00FFFF',
        'electric-green': '#00FF00',

        // Cosmic Teal
        'cosmic-teal': '#00FFAE',

        // Galactic Magenta
        'galactic-magenta': '#FF00FF',

        // Neon Yellow/Orange
        'neon-yellow': '#FFFF00',
        'neon-orange': '#FFA500',

        // Aurora Gradient
        'aurora-purple': '#892cdc',
        'aurora-blue': '#0068e6',
        'aurora-green': '#07e688',
        'aurora-pink': '#e60795',

        // Sparkling White/Silver
        'sparkling-white': '#FFFFFF',
        'sparkling-silver': '#C0C0C0',
      },
    },
  },
  plugins: [],
}
