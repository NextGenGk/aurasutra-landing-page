'use client'
import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = (scrollTop / docHeight) * 100
      if (bar) bar.style.width = `${pct}%`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={barRef}
      id="scroll-progress"
      style={{ position: 'fixed', top: 0, left: 0, height: '3px', background: 'var(--primary)', zIndex: 9999, width: '0%', transition: 'width 0.1s linear' }}
    />
  )
}
