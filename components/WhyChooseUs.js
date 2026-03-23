'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
const icons = {
  Trophy: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55.47.98.97 1.21C11.47 18.44 12 19 12 19s.53-.56 1.03-.79c.5-.23.97-.66.97-1.21v-2.34" />
      <path d="M7 2h10l1 9H6l1-9Z" />
    </svg>
  ),
  Microscope: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0-14 0" />
      <circle cx="14" cy="5" r="3" />
      <path d="m14 8 2.5 2.5" />
      <path d="M12.91 11.09c-1.18 1.18-1.18 3.1 0 4.27 1.18 1.18 3.1 1.18 4.27 0l.28-.27c1.17-1.18 1.17-3.1 0-4.27a3.03 3.03 0 0 0-4.27 0Z" />
    </svg>
  ),
  Heart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
  Smartphone: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  ),
  Building: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
      <path d="M8 14h.01" />
      <path d="M16 14h.01" />
    </svg>
  ),
  Medal: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
      <path d="M12 15v6l3-1.5 3 1.5v-6" />
      <path d="M12 15v6l-3-1.5-3 1.5v-6" />
    </svg>
  ),
  Sparkle: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>
  )
}

const stats = [
  { value: 4, suffix: '+', label: 'Specialized Centers' },
  { value: 14, suffix: '+', label: 'Expert Clinicians' },
  { value: 240, suffix: '+', label: 'Happy Recoveries' },
  { value: 24, suffix: '/7', label: 'Rapid Response' },
]

const reasons = [
  { icon: icons.Trophy, title: 'Clinical Excellence', desc: 'Our multi-disciplinary teams follow international protocols for superior patient safety.' },
  { icon: icons.Microscope, title: 'Smart Infrastructure', desc: "Equipped with India's first AI-integrated diagnostic suites and digital record systems." },
  { icon: icons.Heart, title: 'Wellness Ecosystem', desc: 'A unique blend of modern tertiary care and evidence-based holistic wellness programs.' },
  { icon: icons.Smartphone, title: 'Patient Advocacy', desc: 'Dedicated care coordinators assigned to every patient for a seamless journey.' },
]

export default function WhyChooseUs() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="why" className="py-16 lg:py-[100px]" style={{ background: '#fff' }}>
      <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-[40px]">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
          >
            <span className="pill-badge">
              <span style={{ color: 'var(--primary)', display: 'inline-flex', marginRight: 6 }}>{icons.Sparkle}</span>
              Why Choose Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              marginTop: 16,
              color: 'var(--dark-text)',
            }}
          >
            The AuraSutra <span style={{ color: 'var(--primary)' }}>Difference</span>
          </motion.h2>
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[24px] mb-12 lg:mb-[72px]">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{
                background: 'var(--light-bg)',
                borderRadius: '20px',
                padding: '32px 24px',
                textAlign: 'center',
              }}
            >
              <div className="stat-number">
                {statsInView && (
                  <CountUp
                    end={s.value}
                    duration={2}
                    separator=","
                    suffix={s.suffix}
                  />
                )}
              </div>
              <div style={{ fontSize: '14px', color: 'var(--muted)', marginTop: 8, fontWeight: 500 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Image collage + Reasons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[72px] items-center">
          {/* Left — image collage */}
          <div className="relative h-[340px] sm:h-[440px] lg:h-[500px]">
            {/* Large main image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="absolute top-0 left-0 right-[20px] sm:right-[60px] h-[220px] sm:h-[300px] overflow-hidden rounded-[24px]"
              style={{
                boxShadow: '0 20px 60px rgba(76,175,80,0.2)',
              }}
            >
              <img 
                src="/blog-3.png" 
                alt="Medical Facility" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{
                position: 'absolute', top: 20, left: 20,
                background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)',
                borderRadius: 10, padding: '8px 14px',
                color: '#fff', fontSize: 13, fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: 8,
                zIndex: 2,
              }}>
                <span style={{ color: '#fff' }}>{icons.Building}</span>
                Smart Clinical Hub
              </div>
            </motion.div>

            {/* Small image top-right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="absolute top-[20px] right-0 w-[140px] sm:w-[190px] h-[160px] sm:h-[220px] overflow-hidden rounded-[20px]"
              style={{
                boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
              }}
            >
              <img 
                src="/blog-4.png" 
                alt="Innovation" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </motion.div>

            {/* Bottom image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute bottom-0 left-[16px] sm:left-[40px] right-[16px] sm:right-auto sm:w-[340px] h-[140px] sm:h-[180px] overflow-hidden rounded-[20px]"
              style={{
                boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
              }}
            >
              <img 
                src="/patient-portal.png" 
                alt="Patient Care" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{
                position: 'absolute', bottom: 12, left: 12, right: 12,
                display: 'flex', gap: 16, alignItems: 'center',
                background: 'rgba(27,94,32,0.85)', backdropFilter: 'blur(4px)',
                padding: '10px 12px', borderRadius: 12,
              }}>
                <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.3)', borderRadius: 2 }}>
                  <div style={{ width: '92%', height: '100%', background: '#fff', borderRadius: 2 }} />
                </div>
                <span style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>92% Success Rate</span>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="float-anim absolute -left-[8px] sm:-left-[24px] top-[140px] sm:top-[200px] bg-white rounded-[16px] p-[12px_16px] sm:p-[16px_20px] flex items-center gap-[12px] z-10"
              style={{
                boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
              }}
            >
              <div style={{
                width: 44, height: 44, background: 'rgba(76,175,80,0.12)',
                borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--primary)',
              }}>
                {icons.Medal}
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--dark-text)' }}>Top Rated 2024</div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>National Health Awards</div>
              </div>
            </motion.div>
          </div>

          {/* Right — reasons */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: 36 }}
            >
              AuraSutra has been at the forefront of healthcare innovation for over 15 years. Our commitment to evidence-based medicine, combined with genuine compassion, makes us the preferred choice for families across the region.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-[20px]">
              {reasons.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="card-hover"
                  style={{
                    background: 'var(--light-bg)',
                    borderRadius: '16px',
                    padding: '24px',
                  }}
                >
                  <div style={{ color: 'var(--primary)', marginBottom: 12 }}>{r.icon}</div>
                  <h4 style={{ fontWeight: 700, fontSize: '15px', marginBottom: 8, color: 'var(--dark-text)' }}>{r.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>{r.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
