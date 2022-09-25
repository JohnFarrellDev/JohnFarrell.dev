import { State, Action } from '..'
import { changeNumberOfRows } from './changeNumberOfRows'
import { generateBoard } from '../../functions/generateBoard'

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
    borderlessMode: false,
  }

  const newNumberOfRows = 10
  const action: Action = {
    type: 'ChangeNumberOfRows',
    newNumberOfRows,
  }

  let state = { ...gameState }

  beforeEach(() => {
    state = { ...gameState }
    generateBoard(state)
  })

  it('should make no change if the action is not ChangeNumberOfRows', () => {
    changeNumberOfRows(state, {
      ...action,
      type: 'invalid-action-type' as 'ChangeNumberOfRows',
    })

    expect(state.numberOfBombs).toBe(gameState.numberOfBombs)
  })

  it('should not allow less than 3 rows', () => {
    changeNumberOfRows(state, {
      ...action,
      newNumberOfRows: 2,
    })

    expect(state.rows).toBe(gameState.rows)
  })

  it('should not allow more than 30 rows', () => {
    changeNumberOfRows(state, {
      ...action,
      newNumberOfRows: 51,
    })

    expect(state.rows).toBe(gameState.rows)
  })

  it('should not allow number of rows to be set to NaN', () => {
    changeNumberOfRows(state, {
      ...action,
      newNumberOfRows: NaN,
    })

    expect(state.rows).toBe(gameState.rows)
  })

  it('should not allow number of rows to change if isPlaying is true', () => {
    state.isPlaying = true
    changeNumberOfRows(state, action)

    expect(state.rows).toBe(gameState.rows)
  })

  it('should allow 3 rows as a minimum', () => {
    expect(state.rows).toBe(5)

    const newNumberOfRows = 3
    changeNumberOfRows(state, {
      ...action,
      newNumberOfRows,
    })

    expect(state.rows).toBe(newNumberOfRows)
  })

  it('should allow 30 rows as a maximum', () => {
    expect(state.rows).toBe(5)
    const newNumberOfRows = 30

    changeNumberOfRows(state, {
      ...action,
      newNumberOfRows,
    })

    expect(state.rows).toBe(newNumberOfRows)
  })

  it('should reduce the number of bombs to total game cells minus one if shrinking the board meant number of bombs greater than total cell count', () => {
    state.numberOfBombs = 22
    state.columns = 5
    const newNumberOfRows = 3
    const testAction = { ...action, newNumberOfRows }

    changeNumberOfRows(state, testAction)

    expect(state.rows).toBe(newNumberOfRows)
    expect(state.numberOfBombs).toBe(
      state.columns * newNumberOfRows - 1
    )
  })

  it('should not change the number of bombs when the new total cell count is not equal to or less than number of bombs', () => {
    state.numberOfBombs = 14;
    const testAction = { ...action, newNumberOfRows: 3 }

    changeNumberOfRows(state, testAction)

    expect(state.rows).toBe(testAction.newNumberOfRows)
    expect(state.numberOfBombs).toBe(14)
  })
})
