import { AnimationColor, State } from '../..'
import { Cell } from '../../../types'
import { Animation } from '../../'

const neighborIndexes = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
]

export const calculateNeighborInformation = (state: State) => {
  if (!state.allowedOperations.CalculateNeighbors) return
  state.board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const cellNeighbors: Cell[] = []

      if (state.customAnimations.CalculateNeighbors) {
        state.animationToApply.enqueue({
          time: 400,
          animations: [{ columnIndex, rowIndex, color: AnimationColor.SelectedCell }],
        })
      }

      const neighborCellsAnimation: Animation[] = []

      if (state.borderlessMode) {
        const isOnLeft = columnIndex === 0
        const isOnRight = columnIndex === state.columns - 1
        const isOnTop = rowIndex === 0
        const isOnBottom = rowIndex === state.rows - 1

        const neighborIndexesBorderless = [
          [isOnTop ? state.rows - 1 : -1, isOnLeft ? state.columns - 1 : -1],
          [isOnTop ? state.rows - 1 : -1, 0],
          [isOnTop ? state.rows - 1 : -1, isOnRight ? 0 : 1],
          [0, isOnLeft ? state.columns - 1 : -1],
          [0, isOnRight ? 0 : 1],
          [isOnBottom ? 0 : 1, isOnLeft ? state.columns - 1 : -1],
          [isOnBottom ? 0 : 1, 0],
          [isOnBottom ? 0 : 1, isOnRight ? 0 : 1],
        ]

        neighborIndexesBorderless.forEach((neighborIndex, indx) => {
          const nRowIndex =
            isOnTop && indx <= 2
              ? state.rows - 1
              : isOnBottom && indx >= 5
              ? 0
              : rowIndex + neighborIndex[0]

          const nColumnIndex =
            isOnLeft && (indx === 0 || indx === 3 || indx === 5)
              ? state.columns - 1
              : isOnRight && (indx === 2 || indx === 4 ||indx === 7)
              ? 0
              : columnIndex + neighborIndex[1]

          cellNeighbors.push(state.board[nRowIndex][nColumnIndex])
          neighborCellsAnimation.push({
            rowIndex: nRowIndex,
            columnIndex: nColumnIndex,
            color: AnimationColor.SelectedNeighborCell,
          })
        })
      } else {
        neighborIndexes.forEach((neighborIndex) => {
          if (
            state.board[rowIndex + neighborIndex[0]]?.[columnIndex + neighborIndex[1]]
          ) {
            cellNeighbors.push(
              state.board[rowIndex + neighborIndex[0]][columnIndex + neighborIndex[1]]
            )
            neighborCellsAnimation.push({
              rowIndex: rowIndex + neighborIndex[0],
              columnIndex: columnIndex + neighborIndex[1],
              color: AnimationColor.SelectedNeighborCell,
            })
          }
        })
      }

      if (state.customAnimations['CalculateNeighbors']) {
        state.animationToApply.enqueue({
          time: 400,
          animations: neighborCellsAnimation,
        })

        state.animationToApply.enqueue({
          time: 400,
          animations: 'WIPE',
        })
      }

      cell.neighbors = cellNeighbors

      cell.neighborBombs = cell.neighbors.reduce(
        (prev, current) => prev + Number(current.isBomb),
        0
      )
    })
  })
}
