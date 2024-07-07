import { useState } from 'react'
import { Footer } from './Footer/Footer'
import { Navbar } from './Navbar/Navbar'
import { Sidebar } from './Sidebar/Sidebar'

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="grid min-h-svh grid-rows-[auto_1fr_auto]">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  )
}
