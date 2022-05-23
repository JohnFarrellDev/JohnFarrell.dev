import React from 'react'
import styles from './ArticleTimeStamps.module.css'

interface ArticleTimeStampsProps {
  createdAt: string
  lastUpdated: string
}

export const ArticleTimeStamps = ({
  createdAt,
  lastUpdated,
}: ArticleTimeStampsProps) => {
  const displayCreatedAt = `${new Date(
    createdAt
  ).toLocaleDateString()} ${new Date(createdAt).toLocaleTimeString()}`

  const displayLastUpdated = `${new Date(
    lastUpdated
  ).toLocaleDateString()} ${new Date(lastUpdated).toLocaleTimeString()}`

  return (
    <div className={styles.container}>
      <span>Created at: {displayCreatedAt}</span>{' '}
      <span>Last Updated: {displayLastUpdated}</span>
    </div>
  )
}
