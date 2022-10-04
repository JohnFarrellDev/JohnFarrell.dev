import cloneDeep from 'lodash.clonedeep'
import { AnimationColor, State } from '..'

export const applyChanges = (state: State) => {
  const changeStep = state.changesToApply.dequeue()

  if (!changeStep) return

  state.animationTime = changeStep.time;

  changeStep.changes.forEach((change) => {
    if (change.action === 'WIPEANIMATION') {
      state.board.forEach((row) => {
        row.forEach((cell) => {
          cell.color = undefined
        })
      })
    }
    if (change.action === 'PLACEBOMB') {
      state.board[change.rowIndex][change.columnIndex].isBomb = true
      state.board[change.rowIndex][change.columnIndex].color =
        AnimationColor.PlaceBombColor
    }
    if (change.action === 'REMOVEBOMB') {
      state.board[change.rowIndex][change.columnIndex].isBomb = false
      state.board[change.rowIndex][change.columnIndex].color = undefined
    }
    if(change.action === "COPYBOARD") {
        state.board = cloneDeep(change.board)
    }
  })
}
