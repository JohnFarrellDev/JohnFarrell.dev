import { Layout } from '../../Components/Layout/Layout'
import { SEO } from '../../Components/SEO/SEO'
import { Title } from '../../Components/Utilities/Title/Title'
import styles from './twenty-number-challenge.module.css'
import { GameWithLevels } from '../../Components/Projects/DescendingInsanity/GameWithLevels'

const TwentyNumberChallenge = () => {
  return (
    <Layout>
      <SEO title="Descending Insanity" description="How far can you go?" image="https://i.imgur.com/xm1cgR9.png" />
      <Title title="Descending Insanity" extraStyles={styles.title} />
      <main className={styles.main}>
        <GameWithLevels />
      </main>
    </Layout>
  )
}

export default TwentyNumberChallenge
