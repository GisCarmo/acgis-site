import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.hero}>
          <h1 style={styles.title}>About ACGIS</h1>
          <p style={styles.subtitle}>
            GIS and FTTH engineering solutions focused on practical delivery,
            technical quality, and scalable support for infrastructure projects.
          </p>
        </section>

        <section style={styles.content}>
          <p style={styles.text}>
            ACGIS is focused on delivering practical GIS and FTTH solutions for
            telecommunications and infrastructure projects.
          </p>

          <p style={styles.text}>
            The company combines geospatial analysis, fiber network design,
            LiDAR, photogrammetry, automation, and AI-based workflows to support
            project delivery from technical analysis to final outputs.
          </p>

          <p style={styles.text}>
            With experience across GIS, FTTH, technical documentation, and
            engineering support, ACGIS provides reliable and scalable services
            for projects in Portugal and worldwide.
          </p>
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
    padding: '90px 20px 40px',
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
  content: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px 20px 80px',
  },
  text: {
    fontSize: '20px',
    color: '#4b5563',
    lineHeight: '1.9',
    marginBottom: '24px',
    textAlign: 'center',
  },
}