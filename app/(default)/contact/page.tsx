import { ContactForm } from '../../../Components/ContactForm';
import { produceMetaData } from '../../../Utilities/produceMetaData';

export const metadata = produceMetaData({
  title: 'Contact Me | John Farrell',
  description: 'Form for contacting John Farrell',
});

export default function Contact() {
  return (
    <div className="bg-gray-1000">
      <section className="grid h-full max-h-full min-h-full max-w-full place-items-center page-center">
        <article className="max-w-full rounded-lg bg-white text-center">
          <h3 className="pt-4 text-gray-500">get in touch</h3>
          <ContactForm />
        </article>
      </section>
    </div>
  );
}
