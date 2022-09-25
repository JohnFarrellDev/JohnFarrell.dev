import { Action, State } from '../'

export const rightClickCell = (state: State, action: Action) => {
  if (action.type !== 'RightClickCell') return
  if (state.animationToApply.length > 0) return

  if (!state.isPlaying || state.isDead || state.isWinner) return state

  if (!state.board[action.rowIndex][action.columnIndex].isCovered) return state

  if (!state.allowedOperations.FlagCell) return state

  state.board[action.rowIndex][action.columnIndex].isFlagged =
    !state.board[action.rowIndex][action.columnIndex].isFlagged
}
