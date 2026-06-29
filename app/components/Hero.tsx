'use client'
import { useRef } from 'react'

export default function Hero() {
  const spotlightRef = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!spotlightRef.current) return
    const r = e.currentTarget.getBoundingClientRect()
    const x = (((e.clientX - r.left) / r.width) * 100).toFixed(1)
    const y = (((e.clientY - r.top) / r.height) * 100).toFixed(1)
    spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}% ${y}%, oklch(38% 0.16 12 / 0.05), transparent 55%)`
  }

  return (
    <section
      onMouseMove={onMouseMove}
      style={{
        position: 'relative', minHeight: '100vh', background: '#faf9f7',
        display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 68,
      }}
    >
      {/* BG radial tint */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 90% at 85% 10%, oklch(97% 0.025 12), transparent 65%)', pointerEvents: 'none' }} />
      {/* Diagonal lines */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg,transparent,transparent 48px,rgba(0,0,0,0.018) 48px,rgba(0,0,0,0.018) 49px)', pointerEvents: 'none' }} />
      {/* Mouse spotlight */}
      <div ref={spotlightRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2 }} />

      <div style={{ position: 'relative', zIndex: 5, width: '100%', maxWidth: 1280, margin: '0 auto', padding: '80px 56px 100px' }}>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-cormorant-var, serif)',
          fontSize: 'clamp(58px,8.5vw,130px)', fontWeight: 300,
          lineHeight: 0.92, letterSpacing: '-0.03em', color: '#111827',
          marginBottom: 36,
          animation: 'heroNameReveal 1.1s cubic-bezier(0.16,1,0.3,1) 0.3s both',
        }}>
          Sathianathan
        </h1>

        {/* Roles row */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 24, marginBottom: 28,
          animation: 'heroFadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.6s both',
        }}>
          <div style={{ height: 1, background: 'oklch(38% 0.16 12)', flexShrink: 0, animation: 'lineExpand 0.9s cubic-bezier(0.16,1,0.3,1) 0.9s both' }} />
          <p style={{ fontSize: 'clamp(11px,1vw,14px)', fontWeight: 500, color: '#6b7280', letterSpacing: '0.14em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            UI/UX Design &nbsp;·&nbsp; SEO &nbsp;·&nbsp; WordPress &nbsp;·&nbsp; Brand Identity
          </p>
        </div>

        {/* Tagline */}
        <p style={{
          fontSize: 'clamp(17px,1.7vw,22px)', fontWeight: 300, color: '#374151',
          maxWidth: 560, lineHeight: 1.6, marginBottom: 56,
          animation: 'heroFadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.75s both',
        }}>
          20+ years crafting intuitive digital experiences — from Chennai startups to global enterprises.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, animation: 'heroFadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.9s both' }}>
          <a href="#work" className="cta-primary" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '16px 36px', background: 'oklch(38% 0.16 12)', color: '#fff',
            borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 500, letterSpacing: '0.02em',
          }}>
            View My Work
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2.5 7.5h10M12.5 7.5L9 4M12.5 7.5L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#contact" className="cta-ghost" style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '15px 36px', border: '1.5px solid #e5e7eb', color: '#374151',
            borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 400, letterSpacing: '0.02em',
          }}>
            Get In Touch
          </a>
        </div>

        {/* Stats strip */}
        <div style={{ display: 'flex', gap: 0, marginTop: 80, animation: 'heroFadeUp 1s cubic-bezier(0.16,1,0.3,1) 1.1s both' }}>
          <div style={{ padding: '24px 40px 24px 0', borderRight: '1px solid #e5e7eb' }}>
            <div style={{ fontFamily: 'var(--font-cormorant-var, serif)', fontSize: 44, fontWeight: 300, color: '#111827', lineHeight: 1 }}>
              20<span style={{ fontSize: 22, fontWeight: 400, color: 'oklch(38% 0.16 12)' }}>+</span>
            </div>
            <div style={{ fontSize: 11, fontWeight: 500, color: '#9ca3af', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 4 }}>Years Experience</div>
          </div>
          <div style={{ padding: '24px 40px', borderRight: '1px solid #e5e7eb' }}>
            <div style={{ fontFamily: 'var(--font-cormorant-var, serif)', fontSize: 44, fontWeight: 300, color: '#111827', lineHeight: 1 }}>
              500<span style={{ fontSize: 22, fontWeight: 400, color: 'oklch(38% 0.16 12)' }}>+</span>
            </div>
            <div style={{ fontSize: 11, fontWeight: 500, color: '#9ca3af', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 4 }}>Projects Delivered</div>
          </div>
          <div style={{ padding: '24px 40px' }}>
            <div style={{ fontFamily: 'var(--font-cormorant-var, serif)', fontSize: 44, fontWeight: 300, color: '#111827', lineHeight: 1 }}>
              100<span style={{ fontSize: 22, fontWeight: 400, color: 'oklch(38% 0.16 12)' }}>+</span>
            </div>
            <div style={{ fontSize: 11, fontWeight: 500, color: '#9ca3af', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 4 }}>Happy Clients</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 36, left: 56,
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10,
        animation: 'heroFadeUp 1s ease 1.3s both',
      }}>
        <span style={{ fontSize: 10, color: '#9ca3af', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom,oklch(38% 0.16 12),transparent)', animation: 'scrollDrop 1.8s ease-in-out infinite' }} />
      </div>

      {/* Ghosted S */}
      <div style={{
        position: 'absolute', right: -20, top: 68,
        fontFamily: 'var(--font-cormorant-var, serif)',
        fontSize: 'clamp(200px,28vw,420px)', fontWeight: 300,
        color: 'oklch(38% 0.16 12 / 0.04)', lineHeight: 1,
        pointerEvents: 'none', userSelect: 'none', letterSpacing: '-0.06em',
      }}>S</div>
    </section>
  )
}
