'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const raf = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px,${e.clientY - 4}px)`
        dotRef.current.style.opacity = '1'
      }
    }
    document.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div ref={dotRef} style={{
      position: 'fixed', top: 0, left: 0, zIndex: 9999,
      width: 8, height: 8, borderRadius: '50%',
      background: 'oklch(38% 0.16 12)',
      pointerEvents: 'none', opacity: 0, willChange: 'transform',
    }} />
  )
}
