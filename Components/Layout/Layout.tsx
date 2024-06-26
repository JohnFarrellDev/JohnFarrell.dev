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
    <div className="grid grid-rows-[auto_1fr_auto] min-h-svh">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  )
}
