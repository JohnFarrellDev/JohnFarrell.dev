import { Cell } from '../types'

export const generateBoard = (
  rows: number,
  columns: number
): { board: Cell[][] } => {
  const board: Cell[][] = []
  for (let i = 0; i < rows; i++) {
    const row: Cell[] = []
    for (let j = 0; j < columns; j++) {
      row.push({
        id: j + i * columns,
        isCovered: true,
        isBomb: false,
        isFlagged: false,
        neighbors: [],
        neighborBombs: 0,
      })
    }

    board.push(row)
  }

  return { board }
}
