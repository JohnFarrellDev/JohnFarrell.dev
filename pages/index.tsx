import type { NextPage } from 'next'
import { Hero } from '../Components/Hero'
import { Layout } from '../Components/Layout'
import { SEO } from '../Components/SEO'

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
    </Layout>
  )
}

export default Home
