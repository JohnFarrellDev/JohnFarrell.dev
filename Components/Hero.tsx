import Link from 'next/link'
import { SocialLinks } from './SocialLinks'
import { Robot } from './Robot'
import styles from '../styles/Hero.module.css'

export const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={`section-center ${styles.heroCenter}`}>
        <article className={styles.heroInfo}>
          <div>
            <div className={styles.underline} />
            <h1>Hello, I'm John</h1>
            <h2>I'm a software developer with a focus on the web</h2>
            <button className="btn">
              <Link href="/contact">Contact Me</Link>
            </button>
            <SocialLinks isFooter={false} />
          </div>
        </article>
        <Robot />
      </div>
    </header>
  )
}
