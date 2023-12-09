import { ChangeStep, ClickCellAction, State } from '../..'
import { Queue } from '../../../../../../Utilities/Queue/queue'
import { generateBoard } from '../../../functions/generateBoard'
import { calculateNeighborInformation } from './calculateNeighborInformation'
import { placeBombs } from './placeBombs'
import { revealCell } from './revealCell/revealCell'

export const startGame = (state: State, action: ClickCellAction) => {
  state.isPlaying = true
  state.isDead = false
  state.isWinner = false
  state.flagsPlaced = 0
  state.changesToApply = new Queue<ChangeStep>()
  state.changeTime = 0
  generateBoard(state)
  placeBombs(state, action)
  calculateNeighborInformation(state)
  revealCell(state, action)
}
