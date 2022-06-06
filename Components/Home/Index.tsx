import React from 'react'
import { Experience } from '../Experience'
import { Hero } from '../Hero'
import { Layout } from '../Layout'
import { SEO } from '../SEO'
import { Skills } from '../Skills'

export const Index = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Skills />
      <Experience />
    </Layout>
  )
}
