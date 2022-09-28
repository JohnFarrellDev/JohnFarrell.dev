import { State, ChangeNumberOfRowsAction } from '..'
import { changeNumberOfRows } from './changeNumberOfRows'
import { generateBoard } from '../../functions/generateBoard'
import { FaceType } from '../../Components/GameTracking/GameTracking'

const startingState: State = {
  animationToApply: [],
  animationTime: 0,
  columns: 5,
  rows: 5,
  isDead: false,
  isPlaying: false,
  isWinner: false,
  numberOfBombs: 5,
  board: [],
  customAnimations: {
    CalculateNeighbors: false,
    PlaceBombs: false,
    RecursiveReveal: false
  },
  allowedOperations: {
    CalculateNeighbors: false,
    FlagCell: false,
    PlaceBombs: false,
    RevealCell: false,
    RecursiveReveal: false
  },
  isHoldingDown: false,
  borderlessMode: false,
  faceType: FaceType.Human,
  flagsPlaced: 0
}
generateBoard(startingState)

const startingAction: ChangeNumberOfRowsAction = {
  type: 'ChangeNumberOfRows',
  newNumberOfRows: 10,
}

describe('change number of rows', () => {
  let state = {
    ...startingState,
  }
  let action = { ...startingAction }

  beforeEach(() => {
    state = { ...startingState }
    generateBoard(state)
    action = { ...startingAction }
  })

  it('should not allow less than 3 rows', () => {
    action.newNumberOfRows = 2

    changeNumberOfRows(state, action)

    expect(state).toEqual(startingState)
  })

  it('should not allow more than 30 rows', () => {
    action.newNumberOfRows = 51

    changeNumberOfRows(state, action)

    expect(state).toEqual(startingState)
  })

  it('should not allow number of rows to be set to NaN', () => {
    action.newNumberOfRows = NaN

    changeNumberOfRows(state, action)

    expect(state).toEqual(startingState)
  })

  it('should not allow number of rows to change if isPlaying is true', () => {
    state.isPlaying = true

    changeNumberOfRows(state, action)

    expect(state.board).toEqual(startingState.board)
  })

  it('should allow number of rows to change if isPlaying is true but isWinner is also true', () => {
    state.isPlaying = true
    state.isWinner = true

    changeNumberOfRows(state, action)

    expect(state.rows).toEqual(action.newNumberOfRows)
  })

  it('should allow number of rows to change if isPlaying is true but isDead is also true', () => {
    state.isPlaying = true
    state.isDead = true

    changeNumberOfRows(state, action)

    expect(state.rows).toEqual(action.newNumberOfRows)
  })

  it('should allow 3 rows as a minimum', () => {
    expect(state.rows).toBe(5)

    action.newNumberOfRows = 3
    changeNumberOfRows(state, action)

    expect(state.rows).toBe(action.newNumberOfRows)
  })

  it('should allow 30 rows as a maximum', () => {
    expect(state.rows).toBe(5)

    action.newNumberOfRows = 30

    changeNumberOfRows(state, action)

    expect(state.rows).toBe(action.newNumberOfRows)
  })

  it('should reduce the number of bombs to total game cells minus one if shrinking the board meant number of bombs greater than total cell count', () => {
    state.numberOfBombs = 22
    state.columns = 5
    action.newNumberOfRows = 3

    changeNumberOfRows(state, action)

    expect(state.rows).toBe(action.newNumberOfRows)
    expect(state.numberOfBombs).toBe(state.columns * action.newNumberOfRows - 1)
  })

  it('should not change the number of bombs when the new total cell count is not equal to or less than number of bombs', () => {
    state.numberOfBombs = 14
    action.newNumberOfRows = 3

    changeNumberOfRows(state, action)

    expect(state.rows).toBe(action.newNumberOfRows)
    expect(state.numberOfBombs).toBe(14)
  })
})
