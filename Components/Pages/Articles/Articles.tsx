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
          <Title title="Articles (coming soon)" />
          <div className="section-center blogs-center">
            {/* {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })} */}
          </div>
        </section>
      </section>
    </Layout>
  )
}
