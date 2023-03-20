import React from 'react'
import { Tooltip } from '../Tooltip'
import styles from './YoutubeLink.module.css'

interface YouTubeLinkProps {
  link: string
  iconText?: string
}

export const YoutubeLink = ({ link, iconText }: YouTubeLinkProps) => {
  return (
    <div>
      <a href={link} className={styles.link}>
        YouTube
      </a>
      {iconText && <Tooltip text={iconText} />}
    </div>
  )
}
