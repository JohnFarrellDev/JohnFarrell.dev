import React from 'react'
import { Title } from '../Utilities/Title'
import { skills } from './Constants/skills'
import styles from './Skills.module.css'
import { Button } from '../Utilities/Button'

export const Skills = () => {
  return (
    <section className="section bg-grey">
      <Title title="Tech Skills" />
      <div className={`section-center ${styles.skillsCenter}`}>
        {skills.map((skill) => {
          const { id, title, description, icon, link } = skill
          return (
            <article key={id} className={styles.skill}>
              {icon}
              <h3>{title}</h3>
              <div className="underline" />
              <p>{description}</p>
              {link && (
                <a href={link.url}>
                  <Button>
                    <span>{link.display}</span>
                  </Button>
                </a>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
