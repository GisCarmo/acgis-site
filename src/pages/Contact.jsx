import Navbar from '../components/Navbar'
import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
  const [state, handleSubmit] = useForm("xnjoklrr")

  if (state.succeeded) {
    return (
      <div>
        <Navbar />
        <main style={styles.main}>
          <section style={styles.hero}>
            <h1 style={styles.title}>Thank you</h1>
            <p style={styles.subtitle}>
              Your message has been sent successfully. We will get back to you soon.
            </p>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.hero}>
          <h1 style={styles.title}>Contact</h1>
          <p style={styles.subtitle}>
            Tell us about your project, your goals, and the type of support you need.
          </p>
        </section>

        <section style={styles.formSection}>
          <form onSubmit={handleSubmit} style={styles.formCard}>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              style={styles.input}
              required
            />

            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              style={styles.input}
              required
            />

            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <input
              id="company"
              type="text"
              name="company"
              placeholder="Company"
              style={styles.input}
            />

            <ValidationError prefix="Company" field="company" errors={state.errors} />

            <input
              id="projectType"
              type="text"
              name="project_type"
              placeholder="Project Type"
              style={styles.input}
            />

            <ValidationError prefix="Project Type" field="project_type" errors={state.errors} />

            <textarea
              id="message"
              name="message"
              placeholder="Describe what you need"
              style={styles.textarea}
              required
            />

            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting} style={styles.button}>
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>

            <ValidationError errors={state.errors} />
          </form>
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
  },
  hero: {
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto 40px',
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
  formSection: {
    maxWidth: '760px',
    margin: '0 auto',
  },
  formCard: {
    backgroundColor: '#f8fbff',
    padding: '36px',
    borderRadius: '16px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  input: {
    padding: '14px 16px',
    borderRadius: '10px',
    border: '1px solid #d1d5db',
    fontSize: '16px',
    outline: 'none',
  },
  textarea: {
    minHeight: '160px',
    padding: '14px 16px',
    borderRadius: '10px',
    border: '1px solid #d1d5db',
    fontSize: '16px',
    outline: 'none',
    resize: 'vertical',
  },
  button: {
    padding: '14px 16px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
}