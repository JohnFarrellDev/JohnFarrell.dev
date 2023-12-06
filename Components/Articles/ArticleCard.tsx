import Link from 'next/link'
import React from 'react'
import styles from './ArticleCard.module.css'
import Image from 'next/image'

interface ArticleCardProps {
  title: string
  description: string
  URL: string
  createdAt: Date
  lastUpdatedAt?: Date
  tags: string[]
  imageURL: string
  imageAlt: string
}

function dateToDisplay(date: Date) {
  // dd/mm/yyyy

  const day = date.getDate().toString().padStart(2, '0')
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

export const ArticleCard = ({
  title,
  description,
  URL,
  createdAt,
  lastUpdatedAt,
  tags,
  imageURL,
  imageAlt,
}: ArticleCardProps) => {
  return (
    <li className={styles.card}>
      <Link href={URL} className={styles.link}>
        <div className={styles.contentContainer}>
          <Image src={imageURL} alt={imageAlt} className={styles.image} width={200} height={200} />
          <div className={styles.textContainer}>
            <div className={styles.textContent}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
              <div className={styles.tagContainer}>
                {tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.dateContainer}>
                <p className={styles.date}>Created: {dateToDisplay(createdAt)}</p>
                {lastUpdatedAt ? <p className={styles.date}>Updated: {dateToDisplay(lastUpdatedAt)}</p> : null}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
