import { ClickCellAction, State } from '../..'
import { extractRowAndColumnFromId } from '../../../functions/extractRowAndColumnFromId'

export const revealCell = (state: State, action: ClickCellAction) => {
  if(!state.allowedOperations.RevealCell) return

  state.board[action.rowIndex][action.columnIndex].isCovered = false

  if (state.board[action.rowIndex][action.columnIndex].isBomb) state.isDead = true

  const cellsAllReadySelected = new Set([
    state.board[action.rowIndex][action.columnIndex].id,
  ])

  const cellsToVisit = [state.board[action.rowIndex][action.columnIndex].id]

  while(cellsToVisit.length > 0) {
    const [row, column] = extractRowAndColumnFromId(cellsToVisit.pop() as number, state.columns)
    const currentCell = state.board[row][column]
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
  state.board.forEach((row) => {
    row.forEach((cell) => {
      if (!cell.isBomb && cell.isCovered) hasWon = false
    })
  })
  state.isWinner = hasWon;
}
