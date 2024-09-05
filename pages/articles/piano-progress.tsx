import { CurrentyLearning } from '../../Components/Articles/PianoProgress/CurrentyLearning';
import { SongTrackers } from '../../Components/Articles/PianoProgress/SongTrackers';
import { Layout } from '../../Components/Layout/Layout';
import { SEO } from '../../Components/SEO';
import { Title } from '../../Components/Title';

export default function PianoProgress() {
  return (
    <Layout>
      <SEO
        title="Piano Progress Tracker | John Farrell"
        description="My personal tracker for piano progression"
        image="https://i.imgur.com/ikwTfTE.jpeg"
      />
      <section className="blog-page">
        <div className="section-center">
          <Title title="Piano Progress" />
          <CurrentyLearning />
          <SongTrackers />
        </div>
      </section>
    </Layout>
  );
}
