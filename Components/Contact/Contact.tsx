import styles from './Contact.module.css'
import { Layout } from '../Layout/Layout'
import { SEO } from '../SEO/SEO'
import { ContactForm } from './ContactForm/ContactForm'

export const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact Me | John Farrell" description="Form for contacting John Farrell" />
      <section className={styles.contactPage}>
        <article className={styles.contactForm}>
          <h3>get in touch</h3>
          <ContactForm />
        </article>
      </section>
    </Layout>
  )
}
