import React from 'react'
import { Footer } from './Footer/Footer'
import { Navbar } from './Navbar/Navbar'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid min-h-svh grid-rows-[auto_1fr_auto]">
      <Navbar />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  )
}
