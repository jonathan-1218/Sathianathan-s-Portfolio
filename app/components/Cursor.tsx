'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const cx = useRef(0), cy = useRef(0)
  const rx = useRef(0), ry = useRef(0)
  const raf = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cx.current = e.clientX; cy.current = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px,${e.clientY - 4}px)`
        dotRef.current.style.opacity = '1'
      }
      if (ringRef.current) ringRef.current.style.opacity = '1'
    }
    const animate = () => {
      rx.current += (cx.current - rx.current) * 0.11
      ry.current += (cy.current - ry.current) * 0.11
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${rx.current - 18}px,${ry.current - 18}px)`
      raf.current = requestAnimationFrame(animate)
    }
    document.addEventListener('mousemove', onMove, { passive: true })
    raf.current = requestAnimationFrame(animate)
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9999,
        width: 8, height: 8, borderRadius: '50%',
        background: 'oklch(38% 0.16 12)',
        pointerEvents: 'none', opacity: 0, willChange: 'transform',
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9998,
        width: 36, height: 36, borderRadius: '50%',
        border: '1.5px solid oklch(52% 0.22 245 / 0.35)',
        pointerEvents: 'none', opacity: 0, willChange: 'transform',
      }} />
    </>
  )
}
