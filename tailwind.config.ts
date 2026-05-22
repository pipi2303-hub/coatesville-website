import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4332',
          mid: '#40916C',
          light: '#74C69D',
          dark: '#0D2419',
        },
        accent: {
          DEFAULT: '#C9A96E',
          light: '#E8D5B0',
          pale: '#F5EDD8',
        },
        bg: {
          DEFAULT: '#F8F5EE',
          cream: '#F8F5EE',
        },
        border: '#E8E4DC',
        muted: '#636366',
        ink: '#1C1C1E',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(27,67,50,0.10)',
        'card-lg': '0 12px 48px rgba(27,67,50,0.16)',
        nav: '0 2px 20px rgba(27,67,50,0.12)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(150deg, #0D2419 0%, #1B4332 45%, #2D6A4F 100%)',
        'cta-gradient': 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #1B4332 100%)',
        'gold-gradient': 'linear-gradient(to right, #C9A96E, #E8D5B0)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        countUp: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
