import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>
        <img src="/logo.png" alt="ACGIS logo" style={styles.logoImage} />
        <span style={styles.logoText}>ACGIS</span>
      </div>

      <button
        type="button"
        style={styles.menuIcon}
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
      >
        ☰
      </button>

      <div style={{ ...styles.links, ...(open ? styles.linksOpen : {}) }}>
        <Link to="/" style={styles.link} onClick={() => setOpen(false)}>Home</Link>
        <Link to="/services" style={styles.link} onClick={() => setOpen(false)}>Services</Link>
        <Link to="/about" style={styles.link} onClick={() => setOpen(false)}>About</Link>
        <Link to="/projects" style={styles.link} onClick={() => setOpen(false)}>Projects</Link>
        <Link to="/contact" style={styles.link} onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100%',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoImage: {
    width: '40px',
    height: '40px',
    objectFit: 'contain',
  },
  logoText: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#0b1f5c',
  },
  menuIcon: {
    fontSize: '26px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    color: '#0b1f5c',
  },
  links: {
    position: 'absolute',
    top: '72px',
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    display: 'none',
    flexDirection: 'column',
    padding: '20px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    gap: '12px',
  },
  linksOpen: {
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
    color: '#1f2937',
    fontWeight: '500',
    fontSize: '16px',
  },
}