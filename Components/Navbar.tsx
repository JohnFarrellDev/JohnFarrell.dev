import React from 'react'
import { FaAlignRight } from 'react-icons/fa'
import Links from './Links'
import styles from '../styles/Navbar.module.css'

interface NavbarProps {
  toggleSidebar: () => void
}

export const Navbar = ({ toggleSidebar }: NavbarProps) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button
            type="button"
            className="toggle-btn"
            aria-label="open sidebar"
          >
            <FaAlignRight onClick={toggleSidebar} />
          </button>
        </div>
        <Links styleClass="nav-links" />
      </div>
    </nav>
  )
}
