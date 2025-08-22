import type { Metadata } from 'next'
import './globals.css'
import { sora, inter, jetbrains } from '@/lib/fonts'
import Script from 'next/script'
import { ThemeProvider } from '@/components/theme-provider'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://arfath.me'),
  title: 'Arfath Ahmed Syed — I build AI that ships',
  description:
    'Senior Data Scientist building agentic GenAI and ML systems end-to-end — from research to production. Projects, writing, and case studies.',
  openGraph: {
    title: 'Arfath Ahmed Syed — I build AI that ships',
    description:
      'Senior Data Scientist building agentic GenAI and ML systems end-to-end — from research to production. Projects, writing, and case studies.',
    type: 'website',
    url: 'https://arfath.me',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${inter.variable} ${jetbrains.variable} transition-colors duration-300 min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Script
            defer
            data-domain="arfath.me"
            src="https://plausible.io/js/plausible.js"
          />
          <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 z-50 rounded-md bg-primary px-3 py-2 text-primary-foreground">
            Skip to content
          </a>
          <Nav />
          <main id="content" className="container-12 py-10 flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
