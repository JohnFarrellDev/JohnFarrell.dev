import styles from './Experience.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { Title } from '../Utilities/Title/Title'
import { jobs } from './Constants/jobs'
import { Button } from '../Utilities/Button/Button'

export const Experience = () => {
  const [value, setValue] = useState(0)
  const { position, startDate, endDate, responsibilities } = jobs[value]

  return (
    <section className={`section ${styles.jobs}`}>
      <Title title="experience" />
      <div className={styles.jobsCenter}>
        <div className={styles.btnContainer}>
          {jobs.map((job, indx) => {
            return (
              <button
                key={job.id}
                onClick={() => setValue(indx)}
                className={`${styles.jobBtn} ${indx === value && styles.activeBtn}`}
                type="button"
              >
                {job.companyName}
              </button>
            )
          })}
        </div>
        <article className={styles.jobInfo}>
          <h3>{position}</h3>
          <p className={styles.jobDate}>{`${startDate} - ${endDate}`}</p>
          {responsibilities.map((item) => {
            return (
              <div key={item.id} className={styles.jobDesc}>
                <FaAngleDoubleRight className={styles.jobIcon} />
                <p>{item.description}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link href="/about-me">
        <Button className="mx-auto block w-48 uppercase">More Info About Me</Button>
      </Link>
    </section>
  )
}
