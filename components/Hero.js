'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const slideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const icons = {
  Stethoscope: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 12.3A.3.3 0 1 0 5 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2Z" />
      <path d="M13 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
      <path d="M6 7h12" />
      <path d="M12 3v8" />
      <path d="M8 15h8" />
      <path d="M12 12v9" />
      <path d="M20 15h2" />
      <path d="M2 15h2" />
    </svg>
  ),
  Clock: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Capsule: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  ),
  Star: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Sparkle: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>
  )
}

export default function Hero() {
  const handleRipple = (e) => {
    const btn = e.currentTarget
    const circle = document.createElement('span')
    const diameter = Math.max(btn.clientWidth, btn.clientHeight)
    const radius = diameter / 2
    const rect = btn.getBoundingClientRect()
    circle.style.cssText = `width:${diameter}px;height:${diameter}px;left:${e.clientX - rect.left - radius}px;top:${e.clientY - rect.top - radius}px`
    circle.classList.add('ripple')
    btn.querySelector('.ripple')?.remove()
    btn.appendChild(circle)
  }

  return (
    <section style={{
      minHeight: '100vh',
      paddingTop: '80px',
      background: 'linear-gradient(135deg, #f0faf0 0%, #fff 60%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Decorative bg blobs */}
      <div className="spin-20" style={{
        position: 'absolute', top: '-60px', right: '-60px',
        width: 300, height: 300,
        border: '60px solid rgba(76,175,80,0.08)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-40px',
        width: 200, height: 200,
        background: 'radial-gradient(circle, rgba(76,175,80,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px] items-center w-full max-w-[1280px] mx-auto px-[20px] pb-[40px] pt-[20px] lg:px-[40px] lg:py-[80px]">
        {/* Left */}
        <div className="order-2 lg:order-1 mt-[20px] lg:mt-0">
          <motion.div {...slideLeft(0.2)}>
            <span className="pill-badge">
              <span style={{ color: 'var(--primary)', display: 'inline-flex', marginRight: 6 }}>{icons.Sparkle}</span>
              Holistic Medical Care
            </span>
          </motion.div>

          <motion.h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(44px, 5vw, 68px)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginTop: '24px',
              marginBottom: '24px',
              color: 'var(--dark-text)',
            }}
          >
            {['Healing With', 'Purpose &'].map((line, i) => (
              <motion.span key={i} {...fadeUp(0.3 + i * 0.12)} style={{ display: 'block' }}>
                {line}
              </motion.span>
            ))}
            <motion.span {...fadeUp(0.54)} style={{ display: 'block' }}>
              <span className="heading-highlight">
                Compassion
                <svg viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%' }}>
                  <motion.path
                    d="M2 8 Q50 2 100 8 Q150 14 198 8"
                    stroke="var(--primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: 'easeInOut' }}
                  />
                </svg>
              </span>
            </motion.span>
          </motion.h1>

          <motion.p {...fadeUp(0.8)} style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: 480, marginBottom: '36px' }}>
            AuraSutra brings together world-class specialists and ancient healing wisdom to deliver care that nurtures your mind, body, and spirit.
          </motion.p>

          <motion.div {...fadeUp(0.95)} style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn-primary"
              onClick={handleRipple}
              style={{ fontSize: '15px' }}
            >
              Get Started
              <span className="arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </motion.div>

          {/* Feature cards */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '52px', flexWrap: 'wrap' }}>
            {[
              { icon: icons.Stethoscope, title: 'Expert Doctors', desc: 'Board-certified specialists' },
              { icon: icons.Clock, title: '24/7 Support', desc: 'Always here for you' },
              { icon: icons.Capsule, title: 'Modern Care', desc: 'Latest treatments' },
            ].map((card, i) => (
              <motion.div
                key={i}
                {...fadeUp(1.1 + i * 0.15)}
                className="card-hover"
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '20px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                  flex: '1 1 130px',
                  minWidth: 130,
                }}
              >
                <div style={{ color: 'var(--primary)', marginBottom: '8px' }}>{card.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{card.title}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{card.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="relative order-1 lg:order-2"
        >
          <div className="h-[340px] sm:h-[440px] lg:h-[560px]" style={{
            borderRadius: '32px',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #c8e6c9, #a5d6a7)',
            position: 'relative',
          }}>
            <img 
              src="/hero_section.png" 
              alt="Medical Team" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                opacity: 0.9,
              }} 
            />
            <div style={{ position: 'absolute', top: 32, left: 32, zIndex: 1, width: '220px' }}>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                borderRadius: 16,
                padding: '20px 24px',
                color: '#fff',
                fontFamily: 'var(--font-heading)',
              }}>
                <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 4 }}>Happy Patients This Year</div>
                <div style={{ fontSize: 36, fontWeight: 800 }}>240+</div>
              </div>
            </div>
          </div>

          {/* Floating stat badge */}
          <motion.div
            className="float-anim hidden sm:flex"
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '-24px',
              background: '#fff',
              borderRadius: '16px',
              padding: '16px 20px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
              alignItems: 'center',
              gap: '12px',
              zIndex: 10,
            }}
          >
            <div style={{ width: 44, height: 44, background: 'rgba(76,175,80,0.12)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24' }}>
              {icons.Star}
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '18px', color: 'var(--dark-text)' }}>4.9/5</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Patient Rating</div>
            </div>
          </motion.div>

          <motion.div
            className="float-slow hidden sm:block"
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '-28px',
              background: 'var(--primary)',
              borderRadius: '16px',
              padding: '16px 20px',
              color: '#fff',
              boxShadow: '0 10px 40px rgba(76,175,80,0.4)',
              zIndex: 10,
            }}
          >
            <div style={{ fontSize: '12px', opacity: 0.85, marginBottom: 2 }}>Certified Specialists</div>
            <div style={{ fontWeight: 800, fontSize: '22px' }}>12+</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
