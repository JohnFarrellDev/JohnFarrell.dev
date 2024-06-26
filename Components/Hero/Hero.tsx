import styles from './Hero.module.css'
import Link from 'next/link'
import { SocialLinks } from '../SocialLinks/SocialLinks'
import { Robot } from '../Robot/Robot'
import { Button } from '../Utilities/Button/Button'
import { Underline } from '../Utilities/Underline/Underline'

export const Hero = () => {
  return (
    <header className={`${styles.hero} bg-primary-1000`}>
      <div className={`section-center ${styles.heroCenter}`}>
        <article className={styles.heroInfo}>
          <div>
            <Underline />
            <h1 className="text-7xl font-bold">Hello, I'm John</h1>
            <h2 className="text-lg text-grey-300">I'm a software developer with a focus on the web</h2>

            <Button className={styles.btn}>
              <Link href="/contact" passHref={true} className="text-primary-1000">
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
