import { Layout } from '../../Components/Layout/Layout'
import { SEO } from '../../Components/SEO/SEO'
import { Title } from '../../Components/Utilities/Title/Title'
import styles from './twenty-number-challenge.module.css'
import { Game } from '../../Components/Projects/DescendingInsanity/Game'

const TwentyNumberChallenge = () => {
  return (
    <Layout>
      <SEO title="Twenty Number Challenge" description="Fun numbers game" image="https://i.imgur.com/xm1cgR9.png" />
      <Title title="Twenty Number Challenge" extraStyles={styles.title} />
      <main className={styles.main}>
        <Game numberOfSlots={20} />
      </main>
    </Layout>
  )
}

export default TwentyNumberChallenge
