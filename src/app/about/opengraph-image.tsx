export { contentType, size } from '@/lib/og'
import { ogImage } from '@/lib/og'

export const runtime = 'edge'
export default function Image() {
  return ogImage({ title: 'About — Arfath Ahmed Syed', subtitle: 'I build AI that ships' })
}

