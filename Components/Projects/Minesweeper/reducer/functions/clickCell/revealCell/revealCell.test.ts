import { ClickCellAction, State } from '../../..'
import { generateBoard } from '../../../../functions/generateBoard'
import { revealCell } from './revealCell'
import { recursiveRevealCell } from './recursiveRevealCell'
import { determineHasWon } from './determineHasWon'
import { minesweeperStateFactory } from '../../../../../../../factories/minesweeperState'

jest.mock('./recursiveRevealCell')
jest.mock('./determineHasWon')

describe('reveal cell', () => {
  let state: State
  const action: ClickCellAction = {
    type: 'ClickCell',
    columnIndex: 1,
    rowIndex: 1,
  }

  beforeEach(() => {
    state = minesweeperStateFactory.build({
      allowedOperations: { RevealCell: true, RecursiveReveal: true },
    })
    generateBoard(state)
    jest.resetAllMocks()
  })

  it('should do nothing if operation RevealCell is not true', () => {
    expect(state.board[action.rowIndex][action.columnIndex].isCovered).toBe(
      true
    )
    state.allowedOperations.RevealCell = false

    revealCell(state, action)

    expect(state.board[action.rowIndex][action.columnIndex].isCovered).toBe(
      true
    )
  })

  it('should do nothing if the cell is flagged', () => {
    expect(state.board[action.rowIndex][action.columnIndex].isCovered).toBe(
      true
    )
    state.board[action.rowIndex][action.columnIndex].isFlagged = true

    revealCell(state, action)

    expect(state.board[action.rowIndex][action.columnIndex].isCovered).toBe(
      true
    )
  })

  it('should uncover the cell if it is a bomb and set the isDead status to true', () => {
    expect(state.board[action.rowIndex][action.columnIndex].isCovered).toBe(
      true
    )
    expect(state.isDead).toBe(false)
    state.board[action.rowIndex][action.columnIndex].isBomb = true

    revealCell(state, action)

    expect(state.board[action.rowIndex][action.columnIndex].isCovered).toBe(
      false
    )
    expect(state.isDead).toBe(true)
  })

  it('should uncover the cell and if it not a bomb the state isDead should remain false', () => {
    expect(state.board[action.rowIndex][action.columnIndex].isCovered).toBe(
      true
    )
    expect(state.isDead).toBe(false)

    revealCell(state, action)

    expect(state.board[action.rowIndex][action.columnIndex].isCovered).toBe(
      false
    )
    expect(state.isDead).toBe(false)
  })

  it('should call to recursive reveal cells with the state after the cell has been uncovered', () => {
    revealCell(state, action)
    expect(recursiveRevealCell).toBeCalledTimes(1)
    expect(recursiveRevealCell).toBeCalledWith(state, action)
  })

  it('should call to determineHasWon with the state after calling recursiveRevealCell', () => {
    revealCell(state, action)
    expect(determineHasWon).toBeCalledTimes(1)
    expect(determineHasWon).toBeCalledWith(state)
    expect(recursiveRevealCell).toHaveBeenCalledBefore(determineHasWon)
  })
})
