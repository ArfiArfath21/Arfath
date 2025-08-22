import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://arfath.me/sitemap.xml',
    host: 'https://arfath.me',
  }
}

