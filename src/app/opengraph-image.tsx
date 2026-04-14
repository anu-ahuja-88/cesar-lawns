import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = "Cesar's Lawns Services — Lawn Mowing Porirua"
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          backgroundColor: '#1C5C37',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Right panel */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: 420,
            height: 630,
            backgroundColor: '#163F28',
            display: 'flex',
          }}
        />
        {/* Decorative circle */}
        <div
          style={{
            position: 'absolute',
            right: 100,
            top: 100,
            width: 360,
            height: 360,
            borderRadius: '50%',
            backgroundColor: '#24703F',
            opacity: 0.6,
            display: 'flex',
          }}
        />
        {/* Bottom lime bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 1200,
            height: 70,
            backgroundColor: '#7DC744',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: '#141C14',
              letterSpacing: '0.05em',
            }}
          >
            cesarslawnsservices.co.nz
          </span>
        </div>
        {/* Main content */}
        <div
          style={{
            position: 'absolute',
            left: 80,
            top: 80,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span
            style={{
              fontSize: 88,
              fontWeight: 900,
              color: 'white',
              lineHeight: 1,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
            }}
          >
            CESAR&apos;S
          </span>
          <span
            style={{
              fontSize: 88,
              fontWeight: 900,
              color: '#7DC744',
              lineHeight: 1,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
            }}
          >
            LAWNS
          </span>
          <span
            style={{
              fontSize: 88,
              fontWeight: 900,
              color: 'white',
              lineHeight: 1,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
            }}
          >
            SERVICES
          </span>
          <span
            style={{
              fontSize: 26,
              color: 'rgba(255,255,255,0.7)',
              marginTop: 20,
            }}
          >
            Porirua&apos;s Lawn &amp; Garden Crew
          </span>
          {/* Badge */}
          <div
            style={{
              marginTop: 20,
              backgroundColor: '#7DC744',
              borderRadius: 32,
              paddingLeft: 28,
              paddingRight: 28,
              paddingTop: 12,
              paddingBottom: 12,
              display: 'flex',
              alignSelf: 'flex-start',
            }}
          >
            <span
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: '#141C14',
              }}
            >
              FREE QUOTES · 022 187 2853
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
