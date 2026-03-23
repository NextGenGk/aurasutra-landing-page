'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const teamMembers = [
  {
    name: 'Mr. Abeer Kapoor',
    designation: 'Founder, CTO, Product Manager, Sales',
    email: 'akabrkapoor@gmail.com',
    mob: '9770075755',
  },
  {
    name: 'Mr. Gaurav Kumar',
    designation: 'Co-Founder, Tech Head',
    email: 'gauravkumar4841@gmail.com',
    mob: '75829 85761',
  },
  {
    name: 'Mr. Abhishek Sharma',
    designation: 'COO, Solution Architect',
    email: 'abhitrade7104@gmail.com',
    mob: '88713 30031',
  },
  {
    name: 'Mr. Rahul Kumar',
    designation: 'Frontend Developer, Marketing, Sales',
    email: 'rahulwilliamson@gmail.com',
    mob: '6267644317',
  },
  {
    name: 'Mr. Mayank Sahu',
    designation: 'Frontend Developer, Cyber Security, Marketing',
    email: 'mayanksahu3506@gmail.com',
    mob: '9303190168',
  },
]

const icons = {
  Mail: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      <rect width="20" height="16" x="2" y="4" rx="2" />
    </svg>
  ),
  Phone: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Sparkle: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>
  )
}

export default function OurTeam() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="team" className="py-16 lg:py-[120px]" style={{ background: 'linear-gradient(to bottom, #fff, #f8fafc)' }}>
      <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-[40px]" ref={ref}>
        {/* Header */}
        <div className="text-center mb-12 lg:mb-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="pill-badge" style={{ marginBottom: 16 }}>
              <span style={{ color: 'var(--primary)', display: 'inline-flex', marginRight: 6 }}>{icons.Sparkle}</span>
              A FrequnSync Product
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 800,
              color: 'var(--dark-text)',
              marginBottom: 16,
            }}
          >
            Meet Our <span style={{ color: 'var(--primary)' }}>Elite Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ color: 'var(--muted)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}
          >
            The visionaries and innovators behind AuraSutra, dedicated to redefining the healing journey with purpose.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[32px] justify-center">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -8 }}
              className="card-hover"
              style={{
                background: '#fff',
                borderRadius: '24px',
                padding: '40px 32px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                border: '1px solid rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              {/* Profile Header */}
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontSize: '24px', 
                  fontWeight: 800, 
                  color: 'var(--dark-text)',
                  marginBottom: '8px' 
                }}>
                  {member.name}
                </h3>
                <div style={{ 
                  color: 'var(--primary)', 
                  fontSize: '14px', 
                  fontWeight: 700, 
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {member.designation}
                </div>
              </div>

              {/* Contact Info */}
              <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {member.email && (
                  <a href={`mailto:${member.email}`} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    color: 'var(--muted)', 
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                  >
                    <span style={{ color: 'var(--primary)' }}>{icons.Mail}</span>
                    {member.email}
                  </a>
                )}
                {member.mob && (
                  <a href={`tel:${member.mob.replace(/\s/g, '')}`} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    color: 'var(--muted)', 
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                  >
                    <span style={{ color: 'var(--primary)' }}>{icons.Phone}</span>
                    {member.mob}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
