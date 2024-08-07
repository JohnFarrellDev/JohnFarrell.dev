import { Layout } from '../../Components/Layout/Layout'
import { SEO } from '../../Components/SEO/SEO'
import { Title } from '../../Components/Utilities/Title/Title'
import { Game20 } from '../../Components/Projects/DescendingInsanity/Game20'

const TwentyNumberChallenge = () => {
  return (
    <Layout>
      <SEO title="Twenty Number Challenge" description="Fun numbers game" image="https://i.imgur.com/xm1cgR9.png" />
      <Title title="Twenty Number Challenge" />
      <main>
        <Game20 />
      </main>
    </Layout>
  )
}

export default TwentyNumberChallenge
