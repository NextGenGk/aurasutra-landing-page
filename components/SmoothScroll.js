'use client'
import { useEffect, useRef } from 'react'

export default function SmoothScroll({ children }) {
  const wrapRef = useRef(null)

  useEffect(() => {
    let lenis
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      })
      const raf = (time) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }
    initLenis()
    return () => { if (lenis) lenis.destroy() }
  }, [])

  return <div ref={wrapRef} style={{ overflowX: 'hidden', width: '100%' }}>{children}</div>
}
