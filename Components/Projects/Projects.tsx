import React from 'react'
import { Layout } from '../Layout'
import { SEO } from '../SEO'
import { Title } from '../Utilities/Title'

export const Projects = () => {
  return (
    <Layout>
      <SEO
        title="Projects | John Farrell"
        description="Software engineering projects created by John Farrell"
      />
      <section className="section projects">
        <Title title="Projects (coming soon)" />
        <div className="section-center projects-center">
          {/* {projects.map((project, index) => {
                return <Project key={project.id} index={index} {...project} />
                })} */}
        </div>
      </section>
    </Layout>
  )
}
