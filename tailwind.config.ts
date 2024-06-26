module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
    // Add more paths here if you have more directories where you use Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'var(--clr-primary-1)',
          200: 'var(--clr-primary-2)',
          300: 'var(--clr-primary-3)',
          400: 'var(--clr-primary-4)',
          500: 'var(--clr-primary-5)',
          600: 'var(--clr-primary-6)',
          700: 'var(--clr-primary-7)',
          800: 'var(--clr-primary-8)',
          900: 'var(--clr-primary-9)',
          1000: 'var(--clr-primary-10)',
        },
        grey: {
          100: 'var(--clr-grey-1)',
          300: 'var(--clr-grey-3)',
          400: 'var(--clr-grey-4)',
          500: 'var(--clr-grey-5)',
          800: 'var(--clr-grey-8)',
          900: 'var(--clr-grey-9)',
          1000: 'var(--clr-grey-10)',
        },
      },
    },
  },
  plugins: [],
}
