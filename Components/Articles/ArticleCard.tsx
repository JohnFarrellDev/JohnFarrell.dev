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
          <div className={styles.imageContainer}>
            <Image src={imageURL} alt={imageAlt} className={styles.image} width={200} height={200} />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.textContent}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
              {/* <p>{createdAt.toISOString()}</p>
              {lastUpdatedAt ? <p>{lastUpdatedAt.toISOString()}</p> : null} */}
              <div className={styles.tagContainer}>
                {tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
