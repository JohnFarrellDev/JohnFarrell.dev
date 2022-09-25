import { Action, State } from '..'
import { generateBoard } from '../../functions/generateBoard'

export const changeNumberOfColumns = (state: State, action: Action) => {
  if (action.type !== 'ChangeNumberOfColumns') return state
  if(state.isPlaying) return state;
  if(action.newNumberOfColumns > 50 || action.newNumberOfColumns < 3 || Number.isNaN(action.newNumberOfColumns)) return state;

  state.columns = action.newNumberOfColumns
  state.numberOfBombs = state.numberOfBombs >= state.rows * action.newNumberOfColumns ? state.rows * action.newNumberOfColumns - 1 : state.numberOfBombs
  generateBoard(state)
}
