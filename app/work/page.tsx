import Image from 'next/image'
import Cursor from '../components/Cursor'
import Nav    from '../components/Nav'
import Footer from '../components/Footer'

const sites = [
  { name: 'Mirasvisa.com',        cat: 'UI/UX · Travel',          url: 'https://mirasvisa.com',           img: '/websites/site1.jpeg' },
  { name: 'Adiyogipromoters.com', cat: 'WordPress · Real Estate',  url: 'https://adiyogipromoters.com',    img: '/websites/site2.jpeg' },
  { name: 'Ganakalabs.com',       cat: 'UI/UX · Tech',            url: 'https://ganakalabs.com',          img: '/websites/site3.jpeg' },
  { name: 'Brigita.co',           cat: 'UI/UX · AI',              url: 'https://brigita.co',              img: '/websites/site4.jpeg' },
  { name: 'Ryvalx.com',           cat: 'WordPress · Cloud',       url: 'https://www.ryvalx.com',          img: '/websites/site5.jpeg' },
]

const brochures = [
  { img: '/brochures/1.jpeg', file: '/brochures/1.pdf',  label: 'PDF' },
  { img: '/brochures/2.jpeg', file: '/brochures/2.pdf',  label: 'PDF' },
  { img: '/brochures/3.jpeg', file: '/brochures/3.pdf',  label: 'PDF' },
  { img: '/brochures/4.jpeg', file: '/brochures/4.pptx', label: 'PPTX' },
]

// Split 18 logos into two rows of 9 for the marquee
const row1 = Array.from({ length: 9 },  (_, i) => `/logos/logo${i + 1}.jpeg`)
const row2 = Array.from({ length: 9 },  (_, i) => `/logos/logo${i + 10}.jpeg`)
const banners = Array.from({ length: 6 }, (_, i) => `/banners/banner${i + 1}.jpeg`)

function Label({ text, light }: { text: string; light?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36 }}>
      <div style={{ width: 32, height: 1, background: 'oklch(38% 0.16 12)', flexShrink: 0 }} />
      <h2 style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
        color: light ? 'rgba(255,255,255,0.45)' : 'oklch(38% 0.16 12)' }}>{text}</h2>
    </div>
  )
}

function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ flexShrink: 0, width: 160, height: 160, marginRight: 12,
      background: '#fff', borderRadius: 10, position: 'relative',
      boxShadow: '0 1px 6px rgba(0,0,0,0.07)' }}>
      <Image src={src} alt={alt} fill sizes="160px"
        style={{ objectFit: 'contain', padding: '14px' }} />
    </div>
  )
}

export default function Work() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>

        {/* Page header */}
        <section style={{ background: '#faf9f7', paddingTop: 'calc(68px + 72px)', paddingBottom: 72, paddingLeft: 56, paddingRight: 56 }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <div style={{ width: 32, height: 1, background: 'oklch(38% 0.16 12)' }} />
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(38% 0.16 12)' }}>Portfolio</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-cormorant-var, serif)', fontSize: 'clamp(44px,5vw,68px)',
              fontWeight: 300, lineHeight: 1.06, letterSpacing: '-0.025em', color: '#111827' }}>
              Selected <em>work.</em>
            </h1>
          </div>
        </section>

        {/* Websites */}
        <section style={{ background: '#faf9f7', padding: '0 56px 100px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <Label text="Websites" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
              {sites.map((s) => (
                <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer"
                  className="portfolio-card"
                  style={{ display: 'block', borderRadius: 10, overflow: 'hidden', textDecoration: 'none',
                    position: 'relative', aspectRatio: '16/9' }}>
                  <Image src={s.img} alt={s.name} fill sizes="(max-width:768px) 100vw,33vw"
                    style={{ objectFit: 'cover', objectPosition: 'top' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,0.72) 0%,transparent 55%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 22 }}>
                    <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>{s.cat}</div>
                    <div style={{ fontFamily: 'var(--font-cormorant-var, serif)', fontSize: 20, fontWeight: 400, color: '#fff' }}>{s.name}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Logos — infinite marquee */}
        <section style={{ background: '#f3f4f6', padding: '80px 0', overflow: 'hidden' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 56px', marginBottom: 36 }}>
            <Label text="Logos" />
          </div>
          {/* Row 1 → right */}
          <div style={{ overflow: 'hidden', marginBottom: 12 }}>
            <div style={{ display: 'flex', animation: 'marqRight 38s linear infinite' }}>
              {[...row1, ...row1].map((src, i) => (
                <LogoCard key={i} src={src} alt={`Logo ${(i % 9) + 1}`} />
              ))}
            </div>
          </div>
          {/* Row 2 → left */}
          <div style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex', animation: 'marqLeft 48s linear infinite' }}>
              {[...row2, ...row2].map((src, i) => (
                <LogoCard key={i} src={src} alt={`Logo ${(i % 9) + 10}`} />
              ))}
            </div>
          </div>
        </section>

        {/* Brochures */}
        <section style={{ background: '#faf9f7', padding: '80px 56px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <Label text="Brochures" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
              {brochures.map((b, i) => (
                <a key={i} href={b.file} target="_blank" rel="noopener noreferrer"
                  className="portfolio-card"
                  style={{ display: 'block', borderRadius: 10, overflow: 'hidden', textDecoration: 'none',
                    position: 'relative', aspectRatio: '3/4' }}>
                  <Image src={b.img} alt={`Brochure ${i + 1}`} fill sizes="25vw"
                    style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(0,0,0,0.65)',
                    borderRadius: 6, padding: '3px 8px', fontSize: 10, fontWeight: 500,
                    letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff' }}>
                    {b.label}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Banners — show full, natural aspect ratio */}
        <section style={{ background: '#0d1117', padding: '80px 56px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <Label text="Banners" light />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, alignItems: 'start' }}>
              {banners.map((src, i) => (
                <div key={i} className="portfolio-card" style={{ borderRadius: 10, overflow: 'hidden' }}>
                  {/* ponytail: width/height are hints only; height:auto keeps natural ratio */}
                  <Image src={src} alt={`Banner ${i + 1}`} width={1200} height={1200}
                    sizes="33vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
