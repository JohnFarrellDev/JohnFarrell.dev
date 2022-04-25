import type { NextPage } from 'next'
import Hero from '../Components/Hero'
import { SEO } from '../Components/SEO'

const Home: NextPage = () => {
  return (
    <div>
      <SEO />
      <Hero />
    </div>
  )
}

export default Home
