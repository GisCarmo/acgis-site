import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>ACGIS</h1>
          <p style={styles.subtitle}>
            Delivering geospatial analysis, fiber network design, LiDAR processing
            and AI-driven solutions for telecommunications and infrastructure projects.
          </p>

          <div style={styles.heroButtons}>
            <a href="/contact" style={styles.primaryButton}>Request a Quote</a>
            <a href="/services" style={styles.secondaryButton}>View Services</a>
            <a href="/projects" style={styles.secondaryButton}>View Projects</a>
          </div>
        </section>

        {/* WHAT WE DO */}
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

        {/* SERVICES */}
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

        {/* PROJECTS PREVIEW */}
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

          <div style={{ marginTop: '30px' }}>
            <a href="/projects" style={styles.primaryButton}>
              Open Projects Page
            </a>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section style={styles.sectionAlt}>
          <h2 style={styles.sectionTitle}>Why Choose ACGIS</h2>
          <div style={styles.whyList}>
            <p>Strong experience in FTTH projects</p>
            <p>Automation-driven workflows for faster delivery</p>
            <p>Integration of GIS, LiDAR and AI technologies</p>
            <p>Technical support from analysis to final output</p>
          </div>
        </section>

        {/* CONTACT */}
        <section style={styles.contactSection}>
          <h2 style={styles.contactTitle}>Get in Touch</h2>
          <p style={styles.contactText}>
            Contact ACGIS to discuss your project, request technical support,
            or ask for a quote.
          </p>
          <a href="/contact" style={styles.contactButton}>
            Open Contact Form
          </a>
        </section>
      </main>
    </div>
  )
}

const styles = {
  hero: {
    textAlign: 'center',
    padding: '110px 20px 90px',
    background: 'linear-gradient(to bottom, #f8fbff, #ffffff)',
  },
  title: {
    fontSize: '72px',
    marginBottom: '20px',
    color: '#0b1f5c',
  },
  subtitle: {
    fontSize: '24px',
    maxWidth: '900px',
    margin: '0 auto',
    color: '#4b5563',
    lineHeight: '1.6',
  },
  heroButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginTop: '30px',
    flexWrap: 'wrap',
  },
  primaryButton: {
    textDecoration: 'none',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    padding: '12px 20px',
    borderRadius: '8px',
    fontWeight: '600',
  },
  secondaryButton: {
    textDecoration: 'none',
    border: '1px solid #2563eb',
    color: '#2563eb',
    padding: '12px 20px',
    borderRadius: '8px',
    fontWeight: '600',
  },
  section: {
    padding: '80px 20px',
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center',
  },
  sectionAlt: {
    padding: '80px 20px',
    backgroundColor: '#f8fbff',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#0b1f5c',
  },
  sectionText: {
    fontSize: '20px',
    color: '#4b5563',
    maxWidth: '900px',
    margin: '0 auto',
    lineHeight: '1.8',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    maxWidth: '1100px',
    margin: '40px auto 0',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    fontWeight: '600',
    color: '#1f2937',
  },
  whyList: {
    display: 'grid',
    gap: '14px',
    fontSize: '20px',
    color: '#4b5563',
    marginTop: '30px',
  },
  contactSection: {
    padding: '80px 20px 100px',
    backgroundColor: '#0b1f5c',
    textAlign: 'center',
  },
  contactTitle: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#ffffff',
  },
  contactText: {
    fontSize: '20px',
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
  },
}