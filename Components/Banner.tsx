//information or warning for props
import { IoWarningSharp } from 'react-icons/io5'
import { IoIosInformationCircle } from 'react-icons/io'
import styles from './Banner.module.css'
import React from 'react'
interface BannerProps {
  type: 'information' | 'warning'
  heading: string
  description: React.ReactNode
}

export const Banner = ({ type, heading, description }: BannerProps) => {
  const bannerClass = type === 'information' ? styles.information : styles.warning

  const icon =
    type === 'information' ? (
      <IoIosInformationCircle size={56} color="hsl(200, 80%, 25%)" />
    ) : (
      <IoWarningSharp size={56} color="hsl(0, 80%, 25%)" />
    )

  return (
    <div className={`${styles.banner} ${bannerClass}`}>
      <div className={styles.bannerHeader}>
        {icon}
        <h2 className={styles.heading}>{heading}</h2>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
