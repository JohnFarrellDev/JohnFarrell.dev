import plugin from 'tailwindcss/plugin';

module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          '100': 'var(--clr-primary-1)',
          '200': 'var(--clr-primary-2)',
          '300': 'var(--clr-primary-3)',
          '400': 'var(--clr-primary-4)',
          '500': 'var(--clr-primary-5)',
          '600': 'var(--clr-primary-6)',
          '700': 'var(--clr-primary-7)',
          '800': 'var(--clr-primary-8)',
          '900': 'var(--clr-primary-9)',
          '1000': 'var(--clr-primary-10)',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        grey: {
          '100': 'var(--clr-grey-1)',
          '300': 'var(--clr-grey-3)',
          '400': 'var(--clr-grey-4)',
          '500': 'var(--clr-grey-5)',
          '800': 'var(--clr-grey-8)',
          '900': 'var(--clr-grey-9)',
          '1000': 'var(--clr-grey-10)',
        },
        link: 'var(--clr-link)',
        'link-hover': 'var(--clr-link-hover)',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    import('tailwindcss-animate'),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.page-center': {
          // 32px is to maintain the desired width with the padding added
          maxWidth: 'calc(var(--max-width) + 32px)',
          width: '95vw',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '16px',
          paddingRight: '16px',
          '@screen lg': {
            width: '90vw', // Reverts to 90vw for md and larger screens
          },
        },

        '.full-width': {
          // no idea why 8px is required but it stops the width being greater than the viewport width
          width: 'calc(100vw - 8px)',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
