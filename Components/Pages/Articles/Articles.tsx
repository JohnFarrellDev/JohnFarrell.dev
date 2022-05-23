import Link from 'next/link'
import React from 'react'
import { Layout } from '../../Layout'
import { SEO } from '../../SEO'
import { Title } from '../../Utilities/Title'

export const Articles = () => {
  return (
    <Layout>
      <SEO
        title="Articles"
        description="Articles (mostly about software engineering) written by John Farrell"
      />
      <section className="blog-page">
        <section className="section">
          <Title title="Articles" />
          <div className="section-center blogs-center">
            <ul>
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
