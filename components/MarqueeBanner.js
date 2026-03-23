'use client'

const items = [
  'Quality Care Service',
  'Your Wellness Priority',
  'Caring for You Always',
  'Expert Medical Team',
  'Holistic Healing',
  'Advanced Treatments',
  'Compassionate Support',
  'Your Health Matters',
]

export default function MarqueeBanner() {
  const repeated = [...items, ...items]

  return (
    <div
      className="marquee-wrapper"
      style={{
        background: 'var(--primary)',
        padding: '18px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: 'marquee 25s linear infinite',
          gap: 0,
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              padding: '0 32px',
            }}
          >
            {item}
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
