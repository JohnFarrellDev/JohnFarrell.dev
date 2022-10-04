import { AnimationColor, ChangeStep, State } from '../../..'
import { extractRowAndColumnFromId } from '../../../../functions/extractRowAndColumnFromId'
import { Cell } from '../../../../types'

const numberOfCoveredNeighbors = (cell: Cell): number =>
  cell.neighbors.reduce((prev, curr) => prev + Number(curr.isCovered), 0)

export const autoFlagCells = (state: State) => {
  if (!state.allowedOperations.AutoFlag) return
  const rows = state.rows
  const columns = state.columns
  let appliedAnimation = false;

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

      const selectedCellForAnimation: ChangeStep[] | undefined = state
        .customAnimations.FlagCell
        ? [
            {
              time: 500,
              changes: [
                {
                  rowIndex: r,
                  columnIndex: c,
                  color: AnimationColor.SelectedCell,
                },
              ],
            },
          ]
        : undefined

      const coveredNeighbors = numberOfCoveredNeighbors(cell)
      if (coveredNeighbors === cell.neighborBombs) {
        cell.neighbors.forEach((neighborCell) => {
          const cellsSelectedToFlagForAnimation: ChangeStep[] | undefined =
            state.customAnimations.FlagCell
              ? [
                  {
                    time: 250,
                    changes: [],
                  },
                ]
              : undefined

          if (neighborCell.isCovered && !neighborCell.isFlagged) {
            neighborCell.isFlagged = true
            state.flagsPlaced++
            if (state.customAnimations.FlagCell) {
              const [row, column] = extractRowAndColumnFromId(
                neighborCell.id,
                state.columns
              )

              ;(
                (cellsSelectedToFlagForAnimation as ChangeStep[])[0]
                  .changes as unknown as Animation[]
              ).push({
                rowIndex: row,
                columnIndex: column,
                color: AnimationColor.PlaceBombColor,
              })
            }
          }

          if (
            state.customAnimations.FlagCell &&
            (cellsSelectedToFlagForAnimation as ChangeStep[])[0].changes
              .length > 0
          ) {
            ;(selectedCellForAnimation as ChangeStep[]).push(
              ...(cellsSelectedToFlagForAnimation as ChangeStep[])
            )
          }
        })
      }

      if (
        state.customAnimations.FlagCell &&
        (selectedCellForAnimation as ChangeStep[]).length > 1
      ) {
        appliedAnimation = true;
        state.changesToApply.enqueueArray(selectedCellForAnimation as ChangeStep[])
      }
    }
  }

  if(state.customAnimations.FlagCell && appliedAnimation) {
    state.changesToApply.enqueue({ time: 500, animations: 'WIPE' })
  }
}
