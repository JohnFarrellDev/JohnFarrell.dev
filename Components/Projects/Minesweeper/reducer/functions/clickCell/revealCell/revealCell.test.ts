import { ClickCellAction, State } from '../../..'
import { generateBoard } from '../../../../functions/generateBoard'
import { revealCell } from './revealCell'
import { recursiveRevealCell } from './recursiveRevealCell'
import { minesweeperStateFactory } from '../../../../../../../factories/minesweeperState'
import { applyChanges } from '../../applyChanges'

jest.mock('./recursiveRevealCell')
jest.mock('./determineHasWon')
jest.mock('../../applyChanges')

describe('reveal cell', () => {
  let state: State
  const action: ClickCellAction = {
    type: 'ClickCell',
    columnIndex: 1,
    rowIndex: 1,
  }

  beforeEach(() => {
    state = minesweeperStateFactory.build({
      allowedOperations: { RevealCell: true },
    })
    generateBoard(state)
    jest.resetAllMocks()
  })

  it('should do nothing if operation RevealCell is not true', () => {
    expect(
      state.revealedBoard[action.rowIndex][action.columnIndex].isCovered
    ).toBe(true)
    state.allowedOperations.RevealCell = false

    revealCell(state, action)

    expect(
      state.revealedBoard[action.rowIndex][action.columnIndex].isCovered
    ).toBe(true)
  })

  it('should do nothing if the cell is flagged', () => {
    expect(
      state.revealedBoard[action.rowIndex][action.columnIndex].isCovered
    ).toBe(true)
    state.revealedBoard[action.rowIndex][action.columnIndex].isFlagged = true

    revealCell(state, action)

    expect(
      state.revealedBoard[action.rowIndex][action.columnIndex].isCovered
    ).toBe(true)
  })

  it('should do nothing when the cell clicked on is not covered', () => {
    state.revealedBoard[action.rowIndex][action.columnIndex].isCovered = false

    revealCell(state, action)

    expect(state.changesToApply.length).toBe(0)
  })

  it('should set the isDead status to true if it is a bomb', () => {
    expect(state.isDead).toBe(false)

    state.revealedBoard[action.rowIndex][action.columnIndex].isBomb = true

    revealCell(state, action)

    expect(
      state.revealedBoard[action.rowIndex][action.columnIndex].isCovered
    ).toBe(false)
    expect(state.isDead).toBe(true)
  })

  it('should enqueue REVEALCELL if the cell is a bomb then immediately apply all changes', () => {
    expect(state.changesToApply.length).toBe(0)

    state.revealedBoard[action.rowIndex][action.columnIndex].isBomb = true

    revealCell(state, action)

    expect(applyChanges).toBeCalledTimes(1)
    expect(state.changesToApply.length).toBe(1)
    expect(state.changesToApply.head?.value).toEqual({
      changes: [
        {
          action: 'REVEALCELL',
          columnIndex: 1,
          rowIndex: 1,
        },
      ],
      time: 0,
    })
  })

  it('should uncover the cell and if it not a bomb the state isDead should remain false', () => {
    expect(
      state.revealedBoard[action.rowIndex][action.columnIndex].isCovered
    ).toBe(true)
    expect(state.isDead).toBe(false)

    revealCell(state, action)

    expect(
      state.revealedBoard[action.rowIndex][action.columnIndex].isCovered
    ).toBe(false)
    expect(state.isDead).toBe(false)
  })

  it('should enqueue a change to REVEALCELL when RecursiveReveal is false', () => {
    revealCell(state, action)

    expect(state.changesToApply.length).toBe(1)
    expect(state.changesToApply.head?.value).toEqual({
      changes: [
        {
          action: 'REVEALCELL',
          columnIndex: 1,
          rowIndex: 1,
        },
      ],
      time: 0,
    })
  })

  it('should call to recursive reveal cells with the state after the cell has been uncovered', () => {
    state.allowedOperations.RecursiveReveal = true

    revealCell(state, action)
    expect(recursiveRevealCell).toBeCalledTimes(1)
    expect(recursiveRevealCell).toBeCalledWith(state, action)
  })
})
