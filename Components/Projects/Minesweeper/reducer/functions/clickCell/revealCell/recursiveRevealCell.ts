import { ClickCellAction, State } from '../../..'
import { extractRowAndColumnFromId } from '../../../../functions/extractRowAndColumnFromId'

export const recursiveRevealCell = (state: State, action: ClickCellAction) => {
  if (!state.allowedOperations.RecursiveReveal) return

  const cellsAllReadySelected = new Set([
    state.revealedBoard[action.rowIndex][action.columnIndex].id,
  ])

  const cellsToVisit = [
    state.revealedBoard[action.rowIndex][action.columnIndex].id,
  ]

  while (cellsToVisit.length > 0) {
    const [rowIndex, columnIndex] = extractRowAndColumnFromId(
      cellsToVisit.pop() as number,
      state.columns
    )

    const currentCell = state.revealedBoard[rowIndex][columnIndex]
    if (currentCell.neighborBombs === 0) {
      currentCell.neighbors.forEach((neighborCell) => {
        if (cellsAllReadySelected.has(neighborCell.id)) return
        cellsToVisit.push(neighborCell.id)
        cellsAllReadySelected.add(neighborCell.id)
        neighborCell.isCovered = false
      })
    }
  }

  if (!state.customAnimations.RecursiveReveal) {
    state.changesToApply.enqueue({
      time: 0,
      changes: [
        {
          action: 'REVEALCELLS',
          cells: Array.from(cellsAllReadySelected).map((el) => {
            const [rowIndex, columnIndex] = extractRowAndColumnFromId(
              el,
              state.columns
            )

            return {
              rowIndex,
              columnIndex,
            }
          }),
        },
      ],
    })
    return
  }

  if (cellsAllReadySelected.size === 1) {
    const [rowIndex, columnIndex] = extractRowAndColumnFromId(
      Array.from(cellsAllReadySelected)[0],
      state.columns
    )

    state.changesToApply.enqueue({
      changes: [
        {
          action: 'REVEALCELL',
          rowIndex,
          columnIndex,
        },
      ],
      time: 0,
    })
    return
  }

  cellsAllReadySelected.forEach((el) => {
    const [rowIndex, columnIndex] = extractRowAndColumnFromId(el, state.columns)
    state.changesToApply.enqueue({
      changes: [
        {
          action: 'REVEALCELLANIMATED',
          rowIndex,
          columnIndex,
        },
      ],
      time: 100,
    })
  })

  state.changesToApply.enqueue({
    changes: [{ action: 'WIPEANIMATION' }],
    time: 1000,
  })
}
