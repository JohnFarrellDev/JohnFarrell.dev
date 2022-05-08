import React from 'react'
import { Layout } from '../../Layout'
import { SEO } from '../../SEO'
import { ContactForm } from './ContactForm'

export const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact Me" description="Form for contacting John Farrell" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <ContactForm />
        </article>
      </section>
    </Layout>
  )
}
