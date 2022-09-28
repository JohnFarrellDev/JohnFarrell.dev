import { State } from '../../..'
import { Cell } from '../../../../types'
import { revealCell } from './revealCell'

const numberOfFlaggedNeighborCells = (cell: Cell): number =>
  cell.neighbors.reduce((prev, curr) => prev + Number(curr.isFlagged), 0)

export const autoRevealCells = (state: State) => {
  const rows = state.rows
  const columns = state.columns

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
            revealCell(state, {
                type: "ClickCell",
                rowIndex: r,
                columnIndex: c
            })
          }
        })
      }
    }
  }
}
