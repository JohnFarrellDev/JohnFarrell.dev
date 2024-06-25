import styles from './Navbar.module.css'
import { FaAlignRight } from 'react-icons/fa'
import { Links } from '../Links/Links'

interface NavbarProps {
  toggleSidebar: () => void
}

export const Navbar = ({ toggleSidebar }: NavbarProps) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className="flex justify-between items-center">
          <button
            type="button"
            className={`text-4xl text-primary-500 hover:text-primary-200 ${styles.toggleBtn}`}
            aria-label="open sidebar"
          >
            <FaAlignRight onClick={toggleSidebar} />
          </button>
        </div>
        <Links styleClass={styles.navLinks} />
      </div>
    </nav>
  )
}
