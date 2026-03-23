'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const icons = {
  Sparkle: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>
  ),
  HeartCredit: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 2px' }}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
}

const footerLinks = {
  Pages: ['Home', 'About', 'Services', 'Doctors', 'Portals', 'Our Team', 'Contact'],
  Services: ['Patient', 'Doctor'],
}

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/frequnsync/',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@frequensync',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/frequnsync',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden pt-12 lg:pt-[80px]"
      style={{ background: 'var(--dark-bg)', color: '#fff' }}
    >
      {/* Decorative element */}
      <div className="spin-30" style={{
        position: 'absolute', bottom: -100, right: -100,
        width: 400, height: 400,
        border: '80px solid rgba(76,175,80,0.05)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] gap-10 lg:gap-[48px] mb-12 lg:mb-[60px]">
          {/* Logo + desc */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 20 }}>
              <img 
                src="/logo.png" 
                alt="AuraSutra Logo" 
                style={{ width: 44, height: 44, objectFit: 'contain' }} 
              />
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: '#fff' }}>
                Aura<span style={{ color: 'var(--primary)' }}>Sutra</span>
              </span>
            </Link>

            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.8, marginBottom: 28, maxWidth: 280 }}>
              Delivering compassionate, evidence-based healthcare that heals the whole person — body, mind, and spirit. Your wellness journey starts here.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="social-icon"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  style={{
                    width: 38, height: 38,
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    transition: 'transform 0.2s ease, filter 0.2s ease, background 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--primary)'
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links], colIdx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + colIdx * 0.1, duration: 0.6 }}
            >
              <h4 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 20, letterSpacing: '0.02em' }}>
                {title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={
                        link === 'Patient' 
                          ? 'https://patient1.vercel.app/' 
                          : link === 'Doctor' 
                          ? 'https://doctor1-iota.vercel.app/' 
                          : link === 'Home' 
                          ? '#'
                          : link === 'About' 
                          ? '#about'
                          : link === 'Services' 
                          ? '#features'
                          : link === 'Doctors' 
                          ? '#why'
                          : link === 'Portals' 
                          ? '#portals'
                          : link === 'Our Team' 
                          ? '#team'
                          : link === 'Contact' 
                          ? '#appointment'
                          : '#'
                      }
                      target={link === 'Patient' || link === 'Doctor' ? '_blank' : undefined}
                      rel={link === 'Patient' || link === 'Doctor' ? 'noopener noreferrer' : undefined}
                      className="footer-link"
                      style={{
                        color: 'rgba(255,255,255,0.55)',
                        textDecoration: 'none',
                        fontSize: 14,
                        display: 'block',
                        transition: 'color 0.2s ease, padding-left 0.2s ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = 'var(--primary)'
                        e.currentTarget.style.paddingLeft = '8px'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
                        e.currentTarget.style.paddingLeft = '0'
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-[24px] py-8 lg:py-[32px] mb-8 lg:mb-[32px] border-y border-[rgba(255,255,255,0.08)]"
        >
          {[
            { 
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              ), 
              title: 'Address', 
              value: 'Bhilai Institute of Technology, Durg' 
            },
            { 
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.31-2.31a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              ), 
              title: 'Phone', 
              value: '+91 9770075755' 
            },
            { 
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              ), 
              title: 'Email', 
              value: 'abrmkprm@gmail.com' 
            },
          ].map((info, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{
                width: 40, height: 40,
                background: 'rgba(76,175,80,0.15)',
                borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                {info.icon}
              </div>
              <div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{info.title}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{info.value}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-center pb-8 lg:pb-[36px] gap-4 lg:gap-[12px] text-center sm:text-left"
        >
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13 }}>
            © {new Date().getFullYear()} AuraSutra Medical Care. All rights reserved.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13 }}>
            Crafted with <span style={{ color: 'var(--primary)' }}>{icons.HeartCredit}</span> for better health
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
