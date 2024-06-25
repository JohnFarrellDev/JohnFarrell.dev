import React from 'react'
import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element
  extraStyles?: string
}

export const Button = ({ children, className, ...htmlProps }: ButtonProps) => {
  return (
    <button className={className ? `${styles.btn} ${className}` : styles.btn} {...htmlProps}>
      {children}
    </button>
  )
}
