import { AnimationColor, Animation, State } from '../../..'
import { extractRowAndColumnFromId } from '../../../../functions/extractRowAndColumnFromId'
import { Cell } from '../../../../types'

const numberOfFlaggedNeighborCells = (cell: Cell): number =>
  cell.neighbors.reduce((prev, curr) => prev + Number(curr.isFlagged), 0)

export const autoRevealCells = (state: State): boolean => {
  if (!state.allowedOperations.BasicAutoClick) return false

  let scanAgain = false

  for (let r = 0; r < state.rows; r++) {
    for (let c = 0; c < state.columns; c++) {
      if (state.board[r][c].isCovered || state.board[r][c].isFlagged) continue

      const flaggedNeighbors = numberOfFlaggedNeighborCells(state.board[r][c])

      if (state.board[r][c].neighborBombs <= flaggedNeighbors) {
        if (state.customAnimations.BasicAutoClick) {
          state.animationToApply.enqueue({
            time: 500,
            animations: [
              {
                rowIndex: r,
                columnIndex: c,
                color: AnimationColor.SelectedCell,
              },
            ],
          })
        }

        const neighborSelectedReveal: Animation[] = []

        state.board[r][c].neighbors.forEach((neighborCell) => {
          if (
            neighborCell.isCovered &&
            !neighborCell.isFlagged &&
            !neighborCell.isBomb
          ) {
            neighborCell.isCovered = false
            scanAgain = true

            if (state.customAnimations.BasicAutoClick) {
              const [row, column] = extractRowAndColumnFromId(
                neighborCell.id,
                state.columns
              )

              neighborSelectedReveal.push({
                columnIndex: column,
                rowIndex: row,
                color: AnimationColor.RecursiveRevealColor,
              })
            }
          }
        })

        if (neighborSelectedReveal.length > 0) {
          state.animationToApply.enqueue({
            time: 500,
            animations: [
              {
                rowIndex: r,
                columnIndex: c,
                color: AnimationColor.SelectedCell,
              },
            ],
          })
          state.animationToApply.enqueue({
            time: 500,
            animations: neighborSelectedReveal,
          })
        }
        if (neighborSelectedReveal.length > 0) {
          state.animationToApply.enqueue({
            time: 200,
            animations: 'WIPE',
          })
        }
      }
    }
  }

  return scanAgain
}
