import { State } from '..'
import { generateBoard } from '../../functions/generateBoard'

export const init = (state: State): State => {
  generateBoard(state)

  return {
    ...state,
  }
}
