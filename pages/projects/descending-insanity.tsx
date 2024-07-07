import { Layout } from '../../Components/Layout/Layout'
import { SEO } from '../../Components/SEO/SEO'
import { Title } from '../../Components/Utilities/Title/Title'
import { GameWithLevels } from '../../Components/Projects/DescendingInsanity/GameWithLevels'

const TwentyNumberChallenge = () => {
  return (
    <Layout>
      <SEO title="Descending Insanity" description="How far can you go?" image="https://i.imgur.com/ApXjd6C.png" />
      <Title title="Descending Insanity" />
      <main>
        <GameWithLevels />
      </main>
    </Layout>
  )
}

export default TwentyNumberChallenge
