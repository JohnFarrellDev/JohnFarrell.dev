import React, { HTMLAttributes } from 'react'
import styles from './BlockQuote.module.css'

interface BlockQuoteProps extends HTMLAttributes<HTMLQuoteElement> {
  children: React.ReactChild | React.ReactChild[]
}

export const BlockQuote = ({ children, ...htmlProps }: BlockQuoteProps) => {
  return (
    <blockquote className={styles.blockquote} {...htmlProps}>
      <p>{children}</p>
    </blockquote>
  )
}
