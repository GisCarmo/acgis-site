import Navbar from '../components/Navbar'

const projects = [
  {
    title: 'FTTH Network Planning',
    description:
      'Design and planning support for fiber optic network deployment, including project structuring, technical validation, and delivery support.',
    technologies: 'GIS, FTTH Design, Technical Documentation',
    image: '/project1.png',
  },
  {
    title: 'GIS Automation Workflows',
    description:
      'Development of custom workflows and tools to automate repetitive GIS tasks and improve project efficiency.',
    technologies: 'QGIS, Python, FME Automation',
    image: '/project2.png',
  },
  {
    title: 'LiDAR and Photogrammetry Processing',
    description:
      'Processing and interpretation of survey data for infrastructure analysis, mapping, and technical support.',
    technologies: 'LiDAR, Photogrammetry, Geospatial Analysis, Visual Computing',
    image: '/project3.png',
  },
]

export default function Projects() {
  return (
    <div>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.hero}>
          <h1 style={styles.title}>Projects</h1>
          <p style={styles.subtitle}>
            Selected examples of work related to GIS, FTTH, automation, and geospatial data processing.
          </p>
        </section>

        <section style={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} style={styles.card}>
              <img src={project.image} alt={project.title} style={styles.image} />
              <h2 style={styles.cardTitle}>{project.title}</h2>
              <p style={styles.cardText}>{project.description}</p>
              <p style={styles.cardTech}>
                <strong>Technologies:</strong> {project.technologies}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

const styles = {
  main: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    padding: '80px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  hero: {
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto 50px',
  },
  title: {
    fontSize: '52px',
    color: '#0b1f5c',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '20px',
    color: '#4b5563',
    lineHeight: '1.8',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
  },
  card: {
    backgroundColor: '#f8fbff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
  },
  image: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    backgroundColor: '#e5e7eb',
  },
  cardTitle: {
    fontSize: '24px',
    color: '#0b1f5c',
    margin: '20px 20px 12px',
  },
  cardText: {
    fontSize: '17px',
    color: '#4b5563',
    lineHeight: '1.7',
    margin: '0 20px 16px',
  },
  cardTech: {
    fontSize: '15px',
    color: '#1f2937',
    margin: '0 20px 24px',
  },
}