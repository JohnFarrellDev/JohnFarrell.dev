import { State } from '../../..'
import { extractRowAndColumnFromId } from '../../../../functions/extractRowAndColumnFromId'
import { Cell } from '../../../../types'

const numberOfFlaggedNeighborCells = (cell: Cell): number =>
  cell.neighbors.reduce((prev, curr) => prev + Number(curr.isFlagged), 0)

export const autoRevealCells = (state: State): boolean => {
  if (!state.allowedOperations.BasicAutoClick) return false

  let scanAgain = false

  const noAnimationCellsToReveal: { rowIndex: number; columnIndex: number }[] =
    []

  for (let r = 0; r < state.rows; r++) {
    for (let c = 0; c < state.columns; c++) {
      if (
        state.revealedBoard[r][c].isCovered ||
        state.revealedBoard[r][c].isFlagged
      )
        continue

      const flaggedNeighbors = numberOfFlaggedNeighborCells(
        state.revealedBoard[r][c]
      )

      if (state.revealedBoard[r][c].neighborBombs <= flaggedNeighbors) {

        if (!state.customAnimations.BasicAutoClick) {
          state.revealedBoard[r][c].neighbors.forEach((neighborCell) => {
            if (
              neighborCell.isCovered &&
              !neighborCell.isFlagged &&
              !neighborCell.isBomb
            ) {
              neighborCell.isCovered = false
              scanAgain = true

              const [rowIndex, columnIndex] = extractRowAndColumnFromId(
                neighborCell.id,
                state.columns
              )

              noAnimationCellsToReveal.push({ rowIndex, columnIndex })
            }
          })
          continue
        }

        const animationCellsToReveal: { rowIndex: number; columnIndex: number }[] =
    []

        state.revealedBoard[r][c].neighbors.forEach((neighborCell) => {
          if (
            neighborCell.isCovered &&
            !neighborCell.isFlagged &&
            !neighborCell.isBomb
          ) {
            neighborCell.isCovered = false
            scanAgain = true

            const [rowIndex, columnIndex] = extractRowAndColumnFromId(
              neighborCell.id,
              state.columns
            )

            animationCellsToReveal.push({rowIndex, columnIndex})
          }
        })

        if(animationCellsToReveal.length > 0) {
          state.changesToApply.enqueue({
            time: 500,
            changes: [{ action: 'SELECTEDCELL', rowIndex: r, columnIndex: c }],
          })

          for (let i = 0; i < animationCellsToReveal.length; i++) {
            state.changesToApply.enqueue({
              time: 500,
              changes: [
                {
                  action: 'REVEALCELLANIMATED',
                  rowIndex: animationCellsToReveal[i].rowIndex,
                  columnIndex: animationCellsToReveal[i].columnIndex,
                },
              ],
            })
          }

          state.changesToApply.enqueue({
            time: 500,
            changes: [{ action: 'WIPEANIMATION' }],
          })
        }
      }
    }
  }

  if (!state.customAnimations.BasicAutoClick) {
    state.changesToApply.enqueue({
      time: 0,
      changes: [{ action: 'REVEALCELLS', cells: noAnimationCellsToReveal }],
    })
  }

  return scanAgain
}
