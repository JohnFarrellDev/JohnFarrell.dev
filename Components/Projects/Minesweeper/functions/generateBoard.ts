import { Cell } from '../types'

export const generateBoard = (
  rows: number,
  columns: number
): { board: Cell[] } => {
  const board: Cell[] = new Array(rows * columns)
    .fill(undefined)
    .map((_, index) => ({
      id: index,
      isCovered: true,
      isBomb: false,
      isFlagged: false,
      neighbors: [],
      neighborBombs: 0,
    }))

  return { board }
}
