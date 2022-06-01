import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Links } from '../Links'
import { SocialLinks } from '../../SocialLinks'

interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}

export const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
      <button
        type="button"
        className="close-btn"
        onClick={toggleSidebar}
        aria-label="close sidebar"
      >
        <FaTimes />
      </button>
      <div className="side-container">
        <Links styleClass={`${isOpen ? 'sidebar-links' : ''}`} />
        <SocialLinks styleClass={`${isOpen ? 'sidebar-icons' : ''}`} />
      </div>
    </aside>
  )
}
