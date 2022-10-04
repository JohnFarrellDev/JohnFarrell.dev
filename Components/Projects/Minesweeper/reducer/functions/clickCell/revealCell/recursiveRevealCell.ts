import { AnimationColor, ClickCellAction, State } from '../../..'
import { extractRowAndColumnFromId } from '../../../../functions/extractRowAndColumnFromId'

export const recursiveRevealCell = (state: State, action: ClickCellAction) => {
  if (!state.allowedOperations.RecursiveReveal) return
  const cellsAllReadySelected = new Set([
    state.board[action.rowIndex][action.columnIndex].id,
  ])

  const cellsToVisit = [state.board[action.rowIndex][action.columnIndex].id]

  if (state.customAnimations.RecursiveReveal) {
    state.changesToApply.enqueue({
      changes: [
        {
          rowIndex: action.rowIndex,
          columnIndex: action.columnIndex,
          color: AnimationColor.SelectedCell,
        },
      ],
      time: 200,
    })
  }

  while (cellsToVisit.length > 0) {
    const [row, column] = extractRowAndColumnFromId(
      cellsToVisit.pop() as number,
      state.columns
    )
    if (
      state.customAnimations.RecursiveReveal &&
      !(row === action.rowIndex && column === action.columnIndex)
    ) {
      state.changesToApply.enqueue({
        changes: [
          {
            rowIndex: row,
            columnIndex: column,
            color: AnimationColor.RecursiveRevealColor,
          },
        ],
        time: 100,
      })
    }
    const currentCell = state.board[row][column]
    if (currentCell.neighborBombs === 0) {
      currentCell.neighbors.forEach((neighborCell) => {
        if (!cellsAllReadySelected.has(neighborCell.id)) {
          cellsToVisit.push(neighborCell.id)
          cellsAllReadySelected.add(neighborCell.id)
        }
        neighborCell.isCovered = false
      })
    }
  }

  if (state.customAnimations.RecursiveReveal) {
    state.changesToApply.enqueue({
      animations: "WIPE",
      time: 2000,
    })
  }
}
