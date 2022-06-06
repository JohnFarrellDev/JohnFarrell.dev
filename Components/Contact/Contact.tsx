import React from 'react'
import { Layout } from '../Layout'
import { SEO } from '../SEO'
import { ContactForm } from './ContactForm'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact Me | John Farrell"
        description="Form for contacting John Farrell"
      />
      <section className={styles.contactPage}>
        <article className={styles.contactForm}>
          <h3>get in touch</h3>
          <ContactForm />
        </article>
      </section>
    </Layout>
  )
}
