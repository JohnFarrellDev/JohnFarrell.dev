import type { NextPage } from 'next'
import { Layout } from '../Components/Layout/Layout'
import { SEO } from '../Components/SEO/SEO'
import { Hero } from '../Components/Hero/Hero'
import { Skills } from '../Components/Skills/Skills'
import { Experience } from '../Components/Experience/Experience'

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Skills />
      <Experience />
    </Layout>
  )
}

export default Home
