const items = ['UI/UX Design', 'SEO Optimization', 'WordPress Development', 'Brand Identity', 'Amazon A+ Content', 'Mobile App Design']
const doubled = [...items, ...items]

export default function Ticker() {
  return (
    <div style={{ background: 'oklch(38% 0.16 12)', padding: '14px 0', overflow: 'hidden' }}>
      <div style={{ display: 'flex', animation: 'tickerScroll 22s linear infinite', whiteSpace: 'nowrap' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 0 }}>
            <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0 40px' }}>
              {item}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
