import { State } from '../..'
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

export const calculateNeighborInformation = (state: State, board: Cell[][]) => {
  if (!state.allowedOperations.get('CalculateNeighbors')) return { board }

  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const cellNeighbors: Cell[] = []

      if (state.customAnimations.get('CalculateNeighbors')) {
        state.animationToApply.push({
          time: 400,
          animations: [{ columnIndex, rowIndex, color: '#6699ff' }],
        })
      }

      const neighborCellsAnimation: Animation[] = []

      neighborIndexes.forEach((neighborIndex) => {
        if (
          board[rowIndex + neighborIndex[0]]?.[columnIndex + neighborIndex[1]]
        ) {
          cellNeighbors.push(
            board[rowIndex + neighborIndex[0]][columnIndex + neighborIndex[1]]
          )
          neighborCellsAnimation.push({
            rowIndex: rowIndex + neighborIndex[0],
            columnIndex: columnIndex + neighborIndex[1],
            color: '#ff3399',
          })
        }
      })

      if (state.customAnimations.get('CalculateNeighbors')) {
        state.animationToApply.push({
          time: 400,
          animations: neighborCellsAnimation,
        })

        state.animationToApply.push({
          time: 400,
          animations: "WIPE"
        })
      }

      cell.neighbors = cellNeighbors

      cell.neighborBombs = cell.neighbors.reduce(
        (prev, current) => prev + Number(current.isBomb),
        0
      )
    })
  })

  return {
    board,
  }
}
