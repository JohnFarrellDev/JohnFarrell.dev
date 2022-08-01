import React from 'react'
import { Layout } from '../../Layout'
import { SEO } from '../../SEO'
import { Title } from '../../Utilities/Title'
import { ArticleTimeStamps } from '../Utilities/ArticleTimeStamps'
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
      <SEO
        title="UserScripts for Fun and Profit | John Farrell"
        description="How I utilised UserScripts to enhance my Udemy experience"
        image="https://i.imgur.com/aGGVHyQ.jpg"
      />
      <section className="blog-page">
        <section className="section">
          <Title
            title="Copy out Quizzes From Udemy With a UserScript"
            extraStyles={styles.title}
          />
          <div className="section-center">
            <ArticleTimeStamps
              createdAt={new Date('2022-05-27T11:16:06.761Z')}
              lastUpdated={new Date('2022-06-04T22:25:57.626Z')}
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
