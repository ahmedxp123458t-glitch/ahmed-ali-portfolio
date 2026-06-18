const styles = {
  section: {
    minHeight: '100vh', display: 'flex', alignItems: 'center',
    justifyContent: 'center', position: 'relative', overflow: 'hidden',
    paddingTop: 80
  },
  bg: {
    position: 'absolute', inset: 0,
    background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(168,85,247,.1) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(236,72,153,.08) 0%, transparent 50%)'
  },
  content: {
    textAlign: 'center', position: 'relative', zIndex: 1,
    maxWidth: 800, padding: '0 24px'
  },
  avatarWrapper: {
    position: 'relative', width: 170, height: 170,
    margin: '0 auto 32px', borderRadius: '50%',
    padding: 4, background: 'var(--gradient)',
    boxShadow: '0 0 60px rgba(99,102,241,.4)',
    animation: 'float 3s ease-in-out infinite',
    overflow: 'hidden'
  },
  avatar: {
    width: '100%', height: '100%', borderRadius: '50%',
    objectFit: 'cover', objectPosition: 'center 22%',
    display: 'block', border: '3px solid #0a0a1a',
    transform: 'scale(1.15)'
  },
  name: {
    fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800,
    marginBottom: 8, lineHeight: 1.1
  },
  title: {
    fontSize: 'clamp(18px, 2.5vw, 24px)', color: '#94a3b8',
    marginBottom: 24
  },
  desc: {
    fontSize: 16, color: '#64748b', maxWidth: 600,
    margin: '0 auto 40px', lineHeight: 1.8
  },
  actions: {
    display: 'flex', gap: 16, justifyContent: 'center',
    flexWrap: 'wrap'
  },
  stats: {
    display: 'flex', gap: 48, justifyContent: 'center',
    marginTop: 60, flexWrap: 'wrap'
  },
  stat: { textAlign: 'center' },
  statNum: { fontSize: 32, fontWeight: 800 },
  statLabel: { fontSize: 13, color: '#64748b', marginTop: 4 }
}

export default function Hero() {
  return (
    <section id="hero" style={styles.section}>
      <div style={styles.bg} />
      <div style={styles.content}>
        <div style={styles.avatarWrapper}>
          <img src="/profile.jpeg" alt="Ahmed Ali" style={styles.avatar} />
        </div>
        <h1 style={styles.name}>
          Hi, I'm <span className="gradient-text">Ahmed Ali</span>
        </h1>
        <p style={styles.title}>
          Full-Stack Developer & Blockchain Enthusiast
        </p>
        <p style={styles.desc}>
          MERN stack developer with expertise in Python, AI integration, blockchain development,
          and graphic design. Passionate about building scalable web applications
          and decentralized solutions.
        </p>
        <div style={styles.actions}>
          <a href="#projects" className="btn btn-primary">
            View Projects <i className="fas fa-arrow-right" />
          </a>

          <a href="https://github.com/ahmedxp123458t-glitch" target="_blank" rel="noopener" className="btn btn-outline">
            <i className="fab fa-github" /> GitHub
          </a>
        </div>
        <div style={styles.stats}>
          <div style={styles.stat}>
            <div style={styles.statNum} className="gradient-text">17+</div>
            <div style={styles.statLabel}>Projects Built</div>
          </div>
          <div style={styles.stat}>
            <div style={styles.statNum} className="gradient-text">10+</div>
            <div style={styles.statLabel}>Technologies</div>
          </div>
          <div style={styles.stat}>
            <div style={styles.statNum} className="gradient-text">100%</div>
            <div style={styles.statLabel}>Commitment</div>
          </div>
        </div>
      </div>
    </section>
  )
}
