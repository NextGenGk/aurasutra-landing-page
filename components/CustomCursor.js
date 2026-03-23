'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const outerRef = useRef(null)
  const innerRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const outerPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    let animId

    const onMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      inner.style.left = `${e.clientX}px`
      inner.style.top = `${e.clientY}px`
    }

    const animate = () => {
      outerPos.current.x += (pos.current.x - outerPos.current.x) * 0.12
      outerPos.current.y += (pos.current.y - outerPos.current.y) * 0.12
      outer.style.left = `${outerPos.current.x}px`
      outer.style.top = `${outerPos.current.y}px`
      animId = requestAnimationFrame(animate)
    }

    animate()
    document.addEventListener('mousemove', onMouseMove)

    // Hover states
    const addHover = () => document.body.classList.add('cursor-hover')
    const removeHover = () => document.body.classList.remove('cursor-hover')
    const addImage = () => document.body.classList.add('cursor-image')
    const removeImage = () => document.body.classList.remove('cursor-image')
    const addHeading = () => document.body.classList.add('cursor-heading')
    const removeHeading = () => document.body.classList.remove('cursor-heading')

    const links = document.querySelectorAll('a, button, [data-cursor="hover"]')
    const images = document.querySelectorAll('img, [data-cursor="image"]')
    const headings = document.querySelectorAll('h1, h2, h3, h4, .font-heading, [data-cursor="heading"]')

    links.forEach(el => { el.addEventListener('mouseenter', addHover); el.addEventListener('mouseleave', removeHover) })
    images.forEach(el => { el.addEventListener('mouseenter', addImage); el.addEventListener('mouseleave', removeImage) })
    headings.forEach(el => { el.addEventListener('mouseenter', addHeading); el.addEventListener('mouseleave', removeHeading) })

    // Click compress
    const onMouseDown = () => {
      outer.style.transform = 'translate(-50%, -50%) scale(0.5)'
      inner.style.transform = 'translate(-50%, -50%) scale(0.5)'
    }
    const onMouseUp = () => {
      outer.style.transform = 'translate(-50%, -50%) scale(1)'
      inner.style.transform = 'translate(-50%, -50%) scale(1)'
    }

    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)

    return () => {
      cancelAnimationFrame(animId)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return (
    <>
      <div id="cursor-outer" ref={outerRef} />
      <div id="cursor-inner" ref={innerRef} />
    </>
  )
}
