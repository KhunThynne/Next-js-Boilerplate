import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5A5F', // Airbnb Red
        secondary: '#00A699', // Airbnb Teal
        gray: {
          50: '#F7F7F7', // Light Gray
          100: '#E6E6E6',
          200: '#D2D2D2',
          300: '#BEBEBE',
          400: '#9E9E9E',
          500: '#7F7F7F',
          600: '#6E6E6E',
          700: '#4C4C4C',
          800: '#333333', // Dark Gray
        },
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Courier New', 'monospace'],
      },
      fontSize: {
        'base': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
      },
      spacing: {

        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
