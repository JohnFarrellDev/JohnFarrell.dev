import Link from 'next/link'
import React, { ComponentProps } from 'react'
import { Layout } from '../Layout'
import { SEO } from '../SEO'
import { Title } from '../Utilities/Title'
import styles from './Articles.module.css'
import { ArticleCard } from './ArticleCard'

type ArticleCardProps = ComponentProps<typeof ArticleCard>

const articles: ArticleCardProps[] = [
  {
    URL: '/articles/minesweeper',
    title: 'Visualisation Algorithms for Minesweeper',
    description:
      'Explore algorithms that strategically solve Minesweeper with every algorithm visualised in this article.',
    createdAt: new Date('2022-10-09T22:19:37.934Z'),
    lastUpdatedAt: new Date('2022-10-09T22:19:37.934Z'),
    tags: ['react', 'typescript', 'problem solving', 'algorithms'],
    imageURL: 'https://i.imgur.com/OjqgY02.jpg',
    imageAlt: 'man hunched over a board trying to solve a puzzle game',
  },
  {
    URL: '/articles/react-project-structure',
    title: 'Preferred React Project Structure',
    description: 'A look at how I like to structure my React projects',
    createdAt: new Date('2022-08-01T14:15:28.433Z'),
    lastUpdatedAt: new Date('2022-08-01T14:15:28.433Z'),
    tags: [],
    imageURL: 'https://i.imgur.com/BRkhyeG.png',
    imageAlt: 'react logo',
  },
  {
    URL: '/articles/userscript-udemy-copy-out-quizzes',
    title: 'UserScripts to copy Quiz Questions and Answers from Udemy',
    description: 'A look at how I created a UserScript to copy Quiz Questions and Answers from Udemy',
    createdAt: new Date('2022-05-27T11:16:06.761Z'),
    lastUpdatedAt: new Date('2022-05-27T11:16:06.761Z'),
    tags: [],
    imageURL: 'https://i.imgur.com/xPyjZf5.jpg',
    imageAlt: 'Breaking free from technological prison',
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
            <h2 className={styles.year}>Continually Updated</h2>
            <ul>
              <ArticleCard
                title="Piano Progress"
                description=""
                URL="/articles/piano-progress"
                createdAt={new Date('2021-10-09T22:19:37.934Z')}
                imageURL="https://i.imgur.com/1AVIQeM.jpg"
                tags={[]}
                imageAlt="upright piano in a sunlit room"
              />
            </ul>
            <h2 className={styles.year}>2022</h2>
            <ul className={styles.articlesContainer}>
              {articles
                .filter((article) => article.createdAt.getFullYear() === 2022)
                .map((article) => (
                  <ArticleCard key={article.URL} {...article} />
                ))}
            </ul>
          </div>
        </section>
      </section>
    </Layout>
  )
}
