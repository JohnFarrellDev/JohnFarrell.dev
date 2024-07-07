import React from 'react'
import { ButtonHTMLAttributes } from 'react'
import { cn } from '../../../Utilities/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  extraStyles?: string
}

export const Button = ({ children, extraStyles, ...htmlProps }: ButtonProps) => {
  return (
    <button
      className={cn(
        'rounded-md bg-primary-300 px-3.5 py-2 font-bold tracking-[0.2rem] text-primary-1000 shadow-lg transition-all duration-500 hover:bg-primary-800 hover:text-primary-100',
        extraStyles
      )}
      {...htmlProps}
    >
      {children}
    </button>
  )
}
