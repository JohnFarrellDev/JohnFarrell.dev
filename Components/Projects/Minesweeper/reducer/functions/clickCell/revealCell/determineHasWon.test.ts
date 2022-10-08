import { State } from '../../..'
import { minesweeperStateFactory } from '../../../../../../../factories/minesweeperState'
import { generateBoard } from '../../../../functions/generateBoard'
import { determineHasWon } from './determineHasWon'

describe('determine has won', () => {
  let state: State

  beforeEach(() => {
    state = minesweeperStateFactory.build({})
    generateBoard(state)
  })

  it('should set isWinner to false if there are covered cells that do not contain a bomb', () => {
    determineHasWon(state)
    expect(state.isWinner).toBe(false)
  })

  it('should set isWinner to true if the only covered cells are a bomb', () => {
    state.revealedBoard.forEach((row) => {
      row.forEach((cell) => {
        cell.isCovered = false
      })
    })
    state.revealedBoard[0][0].isCovered = true
    state.revealedBoard[0][0].isBomb = true
    determineHasWon(state)
    expect(state.isWinner).toBe(true)
  })

  it('should set isWinner to false if there is one covered cell that is not a bomb', () => {
    state.revealedBoard.forEach((row) => {
      row.forEach((cell) => {
        cell.isCovered = false
      })
    })
    state.revealedBoard[0][0].isCovered = true
    state.revealedBoard[0][0].isBomb = true
    state.revealedBoard[0][1].isCovered = true
    determineHasWon(state)
    expect(state.isWinner).toBe(false)
  })
})
