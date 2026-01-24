module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0a0e27',
          darker: '#1a1f3a',
        },
        accent: {
          gold: '#FFD700',
          orange: '#FFA500',
          blue: '#00D4FF',
          cyan: '#0099FF',
          red: '#DC143C',
          green: '#00FF00',
        }
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        'gradient-blue': 'linear-gradient(135deg, #00D4FF 0%, #0099FF 100%)',
      }
    },
  },
  plugins: [],
}
