import React from 'react'
import { SocialLinks } from './SocialLinks'
import styles from '../styles/Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <SocialLinks styleClass={`${styles.footerLinks}`} isFooter={true} />
        <p>
          copyright&copy;2020-{new Date().getFullYear()}
          <span>John Farrell</span> all rights reserved
        </p>
      </div>
    </footer>
  )
}
