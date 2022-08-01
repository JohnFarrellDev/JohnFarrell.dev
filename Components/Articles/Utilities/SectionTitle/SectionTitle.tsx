import React, { HTMLAttributes } from 'react'
import styles from './SectionTitle.module.css'

interface SectionTitleProps extends HTMLAttributes<HTMLElement> {
  children: string
}

export const SectionTitle = ({ children, ...htmlProps }: SectionTitleProps) => {
  return (
    <h3 {...htmlProps} className={styles.sectionTitle}>
      {children}
    </h3>
  )
}
