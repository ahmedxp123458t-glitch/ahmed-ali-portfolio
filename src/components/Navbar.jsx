import { useState, useEffect } from 'react'

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    padding: '16px 0', transition: 'all .3s',
    background: 'transparent'
  },
  navScrolled: {
    background: 'rgba(10,10,26,.85)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255,255,255,.06)',
    padding: '10px 0'
  },
  inner: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    maxWidth: 1200, margin: '0 auto', padding: '0 24px'
  },
  logo: {
    fontSize: 22, fontWeight: 800, color: '#fff', textDecoration: 'none'
  },
  links: {
    display: 'flex', gap: 32, alignItems: 'center', listStyle: 'none'
  },
  link: {
    color: '#94a3b8', textDecoration: 'none', fontSize: 14, fontWeight: 500,
    transition: 'color .3s', cursor: 'pointer'
  },
  mobileBtn: {
    display: 'none', background: 'none', border: 'none', color: '#fff',
    fontSize: 24, cursor: 'pointer'
  },
  mobileMenu: {
    position: 'fixed', top: 0, right: '-100%', width: '280px', height: '100vh',
    background: 'rgba(10,10,26,.98)', backdropFilter: 'blur(20px)',
    padding: '80px 32px', transition: 'right .3s', zIndex: 999,
    borderLeft: '1px solid rgba(255,255,255,.06)'
  },
  mobileLink: {
    display: 'block', color: '#94a3b8', textDecoration: 'none',
    fontSize: 18, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,.06)'
  }
}

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav style={scrolled ? { ...styles.nav, ...styles.navScrolled } : styles.nav}>
        <div style={styles.inner}>
          <a href="#hero" style={styles.logo}>
            <span className="gradient-text">AA</span>
          </a>
          <ul style={styles.links} className="nav-links">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} style={styles.link}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = '#94a3b8'}
                >{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: 13 }}>
                Hire Me <i className="fas fa-arrow-right" />
              </a>
            </li>
          </ul>
          <button style={styles.mobileBtn} className="mobile-btn" onClick={() => setOpen(true)}>
            <i className="fas fa-bars" />
          </button>
        </div>
      </nav>
      <div style={{ ...styles.mobileMenu, right: open ? '0' : '-100%' }}>
        <button onClick={() => setOpen(false)} style={{
          position: 'absolute', top: 20, right: 20, background: 'none',
          border: 'none', color: '#fff', fontSize: 24, cursor: 'pointer'
        }}><i className="fas fa-times" /></button>
        {links.map(l => (
          <a key={l.href} href={l.href} style={styles.mobileLink}
            onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#contact" className="btn btn-primary" style={{ marginTop: 24, width: '100%', justifyContent: 'center' }}
          onClick={() => setOpen(false)}>Hire Me</a>
      </div>
      {open && <div onClick={() => setOpen(false)} style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,.5)', zIndex: 998
      }} />}
      <style>{`
        @media(max-width:768px){
          .nav-links{display:none!important}
          .mobile-btn{display:block!important}
        }
      `}</style>
    </>
  )
}
