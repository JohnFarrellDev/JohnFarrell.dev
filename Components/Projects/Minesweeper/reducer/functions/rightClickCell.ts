import { Action, State } from '../'
import cloneDeep from 'lodash.clonedeep'

export const rightClickCell = (state: State, action: Action): State => {
  if (action.type !== 'RightClickCell') return state
  if (state.animationToApply.length > 0) return state

  if (!state.isPlaying || state.isDead || state.isWinner) return state

  if (!state.board[action.rowIndex][action.columnIndex].isCovered) return state

  if (!state.allowedOperations.FlagCell) return state

  state.board[action.rowIndex][action.columnIndex].isFlagged =
    !state.board[action.rowIndex][action.columnIndex].isFlagged

  return {
    ...state,
    board: cloneDeep(state.board),
  }
}
