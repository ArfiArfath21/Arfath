import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function ogImage({ title, subtitle }: { title: string; subtitle?: string }) {
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
          padding: '72px',
          background: '#070c15',
          color: '#e9edf6',
          fontSize: 56,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(520px 520px at 16% 18%, rgba(76,129,255,0.24), transparent), radial-gradient(420px 420px at 84% 16%, rgba(96,118,255,0.16), transparent), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            position: 'relative',
          }}
        >
          <div
            style={{
              fontSize: 20,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'rgba(113, 166, 255, 0.84)',
            }}
          >
            Arfath Ahmed Syed
          </div>
          <div style={{ fontWeight: 700, lineHeight: 1 }}>{title}</div>
        </div>
        {subtitle ? (
          <div style={{ fontSize: 30, marginTop: 16, color: '#9aa7bf', maxWidth: 900 }}>{subtitle}</div>
        ) : null}
        <div style={{ fontSize: 24, marginTop: 34, color: '#9aa7bf' }}>arfath.me</div>
      </div>
    ),
    { ...size }
  )
}
