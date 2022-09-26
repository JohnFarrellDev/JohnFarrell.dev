import { State } from '../../..'

export const determineHasWon = (state: State) => {
  let hasWon = true
  state.board.forEach((row) => {
    row.forEach((cell) => {
      if (!cell.isBomb && cell.isCovered) hasWon = false
    })
  })
  state.isWinner = hasWon
}
