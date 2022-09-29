import { State } from '../../..'
import { FaceType } from '../../../../Components/GameTracking/GameTracking'
import { generateBoard } from '../../../../functions/generateBoard'
import { determineHasWon } from './determineHasWon'

const startingState: State = {
  animationToApply: [],
  animationTime: 0,
  columns: 5,
  rows: 5,
  customAnimations: {
    CalculateNeighbors: false,
    PlaceBombs: false,
    RecursiveReveal: false,
  },
  allowedOperations: {
    CalculateNeighbors: false,
    FlagCell: false,
    PlaceBombs: false,
    RevealCell: false,
    RecursiveReveal: false,
    AutoFlag: false,
    BasicAutoClick: false,
  },
  isDead: false,
  isPlaying: false,
  isWinner: false,
  numberOfBombs: 5,
  borderlessMode: false,
  board: [],
  isHoldingDown: false,
  faceType: FaceType.Human,
  flagsPlaced: 0,
}

describe('determine has won', () => {
  let state = { ...startingState }

  beforeEach(() => {
    state = {
      ...startingState,
      animationToApply: [],
      customAnimations: { ...startingState.customAnimations },
      allowedOperations: { ...startingState.allowedOperations },
    }
    generateBoard(state)
  })

  it('should set isWinner to false if there are covered cells that do not contain a bomb', () => {
    determineHasWon(state)
    expect(state.isWinner).toBe(false)
  })

  it('should set isWinner to true if the only covered cells are a bomb', () => {
    state.board.forEach((row) => {
      row.forEach((cell) => {
        cell.isCovered = false
      })
    })
    state.board[0][0].isCovered = true
    state.board[0][0].isBomb = true
    determineHasWon(state)
    expect(state.isWinner).toBe(true)
  })

  it('should set isWinner to false if there is one covered cell that is not a bomb', () => {
    state.board.forEach((row) => {
      row.forEach((cell) => {
        cell.isCovered = false
      })
    })
    state.board[0][0].isCovered = true
    state.board[0][0].isBomb = true
    state.board[0][1].isCovered = true
    determineHasWon(state)
    expect(state.isWinner).toBe(false)
  })
})
