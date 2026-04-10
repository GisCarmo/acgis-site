import Navbar from '../components/Navbar'

export default function Services() {
  return (
    <div>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.hero}>
          <h1 style={styles.title}>Services</h1>
          <p style={styles.subtitle}>
            Specialized GIS, FTTH, and infrastructure support services for
            telecommunications and engineering projects.
          </p>
        </section>

        <section style={styles.grid}>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>FTTH Network Design</h2>
            <p style={styles.cardText}>
              Fiber network planning, HLD/LLD design, optimization, and technical documentation.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>GIS & Geospatial Analysis</h2>
            <p style={styles.cardText}>
              Spatial analysis, cartography, data structuring, and geospatial support for engineering projects.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>LiDAR & Photogrammetry</h2>
            <p style={styles.cardText}>
              Processing survey data, extracting infrastructure information, and supporting mapping workflows.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Automation & Custom Tools</h2>
            <p style={styles.cardText}>
              Development of custom GIS tools, scripts, plugins, and workflow automation solutions.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>AI for Infrastructure</h2>
            <p style={styles.cardText}>
              AI-based solutions for object detection, asset identification, and infrastructure analysis.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Technical Support</h2>
            <p style={styles.cardText}>
              Project review, quality control, technical validation, and support for telecom teams.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

const styles = {
  main: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
  },
  hero: {
    textAlign: 'center',
    padding: '90px 20px 50px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  title: {
    fontSize: '52px',
    color: '#0b1f5c',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '20px',
    color: '#4b5563',
    lineHeight: '1.7',
    maxWidth: '820px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px 20px 80px',
  },
  card: {
    backgroundColor: '#f8fbff',
    padding: '28px',
    borderRadius: '14px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
  },
  cardTitle: {
    fontSize: '22px',
    color: '#0b1f5c',
    marginBottom: '12px',
  },
  cardText: {
    fontSize: '17px',
    color: '#4b5563',
    lineHeight: '1.7',
  },
}