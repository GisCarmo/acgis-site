import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>
        <img src="/logo.png" alt="ACGIS logo" style={styles.logoImage} />
        <span style={styles.logoText}>ACGIS</span>
      </div>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 40px',
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
    gap: '12px',
  },
  logoImage: {
    width: '48px',
    height: '48px',
    objectFit: 'contain',
  },
  logoText: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#0b1f5c',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#1f2937',
    fontWeight: '500',
  },
}