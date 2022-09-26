import { ClickCellAction, State } from '../../..'
import { recursiveRevealCell } from './recursiveRevealCell'

export const revealCell = (state: State, action: ClickCellAction) => {
  if(!state.allowedOperations.RevealCell) return

  state.board[action.rowIndex][action.columnIndex].isCovered = false

  if (state.board[action.rowIndex][action.columnIndex].isBomb) state.isDead = true

  recursiveRevealCell(state, action)

  let hasWon = true
  state.board.forEach((row) => {
    row.forEach((cell) => {
      if (!cell.isBomb && cell.isCovered) hasWon = false
    })
  })
  state.isWinner = hasWon;
}
