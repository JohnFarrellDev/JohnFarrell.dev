import { State } from '../../..'
import { Cell } from '../../../../types'

const numberOfCoveredNeighbors = (cell: Cell): number =>
  cell.neighbors.reduce((prev, curr) => prev + Number(curr.isCovered), 0)

export const autoFlagCells = (state: State) => {
  if(!state.allowedOperations.AutoFlag) return
  const rows = state.rows
  const columns = state.columns

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const cell = state.board[r][c]
      if (
        cell.isCovered ||
        cell.isBomb ||
        cell.neighborBombs === 0 ||
        cell.isFlagged
      )
        continue

      const coveredNeighbors = numberOfCoveredNeighbors(cell)
      if (coveredNeighbors === cell.neighborBombs) {
        cell.neighbors.forEach((neighborCell) => {
          if (neighborCell.isCovered && !neighborCell.isFlagged) {
            neighborCell.isFlagged = true
            state.flagsPlaced++;
          }
        })
      }
    }
  }
}
