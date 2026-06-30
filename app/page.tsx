import type { Metadata } from 'next'
import Link     from 'next/link'
import Cursor   from './components/Cursor'
import Nav      from './components/Nav'
import Hero     from './components/Hero'
import Ticker   from './components/Ticker'
import About    from './components/About'
import Services from './components/Services'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

function WorkCTA() {
  return (
    <section style={{ background: '#f3f4f6', padding: '120px 56px', textAlign: 'center' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
          <div style={{ width: 32, height: 1, background: 'oklch(38% 0.16 12)' }} />
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(38% 0.16 12)' }}>Portfolio</span>
          <div style={{ width: 32, height: 1, background: 'oklch(38% 0.16 12)' }} />
        </div>
        <h2 style={{ fontFamily: 'var(--font-cormorant-var, serif)', fontSize: 'clamp(36px,4vw,56px)',
          fontWeight: 300, lineHeight: 1.08, letterSpacing: '-0.025em', color: '#111827', marginBottom: 40 }}>
          Websites, logos, brochures &amp; <em>more.</em>
        </h2>
        <Link href="/work" className="cta-primary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '16px 40px', background: 'oklch(38% 0.16 12)', color: '#fff',
            borderRadius: 100, textDecoration: 'none', fontSize: 14, fontWeight: 500, letterSpacing: '0.02em' }}>
          View Full Portfolio
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M2.5 7.5h10M12.5 7.5L9 4M12.5 7.5L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <WorkCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
