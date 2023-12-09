import styles from './UdemyUserscript.module.css'
import { Layout } from '../../Layout/Layout'
import { SEO } from '../../SEO/SEO'
import { Title } from '../../Utilities/Title/Title'
import { ArticleTimeStamps } from '../Utilities/ArticleTimeStamps/ArticleTimeStamps'
import { Introduction } from './Sections/Introduction/Introduction'
import { TableOfContentsUdemyUserScript } from './TableOfContentsUdemyUserScript/TableOfContents'
import { Goal } from './Sections/Goal/Goal'
import { VideoDemo } from './Sections/VideoDemo/VideoDemo'
import { LessonsLearned } from './Sections/LessonsLearned/LessonsLearned'
import { Code } from './Sections/Code/Code'
import { PotentialProblems } from './Sections/PotentialProblems/PotentialProblems'

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
          <Title title="Copy out Quizzes From Udemy With a UserScript" extraStyles={styles.title} />
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
