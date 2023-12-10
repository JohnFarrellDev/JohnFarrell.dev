import Link from 'next/link'
import Image from 'next/image'
import styles from './AboutMe.module.css'
import { Layout } from '../Components/Layout/Layout'
import { SEO } from '../Components/SEO/SEO'
import { Title } from '../Components/Utilities/Title/Title'

const techStack = [
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

const AboutMe = () => {
  return (
    <Layout>
      <SEO title="About Me | John Farrell" description="Information about John Farrell" />
      <section className={styles.aboutPage}>
        <div className={`section-center`}>
          <article className={styles.aboutArticle}>
            <Title title="About Me" />

            <div className={styles.articleContent}>
              <Image
                src="https://i.imgur.com/ncSEBtN.png"
                alt="Photo of my black cat Trixie"
                className={styles.imageContainer}
                width={460}
                height={345}
              />

              <div>
                <p className={styles.paragraph}>
                  Hi, I'm John Farrell, a professional software engineer. I started programming in 2016 by teaching
                  myself a little bit of coding following the completion of my BSc in Biomedical Science. It became my
                  ambition to become a software engineer, so I enrolled in a master's degree in Computer Science at the
                  University of Kent. After graduating, I worked at{' '}
                  <Link href="https://www.tcs.com/">Tata Consultancy Services</Link>, where I had the opportunity to be
                  involved in a large scale cloud industrialisation project. I then became interested in web development
                  and joined a consultancy called{' '}
                  <Link href="https://www.linkedin.com/showcase/caci-information-intelligence-group/">CACI IIG</Link>{' '}
                  where I worked on several web app projects. I then joined the{' '}
                  <Link href="https://www.madetech.com/">Made Tech</Link> team which is also a consultancy and continued
                  with a focus on developing web apps for the UK public.
                </p>

                <div className={styles.aboutStack}>
                  {techStack.map((item) => {
                    return <span key={item.id}>{item.title}</span>
                  })}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default AboutMe
