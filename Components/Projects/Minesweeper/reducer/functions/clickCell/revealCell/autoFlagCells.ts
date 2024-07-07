import { State } from '../../..'
import { extractRowAndColumnFromId } from '../../../../functions/extractRowAndColumnFromId'
import { Cell } from '../../../../types'

const numberOfCoveredNeighbors = (cell: Cell): number =>
  cell.neighbors.reduce((prev, curr) => prev + Number(curr.isCovered), 0)

export const autoFlagCells = (state: State) => {
  if (!state.allowedOperations.AutoFlag) return
  const rows = state.rows
  const columns = state.columns

  const noAnimationCellsToFlag: { rowIndex: number; columnIndex: number }[] = []

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const cell = state.revealedBoard[r][c]
      if (cell.isCovered || cell.isBomb || cell.neighborBombs === 0 || cell.isFlagged) continue

      const coveredNeighbors = numberOfCoveredNeighbors(cell)
      if (coveredNeighbors !== cell.neighborBombs) continue

      if (!state.customAnimations.FlagCell) {
        cell.neighbors.forEach((neighborCell) => {
          if (neighborCell.isCovered && !neighborCell.isFlagged) {
            neighborCell.isFlagged = true

            const [rowIndex, columnIndex] = extractRowAndColumnFromId(neighborCell.id, state.columns)
            noAnimationCellsToFlag.push({ rowIndex, columnIndex })
          }
        })
        continue
      }

      const animationCellsToFlag: { rowIndex: number; columnIndex: number }[] = []

      cell.neighbors.forEach((neighborCell) => {
        if (neighborCell.isCovered && !neighborCell.isFlagged) {
          neighborCell.isFlagged = true

          const [rowIndex, columnIndex] = extractRowAndColumnFromId(neighborCell.id, state.columns)
          animationCellsToFlag.push({ rowIndex, columnIndex })
        }
      })

      if (animationCellsToFlag.length > 0) {
        state.changesToApply.enqueue({
          time: 500,
          changes: [{ action: 'SELECTEDCELL', rowIndex: r, columnIndex: c }],
        })

        for (let i = 0; i < animationCellsToFlag.length; i++) {
          state.changesToApply.enqueue({
            time: 500,
            changes: [
              {
                action: 'FLAGCELL',
                rowIndex: animationCellsToFlag[i].rowIndex,
                columnIndex: animationCellsToFlag[i].columnIndex,
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

  if (!state.customAnimations.FlagCell) {
    state.changesToApply.enqueue({
      time: 0,
      changes: [{ action: 'FLAGCELLS', cells: noAnimationCellsToFlag }],
    })
  }
}
