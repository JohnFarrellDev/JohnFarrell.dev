import { ContactForm } from '../Components/ContactForm'
import { Layout } from '../Components/Layout/Layout'
import { SEO } from '../Components/SEO'

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact Me | John Farrell" description="Form for contacting John Farrell" />
      <section className="grid h-full max-h-full min-h-full max-w-full place-items-center bg-grey-1000">
        <article className="max-w-full rounded-lg bg-white text-center">
          <h3 className="pt-4 text-grey-500">get in touch</h3>
          <ContactForm />
        </article>
      </section>
    </Layout>
  )
}

export default Contact
