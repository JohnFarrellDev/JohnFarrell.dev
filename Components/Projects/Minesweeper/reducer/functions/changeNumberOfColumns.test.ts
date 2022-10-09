import { ChangeNumberOfColumnsAction, State } from '..'
import { changeNumberOfColumns } from './changeNumberOfColumns'
import { generateBoard } from '../../functions/generateBoard'
import { minesweeperStateFactory } from '../../../../../factories/minesweeperState'

const startingState = minesweeperStateFactory.build({})
generateBoard(startingState)

const startingAction: ChangeNumberOfColumnsAction = {
  type: 'ChangeNumberOfColumns',
  newNumberOfColumns: 5,
}

describe('change number of columns', () => {
  let state: State
  let action: ChangeNumberOfColumnsAction

  beforeEach(() => {
    state = minesweeperStateFactory.build({})
    generateBoard(state)
    action = { ...startingAction }
  })

  it('should not allow less than 3 columns', () => {
    action.newNumberOfColumns = 2

    changeNumberOfColumns(state, action)

    expect(state).toEqual(startingState)
  })

  it('should not allow more than 50 columns', () => {
    action.newNumberOfColumns = 51

    changeNumberOfColumns(state, action)

    expect(state).toEqual(startingState)
  })

  it('should not allow number of columns to be set to NaN', () => {
    action.newNumberOfColumns = NaN

    changeNumberOfColumns(state, action)

    expect(state).toEqual(startingState)
  })

  it('should not allow number of columns to change if isPlaying is true', () => {
    state.isPlaying = true

    changeNumberOfColumns(state, action)

    expect(state.board).toEqual(startingState.board)
  })

  it('should allow number of columns to change if isPlaying is true but isWinner is also true', () => {
    state.isPlaying = true
    state.isWinner = true

    changeNumberOfColumns(state, action)

    expect(state.columns).toEqual(action.newNumberOfColumns)
  })

  it('should allow number of columns to change if isPlaying is true but isDead is also true', () => {
    state.isPlaying = true
    state.isDead = true

    changeNumberOfColumns(state, action)

    expect(state.columns).toEqual(action.newNumberOfColumns)
  })

  it('should allow 3 columns as a minimum', () => {
    expect(state.columns).toBe(10)

    action.newNumberOfColumns = 3

    changeNumberOfColumns(state, action)

    expect(state.columns).toBe(action.newNumberOfColumns)
  })

  it('should allow 50 columns as a maximum', () => {
    expect(state.columns).toBe(10)

    action.newNumberOfColumns = 50

    changeNumberOfColumns(state, action)

    expect(state.columns).toBe(action.newNumberOfColumns)
  })

  it('should reduce the number of bombs to total game cells minus one if shrinking the board meant number of bombs greater than total cell count', () => {
    state.numberOfBombs = 35
    action.newNumberOfColumns = 3

    changeNumberOfColumns(state, action)

    expect(state.columns).toBe(action.newNumberOfColumns)
    expect(state.numberOfBombs).toBe(state.rows * action.newNumberOfColumns - 1)
  })

  it('should not change the number of bombs when the new total cell count is not equal to or less than number of bombs', () => {
    state.numberOfBombs = 29
    action.newNumberOfColumns = 3

    changeNumberOfColumns(state, action)

    expect(state.columns).toBe(action.newNumberOfColumns)
    expect(state.numberOfBombs).toBe(29)
  })
})
