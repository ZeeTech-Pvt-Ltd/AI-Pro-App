/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // AI Pro App brand palette
        primary: {
          DEFAULT: '#4338CA',
          deep: '#312E81',
        },
        secondary: {
          DEFAULT: '#7C3AED',
          dark: '#6D28D9',
        },
        accent: {
          DEFAULT: '#06B6D4',
          dark: '#0E7490',
        },
        canvas: '#F4F5FA',
        ink: '#1E1B4B',
        steel: '#4B4E6D',
        muted: '#6B6E85',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: [
          'Space Grotesk',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 10px 30px -18px rgba(67, 56, 202, 0.25)',
        soft: '0 28px 70px -40px rgba(67, 56, 202, 0.35)',
        lift: '0 18px 40px -22px rgba(67, 56, 202, 0.35)',
        glow: '0 12px 36px -14px rgba(6, 182, 212, 0.55)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
