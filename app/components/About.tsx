'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number) => ({ opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay: delay / 1000 } }),
}

const timeline = [
  { range: '2022–Present', role: 'UI/UX Consultant',  company: 'Mirasvisa Pvt Ltd' },
  { range: '2011–2019',    role: 'UI/UX Designer',    company: 'Amazepixels Technologies' },
  { range: '2007–2011',    role: 'Web Designer',       company: 'Crewind Communication' },
]

function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3) }

function runCounter(setter: (v: number) => void, target: number, duration: number) {
  const t0 = performance.now()
  const tick = (now: number) => {
    const p = Math.min((now - t0) / duration, 1)
    setter(Math.round(easeOutCubic(p) * target))
    if (p < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

export default function About() {
  const [years, setYears]       = useState(0)
  const [projects, setProjects] = useState(0)
  const [clients, setClients]   = useState(0)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let started = false
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return
      started = true
      runCounter(setYears, 20, 1600)
      runCounter(setProjects, 200, 2000)
      runCounter(setClients, 100, 1800)
      obs.disconnect()
    }, { threshold: 0.4 })
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" style={{ background: '#fdf4f3', padding: '144px 56px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <motion.div
          variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-48px' }} custom={0}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 80 }}
        >
          <div style={{ width: 32, height: 1, background: 'oklch(38% 0.16 12)' }} />
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(38% 0.16 12)' }}>About</span>
        </motion.div>

        <div className="g2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <motion.h2
              variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-48px' }} custom={80}
              style={{ fontFamily: 'var(--font-cormorant-var, serif)', fontSize: 'clamp(44px,5vw,68px)', fontWeight: 300, lineHeight: 1.06, letterSpacing: '-0.025em', color: '#111827', marginBottom: 36 }}
            >
              Design that thinks,<br /><em>strategy that converts.</em>
            </motion.h2>

            <motion.p
              variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-48px' }} custom={160}
              style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.85, color: '#4b5563', marginBottom: 22 }}
            >
              With over 19 years in UI/UX design and graphic design, I specialise in creating intuitive, visually compelling experiences that enhance user engagement and streamline interactions. From Chennai to global clients, my work spans every digital touchpoint.
            </motion.p>

            <motion.p
              variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-48px' }} custom={240}
              style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.85, color: '#4b5563', marginBottom: 48 }}
            >
              Specialising in Amazon A+ content, WordPress builds, SEO strategy, and full brand identity systems — I combine creative precision with a deep understanding of digital platforms to deliver cohesive, memorable experiences.
            </motion.p>

            <motion.div
              variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-48px' }} custom={300}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {timeline.map((t, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 20, padding: '16px 0',
                  borderTop: '1px solid #f0d5d1',
                  ...(i === timeline.length - 1 ? { borderBottom: '1px solid #f0d5d1' } : {}),
                }}>
                  <div style={{ fontSize: 11, fontWeight: 500, color: 'oklch(38% 0.16 12)', letterSpacing: '0.04em', minWidth: 90, marginTop: 2 }}>{t.range}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: '#111827' }}>{t.role}</div>
                    <div style={{ fontSize: 13, fontWeight: 300, color: '#6b7280' }}>{t.company}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.div
              variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-48px' }} custom={120}
              style={{ width: '100%', aspectRatio: '4/5', borderRadius: 6, marginBottom: 1, overflow: 'hidden', position: 'relative' }}
            >
              <Image src="/me.jpeg" alt="Sathianathan V." fill style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="50vw" />
            </motion.div>

            <div ref={statsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: '#e8c0b9' }}>
              {[
                { val: years,    label: 'Years',    delay: 200 },
                { val: projects, label: 'Projects', delay: 280 },
                { val: clients,  label: 'Clients',  delay: 360 },
              ].map(({ val, label, delay }) => (
                <motion.div
                  key={label}
                  variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-48px' }} custom={delay}
                  style={{ background: '#fdf4f3', padding: '28px 20px' }}
                >
                  <div style={{ fontFamily: 'var(--font-cormorant-var, serif)', fontSize: 50, fontWeight: 300, color: '#111827', lineHeight: 1 }}>
                    {val}<span style={{ fontSize: 22, color: 'oklch(38% 0.16 12)' }}>+</span>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 500, color: '#9ca3af', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 6 }}>{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
