import styles from './Skills.module.css'
import { Title } from '../Utilities/Title/Title'
import { skills } from './Constants/skills'
import { Button } from '../Utilities/Button/Button'
import { Underline } from '../Utilities/Underline/Underline'

export const Skills = () => {
  return (
    <section className="section bg-grey-1000">
      <Title title="Tech Skills" />
      <div className={`section-center ${styles.skillsCenter}`}>
        {skills.map((skill) => {
          const { id, title, description, icon, link } = skill
          return (
            <article key={id} className={styles.skill}>
              <div className="flex flex-col justify-center">
                <div className="m-auto">{icon}</div>
                <h3 className="grow">{title}</h3>
                <Underline className={styles.underline} />
              </div>

              <p>{description}</p>
              {link && (
                <a href={link.url}>
                  <Button className="uppercase">{link.display}</Button>
                </a>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
