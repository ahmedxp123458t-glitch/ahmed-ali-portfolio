const projects = [
  {
    name: 'Medico', desc: 'Decentralized Healthcare Records dApp built on Ethereum with Solidity smart contracts, React frontend, and Hardhat development framework.',
    tech: ['Solidity', 'React', 'Hardhat', 'Ethereum'],
    url: 'https://medico-five-smoky.vercel.app',
    github: 'https://github.com/ahmedxp123458t-glitch/medico',
    color: '#6366f1', img: '🏥'
  },
  {
    name: 'AI Study Assistant', desc: 'AI-powered study companion with intelligent tutoring, quiz generation, progress tracking, and personalized learning paths.',
    tech: ['Python', 'FastAPI', 'AI', 'OpenAI'],
    url: 'https://ai-study-assistant-kappa-five.vercel.app',
    github: 'https://github.com/ahmedxp123458t-glitch/ai-study-assistant',
    color: '#a855f7', img: '📚'
  },
  {
    name: 'AI Mock Interview', desc: 'AI-driven mock interview platform with real-time feedback, speech analysis, and performance scoring across multiple domains.',
    tech: ['Python', 'AI', 'FastAPI', 'NLP'],
    url: 'https://ai-mock-interview-assistant-one.vercel.app',
    github: 'https://github.com/ahmedxp123458t-glitch/ai-mock-interview-assistant',
    color: '#ec4899', img: '🎤'
  },
  {
    name: 'AI Code Reviewer', desc: 'Automated code review system leveraging AI to analyze code quality, detect bugs, and suggest improvements across multiple languages.',
    tech: ['Python', 'FastAPI', 'AI', 'Jinja2'],
    url: 'https://ai-code-reviewer-ten-teal.vercel.app',
    github: 'https://github.com/ahmedxp123458t-glitch/ai-code-reviewer',
    color: '#10b981', img: '🔍'
  },
  {
    name: 'AI Resume Analyzer', desc: 'Smart resume analysis tool with ATS scoring, AI-powered suggestions, keyword optimization, and job description matching.',
    tech: ['Python', 'FastAPI', 'AI', 'NLP'],
    url: 'https://ai-resume-analyzer-pied-eta.vercel.app',
    github: 'https://github.com/ahmedxp123458t-glitch/ai-resume-analyzer',
    color: '#f59e0b', img: '📄'
  },
  {
    name: 'Restaurant Website', desc: 'Full-stack MERN restaurant website with dynamic menu, online reservations, food ordering system with COD, and interactive UI animations.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    url: 'https://restaurant-website-indol-nine.vercel.app',
    github: 'https://github.com/ahmedxp123458t-glitch/restaurant-website',
    color: '#ef4444', img: '🍽'
  },
  {
    name: 'Skill Exchange', desc: 'Platform for trading and exchanging skills between users with matching algorithms, session booking, and reputation system.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    url: 'https://skill-exchange-topaz.vercel.app',
    github: 'https://github.com/ahmedxp123458t-glitch/skill-exchange',
    color: '#3b82f6', img: '🔄'
  },
  {
    name: 'Finance Coach', desc: 'Personal finance management and coaching platform with budget tracking, expense analysis, and financial goal setting.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    url: 'https://finance-coach-delta.vercel.app',
    github: 'https://github.com/ahmedxp123458t-glitch/finance-coach',
    color: '#8b5cf6', img: '💰'
  },
  {
    name: 'Career Roadmap', desc: 'Interactive career path planning tool with skill gap analysis, learning resources, and step-by-step career progression guides.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    url: 'https://career-roadmap-delta.vercel.app',
    github: 'https://github.com/ahmedxp123458t-glitch/career-roadmap',
    color: '#14b8a6', img: '🗺'
  },
  {
    name: 'Complaint System', desc: 'Digital complaint management system with ticket tracking, status updates, admin dashboard, and notification system.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    url: 'https://complaint-system-ruby.vercel.app',
    github: 'https://github.com/ahmedxp123458t-glitch/complaint-system',
    color: '#f97316', img: '📋'
  },
  {
    name: 'Interview Platform', desc: 'Comprehensive interview preparation platform with coding challenges, mock interviews, and performance analytics.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    url: 'https://interview-platform-seven-kappa.vercel.app',
    github: 'https://github.com/ahmedxp123458t-glitch/interview-platform',
    color: '#06b6d4', img: '💼'
  },
  {
    name: 'Stella Market', desc: 'Modern e-commerce marketplace with product listings, cart management, user authentication, and secure checkout.',
    tech: ['Next.js', 'React', 'Node.js'],
    url: 'https://stella-market.vercel.app',
    github: 'https://github.com/ahmedxp123458t-glitch/stella-market',
    color: '#eab308', img: '🛒'
  },
  {
    name: 'Portfolio Marketplace', desc: 'Creative portfolio marketplace connecting freelancers with clients, featuring project showcases and bidding system.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    url: 'https://portfolio-marketplace-sage.vercel.app',
    github: 'https://github.com/ahmedxp123458t-glitch/portfolio-marketplace',
    color: '#84cc16', img: '🖼'
  },
  {
    name: 'Proposal Generator', desc: 'Automated proposal generation tool with customizable templates, client management, and professional document export.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    url: 'https://proposal-generator-one-theta.vercel.app',
    github: 'https://github.com/ahmedxp123458t-glitch/proposal-generator',
    color: '#22c55e', img: '📝'
  },
  {
    name: 'Remote Workspace', desc: 'Virtual workspace platform with team collaboration, task management, video conferencing, and real-time document editing.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    url: 'https://remote-workspace.vercel.app',
    github: 'https://github.com/ahmedxp123458t-glitch/remote-workspace',
    color: '#64748b', img: '🏢'
  },
  {
    name: 'Research Hub', desc: 'Academic research platform with paper submissions, peer reviews, citation tracking, and collaborative research tools.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    url: 'https://research-hub-umber.vercel.app',
    github: 'https://github.com/ahmedxp123458t-glitch/research-hub',
    color: '#a78bfa', img: '🔬'
  },
  {
    name: 'Charity Blush', desc: 'Charity and donation platform with campaign creation, payment integration, impact tracking, and donor management.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://charity-blush-nu.vercel.app',
    github: 'https://github.com/ahmedxp123458t-glitch/Charity-Blush',
    color: '#fb7185', img: '💗'
  },
]

