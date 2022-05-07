import type { NextPage } from 'next'
import { Hero } from '../Components/Hero'
import { Layout } from '../Components/Layout'
import { SEO } from '../Components/SEO'
import { Skills } from '../Components/Skills'

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Skills />
    </Layout>
  )
}

export default Home
