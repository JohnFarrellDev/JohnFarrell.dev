import React from 'react'
import { Layout } from '../../Layout'
import { SEO } from '../../SEO'
import { Title } from '../../Utilities/Title'
import styles from './PianoProgress.module.css'
import { CurrentyLearning } from './Sections/CurrentyLearning'
import { GradeOneProgress } from './Sections/GradeOneProgress'
import { SongTrackers } from './Sections/SongTracker'

export const PianoProgress = () => {
  return (
    <Layout>
      <SEO
        title="Piano Progress Tracker | John Farrell"
        description="My personal tracker for piano progression"
        image="https://i.imgur.com/WOpYcG8.jpeg"
      />
      <section className="blog-page">
        <section className="section">
          <div className="section-center">
            <Title title="Piano Progress" extraStyles={styles.title} />

            <CurrentyLearning />

            <SongTrackers />

            <GradeOneProgress />
          </div>
        </section>
      </section>
    </Layout>
  )
}
