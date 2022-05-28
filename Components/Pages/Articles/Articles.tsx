import Link from 'next/link'
import React from 'react'
import { Layout } from '../../Layout'
import { SEO } from '../../SEO'
import { Title } from '../../Utilities/Title'
import styles from './Articles.module.css'

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
              <li>
                <Link href="/articles/recruiter-challenge">
                  Recruiter Challenge (£250 up for grabs)
                </Link>
              </li>
              <li>
                <Link href="/articles/userscript-udemy-copy-out-quizzes">
                  UserScripts to copy Quiz Questions and Answers from Udemy
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </Layout>
  )
}
