import React, { ComponentProps } from 'react'
import { Layout } from '../Layout'
import { SEO } from '../SEO'
import { Title } from '../Utilities/Title'
import styles from './Articles.module.css'
import { ArticleCard } from './ArticleCard'

type ArticleCardProps = ComponentProps<typeof ArticleCard>

const allArticles: { year: string; articles: ArticleCardProps[] }[] = [
  {
    year: 'Continually Updated',
    articles: [
      {
        URL: '/articles/piano-progress',
        title: 'Piano Progress',
        description: 'A look at my progress learning piano',
        createdAt: new Date('2023-01-30T22:19:37.934Z'),
        tags: ['piano', 'non technical'],
        imageURL: 'https://i.imgur.com/1AVIQeM.jpg',
        imageAlt: 'upright piano in a sunlit room',
      },
    ],
  },
  {
    year: '2022',
    articles: [
      {
        URL: '/articles/minesweeper',
        title: 'Visualisation Algorithms for Minesweeper',
        description:
          'Explore algorithms that strategically solve Minesweeper with every algorithm visualised in this article.',
        createdAt: new Date('2022-10-09T22:19:37.934Z'),
        tags: ['react', 'typescript', 'problem solving', 'algorithms'],
        imageURL: 'https://i.imgur.com/OjqgY02.jpg',
        imageAlt: 'man hunched over a board trying to solve a puzzle game',
      },
      {
        URL: '/articles/react-project-structure',
        title: 'Preferred React Project Structure',
        description: 'A look at how I like to structure my React projects',
        createdAt: new Date('2022-08-01T14:15:28.433Z'),
        tags: ['react', 'typescript'],
        imageURL: 'https://i.imgur.com/BRkhyeG.png',
        imageAlt: 'react logo',
      },
      {
        URL: '/articles/userscript-udemy-copy-out-quizzes',
        title: 'UserScripts for Fun and Profit',
        description: 'A look at how I created a UserScript to copy Quiz Questions and Answers from Udemy',
        createdAt: new Date('2022-05-27T11:16:06.761Z'),
        tags: ['javascript'],
        imageURL: 'https://i.imgur.com/xPyjZf5.jpg',
        imageAlt: 'Breaking free from technological prison',
      },
    ],
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
            {allArticles.map(({ year, articles }) => (
              <>
                <h2 className={styles.year}>{year}</h2>
                <ul className={styles.articlesContainer}>
                  {articles.map((article) => (
                    <ArticleCard key={article.URL} {...article} />
                  ))}
                </ul>
              </>
            ))}
            {/* <h2 className={styles.year}>Continually Updated</h2>
            <ul className={styles.articlesContainer}>
              <ArticleCard
                title="Piano Progress"
                description=""
                URL="/articles/piano-progress"
                createdAt={new Date('2023-01-30T22:19:37.934Z')}
                imageURL="https://i.imgur.com/1AVIQeM.jpg"
                tags={[]}
                imageAlt="upright piano in a sunlit room"
                shortCard
              />
            </ul>
            <h2 className={styles.year}>2022</h2>
            <ul className={styles.articlesContainer}>
              {articles
                .filter((article) => article.createdAt.getFullYear() === 2022)
                .map((article) => (
                  <ArticleCard key={article.URL} {...article} />
                ))}
            </ul> */}
          </div>
        </section>
      </section>
    </Layout>
  )
}
