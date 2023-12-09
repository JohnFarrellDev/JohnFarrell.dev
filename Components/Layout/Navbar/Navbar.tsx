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
        <div className={styles.navHeader}>
          <button type="button" className={styles.toggleBtn} aria-label="open sidebar">
            <FaAlignRight onClick={toggleSidebar} />
          </button>
        </div>
        <Links styleClass={styles.navLinks} />
      </div>
    </nav>
  )
}
