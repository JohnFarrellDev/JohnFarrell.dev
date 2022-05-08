import React from 'react'
import { Underline } from '../Underline'
import styles from './Title.module.css'

interface TitleProps {
  title: string
}

export const Title = ({ title }: TitleProps) => {
  return (
    <div className={styles.sectionTitle}>
      <h2>{title}</h2>
      <Underline extraStyles={styles.underline} />
    </div>
  )
}
