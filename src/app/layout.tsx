import type { Metadata } from 'next'
import './globals.css'
import { manrope, plexMono, spaceGrotesk } from '@/lib/fonts'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://arfath.me'),
  title: 'Arfath Ahmed Syed',
  description:
    'Senior Data Scientist designing and shipping AI systems that hold up in production. Selected work, writing, and contact.',
  openGraph: {
    title: 'Arfath Ahmed Syed',
    description:
      'Senior Data Scientist designing and shipping AI systems that hold up in production. Selected work, writing, and contact.',
    type: 'website',
    url: 'https://arfath.me',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <head>
        {process.env.NODE_ENV === 'production' ? (
          <script defer data-domain="arfath.me" src="https://plausible.io/js/script.js" />
        ) : null}
      </head>
      <body className={`${spaceGrotesk.variable} ${manrope.variable} ${plexMono.variable}`}>
        <div className="site-shell flex min-h-screen flex-col">
          <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 z-50 rounded-md bg-primary px-3 py-2 text-primary-foreground">
            Skip to content
          </a>
          <Nav />
          <main id="content" className="container-12 flex-1 py-10 md:py-14">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
