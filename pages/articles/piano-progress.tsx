import { CurrentyLearning } from '../../Components/Articles/PianoProgress/Sections/CurrentyLearning/CurrentyLearning'
import { SongTrackers } from '../../Components/Articles/PianoProgress/Sections/SongTracker/SongTrackers'
import { Layout } from '../../Components/Layout/Layout'
import { SEO } from '../../Components/SEO/SEO'
import { Title } from '../../Components/Utilities/Title/Title'

export default function PianoProgress() {
  return (
    <Layout>
      <SEO
        title="Piano Progress Tracker | John Farrell"
        description="My personal tracker for piano progression"
        image="https://i.imgur.com/ikwTfTE.jpeg"
      />
      <section className="blog-page">
        <section className="section">
          <div className="section-center">
            <Title title="Piano Progress" />

            <CurrentyLearning />

            <SongTrackers />
          </div>
        </section>
      </section>
    </Layout>
  )
}
