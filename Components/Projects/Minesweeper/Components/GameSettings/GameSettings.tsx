import React from 'react'
import styles from './GameSettings.module.css'

interface GameSettingsI {
  columns: number
  changeNumberOfColumns: (newNumberOfColumns: string) => void

  rows: number
  changeNumberOfRows: (newNumberOfRows: string) => void

  numberOfBombs: number
  changeNumberOfBombs: (newNumberOfBombs: string) => void
}

export const GameSettings = ({
  columns,
  changeNumberOfColumns,
  rows,
  changeNumberOfRows,
  numberOfBombs,
  changeNumberOfBombs,
}: GameSettingsI) => {
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
    </div>
  )
}
