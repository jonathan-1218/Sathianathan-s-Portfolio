'use client'
import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16,1,0.3,1] as [number,number,number,number], delay: d/1000 } }),
}

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="oklch(38% 0.16 12)" strokeWidth="1.5"/>
        <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="oklch(38% 0.16 12)" strokeWidth="1.5"/>
        <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="oklch(38% 0.16 12)" strokeWidth="1.5"/>
        <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="oklch(38% 0.16 12)" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'UI/UX Design',
    body: 'Intuitive interfaces and seamless user experiences that convert visitors into loyal customers. End-to-end design from wireframes to pixel-perfect deliverables.',
    tags: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 21L15 15M17 10a7 7 0 11-14 0 7 7 0 0114 0z" stroke="oklch(38% 0.16 12)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'SEO Optimization',
    body: 'Data-driven SEO strategies that improve organic rankings and drive qualified traffic. Technical audits, content strategy, and sustainable long-term growth.',
    tags: ['Technical SEO', 'Content Strategy', 'Analytics', 'Link Building'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="oklch(38% 0.16 12)" strokeWidth="1.5"/>
        <path d="M8 12h8M12 8v8" stroke="oklch(38% 0.16 12)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'WordPress Development',
    body: 'Custom WordPress builds that are fast, secure, and tailored to your brand. WooCommerce integration, theme development, and ongoing maintenance.',
    tags: ['Custom Themes', 'WooCommerce', 'Performance', 'Security'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="oklch(38% 0.16 12)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Logo & Brand Identity',
    body: 'Memorable brand identities that communicate your values and stand out in crowded markets. Logo design, brand guidelines, and full visual identity systems.',
    tags: ['Logo Design', 'Brand Guidelines', 'Typography', 'Color Systems'],
  },
]

export default function Services() {
  return (
    <section id="services" style={{ background: '#faf9f7', padding: '144px 56px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <div className="fc-m" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 48, marginBottom: 64 }}>
          <motion.h2
            variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-48px' }} custom={0}
            style={{ fontFamily: 'var(--font-cormorant-var, serif)', fontSize: 'clamp(44px,5vw,68px)', fontWeight: 300, lineHeight: 1.06, letterSpacing: '-0.025em', color: '#111827', maxWidth: 480 }}
          >
            What I <em>bring</em> to the table.
          </motion.h2>
          <motion.p
            variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-48px' }} custom={80}
            style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: '#6b7280', maxWidth: 380, paddingTop: 12 }}
          >
            Two decades of craft across design, development, and digital strategy — delivered with the precision of a specialist and the range of an agency.
          </motion.p>
        </div>

        <div className="g2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-48px' }} custom={i * 80}
              className="service-card"
              style={{ background: '#fff', border: '1.5px solid #e5e7eb', borderRadius: 12, padding: '48px 44px' }}
            >
              <div style={{ width: 52, height: 52, background: 'oklch(97% 0.025 12)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28 }}>
                {s.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-cormorant-var, serif)', fontSize: 28, fontWeight: 400, letterSpacing: '-0.01em', color: '#111827', marginBottom: 16 }}>{s.title}</h3>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.75, color: '#6b7280', marginBottom: 28 }}>{s.body}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {s.tags.map(tag => (
                  <span key={tag} style={{ fontSize: 11, fontWeight: 500, color: 'oklch(28% 0.16 12)', background: 'oklch(97% 0.025 12)', borderRadius: 100, padding: '5px 13px', letterSpacing: '0.04em' }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
