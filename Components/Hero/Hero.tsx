import Link from 'next/link'
import { SocialLinks } from '../SocialLinks'
import { Robot } from '../Robot/Robot'
import styles from './Hero.module.css'
import { Button } from '../Utilities/Button'
import { Underline } from '../Utilities/Underline'

export const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={`section-center ${styles.heroCenter}`}>
        <article className={styles.heroInfo}>
          <div>
            <Underline />
            <h1>Hello, I'm John</h1>
            <h2>I'm a software developer with a focus on the web</h2>

            <Button className={styles.btn}>
              <Link href="/contact" passHref={true}>
                <span>Contact Me</span>
              </Link>
            </Button>

            <SocialLinks />
          </div>
        </article>
        <Robot />
      </div>
    </header>
  )
}
