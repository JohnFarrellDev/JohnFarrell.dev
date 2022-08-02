import Link from 'next/link'
import React from 'react'
import { Layout } from '../Layout'
import { SEO } from '../SEO'
import { Title } from '../Utilities/Title'
import styles from './Projects.module.css'
interface Project {
  URI: string
  name: string
  createdAt: Date
  tags: string[]
}

const projects: Project[] = [
  {
    URI: '/projects/minesweeper',
    name: 'Minesweeper solved and visualised',
    createdAt: new Date('2022-08-01T14:15:28.433Z'),
    tags: [],
  },
]

export const Projects = () => {
  return (
    <Layout>
      <SEO
        title="Projects | John Farrell"
        description="Software engineering projects created by John Farrell"
      />
      <section className="section projects">
        <Title title="Projects" />
        <div className="section-center projects-center">
          <h2 className={styles.year}>2022</h2>
          <ul>
            {projects
              .filter((project) => project.createdAt.getFullYear() === 2022)
              .map((project) => (
                <li key={project.URI}>
                  <Link href={project.URI}>{`${project.name}`}</Link>
                  <span> - {project.createdAt.toLocaleDateString()}</span>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}
