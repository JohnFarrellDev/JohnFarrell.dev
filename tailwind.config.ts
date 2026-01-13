module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/Components/**/*.{js,ts,jsx,tsx}', './src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          '100': 'var(--clr-primary-100)',
          '200': 'var(--clr-primary-200)',
          '300': 'var(--clr-primary-300)',
          '400': 'var(--clr-primary-400)',
          '500': 'var(--clr-primary-500)',
          '600': 'var(--clr-primary-600)',
          '700': 'var(--clr-primary-700)',
          '800': 'var(--clr-primary-800)',
          '900': 'var(--clr-primary-900)',
          '1000': 'var(--clr-primary-1000)',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary2: {
          '100': '#f3f4f6', // Very light purple
          '200': '#e5e7eb', // Light purple
          '300': '#d1d5db', // Lighter purple
          '400': '#9ca3af', // Light-medium purple
          '500': '#6b7280', // Medium purple
          '600': '#4f46e5', // Base purple (main secondary)
          '700': '#4338ca', // Darker purple
          '800': '#3730a3', // Dark purple
          '900': '#312e81', // Very dark purple
          '1000': '#1e1b4b', // Darkest purple
          DEFAULT: '#4f46e5',
          foreground: '#ffffff',
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
    },
  },
};
