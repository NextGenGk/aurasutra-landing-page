'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const icons = {
  Emergency: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3H5C3.34 2 2 3.34 2 5v6c0 1.66 1.34 3 3 3" />
      <path d="M12 2v12" />
      <path d="M2 8h20" />
      <path d="M12 14v7" />
      <path d="M9 21h6" />
    </svg>
  ),
  Specialist: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a8.5 8.5 0 0 1 13 0" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Vaccine: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 21 4-4" />
      <path d="m9 15 3-3" />
      <path d="m14 10 3-3" />
      <path d="m18 6 3-3" />
      <path d="M7 21a2 2 0 1 1-4-4" />
      <path d="m9 13 2 2" />
      <path d="m11 11 2 2" />
      <path d="m13 9 2 2" />
      <path d="M17 5a2 2 0 1 1 4 4" />
    </svg>
  ),
  Genetic: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 3 8 18" />
      <path d="m16 3-8 18" />
      <path d="M20 7h-6" />
      <path d="M10 7H4" />
      <path d="M20 17h-6" />
      <path d="M10 17H4" />
      <path d="M15 7v10" />
      <path d="M9 7v10" />
    </svg>
  ),
  Heart: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  Sparkle: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>
  )
}

const services = [
  { icon: icons.Emergency, label: 'Emergency Care', href: '#' },
  { icon: icons.Specialist, label: 'Specialist Consults', href: '#' },
  { icon: icons.Vaccine, label: 'Vaccination Programs', href: '#' },
  { icon: icons.Genetic, label: 'Genetic Testing', href: '#' },
]

export default function SpecialCare() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section style={{ padding: '100px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }} ref={ref}>
        {/* Left */}
        <div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}}>
            <span className="pill-badge">
              <span style={{ color: 'var(--primary)', display: 'inline-flex', marginRight: 6 }}>{icons.Sparkle}</span>
              Special Programs
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 4vw, 50px)',
              fontWeight: 800,
              marginTop: 20,
              marginBottom: 20,
              lineHeight: 1.2,
              color: 'var(--dark-text)',
            }}
          >
            We Care for{' '}
            <span style={{ color: 'var(--primary)' }}>Every Stage</span>{' '}
            of Your Life
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.8, marginBottom: 36, maxWidth: 480 }}
          >
            From newborn screenings to senior wellness programs, AuraSutra provides continuous, compassionate care across every life stage. Our community health initiatives have served over 200,000 families.
          </motion.p>

          {/* Service links */}
          <div style={{ marginBottom: 40 }}>
            {services.map((svc, i) => (
              <motion.a
                key={i}
                href={svc.href}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '14px 0',
                  borderBottom: '1px solid #f0f0f0',
                  textDecoration: 'none',
                  color: 'var(--dark-text)',
                  fontSize: 15,
                  fontWeight: 500,
                  transition: 'padding-left 0.2s ease, color 0.2s ease',
                  borderLeft: '3px solid transparent',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.paddingLeft = '12px'
                  e.currentTarget.style.borderLeftColor = 'var(--primary)'
                  e.currentTarget.style.color = 'var(--primary)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.paddingLeft = '0'
                  e.currentTarget.style.borderLeftColor = 'transparent'
                  e.currentTarget.style.color = 'var(--dark-text)'
                }}
              >
                <div style={{ color: 'var(--primary)', flexShrink: 0 }}>{svc.icon}</div>
                {svc.label}
                <svg style={{ marginLeft: 'auto' }} width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            ))}
          </div>

        </div>

        {/* Right — Special card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="special-card"
          style={{ position: 'relative' }}
        >
          {/* Floating decoration */}
          <div className="float-slow" style={{
            position: 'absolute',
            top: -30, right: -30,
            width: 120, height: 120,
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            bottom: -20, left: -20,
            width: 80, height: 80,
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }} />

          <div style={{
            width: 64, height: 64,
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '18px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', marginBottom: 24,
          }}>
            {icons.Heart}
          </div>

          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '28px',
            fontWeight: 800,
            color: '#fff',
            marginBottom: 16,
            lineHeight: 1.25,
          }}>
            Building Healthier Communities Together
          </h3>

          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
            Our community outreach programs provide free screenings, health education, and preventive care to underserved populations. Because health is a right, not a privilege.
          </p>

          {/* Stats inside card */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
            {[
              ['200K+', 'Community Members Served'],
              ['50+', 'Free Health Camps/Year'],
              ['98%', 'Patient Satisfaction'],
              ['0 Cost', 'Low-Income Screenings'],
            ].map(([val, label], i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.08)',
                borderRadius: 14,
                padding: '16px',
              }}>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 24, fontWeight: 800, color: '#fff', marginBottom: 4,
                }}>{val}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{label}</div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
