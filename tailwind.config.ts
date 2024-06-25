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
          100: 'hsl(184, 91%, 17%)',
          200: 'hsl(185, 84%, 25%)',
          300: 'hsl(185, 81%, 29%)',
          400: 'hsl(184, 77%, 34%)',
          500: '#2caeba',
          600: 'hsl(185, 57%, 50%)',
          700: 'hsl(184, 65%, 59%)',
          800: 'hsl(184, 80%, 74%)',
          900: 'hsl(185, 94%, 87%)',
          1000: 'hsl(186, 100%, 94%)',
        },
      },
    },
  },
  plugins: [],
}
