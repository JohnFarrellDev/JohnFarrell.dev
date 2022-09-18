import { State } from '..'
import { generateBoard } from '../../functions/generateBoard'

export const init = (state: State): State => {
  const { board } = generateBoard(state.rows, state.columns)

  return {
    ...state,
    board,
  }
}
