import React, { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { Title } from '../Utilities/Title'
import { jobs } from './Constants/jobs'
import Link from 'next/link'
import { Button } from '../Utilities/Button'
import styles from './Experience.module.css'

export const Experience = () => {
  const [value, setValue] = useState(0)
  const { companyName, position, startDate, endDate, responsibilities } =
    jobs[value]

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
                className={`${styles.jobBtn} ${
                  indx === value && styles.activeBtn
                }`}
                type="button"
              >
                {job.companyName}
              </button>
            )
          })}
        </div>
        <article className={styles.jobInfo}>
          <h3>{position}</h3>
          <h4>{companyName}</h4>
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
      <Button extraStyles={styles.centreButton}>
        <Link href="/about-me">
          <span>more info about me</span>
        </Link>
      </Button>
    </section>
  )
}