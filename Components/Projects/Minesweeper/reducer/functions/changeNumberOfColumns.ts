import { Action, State } from '..'
import { generateBoard } from '../../functions/generateBoard'

export const changeNumberOfColumns = (state: State, action: Action): State => {
  if (action.type !== 'ChangeNumberOfColumns') return state

  const { board } = generateBoard(state.rows, action.newNumberOfColumns)

  return {
    ...state,
    board,
    columns: action.newNumberOfColumns,
  }
}