import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        surface: 'hsl(var(--surface))',
        border: 'hsl(var(--border))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        accent: {
          jade: 'hsl(var(--accent-jade))',
          iris: 'hsl(var(--accent-iris))',
        },
        muted: 'hsl(var(--muted))',
      },
      borderRadius: {
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.25)',
        glass: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 30px rgba(0,0,0,0.25)',
      },
      fontFamily: {
        heading: ['var(--font-sora)'],
        body: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains)'],
      },
    },
  },
  plugins: [],
}

export default config
