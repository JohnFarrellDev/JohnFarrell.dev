import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { cn } from '../../lib/utils'

interface LayoutProps {
  children: React.ReactNode
  // to determine the background color of the page
  className?: string
}

export const Layout = ({ children, className = 'bg-grey-1000' }: LayoutProps) => {
  return (
    <div className="grid min-h-svh grid-rows-[auto_1fr_auto]">
      <Navbar />
      <div className={cn('grow pt-20', className)}>{children}</div>
      <Footer />
    </div>
  )
}
