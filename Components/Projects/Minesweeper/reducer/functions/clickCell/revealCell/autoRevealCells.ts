import { State } from '../../..'
import { Cell } from '../../../../types'

const numberOfFlaggedNeighborCells = (cell: Cell): number =>
  cell.neighbors.reduce((prev, curr) => prev + Number(curr.isFlagged), 0)

export const autoRevealCells = (state: State): boolean => {
  if(!state.allowedOperations.BasicAutoClick) return false
  const rows = state.rows
  const columns = state.columns

  let scanAgain = false

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const cell = state.board[r][c]
      if (cell.isCovered || cell.isFlagged) continue

      const flaggedNeighbors = numberOfFlaggedNeighborCells(cell)

      if (cell.neighborBombs <= flaggedNeighbors) {
        cell.neighbors.forEach((neighborCell) => {
          if (
            neighborCell.isCovered &&
            !neighborCell.isFlagged &&
            !neighborCell.isBomb
          ) {
            neighborCell.isCovered = false;
            scanAgain = true;
          }
        })
      }
    }
  }

  return scanAgain;
}