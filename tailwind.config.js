/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        midnight: '#121063',
        deepBlue: '#0A0836',
        dreamBlue: '#4F98CA',
        dreamPurple: '#8B5CF6',
        starWhite: '#F8FAFC',
      },
      boxShadow: {
        glow: '0 0 20px rgba(139, 92, 246, 0.5)',
      },
    },
  },
  plugins: [],
};