'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const icons = {
  Patient: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Doctor: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
      <path d="M13 2h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
      <path d="M6 6h12" />
      <path d="M12 2v8" />
      <path d="M8 14h8" />
      <path d="M12 11v9" />
      <path d="M20 14h2" />
      <path d="M2 14h2" />
    </svg>
  ),
  Sparkle: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>
  ),
  Check: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

const portals = [
  {
    role: 'Patient',
    title: 'Your Personal Health Journey',
    desc: 'Empowering patients with AI-driven health management tools and seamless care connectivity.',
    features: [
      'AI Doctor Search',
      'Appointment Management',
      'Video Consultations',
      'Prescription Tracking',
      'Medication Adherence',
      'Profile Management'
    ],
    color: 'var(--primary)',
    bg: 'rgba(76,175,80,0.05)',
    icon: icons.Patient,
    buttonText: 'Enter Patient Portal',
    badge: 'For Patients',
    link: 'https://patient1.vercel.app/',
    image: '/patient-portal.png'
  },
  {
    role: 'Doctor',
    title: 'Advanced Clinical Solutions',
    desc: 'Cutting-edge digital tools designed to optimize clinical workflows and patient outcomes.',
    features: [
      'Clinical Dashboard',
      'Appointment Management',
      'Patient Records',
      'Prescription Management',
      'Video Consultations',
      'Profile Management'
    ],
    color: '#6c5ce7',
    bg: 'rgba(108,92,231,0.05)',
    icon: icons.Doctor,
    buttonText: 'Enter Doctor Portal',
    badge: 'For Doctors',
    link: 'https://doctor1-iota.vercel.app/',
    image: '/doctor-portal.png'
  }
]

export default function PortalSections() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="portals" className="py-16 lg:py-[100px]" style={{ background: '#fff' }}>
      <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-[40px]" ref={ref}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
          >
            <span className="pill-badge">
              <span style={{ color: 'var(--primary)', display: 'inline-flex', marginRight: 6 }}>{icons.Sparkle}</span>
              Experience AuraSutra
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
            Integrated <span style={{ color: 'var(--primary)' }}>Care Ecosystem</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-[32px]">
          {portals.map((portal, i) => (
            <motion.div
              key={portal.role}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.7 }}
              style={{
                background: portal.bg,
                border: `1px solid ${portal.role === 'Patient' ? 'rgba(76,175,80,0.15)' : 'rgba(108,92,231,0.15)'}`,
                borderRadius: '32px',
                padding: '48px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '45%',
                height: '100%',
                opacity: 0.15,
                zIndex: 0,
                pointerEvents: 'none',
              }}>
                <img 
                  src={portal.image} 
                  alt={portal.role} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', maskImage: 'linear-gradient(to left, black, transparent)' }} 
                />
              </div>
              <div style={{
                position: 'absolute',
                top: -20,
                right: -20,
                fontSize: '120px',
                opacity: 0.03,
                transform: 'rotate(15deg)',
                pointerEvents: 'none',
                zIndex: 0,
              }}>
                {portal.icon}
              </div>

              <div style={{ marginBottom: 'auto' }}>
                <span style={{
                  display: 'inline-block',
                  background: 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(4px)',
                  padding: '6px 16px',
                  borderRadius: '50px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: portal.color,
                  marginBottom: '24px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                }}>
                  {portal.badge}
                </span>

                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '32px',
                  fontWeight: 800,
                  color: 'var(--dark-text)',
                  marginBottom: '20px',
                  lineHeight: 1.2
                }}>
                  {portal.title}
                </h3>

                <p style={{
                  color: 'var(--muted)',
                  fontSize: '16px',
                  lineHeight: 1.7,
                  marginBottom: '32px',
                }}>
                  {portal.desc}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4" style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 40px 0',
                }}>
                  {portal.features.map((feature, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '14px',
                      color: 'var(--dark-text)',
                      fontWeight: 500
                    }}>
                      <span style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: portal.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: '10px'
                      }}>
                        {icons.Check}
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={portal.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  background: portal.color,
                  width: 'fit-content',
                  boxShadow: `0 10px 30px ${portal.color}30`,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                {portal.buttonText}
                <span className="arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
