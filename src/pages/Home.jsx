import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <section style={styles.hero}>
          <h1 style={styles.title}>ACGIS</h1>
          <p style={styles.subtitle}>
            Delivering geospatial analysis, fiber network design, LiDAR processing
            and AI-driven solutions for telecommunications and infrastructure projects.
          </p>

          <div style={styles.heroButtons}>
            <Link to="/contact" style={styles.primaryButton}>Request a Quote</Link>
            <Link to="/services" style={styles.secondaryButton}>View Services</Link>
            <Link to="/projects" style={styles.secondaryButton}>View Projects</Link>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>What We Do</h2>
          <p style={styles.sectionText}>
            ACGIS specializes in GIS and FTTH network design, supporting
            telecommunications and infrastructure projects from data collection
            to final delivery. We combine geospatial analysis, automation,
            LiDAR, photogrammetry, and AI-driven solutions to deliver efficient
            and scalable results.
          </p>
        </section>

        <section style={styles.sectionAlt}>
          <h2 style={styles.sectionTitle}>Services</h2>
          <div style={styles.servicesGrid}>
            <div style={styles.card}>FTTH Network Design</div>
            <div style={styles.card}>GIS & Geospatial Analysis</div>
            <div style={styles.card}>LiDAR & Photogrammetry</div>
            <div style={styles.card}>Automation & Custom Tools</div>
            <div style={styles.card}>AI for Infrastructure</div>
            <div style={styles.card}>Technical Support</div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Selected Projects</h2>
          <p style={styles.sectionText}>
            Explore examples of work related to FTTH planning, GIS automation,
            LiDAR processing, and infrastructure support.
          </p>

          <div style={styles.servicesGrid}>
            <div style={styles.card}>FTTH Network Planning</div>
            <div style={styles.card}>GIS Automation Workflows</div>
            <div style={styles.card}>LiDAR & Photogrammetry</div>
          </div>

          <div style={styles.projectsButtonWrap}>
            <Link to="/projects" style={styles.primaryButton}>
              Open Projects Page
            </Link>
          </div>
        </section>

        <section style={styles.sectionAlt}>
          <h2 style={styles.sectionTitle}>Why Choose ACGIS</h2>
          <div style={styles.whyList}>
            <p>Strong experience in FTTH projects</p>
            <p>Automation-driven workflows for faster delivery</p>
            <p>Integration of GIS, LiDAR and AI technologies</p>
            <p>Technical support from analysis to final output</p>
          </div>
        </section>

        <section style={styles.contactSection}>
          <h2 style={styles.contactTitle}>Get in Touch</h2>
          <p style={styles.contactText}>
            Contact ACGIS to discuss your project, request technical support,
            or ask for a quote.
          </p>
          <Link to="/contact" style={styles.contactButton}>
            Open Contact Form
          </Link>
        </section>
      </main>
    </div>
  )
}

const styles = {
  hero: {
    textAlign: 'center',
    padding: '80px 16px 60px',
    background: 'linear-gradient(to bottom, #f8fbff, #ffffff)',
  },
  title: {
    fontSize: 'clamp(36px, 8vw, 72px)',
    marginBottom: '20px',
    color: '#0b1f5c',
  },
  subtitle: {
    fontSize: 'clamp(16px, 4vw, 24px)',
    maxWidth: '900px',
    margin: '0 auto',
    color: '#4b5563',
    lineHeight: '1.6',
  },
  heroButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '30px',
    alignItems: 'center',
  },
  primaryButton: {
    textDecoration: 'none',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    padding: '12px 20px',
    borderRadius: '8px',
    fontWeight: '600',
    width: '100%',
    maxWidth: '300px',
    textAlign: 'center',
  },
  secondaryButton: {
    textDecoration: 'none',
    border: '1px solid #2563eb',
    color: '#2563eb',
    padding: '12px 20px',
    borderRadius: '8px',
    fontWeight: '600',
    width: '100%',
    maxWidth: '300px',
    textAlign: 'center',
  },
  section: {
    padding: '70px 16px',
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center',
  },
  sectionAlt: {
    padding: '70px 16px',
    backgroundColor: '#f8fbff',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 'clamp(24px, 6vw, 36px)',
    marginBottom: '20px',
    color: '#0b1f5c',
  },
  sectionText: {
    fontSize: 'clamp(16px, 4vw, 20px)',
    color: '#4b5563',
    maxWidth: '900px',
    margin: '0 auto',
    lineHeight: '1.8',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
    maxWidth: '1100px',
    margin: '40px auto 0',
    padding: '0 10px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    fontWeight: '600',
    color: '#1f2937',
  },
  projectsButtonWrap: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
  },
  whyList: {
    display: 'grid',
    gap: '14px',
    fontSize: 'clamp(16px, 4vw, 20px)',
    color: '#4b5563',
    marginTop: '30px',
  },
  contactSection: {
    padding: '70px 16px 90px',
    backgroundColor: '#0b1f5c',
    textAlign: 'center',
  },
  contactTitle: {
    fontSize: 'clamp(24px, 6vw, 36px)',
    marginBottom: '20px',
    color: '#ffffff',
  },
  contactText: {
    fontSize: 'clamp(16px, 4vw, 20px)',
    color: '#dbeafe',
    maxWidth: '900px',
    margin: '0 auto 30px',
    lineHeight: '1.8',
  },
  contactButton: {
    display: 'inline-block',
    textDecoration: 'none',
    backgroundColor: '#ffffff',
    color: '#0b1f5c',
    padding: '14px 22px',
    borderRadius: '10px',
    fontWeight: '600',
    width: '100%',
    maxWidth: '300px',
    textAlign: 'center',
  },
}