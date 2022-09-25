import cloneDeep from 'lodash.clonedeep'
import { Action, State } from '..'
import { generateBoard } from '../../functions/generateBoard'

export const changeNumberOfRows = (state: State, action: Action): State => {
  if (action.type !== 'ChangeNumberOfRows') return state
  if(state.isPlaying) return state
  if(action.newNumberOfRows > 30 || action.newNumberOfRows < 3 || Number.isNaN(action.newNumberOfRows)) return state;

  generateBoard(state)

  return cloneDeep(state)
}
