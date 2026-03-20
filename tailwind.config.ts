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
        'surface-strong': 'hsl(var(--surface-strong))',
        'surface-soft': 'hsl(var(--surface-soft))',
        border: 'hsl(var(--border))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        accent: {
          cyan: 'hsl(var(--accent-cyan))',
          indigo: 'hsl(var(--accent-indigo))',
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
        card: '0 24px 80px rgba(3, 6, 18, 0.42)',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)'],
        body: ['var(--font-manrope)'],
        mono: ['var(--font-plex-mono)'],
      },
    },
  },
  plugins: [],
}

export default config
