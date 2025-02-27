/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme with vibrant accents inspired by Headspace/Duolingo
        primary: {
          DEFAULT: '#5D5FEF', // Primary purple/blue
          light: '#7879F1',
          dark: '#4A4BD1',
        },
        secondary: {
          DEFAULT: '#FF7966', // Vibrant coral
          light: '#FF9C8B',
          dark: '#E55A47',
        },
        accent: {
          DEFAULT: '#00C9A7', // Teal accent
          light: '#17EBCA',
          dark: '#00A689',
        },
        dark: {
          DEFAULT: '#121212', // Main background
          card: '#1E1E1E',   // Card background
          elevated: '#2D2D2D', // Elevated elements
        },
        light: {
          DEFAULT: '#F2F2F2',
          text: '#E0E0E0',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        // Custom font sizes
        'display': ['2.5rem', { lineHeight: '1.2' }],
        'title': ['1.75rem', { lineHeight: '1.3' }],
        'subtitle': ['1.25rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.5' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
        'tiny': ['0.75rem', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [],
}