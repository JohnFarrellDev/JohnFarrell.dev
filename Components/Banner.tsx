import styles from './Banner.module.css'
import React from 'react'

interface BannerProps {
  type: 'information' | 'warning'
  heading: string
  description: React.ReactNode
}

export const Banner = ({ type, heading, description }: BannerProps) => {
  const bannerClass = type === 'information' ? styles.information : styles.warning

  return (
    <div className={`${styles.banner} ${bannerClass}`} data-type={type}>
      <div className={styles.bannerHeader}>
        <h2 className={styles.heading}>{heading}</h2>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
