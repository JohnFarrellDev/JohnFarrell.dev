import React from 'react'
import styles from './ArticleTimeStamps.module.css'

interface ArticleTimeStampsProps {
  createdAt: Date
  lastUpdated?: Date
}

const threeLetterMonths = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const toDisplayDate = (date: Date) => {
  return `${
    threeLetterMonths[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`
}

export const ArticleTimeStamps = ({
  createdAt,
  lastUpdated,
}: ArticleTimeStampsProps) => {
  return (
    <div className={styles.container}>
      <span>Created at: {toDisplayDate(createdAt)}</span>{' '}
      {lastUpdated && <span>Last Updated: {toDisplayDate(lastUpdated)}</span>}
    </div>
  )
}
