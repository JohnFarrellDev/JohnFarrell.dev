import { State } from '../../..'
import { Cell } from '../../../../types'

const numberOfFlaggedNeighborCells = (cell: Cell): number =>
  cell.neighbors.reduce((prev, curr) => prev + Number(curr.isFlagged), 0)

export const autoRevealCells = (state: State): boolean => {
  if(!state.allowedOperations.BasicAutoClick) return false

  let scanAgain = false

  for (let r = 0; r < state.rows; r++) {
    for (let c = 0; c < state.columns; c++) {
      if (state.board[r][c].isCovered || state.board[r][c].isFlagged) continue

      const flaggedNeighbors = numberOfFlaggedNeighborCells(state.board[r][c])

      if (state.board[r][c].neighborBombs <= flaggedNeighbors) {
        state.board[r][c].neighbors.forEach((neighborCell) => {
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
