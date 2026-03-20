export { contentType, size } from '@/lib/og'
import { ogImage } from '@/lib/og'

export const runtime = 'edge'
export default function Image() {
  return ogImage({ title: 'About — Arfath Ahmed Syed', subtitle: 'Product thinking, systems depth, and delivery discipline.' })
}
