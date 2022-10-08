import { State } from '../../..'

export const determineHasWon = (state: State) => {
  let hasWon = true
  state.revealedBoard.forEach((row) => {
    row.forEach((cell) => {
      if (!cell.isBomb && cell.isCovered) {
        hasWon = false
      }
    })
  })
  state.isWinner = hasWon
}
