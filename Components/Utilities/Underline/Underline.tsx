import React from 'react'
import styles from './Underline.module.css'

interface UnderlineProps {
  extraStyles?: string
}

export const Underline = ({ extraStyles }: UnderlineProps) => {
  return (
    <div
      className={
        extraStyles ? `${styles.underline} ${extraStyles}` : styles.underline
      }
    />
  )
}
