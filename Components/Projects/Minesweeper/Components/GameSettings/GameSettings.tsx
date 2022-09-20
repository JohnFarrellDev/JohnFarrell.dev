import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { CustomAnimations } from '../Game/Game'
import styles from './GameSettings.module.css'

interface GameSettingsI {
  columns: number
  changeNumberOfColumns: (newNumberOfColumns: string) => void

  rows: number
  changeNumberOfRows: (newNumberOfRows: string) => void

  numberOfBombs: number
  changeNumberOfBombs: (newNumberOfBombs: string) => void

  customAnimations: Map<CustomAnimations, boolean>
  changeCustomAnimations: (animationOption: CustomAnimations | 'All') => void
}

export const GameSettings = ({
  columns,
  changeNumberOfColumns,
  rows,
  changeNumberOfRows,
  numberOfBombs,
  changeNumberOfBombs,
  customAnimations,
  changeCustomAnimations,
}: GameSettingsI) => {
  const animationsSelected = Array.from(customAnimations.keys()).reduce(
    (previousValue, currentValue) => {
      previousValue.push(currentValue)
      return previousValue
    },
    [] as string[]
  )
  console.log("🚀 ~ file: GameSettings.tsx ~ line 37 ~ animationsSelected", animationsSelected)

  return (
    <div className={styles.controls}>
      <div className={styles.controlItem}>
        <label>Number of columns</label>
        <input
          type="number"
          value={columns}
          onChange={(event) => changeNumberOfColumns(event.target.value)}
          min={3}
          max={50}
        />
      </div>

      <div className={styles.controlItem}>
        <label>Number of Rows</label>
        <input
          type="number"
          value={rows}
          onChange={(event) => changeNumberOfRows(event.target.value)}
          min={3}
          max={30}
        />
      </div>

      <div className={styles.controlItem}>
        <label>Number of Bombs</label>
        <input
          type="number"
          value={numberOfBombs}
          onChange={(event) => changeNumberOfBombs(event.target.value)}
          min={1}
          max={columns * rows}
        />
      </div>

      <div className={styles.controlItem}>
        <div className={styles.dropdown}>
          <span>
            Animation Controls <AiOutlineArrowDown />
          </span>
          <div className={styles.selectedAnimationControlBox}>
            {animationsSelected.join(', ')}
          </div>
          <div className={styles.dropdownContent}>
            <div className={styles.dropdownItem}>
              <input
                type={'checkbox'}
                checked={customAnimations.get('PlaceBombs') || false}
                onChange={() => changeCustomAnimations('All')}
              />{' '}
              <span>All</span>
            </div>
            <div className={styles.dropdownItem}>
              <input
                type={'checkbox'}
                checked={customAnimations.get('PlaceBombs') || false}
                onChange={() => changeCustomAnimations('PlaceBombs')}
              />{' '}
              <span>Place Bombs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
