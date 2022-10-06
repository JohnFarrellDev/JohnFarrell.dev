import { ClickCellAction, State } from '../../..'
import { extractRowAndColumnFromId } from '../../../../functions/extractRowAndColumnFromId'

export const recursiveRevealCell = (state: State, action: ClickCellAction) => {
  if (!state.allowedOperations.RecursiveReveal) return
  const cellsAllReadySelected = new Set([
    state.revealedBoard[action.rowIndex][action.columnIndex].id,
  ])

  const cellsToVisit = [state.revealedBoard[action.rowIndex][action.columnIndex].id]

  if (state.customAnimations.RecursiveReveal) {
    state.changesToApply.enqueue({
      time: 200,
      changes: [
        {
          action: 'REVEALCELLANIMATED',
          rowIndex: action.rowIndex,
          columnIndex: action.columnIndex,
        },
      ],
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
      if(state.customAnimations.RecursiveReveal) {
        state.changesToApply.enqueue({
          changes: [
            {
              action: 'REVEALCELLANIMATED',
              rowIndex: row,
              columnIndex: column
            },
          ],
          time: 100,
        })
      }
    }
    const currentCell = state.revealedBoard[row][column]
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
      changes: [{action: 'WIPEANIMATION'}],
      time: 2000,
    })
  }
}
