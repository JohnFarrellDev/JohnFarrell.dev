import cloneDeep from 'lodash.clonedeep'
import { Action, State } from '../..'
import { extractRowAndColumnFromId } from '../../../functions/extractRowAndColumnFromId'

export const revealCell = (state: State, action: Action): State => {
  if (action.type !== 'ClickCell') return state

  const newBoard = cloneDeep(state.board)
  newBoard[action.rowIndex][action.columnIndex].isCovered = false

  if (newBoard[action.rowIndex][action.columnIndex].isBomb) state.isDead = true

  const cellsAllReadySelected = new Set([
    newBoard[action.rowIndex][action.columnIndex].id,
  ])

  const cellsToVisit = [newBoard[action.rowIndex][action.columnIndex].id]

  while(cellsToVisit.length > 0) {
    const [row, column] = extractRowAndColumnFromId(cellsToVisit.pop() as number, state.columns)
    const currentCell = newBoard[row][column]
    if(currentCell.neighborBombs === 0) {
        currentCell.neighbors.forEach(neighborCell => {
            if(!cellsAllReadySelected.has(neighborCell.id)) {
                cellsToVisit.push(neighborCell.id);
                cellsAllReadySelected.add(neighborCell.id)
            }
            neighborCell.isCovered = false
        })
    }
  }

  let hasWon = true
  newBoard.forEach((row) => {
    row.forEach((cell) => {
      if (!cell.isBomb && cell.isCovered) hasWon = false
    })
  })
  state.isWinner = hasWon

  return {
    ...state,
    board: newBoard,
    isPlaying: state.isPlaying && !state.isDead && !state.isWinner,
  }
}
