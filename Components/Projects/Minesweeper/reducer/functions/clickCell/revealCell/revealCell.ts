import { ClickCellAction, State } from '../../..'
import { applyChanges } from '../../applyChanges'
import { autoFlagCells } from './autoFlagCells'
import { autoRevealCells } from './autoRevealCells'
import { recursiveRevealCell } from './recursiveRevealCell'

export const revealCell = (state: State, action: ClickCellAction) => {
  if (!state.allowedOperations.RevealCell) return
  if (state.revealedBoard[action.rowIndex][action.columnIndex].isFlagged) return
  if (!state.revealedBoard[action.rowIndex][action.columnIndex].isCovered)
    return
  state.revealedBoard[action.rowIndex][action.columnIndex].isCovered = false

  if (state.revealedBoard[action.rowIndex][action.columnIndex].isBomb) {
    state.changesToApply.enqueue({
      time: 0,
      changes: [
        {
          action: 'REVEALCELL',
          rowIndex: action.rowIndex,
          columnIndex: action.columnIndex,
        },
      ],
    })
    if (state.changesToApply.length > 0) {
      applyChanges(state, action, true)
    }
    state.isDead = true
    return
  }

  if (!state.allowedOperations.RecursiveReveal) {
    state.changesToApply.enqueue({
      time: 0,
      changes: [
        {
          action: 'REVEALCELL',
          rowIndex: action.rowIndex,
          columnIndex: action.columnIndex,
        },
      ],
    })
    return;
  }

  recursiveRevealCell(state, action)

  let scanBoardAgain = true

  while (scanBoardAgain) {
    autoFlagCells(state)
    scanBoardAgain = autoRevealCells(state)
  }
}
