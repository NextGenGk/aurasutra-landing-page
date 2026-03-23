'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const icons = {
  MapPin: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Phone: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Clock: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Sparkle: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>
  )
}

export default function Appointment() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section
      id="appointment"
      ref={ref}
      className="relative overflow-hidden py-16 lg:py-[100px]"
      style={{
        background: 'linear-gradient(135deg, #0d3b1e 0%, #1b5e20 50%, #2e7d32 100%)',
      }}
    >
      {/* Background decoration */}
      <div className="spin-20" style={{
        position: 'absolute', top: -100, left: -100,
        width: 400, height: 400,
        border: '80px solid rgba(255,255,255,0.03)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div className="spin-30" style={{
        position: 'absolute', bottom: -120, right: -120,
        width: 500, height: 500,
        border: '100px solid rgba(255,255,255,0.03)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-[80px] items-center w-full max-w-[1280px] mx-auto px-6 lg:px-[40px]">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="pill-badge" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
            <span style={{ color: '#fff', display: 'inline-flex', marginRight: 6 }}>{icons.Sparkle}</span>
            Our Care Centers
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(32px, 4vw, 50px)',
            fontWeight: 800,
            color: '#fff',
            marginTop: 20,
            marginBottom: 20,
            lineHeight: 1.2,
          }}>
            World-Class Care, Right Near You
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: 1.8, marginBottom: 40 }}>
            Our mission is to provide premium medical care with a human touch. Reach out to us through any of our channels or visit our modern clinic for a consultation.
          </p>

          {[
            { icon: icons.MapPin, title: 'Our Location', desc: 'Bhilai Institute of Technology, Durg' },
            { icon: icons.Phone, title: 'Phone Number', desc: '+91 9770075755' },
            { icon: icons.Clock, title: 'Working Hours', desc: 'Mon – Sat: 8am – 8pm, Sun: 10am – 4pm' },
          ].map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
              style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 24 }}
            >
              <div style={{
                width: 48, height: 48,
                background: 'rgba(255,255,255,0.12)',
                borderRadius: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', flexShrink: 0,
              }}>
                {info.icon}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 2 }}>{info.title}</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14 }}>{info.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right — Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.3)] h-[400px] lg:h-[560px]"
        >
          <img 
            src="/appointment.png" 
            alt="Medical Consultation" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
            }} 
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '40px',
          }}>
            <div style={{ color: '#fff' }}>
              <div style={{ fontSize: '24px', fontWeight: 800, marginBottom: 8, fontFamily: 'var(--font-heading)' }}>Compassionate Care</div>
              <div style={{ fontSize: '14px', opacity: 0.9 }}>Our team of dedicated specialists is committed to your well-being.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
