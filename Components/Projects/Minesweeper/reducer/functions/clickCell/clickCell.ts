import { ChangeStep, ClickCellAction, State } from '../..'
import { Queue } from '../../../../../../Utilities/Queue'
import { revealCell } from './revealCell/revealCell'
import { startGame } from './startGame'

export const clickCell = (state: State, action: ClickCellAction) => {
  if(state.changesToApply.length > 0) {
    state.board.forEach(row => {
      row.forEach(cell => {
        cell.color = undefined
      })
    })
    state.changesToApply = new Queue<ChangeStep>();
    return
  }

  if (!state.isPlaying || state.isDead || state.isWinner) return startGame(state, action)

  revealCell(state, action)
}
