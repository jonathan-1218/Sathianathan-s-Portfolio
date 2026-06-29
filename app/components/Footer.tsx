export default function Footer() {
  return (
    <footer style={{ background: '#111827', padding: '36px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <a href="#" style={{ fontFamily: 'var(--font-cormorant-var, serif)', fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em', textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>
        SV<span style={{ color: 'rgba(255,255,255,0.25)' }}>.</span>
      </a>
      <p style={{ fontSize: 12, fontWeight: 300, color: 'rgba(255,255,255,0.28)' }}>
        © {new Date().getFullYear()} Sathianathan V. ·{' '}
        <a href="https://amazepixels.com" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ textDecoration: 'none' }}>amazepixels.com</a>
      </p>
      <div style={{ display: 'flex', gap: 28 }}>
        <a href="mailto:sathianathanvaram1979@gmail.com" className="footer-link" style={{ fontSize: 12, fontWeight: 300, textDecoration: 'none' }}>Email</a>
        <a href="https://amazepixels.com" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ fontSize: 12, fontWeight: 300, textDecoration: 'none' }}>Portfolio</a>
        <a href="tel:+919941619806" className="footer-link" style={{ fontSize: 12, fontWeight: 300, textDecoration: 'none' }}>Call</a>
      </div>
    </footer>
  )
}
