import { Action, State } from '../..'
import { revealCell } from './revealCell'
import { startGame } from './startGame'

export const clickCell = (state: State, action: Action): State => {
  if (action.type !== 'ClickCell') return state
  if(state.animationToApply.length > 0) return state

  if (!state.isPlaying || state.isDead || state.isWinner) {
    return startGame(state, action)
  }

  return revealCell(state, action)
}
