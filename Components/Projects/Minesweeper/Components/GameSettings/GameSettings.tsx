import React, { ChangeEvent } from 'react'

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
    <div className="flex justify-center gap-4 py-2">
      <div>
        <label>Number of columns</label>
        <input
          className="block w-full border"
          type="number"
          value={columns}
          onChange={changeNumberOfColumns}
          onBlur={validateChange}
          min={3}
          max={50}
        />
      </div>

      <div>
        <label>Number of Rows</label>
        <input
          type="number"
          className="block w-full border"
          value={rows}
          onChange={changeNumberOfRows}
          onBlur={validateChange}
          min={3}
          max={30}
        />
      </div>

      <div>
        <label>Number of Bombs</label>
        <input
          type="number"
          className="block w-full border"
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
