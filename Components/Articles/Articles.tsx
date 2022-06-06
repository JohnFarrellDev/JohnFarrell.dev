import Link from 'next/link'
import React from 'react'
import { Layout } from '../Layout'
import { SEO } from '../SEO'
import { Title } from '../Utilities/Title'
import styles from './Articles.module.css'

interface Article {
  URI: string
  name: string
  createdAt: Date
  tags: string[]
}

const articles: Article[] = [
  {
    URI: '/articles/preferred-react-project-structure',
    name: 'My Preferred React Project Structure',
    createdAt: new Date('2022-05-30T21:00:18.579Z'),
    tags: [],
  },
  {
    URI: '/articles/recruiter-challenge',
    name: 'Recruiter Challenge (£250 up for grabs)',
    createdAt: new Date('2022-05-28T11:10:19.558Z'),
    tags: [],
  },
  {
    URI: '/articles/userscript-udemy-copy-out-quizzes',
    name: 'UserScripts to copy Quiz Questions and Answers from Udemy',
    createdAt: new Date('2022-05-27T11:16:06.761Z'),
    tags: [],
  },
]

export const Articles = () => {
  return (
    <Layout>
      <SEO
        title="Articles | John Farrell"
        description="Articles (mostly about software engineering) written by John Farrell"
      />
      <section className="blog-page">
        <section className="section">
          <Title title="Articles" extraStyles={styles.title} />
          <div className="section-center">
            <h2 className={styles.year}>2022</h2>
            <ul>
              {articles
                .filter((article) => article.createdAt.getFullYear() === 2022)
                .map((article) => (
                  <li key={article.URI}>
                    <Link href={article.URI}>{`${article.name}`}</Link>
                    <span> - {article.createdAt.toLocaleDateString()}</span>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </section>
    </Layout>
  )
}
