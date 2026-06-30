export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 68, padding: '0 56px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(20px) saturate(160%)',
      WebkitBackdropFilter: 'blur(20px) saturate(160%)',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    }}>
      <a href="/" style={{
        fontFamily: 'var(--font-cormorant-var, serif)',
        fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em',
        textDecoration: 'none', color: '#111827',
      }}>
        SV<span style={{ color: 'oklch(38% 0.16 12)' }}>.</span>
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
        <a href="#about"    className="nav-link" style={{ fontSize: 13, fontWeight: 400, letterSpacing: '0.03em', textDecoration: 'none' }}>About</a>
        <a href="#services" className="nav-link" style={{ fontSize: 13, fontWeight: 400, letterSpacing: '0.03em', textDecoration: 'none' }}>Services</a>
        <a href="/work"     className="nav-link" style={{ fontSize: 13, fontWeight: 400, letterSpacing: '0.03em', textDecoration: 'none' }}>Work</a>
        <a href="#contact" className="nav-cta" style={{
          fontSize: 13, fontWeight: 500, padding: '10px 24px',
          background: 'oklch(38% 0.16 12)', color: '#fff',
          borderRadius: 100, textDecoration: 'none', letterSpacing: '0.02em',
        }}>Hire Me</a>
      </div>
    </nav>
  )
}
