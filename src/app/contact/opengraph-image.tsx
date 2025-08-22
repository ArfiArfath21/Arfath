export { contentType, size } from '@/lib/og'
import { ogImage } from '@/lib/og'

export const runtime = 'edge'
export default function Image() {
  return ogImage({ title: 'Contact — Arfath Ahmed Syed', subtitle: 'Let’s build something great' })
}

