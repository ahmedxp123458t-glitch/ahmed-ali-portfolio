const styles = {
  footer: {
    textAlign: 'center', padding: '32px 24px',
    borderTop: '1px solid rgba(255,255,255,.06)',
    color: '#64748b', fontSize: 13
  },
  heart: { color: '#ec4899' }
}

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Ahmed Ali. Built with <span style={styles.heart}>❤</span> using React + Vite. All rights reserved.</p>
    </footer>
  )
}
