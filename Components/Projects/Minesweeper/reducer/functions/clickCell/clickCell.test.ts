import { State, ClickCellAction } from '../..'
import { FaceType } from '../../../Components/GameTracking/GameTracking'
import { generateBoard } from '../../../functions/generateBoard'
import { clickCell } from './clickCell'
import { revealCell } from './revealCell/revealCell'
import { startGame } from './startGame'

const startingState: State = {
  animationToApply: [],
  animationTime: 0,
  columns: 5,
  rows: 5,
  customAnimations: {
    CalculateNeighbors: false,
    PlaceBombs: false,
    RecursiveReveal: false
  },
  allowedOperations: {
    CalculateNeighbors: false,
    FlagCell: false,
    PlaceBombs: false,
    RevealCell: true,
    RecursiveReveal: false,
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

const startingAction: ClickCellAction = {
  type: 'ClickCell',
  columnIndex: 1,
  rowIndex: 1,
}

jest.mock('./revealCell/revealCell')
jest.mock('./startGame')

describe('click cell', () => {
  let state = { ...startingState }
  let action = { ...startingAction }

  beforeEach(() => {
    state = {
      ...startingState,
      animationToApply: [],
      customAnimations: { ...startingState.customAnimations },
      allowedOperations: { ...startingState.allowedOperations },
    }
    generateBoard(state)
    action = { ...startingAction }
    jest.resetAllMocks()
  })

  it('should do nothing if there are animations to apply', () => {
    state.animationToApply.push({ animations: 'WIPE', time: 0 })

    clickCell(state, action)

    expect(startGame).toBeCalledTimes(0)
    expect(revealCell).toBeCalledTimes(0)
  })

  it('should call to start game if isPlaying is false', () => {
    state.isPlaying = false

    clickCell(state, action)

    expect(startGame).toBeCalledTimes(1)
    expect(revealCell).toBeCalledTimes(0)
  })

  it('should call to start game if isDead is true', () => {
    state.isDead = true

    clickCell(state, action)

    expect(startGame).toBeCalledTimes(1)
    expect(revealCell).toBeCalledTimes(0)
  })

  it('should call to start game if isWinner is true', () => {
    state.isWinner = true

    clickCell(state, action)

    expect(startGame).toBeCalledTimes(1)
    expect(revealCell).toBeCalledTimes(0)
  })

  it('should call reveal cell if the state isPlaying is true and isWinner and isDead is false', () => {
    state.isWinner = false
    state.isDead = false
    state.isPlaying = true

    clickCell(state, action)

    expect(startGame).toBeCalledTimes(0)
    expect(revealCell).toBeCalledTimes(1)
  })
})
