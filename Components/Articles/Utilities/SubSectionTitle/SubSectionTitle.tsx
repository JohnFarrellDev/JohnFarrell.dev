import React, { HTMLAttributes } from 'react'
import styles from './SubSectionTitle.module.css'

interface SubSectionTitleProps extends HTMLAttributes<HTMLElement> {
  children: string
}

export const SubSectionTitle = ({ children, ...htmlProps }: SubSectionTitleProps) => {
  return (
    <h4 {...htmlProps} className={styles.subSectionTitle}>
      {children}
    </h4>
  )
}
