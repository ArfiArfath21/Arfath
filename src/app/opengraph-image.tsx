import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  const { width, height } = size
  return new ImageResponse(
    (
      <div
        style={{
          width,
          height,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px',
          background: '#0B0B0F',
          color: '#E8EAF2',
          fontSize: 56,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(400px 400px at 20% 30%, rgba(79,139,255,0.25), transparent), radial-gradient(400px 400px at 80% 70%, rgba(41,211,145,0.25), transparent), radial-gradient(400px 400px at 60% 30%, rgba(155,107,255,0.25), transparent)',
          }}
        />
        <div style={{ fontWeight: 700 }}>Arfath Ahmed Syed</div>
        <div style={{ fontSize: 32, marginTop: 12, color: '#9AA0AE' }}>I build AI that ships</div>
        <div style={{ fontSize: 24, marginTop: 28, color: '#9AA0AE' }}>arfath.me</div>
      </div>
    ),
    { ...size }
  )
}
