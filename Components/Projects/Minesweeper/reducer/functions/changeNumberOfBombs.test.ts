import { Action, State } from '..'
import { changeNumberOfBombs } from './changeNumberOfBombs'

describe('change number of bombs', () => {
  const gameState: State = {
    animationToApply: [],
    animationTime: 0,
    columns: 5,
    rows: 5,
    isDead: false,
    isPlaying: false,
    isWinner: false,
    numberOfBombs: 5,
    board: [],
    customAnimations: new Map(),
    allowedOperations: new Map(),
  }

  const newNumberOfBombs = 10;
  const action: Action = {
    type: 'ChangeNumberOfBombs',
    newNumberOfBombs
  }

  it('should make no change if the action is not ChangeNumberOfBombs', () => {
    const state = changeNumberOfBombs(gameState, {
        ...action,
      type: 'invalid-action-type' as 'ChangeNumberOfBombs',

    })

    expect(state.numberOfBombs).toBe(gameState.numberOfBombs)
  })

  it('should make no change if the number of bombs is equal to the number of game cells', () => {
    const state = changeNumberOfBombs(gameState, {
      ...action,
      newNumberOfBombs: gameState.rows * gameState.columns
    })

    expect(state.numberOfBombs).toBe(gameState.numberOfBombs)
  })

  it('should make no change if the number of bombs is greater than the number of game cells', () => {
    const state = changeNumberOfBombs(gameState, {
      ...action,
      newNumberOfBombs: gameState.rows * gameState.columns + 20
    })

    expect(state.numberOfBombs).toBe(gameState.numberOfBombs)
  })

  it('should make no change if the number of bombs is 0', () => {
    const state = changeNumberOfBombs(gameState, {
      ...action,
      newNumberOfBombs: 0,
    })

    expect(state.numberOfBombs).toBe(gameState.numberOfBombs)
  })

  it('should make no change if the number of bombs is less than 0', () => {
    const state = changeNumberOfBombs(gameState, {
      ...action,
      newNumberOfBombs: -1
    })

    expect(state.numberOfBombs).toBe(gameState.numberOfBombs)
  })

  it('should make no change if NaN is passed in for number of bombs', () => {
    const state = changeNumberOfBombs(gameState, {
      ...action,
      newNumberOfBombs: NaN
    })

    expect(state.numberOfBombs).toBe(gameState.numberOfBombs)
  })

  it('should not allow a change to number of bombs if current game state isPlaying', () => {
    const state = changeNumberOfBombs({...gameState, isPlaying: true}, action)
  
      expect(state.numberOfBombs).toBe(gameState.numberOfBombs)
  })

  it('should update the number of bombs based on the passed in action param', () => {
    expect(gameState.numberOfBombs).toBe(5)

    const state = changeNumberOfBombs(gameState, action)

    expect(state.numberOfBombs).toBe(newNumberOfBombs)
  })

  it('should allow one bomb as a minimum', () => {
    expect(gameState.numberOfBombs).toBe(5)

    const newNumberOfBombs = 1
    const state = changeNumberOfBombs(gameState, {
      ...action,
      newNumberOfBombs
    })

    expect(state.numberOfBombs).toBe(newNumberOfBombs)
  })

  it('should allow one less bomb than number of cells as a maximum', () => {
    expect(gameState.numberOfBombs).toBe(5)

    const newNumberOfBombs = gameState.rows * gameState.columns - 1
    const state = changeNumberOfBombs(gameState, {
      ...action,
      newNumberOfBombs
    })

    expect(state.numberOfBombs).toBe(newNumberOfBombs)
  })
})
