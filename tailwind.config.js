module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#C69B6D',
        'deep': '#081C15',
        'party-pink': '#FF6B9D',
        'party-purple': '#8B5CF6',
        'party-orange': '#FF8C42',
        'party-cyan': '#00D9FF'
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'heading': ['Playfair Display', 'serif']
      }
    }
  },
  plugins: [],
}
