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
        bg: '#ffffff',
        surface: '#ffffff',
        'surface-muted': '#f6f2ea',
        ink: '#172033',
        muted: '#6b6258',
        line: '#e7ddcd',
        brand: {
          DEFAULT: '#8a6d43',
          dark: '#6a5232',
          soft: '#f1e8d8',
        },
        success: '#0f8a6a',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Noto Sans KR',
          'Noto Sans JP',
          'sans-serif',
        ],
      },
      borderRadius: {
        lg: '14px',
        xl: '18px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(21, 39, 72, 0.08)',
        card: '0 24px 70px rgba(21, 39, 72, 0.12)',
        ring: '0 0 0 3px rgba(138, 109, 67, 0.18)',
      },
      maxWidth: {
        container: '1160px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
export default config
