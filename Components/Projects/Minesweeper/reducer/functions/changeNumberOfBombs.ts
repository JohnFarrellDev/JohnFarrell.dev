import { Action, State } from '..'

export const changeNumberOfBombs = (state: State, action: Action): State => {
  if (action.type !== 'ChangeNumberOfBombs') return state
  if(action.newNumberOfBombs <= 0 || action.newNumberOfBombs >= state.rows * state.columns || Number.isNaN(action.newNumberOfBombs)) return state;
  if(state.isPlaying) return state;

  return {
    ...state,
    numberOfBombs: action.newNumberOfBombs,
  }
}
