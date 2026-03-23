'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function AnimatedSection({ children, delay = 0, direction = 'up' }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  }
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

const icons = {
  Building: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  Awards: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55.47.98.97 1.21C11.47 18.44 12 19 12 19s.53-.56 1.03-.79c.5-.23.97-.66.97-1.21v-2.34" />
      <path d="M7 2h10l1 9H6l1-9Z" />
    </svg>
  ),
  Sparkle: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>
  )
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="about" style={{ background: 'var(--light-bg)', padding: '100px 0' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] items-center w-full max-w-[1280px] mx-auto px-6 lg:px-[40px]">
        {/* Left Text */}
        <div>
          <AnimatedSection delay={0.1}>
            <span className="pill-badge">
              <span style={{ color: 'var(--primary)', display: 'inline-flex', marginRight: 6 }}>{icons.Sparkle}</span>
              About AuraSutra
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 4vw, 52px)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginTop: 20,
              marginBottom: 20,
              color: 'var(--dark-text)',
            }}>
              We Provide Trusted &{' '}
              <span className="heading-highlight">
                Quality Healthcare
                <svg viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    d="M2 8 Q50 2 100 8 Q150 14 198 8"
                    stroke="var(--primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </svg>
              </span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: 32, maxWidth: 500 }}>
              Founded on the principle that every person deserves compassionate, expert care, AuraSutra combines cutting-edge medical science with holistic wellness practices. Our multidisciplinary team works tirelessly to restore your health and vitality.
            </p>
          </AnimatedSection>

          {[
            {
              num: '01',
              title: 'Patient-Centered Philosophy',
              desc: 'Every treatment plan is uniquely crafted around your individual needs, lifestyle, and health goals.',
            },
            {
              num: '02',
              title: 'Evidence-Based Treatments',
              desc: 'We integrate proven medical protocols with holistic approaches for comprehensive healing outcomes.',
            },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={0.4 + i * 0.15} direction="left">
              <div style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                marginBottom: '28px',
                padding: '20px',
                background: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '36px',
                  fontWeight: 800,
                  color: 'var(--primary)',
                  lineHeight: 1,
                  minWidth: 48,
                }}>
                  {item.num}
                </span>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: '16px', marginBottom: 6, color: 'var(--dark-text)' }}>{item.title}</h4>
                  <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}

        </div>

        {/* Right — Image collage */}
        <div ref={ref} className="relative h-[440px] lg:h-[560px] mt-12 lg:mt-0 lg:order-2">
          {/* Main image */}
          <AnimatedSection delay={0.2} direction="right">
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 60,
              height: 380,
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(76,175,80,0.25)',
            }}>
              <img 
                src="/about.png" 
                alt="AuraSutra Medical Center" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{
                position: 'absolute', top: 24, left: 24,
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(8px)',
                borderRadius: 12,
                padding: '12px 16px',
                color: '#fff',
                fontSize: 13,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                zIndex: 2,
              }}>
                <span style={{ color: '#fff' }}>{icons.Building}</span>
                AuraSutra Medical Center
              </div>
            </div>
          </AnimatedSection>

          {/* Secondary image */}
          <AnimatedSection delay={0.4} direction="right">
            <div style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 240,
              height: 260,
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
            }}>
              <img 
                src="/appointment.png" 
                alt="Medical Care" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          </AnimatedSection>

          {/* Floating badge */}
          <motion.div
            className="float-anim hidden sm:flex"
            style={{
              position: 'absolute',
              bottom: 80,
              left: -20,
              background: '#fff',
              borderRadius: 16,
              padding: '16px 20px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
              alignItems: 'center',
              gap: 12,
              zIndex: 10,
            }}
          >
            <div style={{
              width: 44, height: 44,
              background: 'rgba(76,175,80,0.12)',
              borderRadius: '12px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--primary)',
            }}>
              {icons.Awards}
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--dark-text)' }}>2+ Years</div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>Excellence in Care</div>
            </div>
          </motion.div>

          {/* Rotating bg ring */}
          <div className="spin-30" style={{
            position: 'absolute',
            top: -30,
            right: -30,
            width: 160,
            height: 160,
            border: '30px solid rgba(76,175,80,0.08)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }} />
        </div>
      </div>
    </section>
  )
}