const styles = {
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: 24
  },
  card: {
    borderRadius: 'var(--radius)', overflow: 'hidden',
    background: 'var(--card)', border: '1px solid var(--border)',
    transition: 'all .4s', cursor: 'pointer',
    position: 'relative'
  },
  cardTop: {
    padding: '28px 24px 20px', display: 'flex',
    flexDirection: 'column', gap: 12
  },
  iconBox: {
    width: 48, height: 48, borderRadius: 14,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 24, marginBottom: 4
  },
  name: { fontSize: 18, fontWeight: 700 },
  desc: { fontSize: 13, color: '#94a3b8', lineHeight: 1.7 },
  techs: { display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 },
  tech: {
    padding: '4px 10px', borderRadius: 6, fontSize: 11, fontWeight: 600,
    background: 'rgba(255,255,255,.06)', color: '#94a3b8'
  },
  links: {
    display: 'flex', gap: 10, padding: '16px 24px',
    borderTop: '1px solid var(--border)'
  },
  linkBtn: {
    flex: 1, padding: '8px 0', textAlign: 'center', borderRadius: 8,
    fontSize: 13, fontWeight: 600, textDecoration: 'none',
    transition: 'all .3s', cursor: 'pointer'
  }
}

export default function Projects() {
  return (
    <section id="projects" style={{ paddingBottom: 60 }}>
      <div className="container">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">Real-world applications I've built and deployed</p>
        <div style={styles.grid}>
          {projects.map((p, i) => (
            <div key={p.name} className="glass animate-on-scroll"
              style={{ transitionDelay: `${i % 6 * 100}ms` }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,.4)'
                e.currentTarget.style.borderColor = p.color + '44'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              <div style={styles.cardTop}>
                <div style={{ ...styles.iconBox, background: `${p.color}18` }}>
                  <span>{p.img}</span>
                </div>
                <h3 style={styles.name}>{p.name}</h3>
                <p style={styles.desc}>{p.desc}</p>
                <div style={styles.techs}>
                  {p.tech.map(t => (
                    <span key={t} style={styles.tech}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={styles.links}>
                <a href={p.url} target="_blank" rel="noopener"
                  style={{ ...styles.linkBtn, background: p.color + '20', color: p.color }}
                  className="project-link"
                ><i className="fas fa-external-link-alt" /> Live</a>
                <a href={p.github} target="_blank" rel="noopener"
                  style={{ ...styles.linkBtn, background: 'rgba(255,255,255,.06)', color: '#94a3b8' }}
                  className="project-link"
                ><i className="fab fa-github" /> Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .project-link:hover{filter:brightness(1.2)}
      `}</style>
    </section>
  )
}
