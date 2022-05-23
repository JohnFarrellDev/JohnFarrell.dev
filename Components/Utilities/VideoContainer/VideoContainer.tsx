import React from 'react'
import styles from './VideoContainer.module.css'

interface VideoContainerProps {
  children: JSX.Element
}

export const VideoContainer = ({ children }: VideoContainerProps) => {
  return <div className={styles.videoContainer}>{children}</div>
}
