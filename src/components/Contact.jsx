const info = [
  { label: 'Email', value: 'alimuneeb2013@gmail.com', icon: 'fas fa-envelope', href: 'mailto:alimuneeb2013@gmail.com' },
  { label: 'Phone', value: '+92 326 6287557', icon: 'fas fa-phone', href: 'tel:+923266287557' },
  { label: 'Location', value: 'Lahore, Punjab, Pakistan', icon: 'fas fa-map-marker-alt', href: null },
  { label: 'GitHub', value: 'ahmedxp123458t-glitch', icon: 'fab fa-github', href: 'https://github.com/ahmedxp123458t-glitch' },
]

const styles = {
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: 20, maxWidth: 800, margin: '0 auto'
  },
  card: {
    padding: 24, borderRadius: 'var(--radius)', textAlign: 'center',
    background: 'var(--card)', border: '1px solid var(--border)',
    transition: 'all .3s', textDecoration: 'none', display: 'block'
  },
  iconBox: {
    width: 52, height: 52, borderRadius: '50%',
    background: 'rgba(99,102,241,.12)', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 16px', fontSize: 20, color: '#6366f1'
  },
  label: { fontSize: 12, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 },
  value: { fontSize: 15, fontWeight: 600, color: '#e2e8f0' }
}

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'radial-gradient(ellipse at center, rgba(99,102,241,.05) 0%, transparent 60%)' }}>
      <div className="container">
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle">Let's build something amazing together</p>
        <div style={styles.grid}>
          {info.map(item => (
            item.href ? (
              <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : ''} rel="noopener"
                style={styles.card}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = '#6366f144' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                <div style={styles.iconBox}><i className={item.icon} /></div>
                <div style={styles.label}>{item.label}</div>
                <div style={styles.value}>{item.value}</div>
              </a>
            ) : (
              <div key={item.label} style={styles.card}>
                <div style={styles.iconBox}><i className={item.icon} /></div>
                <div style={styles.label}>{item.label}</div>
                <div style={styles.value}>{item.value}</div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
