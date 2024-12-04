import plugin from 'tailwindcss/plugin';

module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '0-p': '0px',
        '0-5-p': '2px',
        '1-p': '4px',
        '1-5-p': '6px',
        '2-p': '8px',
        '2-5-p': '10px',
        '3-p': '12px',
        '3-5-p': '14px',
        '4-p': '16px',
        '4-5-p': '18px',
        '5-p': '20px',
        '5-5-p': '22px',
        '6-p': '24px',
        '7-p': '28px',
        '8-p': '32px',
        '9-p': '36px',
        '10-p': '40px',
        '11-p': '44px',
        '12-p': '48px',
        '13-p': '52px',
        '14-p': '56px',
        '15-p': '60px',
        '16-p': '64px',
        '17-p': '68px',
        '18-p': '72px',
        '19-p': '76px',
        '20-p': '80px',
        '30-p': '120px',
        '36-p': '144px',
        '40-p': '160px',
      },
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
        gray: {
          '50': 'var(--clr-gray-50)',
        },
        'article-yellow': 'var(--article-yellow)',
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
      container: {
        center: true,
        padding: '16px',
        screens: {
          DEFAULT: '100%',
          sm: '95vw',
          md: '95vw',
          lg: '90vw',
          xl: '1170px',
          '2xl': '1170px',
        },
      },
    },
  },
  plugins: [
    import('tailwindcss-animate'),
    plugin(function ({ addUtilities, addComponents }) {
      const newUtilities = {
        '.full-bleed': {
          width: '100svw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50svw',
          marginRight: '-50svw',
        },
      };

      // todo remove padding and margin stuff after updating global.css
      const newComponents = {
        '.article-content': {
          h2: {
            '@apply text-2xl md:text-3xl mb-2-p p-0': {},
          },
          h3: {
            '@apply text-xl md:text-2xl mb-2-p p-0': {},
          },
          '& > p': {
            '@apply text-lg text-gray-900 text-pretty mt-5-p': {},
          },
          'p, li, figcaption': {
            '@apply max-w-[70ch]': {},
          },
          '& > h2, & > h3, & > h4, & > h5, & > h6': {
            '@apply mt-8-p': {},
          },
        },
      };

      addUtilities(newUtilities);
      addComponents(newComponents);
    }),
  ],
};
