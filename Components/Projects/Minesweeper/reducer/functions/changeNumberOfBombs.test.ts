import { ChangeNumberOfBombsAction, State } from '..'
import { changeNumberOfBombs } from './changeNumberOfBombs'

const startingState: State = {
  animationToApply: [],
  animationTime: 0,
  columns: 10,
  rows: 10,
  customAnimations: {
    CalculateNeighbors: false,
    PlaceBombs: false
  },
  allowedOperations: {
    CalculateNeighbors: false,
    FlagCell: false,
    PlaceBombs: false,
    RevealCell: false
  },
  isDead: false,
  isPlaying: false,
  isWinner: false,
  numberOfBombs: 5,
  borderlessMode: false,
  board: [],
}

const startingAction: ChangeNumberOfBombsAction = {
  type: 'ChangeNumberOfBombs',
  newNumberOfBombs: 10,
}

describe('change number of bombs', () => {
  let action: ChangeNumberOfBombsAction = {
    ...startingAction,
  }

  let state = { ...startingState }

  beforeEach(() => {
    state = { ...startingState }
    action = { ...startingAction }
  })

  it('should make no change if the number of bombs is equal to the number of game cells', () => {
    changeNumberOfBombs(state, {
      ...action,
      newNumberOfBombs: state.rows * state.columns,
    })

    expect(state.numberOfBombs).toBe(startingState.numberOfBombs)
  })

  it('should make no change if the number of bombs is greater than the number of game cells', () => {
    changeNumberOfBombs(state, {
      ...action,
      newNumberOfBombs: state.rows * state.columns + 20,
    })

    expect(state.numberOfBombs).toBe(startingState.numberOfBombs)
  })

  it('should make no change if the number of bombs is 0', () => {
    changeNumberOfBombs(state, {
      ...action,
      newNumberOfBombs: 0,
    })

    expect(state.numberOfBombs).toBe(startingState.numberOfBombs)
  })

  it('should make no change if the number of bombs is less than 0', () => {
    changeNumberOfBombs(state, {
      ...action,
      newNumberOfBombs: -1,
    })

    expect(state.numberOfBombs).toBe(startingState.numberOfBombs)
  })

  it('should make no change if NaN is passed in for number of bombs', () => {
    changeNumberOfBombs(state, {
      ...action,
      newNumberOfBombs: NaN,
    })

    expect(state.numberOfBombs).toBe(startingState.numberOfBombs)
  })

  it('should not allow a change to number of bombs if current game state isPlaying', () => {
    state.isPlaying = true
    changeNumberOfBombs(state, action)

    expect(state.numberOfBombs).toBe(startingState.numberOfBombs)
  })

  it('should update the number of bombs based on the passed in action param', () => {
    expect(state.numberOfBombs).toBe(5)

    changeNumberOfBombs(state, action)

    expect(state.numberOfBombs).toBe(action.newNumberOfBombs)
  })

  it('should allow one bomb as a minimum', () => {
    expect(state.numberOfBombs).toBe(5)
    action.newNumberOfBombs = 10

    changeNumberOfBombs(state, action)

    expect(state.numberOfBombs).toBe(action.newNumberOfBombs)
  })

  it('should allow one less bomb than number of cells as a maximum', () => {
    expect(state.numberOfBombs).toBe(5)
    action.newNumberOfBombs = state.rows * state.columns - 1

    changeNumberOfBombs(state, action)

    expect(state.numberOfBombs).toBe(action.newNumberOfBombs)
  })
})
