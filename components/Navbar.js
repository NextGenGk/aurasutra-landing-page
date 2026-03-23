'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#features' },
  { label: 'Doctors', href: '#why' },
  { label: 'Contact', href: '#appointment' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: '#fff',
        height: scrolled ? '64px' : '80px',
        boxShadow: scrolled ? '0 2px 30px rgba(0,0,0,0.1)' : '0 2px 20px rgba(0,0,0,0.06)',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-[40px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <img 
            src="/logo.png" 
            alt="AuraSutra Logo" 
            style={{ width: 44, height: 44, objectFit: 'contain' }} 
          />
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 800, color: 'var(--dark-text)' }}>
            Aura<span style={{ color: 'var(--primary)' }}>Sutra</span>
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden lg:flex" style={{ gap: '32px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="nav-link"
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: 'var(--dark-text)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+919770075755"
            className="hidden sm:flex items-center gap-[10px] no-underline"
          >
          <div style={{
            width: 40, height: 40,
            background: 'rgba(76,175,80,0.12)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="18" height="18" fill="var(--primary)" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: 1 }}>Call Us Now</div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--dark-text)' }}>+91 9770075755</div>
          </div>
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-[var(--dark-text)] ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-[100%] left-0 right-0 bg-white border-b border-[rgba(0,0,0,0.05)] shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col py-6 px-6 gap-2 bg-white">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[16px] font-semibold text-[var(--dark-text)] no-underline py-3 border-b border-[rgba(0,0,0,0.04)]"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+919770075755"
                className="flex items-center gap-[12px] no-underline py-4 mt-2"
              >
                <div style={{
                  width: 40, height: 40,
                  background: 'rgba(76,175,80,0.12)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="18" height="18" fill="var(--primary)" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1 }}>Call Us Now</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--dark-text)' }}>+91 9770075755</div>
                </div>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
