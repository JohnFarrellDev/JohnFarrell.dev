import { ContactForm } from '../Components/Contact/ContactForm/ContactForm'
import { Layout } from '../Components/Layout/Layout'
import { SEO } from '../Components/SEO/SEO'
import styles from './Contact.module.css'

const Contact = () => {
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

export default Contact
