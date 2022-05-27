import React from 'react'
import { Underline } from '../Underline'
import styles from './Title.module.css'

interface TitleProps {
  title: string
  extraStyles?: string
}

export const Title = ({ title, extraStyles }: TitleProps) => {
  return (
    <div className={`${styles.sectionTitle} ${extraStyles ? extraStyles : ''}`}>
      <h2>{title}</h2>
      <Underline extraStyles={styles.underline} />
    </div>
  )
}
