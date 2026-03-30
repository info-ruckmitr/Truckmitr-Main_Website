import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Arial', 'Helvetica', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
        devanagari: ['Noto Sans Devanagari', 'sans-serif'],
        kpi: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'road-glow': 'roadGlow 3s ease-in-out infinite',
        'fab-pulse': 'fabPulse 3s infinite',
        marquee: 'marquee 30s linear infinite',
        'dot-pulse': 'dotPulse 2s infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        roadGlow: {
          '0%,100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        fabPulse: {
          '0%,100%': { boxShadow: '0 4px 20px rgba(37,211,102,0.4)' },
          '50%': {
            boxShadow:
              '0 4px 30px rgba(37,211,102,0.6), 0 0 0 12px rgba(37,211,102,0.1)',
          },
        },
        dotPulse: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
