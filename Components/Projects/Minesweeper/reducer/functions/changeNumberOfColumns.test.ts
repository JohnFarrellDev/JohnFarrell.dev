import { State, Action } from '..'
import { changeNumberOfColumns } from './changeNumberOfColumns'

describe('change number of columns', () => {
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
    customAnimations: new Map()
  }

  const newNumberOfColumns = 10
  const action: Action = {
    type: 'ChangeNumberOfColumns',
    newNumberOfColumns,
  }

  it('should make no change if the action is not ChangeNumberOfColumns', () => {
    const state = changeNumberOfColumns(gameState, {
      ...action,
      type: 'invalid-action-type' as 'ChangeNumberOfColumns',
    })

    expect(state.numberOfBombs).toBe(gameState.numberOfBombs)
  })

  it('should not allow less than 3 columns', () => {
    const state = changeNumberOfColumns(gameState, {
      ...action,
      newNumberOfColumns: 2,
    })

    expect(state.columns).toBe(gameState.columns)
  })

  it('should not allow more than 50 columns', () => {
    const state = changeNumberOfColumns(gameState, {
      ...action,
      newNumberOfColumns: 51,
    })

    expect(state.columns).toBe(gameState.columns)
  })

  it('should not allow number of columns to be set to NaN', () => {
    const state = changeNumberOfColumns(gameState, {
      ...action,
      newNumberOfColumns: NaN,
    })

    expect(state.columns).toBe(gameState.columns)
  })

  it('should not allow number of columns to change if isPlaying is true', () => {
    const state = changeNumberOfColumns(
      { ...gameState, isPlaying: true },
      action
    )

    expect(state.columns).toBe(gameState.columns)
  })

  it('should allow 3 columns as a minimum', () => {
    expect(gameState.columns).toBe(5)

    const newNumberOfColumns = 3
    const state = changeNumberOfColumns(gameState, {
      ...action,
      newNumberOfColumns,
    })

    expect(state.columns).toBe(newNumberOfColumns)
  })

  it('should allow 50 columns as a maximum', () => {
    expect(gameState.columns).toBe(5)

    const newNumberOfColumns = 50
    const state = changeNumberOfColumns(gameState, {
      ...action,
      newNumberOfColumns,
    })

    expect(state.columns).toBe(newNumberOfColumns)
  })

  it('should reduce the number of bombs to total game cells minus one if shrinking the board meant number of bombs greater than total cell count', () => {
    const testGameStartingState = {...gameState, numberOfBombs: 22}
    const testAction = {...action, newNumberOfColumns: 3}

    const state = changeNumberOfColumns(testGameStartingState, testAction)

    expect(state.columns).toBe(testAction.newNumberOfColumns)
    expect(state.numberOfBombs).toBe((state.rows * testAction.newNumberOfColumns) - 1)
  })

  it('should not change the number of bombs when the new total cell count is not equal to or less than number of bombs', () => {
    const testGameStartingState = {...gameState, numberOfBombs: 10}
    const testAction = {...action, newNumberOfColumns: 3}

    const state = changeNumberOfColumns(testGameStartingState, testAction)

    expect(state.columns).toBe(testAction.newNumberOfColumns)
    expect(state.numberOfBombs).toBe(testGameStartingState.numberOfBombs)
  })
})
