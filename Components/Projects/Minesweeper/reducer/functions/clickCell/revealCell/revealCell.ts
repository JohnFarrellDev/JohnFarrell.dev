import { ClickCellAction, State } from '../../..'
import { applyChanges } from '../../applyChanges'
import { autoFlagCells } from './autoFlagCells'
import { autoRevealCells } from './autoRevealCells'
import { determineHasWon } from './determineHasWon'
import { recursiveRevealCell } from './recursiveRevealCell'

export const revealCell = (state: State, action: ClickCellAction) => {
  if (!state.allowedOperations.RevealCell) return
  if (state.revealedBoard[action.rowIndex][action.columnIndex].isFlagged) return

  state.revealedBoard[action.rowIndex][action.columnIndex].isCovered = false

  if(!state.revealedBoard[action.rowIndex][action.columnIndex].isBomb) {
    if (state.customAnimations.RecursiveReveal) {
      state.changesToApply.enqueue({
        time: 200,
        changes: [
          {
            action: 'REVEALCELLANIMATED',
            rowIndex: action.rowIndex,
            columnIndex: action.columnIndex,
          },
        ],
      })
    } else {
      state.changesToApply.enqueue({
        time: 0,
        changes: [
          {
            action: 'REVEALCELLS'
          },
        ],
      })
    }
  }

  if (state.revealedBoard[action.rowIndex][action.columnIndex].isBomb) {
    if (state.changesToApply.length > 0) {
      applyChanges(state, action, true)
    }
    state.isDead = true
    return
  }

  recursiveRevealCell(state, action)

  // let scanBoardAgain = true

  // while (scanBoardAgain) {
  //   autoFlagCells(state)
  //   scanBoardAgain = autoRevealCells(state)
  // }
  determineHasWon(state)
}
