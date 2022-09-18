import Link from 'next/link'
import React from 'react'
import { Layout } from '../Layout'
import { SEO } from '../SEO'
import { Title } from '../Utilities/Title'
import styles from './AboutMe.module.css'

const info =
  "Hi, I'm John Farrell a professional software developer. I started this programming journey in 2016 teaching myself a little bit of " +
  'Python following the completion of my BSc in Biomedical Science. It became my ambition to become a software engineer so I enrolled ' +
  'in a masters degree in Computer Science at the University of Kent. After graduating I worked at Tata Consultancy Services ' +
  'where I had the opportunity to be involved in a large scale cloud industrilisation project. I then became interested in web ' +
  'development and joined CACI IIG where I worked on several web app projects as consultant. I then continued working at consultancies by joining Made Tech  ' +
  'still with a focus on developing web apps.'

const stack = [
  {
    id: 1,
    title: 'JavaScript',
  },
  {
    id: 2,
    title: 'TypeScript',
  },
  {
    id: 3,
    title: 'React',
  },
  {
    id: 4,
    title: 'Node',
  },
  {
    id: 5,
    title: 'Java',
  },
  {
    id: 6,
    title: 'Spring',
  },
  {
    id: 7,
    title: 'C#',
  },
  {
    id: 8,
    title: '.NET',
  },
  {
    id: 9,
    title: 'AWS',
  },
]

export const AboutMe = () => {
  return (
    <Layout>
      <SEO
        title="About Me | John Farrell"
        description="Information about John Farrell"
      />
      <section className={styles.aboutPage}>
        <div className={`section-center ${styles.aboutCenter}`}>
          <article className={styles.aboutText}>
            <Title title="About Me" />
            <p className={styles.paragraph}>
              Hi, I'm John Farrell, a professional software engineer. I started
              programming in 2016 by teaching myself a little bit of coding
              following the completion of my BSc in Biomedical Science. It
              became my ambition to become a software engineer, so I enrolled in
              a master's degree in Computer Science at the University of Kent.
              After graduating, I worked at{' '}
              <Link href="https://www.tcs.com/">Tata Consultancy Services</Link>
              , where I had the opportunity to be involved in a large scale
              cloud industrialisation project. I then became interested in web
              development and joined a consultancy called{' '}
              <Link href="https://www.caci-iig.co.uk/">CACI IIG</Link> where I
              worked on several web app projects. I then joined the{' '}
              <Link href="https://www.madetech.com/">Made Tech</Link> team which
              is also a consultancy and continued with a focus on developing web
              apps.
            </p>
            <div className={styles.aboutStack}>
              {stack.map((item) => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}
