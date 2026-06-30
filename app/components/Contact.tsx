'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16,1,0.3,1] as [number,number,number,number], delay: d/1000 } }),
}

const contactRows = [
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="1.5"/><path d="M22 6l-10 7L2 6" stroke="white" strokeWidth="1.5"/></svg>,
    label: 'Email',
    value: 'sathianathanvaram1979@gmail.com',
    href: 'mailto:sathianathanvaram1979@gmail.com',
  },
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" stroke="white" strokeWidth="1.5"/></svg>,
    label: 'Phone',
    value: '+91 9941619806',
    href: 'tel:+919941619806',
  },
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="white" strokeWidth="1.5"/><circle cx="12" cy="9" r="2.5" stroke="white" strokeWidth="1.5"/></svg>,
    label: 'Location',
    value: 'Chennai, India · Available Worldwide',
    href: undefined,
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('https://formspree.io/f/xyzzyzzz', {  // ponytail: replace xyzzyzzz with your Formspree form ID
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) setSubmitted(true)
  }

  const fieldStyle: React.CSSProperties = {
    width: '100%', padding: '14px 18px',
    background: 'rgba(255,255,255,0.1)',
    border: '1.5px solid rgba(255,255,255,0.2)',
    borderRadius: 10, color: '#fff', fontSize: 14, fontWeight: 300,
    outline: 'none', fontFamily: 'inherit',
  }

  return (
    <section id="contact" style={{ background: 'oklch(38% 0.16 12)', padding: '144px 56px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'start' }}>

        {/* Left */}
        <div>
          <motion.h2
            variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-48px' }} custom={0}
            style={{ fontFamily: 'var(--font-cormorant-var, serif)', fontSize: 'clamp(44px,5vw,68px)', fontWeight: 300, lineHeight: 1.06, letterSpacing: '-0.025em', color: '#fff', marginBottom: 24 }}
          >
            Let&apos;s build something <em>remarkable.</em>
          </motion.h2>
          <motion.p
            variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-48px' }} custom={80}
            style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: 'rgba(255,255,255,0.7)', marginBottom: 56 }}
          >
            Have a project in mind? Let&apos;s talk about how we can create something exceptional together.
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {contactRows.map((row, i) => (
              <motion.div
                key={row.label}
                variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-48px' }} custom={160 + i * 60}
                style={{ display: 'flex', alignItems: 'center', gap: 20 }}
              >
                <div style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {row.icon}
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 2 }}>{row.label}</div>
                  {row.href ? (
                    <a href={row.href} style={{ fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>{row.value}</a>
                  ) : (
                    <span style={{ fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.85)' }}>{row.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — form or success */}
        <motion.div
          variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-48px' }} custom={200}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '80px 40px' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-cormorant-var, serif)', fontSize: 36, fontWeight: 300, color: '#fff', marginBottom: 12 }}>Message Sent!</h3>
              <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.65)' }}>I&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <input required className="form-field" placeholder="Full Name" value={form.name} onChange={set('name')} style={fieldStyle} />
              <input required type="email" className="form-field" placeholder="Email Address" value={form.email} onChange={set('email')} style={fieldStyle} />
              <select required className="form-field" value={form.service} onChange={set('service')} style={{ ...fieldStyle, color: form.service ? '#fff' : 'rgba(255,255,255,0.45)' }}>
                <option value="" disabled style={{ background: 'oklch(38% 0.16 12)' }}>Service Needed</option>
                {['UI Design','Website Development','Logo Designing','SEO','Banner','Brochure'].map(o => (
                  <option key={o} value={o} style={{ background: 'oklch(38% 0.16 12)' }}>{o}</option>
                ))}
              </select>
              <textarea required className="form-field" placeholder="Message" rows={4} value={form.message} onChange={set('message')} style={{ ...fieldStyle, resize: 'vertical' }} />
              <button type="submit" className="submit-btn" style={{
                marginTop: 8, padding: '16px 40px', background: '#fff', color: 'oklch(38% 0.16 12)',
                border: 'none', borderRadius: 100, fontSize: 14, fontWeight: 600,
                cursor: 'pointer', alignSelf: 'flex-start',
              }}>
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
