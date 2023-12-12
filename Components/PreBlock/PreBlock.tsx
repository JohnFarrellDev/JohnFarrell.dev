import React from 'react'
import styles from './PreBlock.module.css'

interface PreBlockProps {
  lines: string[]
}

export const PreBlock = ({ lines }: PreBlockProps) => {
  return <pre className={styles.container}>{lines.join('\n')}</pre>
}
