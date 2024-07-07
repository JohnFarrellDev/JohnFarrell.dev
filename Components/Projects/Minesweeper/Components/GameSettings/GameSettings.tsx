import React, { ChangeEvent } from 'react'
import styles from './GameSettings.module.css'

interface GameSettingsI {
  columns: number
  changeNumberOfColumns: (newNumberOfColumns: ChangeEvent<HTMLInputElement>) => void

  rows: number
  changeNumberOfRows: (newNumberOfRows: ChangeEvent<HTMLInputElement>) => void

  numberOfBombs: number
  changeNumberOfBombs: (newNumberOfBombs: ChangeEvent<HTMLInputElement>) => void

  validateChange: () => void
}

export const GameSettings = ({
  columns,
  changeNumberOfColumns,
  rows,
  changeNumberOfRows,
  numberOfBombs,
  changeNumberOfBombs,
  validateChange,
}: GameSettingsI) => {
  return (
    <div className={styles.controls}>
      <div className={styles.controlItem}>
        <label>Number of columns</label>
        <input
          type="number"
          value={columns}
          onChange={changeNumberOfColumns}
          onBlur={validateChange}
          min={3}
          max={50}
        />
      </div>

      <div className={styles.controlItem}>
        <label>Number of Rows</label>
        <input type="number" value={rows} onChange={changeNumberOfRows} onBlur={validateChange} min={3} max={30} />
      </div>

      <div className={styles.controlItem}>
        <label>Number of Bombs</label>
        <input
          type="number"
          value={numberOfBombs}
          onChange={changeNumberOfBombs}
          onBlur={validateChange}
          min={1}
          max={columns * rows}
        />
      </div>
    </div>
  )
}
