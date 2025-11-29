import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0B0F14',
          surface: '#0F1620',
          lighter: '#1A1F2E',
        },
        accent: {
          blue: '#5AE1FF',
          violet: '#9A5BFF',
          'blue-dark': '#3DB8D9',
          'violet-dark': '#7A45CC',
        },
        glow: {
          blue: 'rgba(90, 225, 255, 0.35)',
          violet: 'rgba(154, 91, 255, 0.35)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neural-gradient': 'linear-gradient(135deg, rgba(90, 225, 255, 0.1) 0%, rgba(154, 91, 255, 0.1) 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 40px -10px rgba(90, 225, 255, 0.35)',
        'glow-violet': '0 0 40px -10px rgba(154, 91, 255, 0.35)',
        'glow-blue-sm': '0 0 20px -5px rgba(90, 225, 255, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config

