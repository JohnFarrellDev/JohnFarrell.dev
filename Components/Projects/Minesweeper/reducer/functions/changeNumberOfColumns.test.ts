import { State, Action } from '..'
import { changeNumberOfColumns } from './changeNumberOfColumns'
import { generateBoard } from '../../functions/generateBoard'

const startingState: State = {
  animationToApply: [],
  animationTime: 0,
  columns: 10,
  rows: 10,
  customAnimations: new Map([]),
  allowedOperations: new Map([]),
  isDead: false,
  isPlaying: false,
  isWinner: false,
  numberOfBombs: 10,
  borderlessMode: false,
  board: [],
}

describe('change number of columns', () => {
  let state = { ...startingState }

  beforeEach(() => {
    state = { ...startingState }
    generateBoard(state)
  })

  const newNumberOfColumns = 10
  const action: Action = {
    type: 'ChangeNumberOfColumns',
    newNumberOfColumns,
  }

  it('should make no change if the action is not ChangeNumberOfColumns', () => {
    changeNumberOfColumns(state, {
      ...action,
      type: 'invalid-action-type' as 'ChangeNumberOfColumns',
    })

    expect(state.numberOfBombs).toBe(startingState.numberOfBombs)
  })

  it('should not allow less than 3 columns', () => {
    changeNumberOfColumns(state, {
      ...action,
      newNumberOfColumns: 2,
    })

    expect(state.columns).toBe(startingState.columns)
  })

  it('should not allow more than 50 columns', () => {
    changeNumberOfColumns(state, {
      ...action,
      newNumberOfColumns: 51,
    })

    expect(state.columns).toBe(startingState.columns)
  })

  it('should not allow number of columns to be set to NaN', () => {
    changeNumberOfColumns(state, {
      ...action,
      newNumberOfColumns: NaN,
    })

    expect(state.columns).toBe(startingState.columns)
  })

  it('should not allow number of columns to change if isPlaying is true', () => {
    state.isPlaying = true
    changeNumberOfColumns(state, action)

    expect(state.columns).toBe(startingState.columns)
  })

  it('should allow 3 columns as a minimum', () => {
    expect(state.columns).toBe(10)

    const newNumberOfColumns = 3
    changeNumberOfColumns(state, {
      ...action,
      newNumberOfColumns,
    })

    expect(state.columns).toBe(newNumberOfColumns)
  })

  it('should allow 50 columns as a maximum', () => {
    expect(state.columns).toBe(10)

    const newNumberOfColumns = 50
    changeNumberOfColumns(state, {
      ...action,
      newNumberOfColumns,
    })

    expect(state.columns).toBe(newNumberOfColumns)
  })

  it('should reduce the number of bombs to total game cells minus one if shrinking the board meant number of bombs greater than total cell count', () => {
    state.numberOfBombs = 35
    const testAction = { ...action, newNumberOfColumns: 3 }

    changeNumberOfColumns(state, testAction)

    expect(state.columns).toBe(testAction.newNumberOfColumns)
    expect(state.numberOfBombs).toBe(
      state.rows * testAction.newNumberOfColumns - 1
    )
  })

  it('should not change the number of bombs when the new total cell count is not equal to or less than number of bombs', () => {
    state.numberOfBombs = 29
    const testAction = { ...action, newNumberOfColumns: 3 }

    changeNumberOfColumns(state, testAction)

    expect(state.columns).toBe(testAction.newNumberOfColumns)
    expect(state.numberOfBombs).toBe(29)
  })
})
