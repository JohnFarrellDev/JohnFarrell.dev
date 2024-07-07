import { Layout } from '../../Layout/Layout'
import { SEO } from '../../SEO/SEO'
import { Title } from '../../Utilities/Title/Title'
import { CurrentyLearning } from './Sections/CurrentyLearning/CurrentyLearning'
import { SongTrackers } from './Sections/SongTracker/SongTrackers'

export const PianoProgress = () => {
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
