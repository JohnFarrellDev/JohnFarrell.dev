import { ContactForm } from '../Components/Contact/ContactForm/ContactForm'
import { Layout } from '../Components/Layout/Layout'
import { SEO } from '../Components/SEO/SEO'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact Me | John Farrell" description="Form for contacting John Farrell" />
      <section className={`min-h-full h-full max-h-full grid place-items-center bg-grey-1000`}>
        <article className={styles.contactForm}>
          <h3 className="text-grey-500 pt-4">get in touch</h3>
          <ContactForm />
        </article>
      </section>
    </Layout>
  )
}

export default Contact
