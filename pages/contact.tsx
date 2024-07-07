import { ContactForm } from '../Components/Contact/ContactForm/ContactForm'
import { Layout } from '../Components/Layout/Layout'
import { SEO } from '../Components/SEO/SEO'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact Me | John Farrell" description="Form for contacting John Farrell" />
      <section className={`grid h-full max-h-full min-h-full place-items-center bg-grey-1000`}>
        <article className={styles.contactForm}>
          <h3 className="pt-4 text-grey-500">get in touch</h3>
          <ContactForm />
        </article>
      </section>
    </Layout>
  )
}

export default Contact
