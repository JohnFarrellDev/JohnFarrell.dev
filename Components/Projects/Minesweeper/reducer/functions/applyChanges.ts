import cloneDeep from 'lodash.clonedeep'
import { AnimationColor, State } from '..'

export const applyChanges = (state: State) => {
  const changeStep = state.changesToApply.dequeue()

  if (!changeStep) return

  state.changeTime = changeStep.time;

  changeStep.changes.forEach((change) => {
    if (change.action === 'WIPEANIMATION') {
      state.board.forEach((row) => {
        row.forEach((cell) => {
          cell.color = AnimationColor.NoColor
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
      state.board[change.rowIndex][change.columnIndex].color = AnimationColor.NoColor
    }
    if(change.action === "COPYBOARD") {
        state.board = cloneDeep(change.board)
    }
    if(change.action === "SELECTEDCELL") {
      state.board[change.rowIndex][change.columnIndex].color = AnimationColor.SelectedCell
    }
    if(change.action === "SELECTEDNEIGHBORCELL") {
      state.board[change.rowIndex][change.columnIndex].color = AnimationColor.SelectedNeighborCell
    }
    if(change.action === "SELECTEDNEIGHBORCELLBOMB") {
      state.board[change.rowIndex][change.columnIndex].color = AnimationColor.SelectedNeighborCellBomb
    }
    if(change.action === "APPLYNEIGHBORINFORMATION") {
      state.board[change.rowIndex][change.columnIndex].neighbors = change.neighbors
      state.board[change.rowIndex][change.columnIndex].neighborBombs = change.neighborBombs
    }
  })
}
