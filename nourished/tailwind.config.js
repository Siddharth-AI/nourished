/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1440px',
      },

      rotate: {
        '360': '(360deg)',
      },
      fontFamily: { 'cairo': ['Cairo', 'serif'] },
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
        modal: 'rgb(var(--modal),0.5)',
      },
    }
  },
  plugins: [],
}

