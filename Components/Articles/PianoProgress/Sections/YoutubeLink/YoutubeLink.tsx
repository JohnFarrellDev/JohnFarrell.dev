import React from 'react'
import { Tooltip } from '../Tooltip'
import styles from './YoutubeLink.module.css'
import { FaYoutube } from 'react-icons/fa'
interface YouTubeLinkProps {
  link: string
  iconText?: string
}

export const YoutubeLink = ({ link, iconText }: YouTubeLinkProps) => {
  return (
    <div className={styles.container}>
      <a
        href={link}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <span className={styles.youtube}>
            <FaYoutube size={25} />
          </span>{' '}
          YouTube
        </span>
      </a>
      {iconText && <Tooltip text={iconText} />}
    </div>
  )
}
