import { RightClickCellAction, State } from '..'

export const flagCell = (state: State, action: RightClickCellAction) => {
  if (state.animationToApply.length > 0) return

  if (!state.isPlaying || state.isDead || state.isWinner) return

  if (!state.board[action.rowIndex][action.columnIndex].isCovered) return

  if (!state.allowedOperations.FlagCell) return

  if(state.board[action.rowIndex][action.columnIndex].isFlagged) {
    state.board[action.rowIndex][action.columnIndex].isFlagged = false
    state.flagsPlaced--
  } else {
    state.board[action.rowIndex][action.columnIndex].isFlagged = true
    state.flagsPlaced++
  }
}
