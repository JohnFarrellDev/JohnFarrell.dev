import React from 'react'
import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element
  extraStyles?: string
}

export const Button = ({ children, extraStyles, ...htmlProps }: ButtonProps) => {
  return (
    <button className={`${styles.btn} ${extraStyles ?? ''}`} {...htmlProps}>
      {children}
    </button>
  )
}
