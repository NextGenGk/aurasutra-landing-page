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
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
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
        <a
          href="tel:+919770075755"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
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
      </div>
    </header>
  )
}
