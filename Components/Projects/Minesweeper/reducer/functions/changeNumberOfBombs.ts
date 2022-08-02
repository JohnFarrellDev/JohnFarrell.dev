import { Action, State } from '..'

export const changeNumberOfBombs = (state: State, action: Action): State => {
  if (action.type !== 'ChangeNumberOfBombs') return state

  return {
    ...state,
    numberOfBombs: action.numberOfBombs,
  }
}
