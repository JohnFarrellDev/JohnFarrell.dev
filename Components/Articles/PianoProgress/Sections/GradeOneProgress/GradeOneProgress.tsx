import styles from './GradeOneProgress.module.css'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'

export const GradeOneProgress = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.grade1}>
      <h2 onClick={toggleOpen}>
        <div>
            Grade 1 Progress (ABRSM){' '}
            {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        </div>
      </h2>

      {isOpen && (
        <>
          <div className={styles.subSection}>
            <h3>Chords and Arpeggios</h3>
            <ul>
              <li style={{ textDecoration: 'line-through' }}>
                C Major (right hand, left hand, contramotion, in similie)
              </li>
              <li>G Major</li>
              <li>D Major</li>
              <li>A Major</li>
              <li>E Major</li>
            </ul>
          </div>

          <div className={styles.subSection}>
            <h3>Exam Pieces</h3>
            <ul></ul>
          </div>

          <div className={styles.subSection}>
            <h3>Sight Reading</h3>
            <ul></ul>
          </div>

          <div className={styles.subSection}>
            <h3>Aural</h3>
          </div>
        </>
      )}
    </div>
  )
}
