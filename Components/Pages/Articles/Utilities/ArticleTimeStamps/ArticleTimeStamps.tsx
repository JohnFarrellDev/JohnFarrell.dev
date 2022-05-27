import React from 'react'
import styles from './ArticleTimeStamps.module.css'

interface ArticleTimeStampsProps {
  createdAt: Date
  lastUpdated: Date
}

export const ArticleTimeStamps = ({
  createdAt,
  lastUpdated,
}: ArticleTimeStampsProps) => {
  return (
    <div className={styles.container}>
      <span>
        Created at:{' '}
        {`${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`}
      </span>{' '}
      <span>
        Last Updated:{' '}
        {`${lastUpdated.toLocaleDateString()} ${lastUpdated.toLocaleTimeString()}`}
      </span>
    </div>
  )
}
