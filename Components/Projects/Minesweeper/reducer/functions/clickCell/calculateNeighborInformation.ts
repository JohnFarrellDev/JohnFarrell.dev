import { State } from '../..'
import { Cell } from '../../../types'

const neighborIndexes = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 0],
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

      neighborIndexes.forEach((neighborIndex) => {
        if (
          board[rowIndex + neighborIndex[0]]?.[columnIndex + neighborIndex[1]]
        ) {
          cellNeighbors.push(
            board[rowIndex + neighborIndex[0]][columnIndex + neighborIndex[1]]
          )
        }
      })

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
