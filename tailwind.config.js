/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: '#0d0d0d',
        surfaceBorder: 'rgba(255, 255, 255, 0.08)',
        primary: '#ffffff',
        muted: '#a1a1aa',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'subtle-gradient': 'linear-gradient(180deg, rgba(25,25,25,0.4) 0%, rgba(0,0,0,0) 100%)',
      },
    },
  },
  plugins: [],
}

