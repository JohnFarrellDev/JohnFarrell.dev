import { State, Action } from '..'
import { changeNumberOfRows } from './changeNumberOfRows'

describe('change number of rows', () => {
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
    borderlessMode: false
  }

  const newNumberOfRows = 10
  const action: Action = {
    type: 'ChangeNumberOfRows',
    newNumberOfRows,
  }

  it('should make no change if the action is not ChangeNumberOfRows', () => {
    const state = changeNumberOfRows(gameState, {
      ...action,
      type: 'invalid-action-type' as 'ChangeNumberOfRows',
    })

    expect(state.numberOfBombs).toBe(gameState.numberOfBombs)
  })

  it('should not allow less than 3 rows', () => {
    const state = changeNumberOfRows(gameState, {
      ...action,
      newNumberOfRows: 2,
    })

    expect(state.rows).toBe(gameState.rows)
  })

  it('should not allow more than 30 rows', () => {
    const state = changeNumberOfRows(gameState, {
      ...action,
      newNumberOfRows: 51,
    })

    expect(state.rows).toBe(gameState.rows)
  })

  it('should not allow number of rows to be set to NaN', () => {
    const state = changeNumberOfRows(gameState, {
      ...action,
      newNumberOfRows: NaN,
    })

    expect(state.rows).toBe(gameState.rows)
  })

  it('should not allow number of rows to change if isPlaying is true', () => {
    const state = changeNumberOfRows(
      { ...gameState, isPlaying: true },
      action
    )

    expect(state.rows).toBe(gameState.rows)
  })

  it('should allow 3 rows as a minimum', () => {
    expect(gameState.rows).toBe(5)

    const newNumberOfRows = 3
    const state = changeNumberOfRows(gameState, {
      ...action,
      newNumberOfRows,
    })

    expect(state.rows).toBe(newNumberOfRows)
  })

  it('should allow 30 rows as a maximum', () => {
    expect(gameState.rows).toBe(5)

    const newNumberOfRows = 30
    const state = changeNumberOfRows(gameState, {
      ...action,
      newNumberOfRows,
    })

    expect(state.rows).toBe(newNumberOfRows)
  })

  it('should reduce the number of bombs to total game cells minus one if shrinking the board meant number of bombs greater than total cell count', () => {
    const testGameStartingState = {...gameState, numberOfBombs: 22}
    const testAction = {...action, newNumberOfRows: 3}

    const state = changeNumberOfRows(testGameStartingState, testAction)

    expect(state.rows).toBe(testAction.newNumberOfRows)
    expect(state.numberOfBombs).toBe((state.columns * testAction.newNumberOfRows) - 1)
  })

  it('should not change the number of bombs when the new total cell count is not equal to or less than number of bombs', () => {
    const testGameStartingState = {...gameState, numberOfBombs: 10}
    const testAction = {...action, newNumberOfRows: 3}

    const state = changeNumberOfRows(testGameStartingState, testAction)

    expect(state.rows).toBe(testAction.newNumberOfRows)
    expect(state.numberOfBombs).toBe(testGameStartingState.numberOfBombs)
  })
})
