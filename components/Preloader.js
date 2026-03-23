'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const panels = [0, 1, 2, 3, 4]

const panelTransition = {
  duration: 0.9,
  ease: [0.65, 0, 0.35, 1], // Premium brand-style cubic-bezier
}

export default function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Artificial 3s delay for cinematic reveal, or until page load
    const timer = setTimeout(() => setVisible(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="preloader-container"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            display: 'flex',
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
        >
          {/* Vertical Sliding Panels */}
          {panels.map((i) => (
            <motion.div
              key={i}
              initial={{ y: 0 }}
              exit={{ y: i % 2 === 0 ? '-100%' : '100%' }}
              transition={{ ...panelTransition, delay: 0.2 + i * 0.1 }}
              style={{
                flex: 1,
                background: i % 2 === 0 ? '#fff' : '#f8fafc', // Subtle alternating whites
                height: '100vh',
                borderRight: '1px solid rgba(0,0,0,0.03)',
                pointerEvents: 'auto',
              }}
            />
          ))}

          {/* Central Logo & Brand Reveal */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              transition={{ duration: 0.8 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '32px',
                zIndex: 1,
              }}
            >
              {/* Spinning Logo Ring */}
              <div style={{ position: 'relative' }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  style={{
                    width: 120, height: 120,
                    border: '2px solid rgba(76, 175, 80, 0.2)',
                    borderTopColor: 'var(--primary)',
                    borderRadius: '50%',
                  }}
                />
                <motion.img
                  src="/logo.png"
                  alt="AuraSutra Logo"
                  style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 64, height: 64,
                    objectFit: 'contain',
                  }}
                />
              </div>

              {/* Branding Text */}
              <div style={{ textAlign: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, tracking: '10px' }}
                  animate={{ opacity: 1, tracking: '4px' }}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '28px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: 'var(--dark-text)',
                    letterSpacing: '4px',
                    marginBottom: '8px',
                  }}
                >
                  Aura<span style={{ color: 'var(--primary)' }}>Sutra</span>
                </motion.div>
                <div style={{ 
                  fontSize: '12px', 
                  color: 'var(--muted)', 
                  letterSpacing: '5px', 
                  textTransform: 'uppercase',
                  fontWeight: 500
                }}>
                  Loading Experience
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
