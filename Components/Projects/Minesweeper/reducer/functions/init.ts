import { State } from '..'
import { generateBoard } from '../../functions/generateBoard'

export const init = (): State => {
  const { board } = generateBoard(20, 20)

  return {
    board,
    columns: 20,
    rows: 20,
    isDead: false,
    isPlaying: false,
    isWinner: false,
    numberOfBombs: 10,
  }
}
