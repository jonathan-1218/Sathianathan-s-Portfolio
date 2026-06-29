const rows: { cards: { gradient: string; cat: string; name: string }[]; dir: 'right' | 'left'; speed: number }[] = [
  {
    dir: 'right', speed: 42,
    cards: [
      { gradient: 'linear-gradient(135deg,#0d1b3e,#1a3a70)',               cat: 'UI/UX · Travel',          name: 'Mirasvisa.com' },
      { gradient: 'linear-gradient(135deg,oklch(22% 0.12 12),oklch(44% 0.18 22))', cat: 'Logo · Brand',   name: 'Ganakalabs.com' },
      { gradient: 'linear-gradient(135deg,#2c1563,#7c3aed)',               cat: 'WordPress · Tech',         name: 'AMNextgen.com' },
      { gradient: 'linear-gradient(135deg,#064e3b,#059669)',               cat: 'UI/UX · Healthcare',       name: 'NishkaHealthcare.com' },
      { gradient: 'linear-gradient(135deg,#7c2d12,#f97316)',               cat: 'Amazon · A+ Content',      name: 'Product Listings' },
      { gradient: 'linear-gradient(135deg,#1e1035,#6d28d9)',               cat: 'E-commerce · Fashion',     name: 'Velveer.com' },
      { gradient: 'linear-gradient(135deg,#0f172a,#1d4ed8)',               cat: 'Mobile App · Finance',     name: 'Banking UI' },
      { gradient: 'linear-gradient(135deg,#27272a,#52525b)',               cat: 'Print · Brand',            name: 'Business Collateral' },
    ],
  },
  {
    dir: 'left', speed: 54,
    cards: [
      { gradient: 'linear-gradient(135deg,#134e4a,#0d9488)',               cat: 'Dashboard · SaaS',         name: 'Admin Panel UI' },
      { gradient: 'linear-gradient(135deg,#4c0519,#be123c)',               cat: 'Social Media Kit',         name: 'Digital Assets' },
      { gradient: 'linear-gradient(135deg,#1e1b4b,#4f46e5)',               cat: 'Prototype · App',          name: 'iOS & Android' },
      { gradient: 'linear-gradient(135deg,#78350f,#d97706)',               cat: 'WooCommerce',              name: 'Online Store Build' },
      { gradient: 'linear-gradient(135deg,#0c4a6e,#0284c7)',               cat: 'SEO Strategy',             name: 'Organic Growth' },
      { gradient: 'linear-gradient(135deg,#3b0764,#9333ea)',               cat: 'Landing Pages',            name: 'High-Converting' },
      { gradient: 'linear-gradient(135deg,#052e16,#16a34a)',               cat: 'WordPress Theme',          name: 'Custom Build' },
      { gradient: 'linear-gradient(135deg,#1c1917,#a16207)',               cat: 'Print Design',             name: 'Corporate Materials' },
    ],
  },
  {
    dir: 'right', speed: 36,
    cards: [
      { gradient: 'linear-gradient(135deg,#0c1445,#2563eb)',               cat: 'Icon System',              name: 'Custom Icon Set' },
      { gradient: 'linear-gradient(135deg,#450a0a,#991b1b)',               cat: 'Photography',              name: 'Amazon Images' },
      { gradient: 'linear-gradient(135deg,#1a0533,#7c3aed)',               cat: 'Motion Design',            name: 'Brand Animations' },
      { gradient: 'linear-gradient(135deg,#0f172a,#334155)',               cat: 'UX Research',              name: 'User Testing' },
      { gradient: 'linear-gradient(135deg,#022c22,#059669)',               cat: 'Figma Systems',            name: 'Design Tokens' },
      { gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',               cat: 'WordPress SEO',            name: 'Technical Audit' },
      { gradient: 'linear-gradient(135deg,#431407,#c2410c)',               cat: 'Packaging',                name: 'Product Labels' },
      { gradient: 'linear-gradient(135deg,#1e1b4b,#6366f1)',               cat: 'Mobile Screens',           name: 'Android & iOS UI' },
    ],
  },
]

function MarqueeRow({ cards, dir, speed }: { cards: typeof rows[0]['cards']; dir: 'right' | 'left'; speed: number }) {
  const doubled = [...cards, ...cards]
  const anim = dir === 'right'
    ? `marqRight ${speed}s linear infinite`
    : `marqLeft ${speed}s linear infinite`

  return (
    <div style={{ overflow: 'hidden', marginBottom: 14 }}>
      <div style={{ display: 'flex', animation: anim }}>
        {doubled.map((c, i) => (
          <div key={i} style={{
            flexShrink: 0, width: 280, height: 178, borderRadius: 8, marginRight: 14,
            background: c.gradient, position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px' }}>
              <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>{c.cat}</div>
              <div style={{ fontFamily: 'var(--font-cormorant-var, serif)', fontSize: 16, fontWeight: 400, color: '#fff' }}>{c.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" style={{ background: '#0d1117', padding: '100px 0 108px', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto 64px', padding: '0 56px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
          <div style={{ width: 32, height: 1, background: 'oklch(38% 0.16 12)' }} />
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(55% 0.12 12)' }}>Work Highlights</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-cormorant-var, serif)', fontSize: 'clamp(44px,5vw,68px)', fontWeight: 300, lineHeight: 1.06, letterSpacing: '-0.025em', color: '#fff' }}>
            500+ projects, <em>one vision.</em>
          </h2>
          <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.38)', maxWidth: 300, lineHeight: 1.75, paddingBottom: 8 }}>
            A rolling snapshot of two decades across UI/UX, brand, WordPress, SEO, and more.
          </p>
        </div>
      </div>

      {rows.map((row, i) => (
        <MarqueeRow key={i} {...row} />
      ))}
    </section>
  )
}
