import { Title } from '@/Components/Title';
import { produceMetaData } from '@/Utilities/produceMetaData';
import { CareerTimelineSVG } from './CareerTimeline';

export const metadata = produceMetaData({
  title: 'About Me | John Farrell',
  description: 'Information about John Farrell',
});

export default function AboutMe() {
  return (
    <section className="container">
      <article>
        <Title title="About Me" className="mb-2" underlineClassName="mb-8" />
        <p>
          You can follow my journey so far below (click on any box for more information), this is only the beginning
          with many more chapters to be added.
        </p>

        <CareerTimelineSVG />
      </article>
    </section>
  );
}
