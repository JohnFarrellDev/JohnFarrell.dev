import React from 'react'
import { Layout } from '../../../Layout'
import { SEO } from '../../../SEO'
import { Title } from '../../../Utilities/Title'
import { ArticleTimeStamps } from '../Utilities/ArticleTimeStamps'
import { SectionTitle } from '../Utilities/SectionTitle'
import styles from './UdemyUserscript.module.css'

import { Introduction } from './Sections/Introduction'
import { TableOfContentsUdemyUserScript } from './TableOfContentsUdemyUserScript'
import { Goal } from './Sections/Goal'
import { VideoDemo } from './Sections/VideoDemo'
import { LessonsLearned } from './Sections/LessonsLearned'
import { Code } from './Sections/Code'
import { PotentialProblems } from './Sections/PotentialProblems'

export const UdemyUserscript = () => {
  return (
    <Layout>
      <SEO />

      <section className="blog-page">
        <section className="section">
          <Title
            title="Copy out Quizzes From Udemy With a UserScript"
            extraStyles={styles.title}
          />
          <div className="section-center">
            <ArticleTimeStamps
              createdAt="2022-05-23T16:08:03.698Z"
              lastUpdated="2022-05-23T16:08:03.698Z"
            />

            <Introduction />
            <TableOfContentsUdemyUserScript />
            <Goal />
            <VideoDemo />
            <Code />
            <LessonsLearned />
            <PotentialProblems />
          </div>
        </section>
      </section>
    </Layout>
  )
}
