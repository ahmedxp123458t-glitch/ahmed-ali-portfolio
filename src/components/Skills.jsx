import { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'React.js', level: 86, icon: 'fab fa-react', color: '#61dafb' },
  { name: 'Node.js', level: 86, icon: 'fab fa-node-js', color: '#339933' },
  { name: 'Express.js', level: 86, icon: 'fas fa-server', color: '#fff' },
  { name: 'MongoDB', level: 75, icon: 'fas fa-database', color: '#47a248' },
  { name: 'SQL', level: 75, icon: 'fas fa-database', color: '#336791' },
  { name: 'Python', level: 86, icon: 'fab fa-python', color: '#3776ab' },
  { name: 'C++', level: 86, icon: 'fas fa-code', color: '#00599c' },
  { name: 'Blockchain / Solidity', level: 86, icon: 'fas fa-link', color: '#e2761b' },
  { name: 'TypeScript', level: 86, icon: 'fab fa-js', color: '#3178c6' },
  { name: 'Adobe Illustrator', level: 86, icon: 'fas fa-paint-brush', color: '#ff9a00' },
]

export default function Skills() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <h2 className="section-title">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 20
        }}>
          {skills.map((s, i) => (
            <div key={s.name} className="glass animate-on-scroll" style={{
              padding: 24, transitionDelay: `${i * 80}ms`
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${s.color}15`, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, color: s.color
                }}>
                  <i className={s.icon} />
                </div>
                <span style={{ fontWeight: 600, fontSize: 15 }}>{s.name}</span>
                <span style={{ marginLeft: 'auto', fontWeight: 700, fontSize: 18, color: s.color }}>
                  {s.level}%
                </span>
              </div>
              <div style={{
                width: '100%', height: 8, borderRadius: 4,
                background: 'rgba(255,255,255,.06)', overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%', borderRadius: 4,
                  width: visible ? `${s.level}%` : '0%',
                  background: `linear-gradient(90deg, ${s.color}, ${s.color}88)`,
                  transition: `width 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${i * 100}ms`,
                  boxShadow: `0 0 12px ${s.color}44`
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
