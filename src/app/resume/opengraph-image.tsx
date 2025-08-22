export { contentType, size } from '@/lib/og'
import { ogImage } from '@/lib/og'

export const runtime = 'edge'
export default function Image() {
  return ogImage({ title: 'Résumé — Arfath Ahmed Syed', subtitle: 'Download or preview PDF' })
}

