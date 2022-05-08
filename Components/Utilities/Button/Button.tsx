import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  children: JSX.Element
  extraStyles?: string
}

export const Button = ({ children, extraStyles }: ButtonProps) => {
  return (
    <button
      className={extraStyles ? `${styles.btn} ${extraStyles}` : styles.btn}
    >
      {children}
    </button>
  )
}
