'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const icons = {
  User: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Star: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Sparkle: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>
  )
}

const testimonials = [
  {
    name: 'Ananya Sharma',
    role: 'Cardiac Patient',
    rating: 5,
    text: 'AuraSutra gave me my life back. After years of undiagnosed heart issues, their cardiology team identified the problem within days and crafted a treatment plan that truly worked. The care and compassion I received was extraordinary.',
  },
  {
    name: 'Rahul Verma',
    role: 'Orthopedic Patient',
    rating: 5,
    text: 'Following my sports injury, I thought my athletic career was over. The orthopedics team at AuraSutra performed a minimally invasive procedure and within 4 months I was back on the field. Absolutely life-changing experience.',
  },
  {
    name: 'Priya Nair',
    role: 'Wellness Program Member',
    rating: 5,
    text: 'The holistic wellness program at AuraSutra is unlike anything I have experienced before. They treat you as a whole person — mind, body, and spirit. I feel the healthiest I have been in over a decade.',
  },
  {
    name: 'Deepak Patel',
    role: 'Pediatrics Parent',
    rating: 5,
    text: "Our daughter's chronic asthma was causing constant worry. AuraSutra's pediatric pulmonology team developed a personalized management plan and now she runs and plays freely. We are forever grateful.",
  },
  {
    name: 'Meena Krishnan',
    role: 'Oncology Survivor',
    rating: 5,
    text: 'Being diagnosed with cancer is terrifying, but the oncology team at AuraSutra held my hand every step of the way. Their early detection program caught it at Stage I and today I am completely cancer-free.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length)
  const next = () => goTo((current + 1) % testimonials.length)

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  }

  return (
    <section style={{ padding: '100px 0', background: 'var(--light-bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div className="spin-20" style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 600,
        border: '100px solid rgba(76,175,80,0.04)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 40px', textAlign: 'center' }} ref={ref}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}}>
          <span className="pill-badge">
            <span style={{ color: 'var(--primary)', display: 'inline-flex', marginRight: 6 }}>{icons.Sparkle}</span>
            Patient Stories
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(30px, 4vw, 46px)',
            fontWeight: 800,
            marginTop: 16,
            marginBottom: 52,
            color: 'var(--dark-text)',
          }}
        >
          What Our Patients <span style={{ color: 'var(--primary)' }}>Say About Us</span>
        </motion.h2>

        {/* Testimonial carousel */}
        <div style={{ position: 'relative', minHeight: 300 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 24 }}>
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <span key={i} style={{ color: '#fbbf24' }}>{icons.Star}</span>
                ))}
              </div>

              {/* Quote */}
              <div style={{ position: 'relative', marginBottom: 36 }}>
                <div style={{
                  fontSize: 80,
                  lineHeight: 0.6,
                  color: 'var(--primary)',
                  opacity: 0.2,
                  fontFamily: 'Georgia, serif',
                  marginBottom: 8,
                  textAlign: 'left',
                }}>
                  &quot;
                </div>
                <p style={{
                  fontSize: 'clamp(16px, 2vw, 19px)',
                  color: 'var(--dark-text)',
                  lineHeight: 1.75,
                  fontStyle: 'italic',
                  maxWidth: 620,
                  margin: '0 auto',
                }}>
                  {testimonials[current].text}
                </p>
              </div>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                <div style={{
                  width: 56, height: 56,
                  background: 'linear-gradient(135deg, #a5d6a7, #4caf50)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff',
                  boxShadow: '0 4px 16px rgba(76,175,80,0.3)',
                }}>
                  {icons.User}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--dark-text)' }}>{testimonials[current].name}</div>
                  <div style={{ fontSize: 13, color: 'var(--primary)', fontWeight: 500 }}>{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginTop: 40 }}>
          <button
            onClick={prev}
            style={{
              width: 48, height: 48,
              border: '2px solid rgba(76,175,80,0.3)',
              borderRadius: '50%',
              background: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s ease',
              color: 'var(--primary)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--primary)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: 8 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === current ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === current ? 'var(--primary)' : 'rgba(76,175,80,0.25)',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              width: 48, height: 48,
              border: '2px solid rgba(76,175,80,0.3)',
              borderRadius: '50%',
              background: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s ease',
              color: 'var(--primary)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--primary)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
