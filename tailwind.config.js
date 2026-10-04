import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F33',
          50: '#E8EDF2',
          100: '#D1DAE5',
          200: '#A3B5CA',
          300: '#7590B0',
          400: '#476B95',
          500: '#2A4A6E',
          600: '#1B3A5A',
          700: '#0B1F33',
          800: '#081726',
          900: '#040E18',
        },
        brand: {
          DEFAULT: '#146C94',
          50: '#E8F4F8',
          100: '#D1E9F1',
          200: '#A3D3E3',
          300: '#75BDDB',
          400: '#47A6D3',
          500: '#146C94',
          600: '#105577',
          700: '#0C4159',
          800: '#082C3C',
          900: '#04161F',
        },
        teal: {
          DEFAULT: '#16A085',
          50: '#E6F7F4',
          100: '#CCF0E9',
          200: '#99E0D3',
          300: '#66D1BD',
          400: '#33C1A7',
          500: '#16A085',
          600: '#12806A',
          700: '#0E604F',
          800: '#0A4035',
          900: '#06201A',
        },
        ink: {
          DEFAULT: '#10202F',
          light: '#5B6B7A',
        },
        surface: {
          DEFAULT: '#F7FAFC',
          50: '#FFFFFF',
          100: '#F7FAFC',
          200: '#EFF4F8',
          300: '#E0E8F0',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.7s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'grid-navy': "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        'hero-overlay': "linear-gradient(135deg, rgba(11,31,51,0.92) 0%, rgba(20,108,148,0.6) 50%, rgba(11,31,51,0.88) 100%)",
      },
      backgroundSize: {
        'grid-lg': '64px 64px',
      },
    },
  },
  plugins: [],
};
