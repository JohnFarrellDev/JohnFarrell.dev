import { Action, State } from '..'
import { generateBoard } from '../../functions/generateBoard'

export const changeNumberOfRows = (state: State, action: Action): State => {
  if (action.type !== 'ChangeNumberOfRows') return state

  const { board } = generateBoard(action.newNumberOfRows, state.columns)

  return {
    ...state,
    board,
    rows: action.newNumberOfRows,
  }
}
