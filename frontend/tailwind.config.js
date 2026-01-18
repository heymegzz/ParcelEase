/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0a0908',
          900: '#141210',
          850: '#1a1816',
          800: '#25221f',
          700: '#3a352f',
          600: '#4d4740',
          500: '#6b645c',
        },
        beige: {
          50: '#faf9f7',
          100: '#f5f2ed',
          200: '#ebe5db',
          300: '#d4cab8',
          400: '#b8a995',
          500: '#9d8d73',
        },
        brown: {
          900: '#2d2417',
          800: '#3d2f1f',
          700: '#4f3e29',
          600: '#6b5540',
          500: '#8b7355',
        },
        accent: {
          light: '#d4c4b0',
          DEFAULT: '#b8a995',
          dark: '#9d8d73',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.2), 0 10px 20px -2px rgba(0, 0, 0, 0.1)',
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
