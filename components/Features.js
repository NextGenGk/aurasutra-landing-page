'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const icons = {
  Heart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  Brain: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" />
    </svg>
  ),
  Dental: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 6.5C7 4.57 8.57 3 10.5 3S14 4.57 14 6.5V11c0 2.21-1.79 4-4 4s-4-1.79-4-4V6.5Z" />
      <path d="M17 6.5C17 4.57 18.57 3 20.5 3s3.5 1.57 3.5 3.5V11c0 2.21-1.79 4-4 4s-4-1.79-4-4V6.5Z" />
      <path d="M3 11v1a9 9 0 0 0 18 0v-1" />
      <path d="M3 14a9 9 0 0 0 18 0" />
    </svg>
  ),
  Eye: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Bone: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 10c.7-.7 1.6-1 2.5-1a3.5 3.5 0 1 1 0 7c-.9 0-1.8-.3-2.5-1" />
      <path d="M7 10c-.7-.7-1.6-1-2.5-1a3.5 3.5 0 1 0 0 7c.9 0 1.8-.3 2.5-1" />
      <path d="M7 10.5 17 10.5" />
      <path d="M7 13.5 17 13.5" />
    </svg>
  ),
  Building: (
    <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  Sparkle: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>
  ),
  Leaf: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 8a9 9 0 0 1-18 0" />
      <path d="M7 10.5 17 10.5" />
    </svg>
  )
}

const features = [
  {
    icon: icons.Heart,
    title: 'Cardiology & Heart Health',
    desc: 'Advanced diagnostics and treatment for cardiovascular conditions with state-of-the-art technology and compassionate specialists.',
    color: '#ff6b6b',
  },
  {
    icon: icons.Brain,
    title: 'Neurology & Brain Care',
    desc: 'Comprehensive neurological evaluations and evidence-based treatment plans tailored to restore and protect brain function.',
    color: '#6c5ce7',
  },
  {
    icon: icons.Dental,
    title: 'Dental & Oral Health',
    desc: 'Full-spectrum oral healthcare from preventive hygiene to complex restorative and cosmetic dental procedures.',
    color: '#00b894',
  },
  {
    icon: icons.Eye,
    title: 'Ophthalmology',
    desc: 'Cutting-edge eye care services including LASIK consultations, cataract treatments, and retinal therapies.',
    color: '#fdcb6e',
  },
  {
    icon: icons.Bone,
    title: 'Orthopedics & Joints',
    desc: 'Expert musculoskeletal care for sports injuries, joint replacement, spine health, and physical rehabilitation.',
    color: '#e17055',
  },
  {
    icon: icons.Leaf,
    title: 'Holistic Wellness',
    desc: 'Integrative medicine combining Ayurveda, acupuncture, nutrition therapy, and mindfulness for whole-body healing.',
    color: '#00cec9',
  },
]

function FeatureRow({ feature, index, isActive, onHover }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="feature-row"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '8px',
        background: isActive ? 'rgba(76,175,80,0.05)' : 'transparent',
        borderRadius: 12,
        padding: '20px 16px',
        transition: 'background 0.2s ease',
      }}
    >
      <motion.div
        animate={inView ? { rotate: 360 } : { rotate: 0 }}
        transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
        style={{
          width: 52,
          height: 52,
          borderRadius: '14px',
          background: `${feature.color}18`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          flexShrink: 0,
        }}
      >
        {feature.icon}
      </motion.div>
      <div style={{ flex: 1 }}>
        <h4 style={{ fontWeight: 700, fontSize: '16px', color: 'var(--dark-text)', marginBottom: 4 }}>{feature.title}</h4>
        <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.5 }}>{feature.desc}</p>
      </div>
      <div className="feature-arrow" style={{ color: 'var(--primary)', flexShrink: 0 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </motion.div>
  )
}

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="features" className="py-16 lg:py-[100px]" style={{ background: '#fff' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[40px]">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            ref={ref}
          >
            <span className="pill-badge">
              <span style={{ color: 'var(--primary)', display: 'inline-flex', marginRight: 6 }}>{icons.Sparkle}</span>
              Our Specialties
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
            World-Class Medical <span style={{ color: 'var(--primary)' }}>Specialties</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            style={{ color: 'var(--muted)', fontSize: '16px', marginTop: 12, maxWidth: 560, margin: '12px auto 0' }}
          >
            From preventive care to complex treatments, our specialists deliver excellence across every medical discipline.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center">
          {/* Feature list */}
          <div>
            {features.map((feature, i) => (
              <FeatureRow
                key={i}
                feature={feature}
                index={i}
                isActive={activeIndex === i}
                onHover={setActiveIndex}
              />
            ))}
          </div>

          {/* Animated display panel */}
          <div style={{ position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex ?? 'default'}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: activeIndex !== null
                    ? `linear-gradient(135deg, ${features[activeIndex]?.color}22, ${features[activeIndex]?.color}08)`
                    : 'linear-gradient(135deg, rgba(76,175,80,0.12), rgba(76,175,80,0.04))',
                  borderRadius: '28px',
                  padding: '52px 48px',
                  minHeight: 420,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  border: `2px solid ${activeIndex !== null ? features[activeIndex]?.color + '30' : 'rgba(76,175,80,0.15)'}`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ fontSize: '72px', marginBottom: 24 }}>
                  {activeIndex !== null ? features[activeIndex].icon : icons.Building}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '26px',
                  fontWeight: 800,
                  color: 'var(--dark-text)',
                  marginBottom: 16,
                }}>
                  {activeIndex !== null ? features[activeIndex].title : 'Hover a specialty'}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.7, maxWidth: 360 }}>
                  {activeIndex !== null
                    ? features[activeIndex].desc
                    : 'Explore our comprehensive range of medical specialties by hovering on each service.'}
                </p>

                {/* Stats row */}
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-8">
                  {[['25+', 'Patients/month'], ['98%', 'Satisfaction'], ['24/7', 'Availability']].map(([val, label], i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: activeIndex !== null ? features[activeIndex].color : 'var(--primary)' }}>{val}</div>
                      <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: 2 }}>{label}</div>
                    </div>
                  ))}
                </div>

                {/* Floating decoration */}
                <div className="float-slow" style={{
                  position: 'absolute',
                  bottom: -20,
                  right: -20,
                  width: 100,
                  height: 100,
                  background: activeIndex !== null ? `${features[activeIndex].color}18` : 'rgba(76,175,80,0.08)',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                }} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
