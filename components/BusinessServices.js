'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const icons = {
  Success: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Lock: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  UserGroup: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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

export default function BusinessServices() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    
    setLoading(true)
    try {
      const res = await fetch('/api/business-services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })
      
      if (res.ok) {
        setSubmitted(true)
      } else {
        console.error('Submission failed')
      }
    } catch (err) {
      console.error('Error submitting to wishlist:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      ref={ref}
      style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #388e3c 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: -80, right: -80,
          width: 300, height: 300,
          background: 'rgba(255,255,255,0.04)',
          borderRadius: '50%', pointerEvents: 'none',
        }}
      />
      
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 40px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
        >
          <span className="pill-badge" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
            <span style={{ color: '#fff', display: 'inline-flex', marginRight: 6 }}>{icons.Sparkle}</span>
            Special Access
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(30px, 5vw, 52px)',
            fontWeight: 800,
            color: '#fff',
            marginTop: 20,
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          Join <span style={{ textShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>Business Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}
        >
          Get priority access to exclusive medical retreats, personalized wellness programs, and premium healthcare insights from our world-class specialists.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                borderRadius: 20,
                padding: '28px 40px',
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 20,
              }}
            >
              <span style={{ color: '#fff' }}>{icons.Success}</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>Inquiry Received!</div>
                <div style={{ fontSize: 14, opacity: 0.85 }}>Thank you for your interest in AuraSutra Business Services.</div>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="business-form">
              <input
                type="text"
                placeholder="Enter your full name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
                required
              />
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Inquire Now'}
              </button>
            </form>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 16 }}
        >
          Your privacy is our priority. No spam, just pure wellness.
        </motion.p>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          style={{ display: 'flex', justifyContent: 'center', gap: 32, marginTop: 48, flexWrap: 'wrap' }}
        >
          {[
            { icon: icons.Lock, label: 'Secure & HIPAA Compliant' },
            { icon: icons.UserGroup, label: 'Join 12,480+ Members' },
            { icon: icons.Star, label: '4.9/5 Trust Score' },
          ].map((badge, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>
              <span style={{ color: 'rgba(255,255,255,0.9)' }}>{badge.icon}</span>
              {badge.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
