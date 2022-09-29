import { ClickCellAction, State } from '../../..'
import { autoFlagCells } from './autoFlagCells'
import { autoRevealCells } from './autoRevealCells'
import { determineHasWon } from './determineHasWon'
import { recursiveRevealCell } from './recursiveRevealCell'

export const revealCell = (state: State, action: ClickCellAction) => {
  if(!state.allowedOperations.RevealCell) return
  if(state.board[action.rowIndex][action.columnIndex].isFlagged) return

  state.board[action.rowIndex][action.columnIndex].isCovered = false

  if (state.board[action.rowIndex][action.columnIndex].isBomb) {
    state.isDead = true
    return;
  }

  recursiveRevealCell(state, action)

  let scanBoardAgain = true;

  while(scanBoardAgain) {
    autoFlagCells(state)
    scanBoardAgain = autoRevealCells(state)
  }
  determineHasWon(state)
}
