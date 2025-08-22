import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://arfath.me'
  return [
    '', '/', '/work', '/about', '/awards', '/resume', '/contact',
  ].map((p) => ({ url: `${base}${p}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 }))
}

