import styles from './Paragraph.module.css'

import React, { HTMLAttributes } from 'react'

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactChild | React.ReactChild[]
}

export const Paragraph = ({ children, ...props }: ParagraphProps) => {
  return (
    <p {...props} className={styles.paragraph}>
      {children}
    </p>
  )
}
