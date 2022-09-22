import { Action, State } from '../..'
import { startGame } from './startGame'

export const clickCell = (state: State, action: Action): State => {
  if (action.type !== 'ClickCell') return state
  if(state.animationToApply.length > 0) return state

  if (!state.isPlaying) {
    return startGame(state, action)
  }

  return {
    ...state,
    animationTime: 0
  }
}
