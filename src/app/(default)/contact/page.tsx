import { ContactForm } from '@/Components/ContactForm';
import { PageContentContainer } from '@/Components/Layout/PageContent';
import { PageWidthContainer } from '@/Components/Layout/PageWidthContainer';
import { produceMetaData } from '@/Utilities/produceMetaData';

export const metadata = produceMetaData({
  title: 'Contact Me | John Farrell',
  description: 'Form for contacting John Farrell',
});

export default function Contact() {
  return (
    <PageWidthContainer className="bg-gray-50">
      <PageContentContainer as="section" className="mx-auto">
        <div className="w-fit rounded-lg bg-white text-center">
          <h1 className="pt-4 text-3xl text-gray-500">Get In Touch</h1>
          <ContactForm />
        </div>
      </PageContentContainer>
    </PageWidthContainer>
  );
}
