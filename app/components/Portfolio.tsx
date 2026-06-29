'use client'
import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16,1,0.3,1] as [number,number,number,number], delay: d/1000 } }),
}

const cards = [
  { name: 'Mirasvisa.com',        cat: 'UI/UX · Travel',      gradient: 'linear-gradient(135deg,#0d1b3e,#1a3a70)',      span: 2, ratio: '16/9' },
  { name: 'NishkaHealthcare.com', cat: 'UI/UX · Healthcare',  gradient: 'linear-gradient(135deg,#064e3b,#059669)',      span: 1, ratio: '1/1'  },
  { name: 'AMNextgen.com',        cat: 'WordPress · Tech',    gradient: 'linear-gradient(135deg,#2c1563,#7c3aed)',      span: 1, ratio: '1/1'  },
  { name: 'Ganakalabs.com',       cat: 'Logo · Brand',        gradient: 'linear-gradient(135deg,#7c2d12,#f97316)',      span: 1, ratio: '1/1'  },
  { name: 'Velveer.com',          cat: 'E-commerce · Fashion', gradient: 'linear-gradient(135deg,#1e1035,#6d28d9)',     span: 2, ratio: '16/9' },
]

export default function Portfolio() {
  return (
    <section id="work" style={{ background: '#f9fafb', padding: '144px 56px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48 }}>
          <div>
            <motion.div
              variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-48px' }} custom={0}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 20 }}
            >
              <div style={{ width: 32, height: 1, background: 'oklch(38% 0.16 12)' }} />
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(38% 0.16 12)' }}>Selected Work</span>
            </motion.div>
            <motion.h2
              variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-48px' }} custom={80}
              style={{ fontFamily: 'var(--font-cormorant-var, serif)', fontSize: 'clamp(44px,5vw,68px)', fontWeight: 300, lineHeight: 1.06, letterSpacing: '-0.025em', color: '#111827' }}
            >
              Featured <em>projects.</em>
            </motion.h2>
          </div>
          <motion.a
            variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-48px' }} custom={120}
            href="https://amazepixels.com"
            target="_blank" rel="noopener noreferrer"
            className="portfolio-link"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 400, color: '#6b7280', textDecoration: 'none', paddingBottom: 4 }}
          >
            amazepixels.com <span style={{ color: 'oklch(38% 0.16 12)' }}>→</span>
          </motion.a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {cards.map((c, i) => (
            <motion.div
              key={c.name}
              variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-48px' }} custom={i * 60}
              className="portfolio-card"
              style={{
                gridColumn: `span ${c.span}`,
                aspectRatio: c.ratio,
                background: c.gradient,
                borderRadius: 10,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 28 }}>
                <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>{c.cat}</div>
                <div style={{ fontFamily: 'var(--font-cormorant-var, serif)', fontSize: c.span === 2 ? 26 : 21, fontWeight: 400, color: '#fff' }}>{c.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
