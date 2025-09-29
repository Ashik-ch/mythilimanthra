import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF9E6',
          100: '#FFF1BF',
          200: '#FFE380',
          300: '#FFD34D',
          400: '#F2C237',
          500: '#D4A42A',
          600: '#B3861F',
          700: '#8F6817',
          800: '#6B4D12',
          900: '#3E2D0A',
        },
      },
      backgroundImage: {
        'lux-gradient': 'radial-gradient(1200px 600px at 20% 10%, rgba(212,164,42,0.15), transparent), radial-gradient(1000px 500px at 80% 20%, rgba(242,194,55,0.1), transparent)'
      },
      boxShadow: {
        glow: '0 0 20px rgba(242,194,55,0.35)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config


