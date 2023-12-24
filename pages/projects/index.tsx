import { ArticleCard } from '../../Components/Articles/ArticleCard'
import { Layout } from '../../Components/Layout/Layout'
import { SEO } from '../../Components/SEO/SEO'
import { Title } from '../../Components/Utilities/Title/Title'
import styles from './projects.module.css'

interface Project {
  title: string
  description: string
  URL: string
  name: string
  imageURL: string
  imageAlt: string
  createdAt: Date
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Twenty Number Challenge',
    description: 'A simple luck based number game',
    URL: '/projects/20-number-challenge',
    name: 'Twenty Number Challenge',
    imageURL: 'https://i.imgur.com/kp6xRVV.png',
    imageAlt: '',
    createdAt: new Date('2023-12-24T15:00:00.000Z'),
    tags: [],
  },
  {
    title: 'Minesweeper solved and visualised',
    description: "Implementing minesweeper and it's automated solving algorithms visualised.",
    URL: '/projects/minesweeper',
    name: 'Minesweeper solved and visualised',
    imageURL: 'https://i.imgur.com/OjqgY02.jpg',
    imageAlt: '',
    createdAt: new Date('2022-10-09T22:19:37.934Z'),
    tags: [],
  },
]

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects | John Farrell" description="Software engineering projects created by John Farrell" />
      <section className="section projects">
        <Title title="Projects" />
        <div className="section-center projects-center">
          <h2 className={styles.year}>2023</h2>
          <ul>
            {projects
              .filter((project) => project.createdAt.getFullYear() === 2023)
              .map((project) => (
                <ArticleCard
                  title={project.title}
                  description={project.description}
                  URL={project.URL}
                  createdAt={project.createdAt}
                  imageURL={project.imageURL}
                  imageAlt={project.imageAlt}
                  tags={[]}
                  key={project.title}
                />
              ))}
          </ul>
          <h2 className={styles.year}>2022</h2>
          <ul>
            {projects
              .filter((project) => project.createdAt.getFullYear() === 2022)
              .map((project) => (
                <ArticleCard
                  title={project.title}
                  description={project.description}
                  URL={project.URL}
                  createdAt={project.createdAt}
                  imageURL={project.imageURL}
                  imageAlt={project.imageAlt}
                  tags={[]}
                  key={project.title}
                />
              ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default Projects
