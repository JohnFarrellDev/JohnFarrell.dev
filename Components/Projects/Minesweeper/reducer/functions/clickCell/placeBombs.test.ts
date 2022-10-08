import { ClickCellAction, State } from '../..'
import { minesweeperStateFactory } from '../../../../../../factories/minesweeperState'
import { generateBoard } from '../../../functions/generateBoard'
import { placeBombs } from './placeBombs'

const startingState = minesweeperStateFactory.build({
  allowedOperations: {
    PlaceBombs: true,
  },
  customAnimations: {
    PlaceBombs: true,
  },
})
generateBoard(startingState)

const startingAction: ClickCellAction = {
  type: 'ClickCell',
  columnIndex: 5,
  rowIndex: 5,
}

describe('place bombs', () => {
  let state: State
  let action: ClickCellAction

  beforeEach(() => {
    state = minesweeperStateFactory.build({
      allowedOperations: {
        PlaceBombs: true,
      },
      customAnimations: {
        PlaceBombs: true,
      },
    })
    generateBoard(state)
    action = { ...startingAction }
  })

  it('should place as many bombs as the state parameter expects', () => {
    placeBombs(state, action)

    let bombCount = 0

    state.revealedBoard.forEach((row) => {
      row.forEach((cell) => {
        if (cell.isBomb) bombCount++
      })
    })

    expect(bombCount).toBe(state.numberOfBombs)
  })

  it('should never place a bomb in the rowIndex and columnIndex provided', () => {
    state.columns = 3
    state.rows = 3
    state.numberOfBombs = 8
    generateBoard(state)

    action.columnIndex = 1
    action.rowIndex = 1

    placeBombs(state, action)

    state.revealedBoard.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        if (rowIndex === 1 && columnIndex === 1) {
          expect(cell.isBomb).toBe(false)
        } else {
          expect(cell.isBomb).toBe(true)
        }
      })
    })
  })

  it('should never place a bomb in the rowIndex and columnIndex provided when animations are turned on', () => {
    state.columns = 3
    state.rows = 3
    state.numberOfBombs = 8
    state.customAnimations.PlaceBombs = true
    generateBoard(state)

    action.columnIndex = 1
    action.rowIndex = 1

    placeBombs(state, action)

    state.revealedBoard.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        if (rowIndex === 1 && columnIndex === 1) {
          expect(cell.isBomb).toBe(false)
        } else {
          expect(cell.isBomb).toBe(true)
        }
      })
    })
  })

  it('should apply animation affects', () => {
    placeBombs(state, action)

    const changesToApply = state.changesToApply.toArray();

    expect(changesToApply.length).toBe(11)
    expect(changesToApply[0].time).toBe(500)
    expect(changesToApply[0].changes[0].action).toBe("PLACEBOMB")
    expect(changesToApply[0].changes[0].action).toBe("PLACEBOMB")

    expect(changesToApply[changesToApply.length - 1].changes[0].action).toBe("WIPEANIMATION")
    expect(changesToApply[changesToApply.length - 1].time).toBe(500)
  })

  it('should add no animation when customAnimation of PlaceBombs is not provided', () => {
    state.customAnimations.PlaceBombs = false
    generateBoard(state)

    placeBombs(state, action)

    const changesToApply = state.changesToApply.toArray();

    expect(changesToApply.length).toBe(1)
    expect(changesToApply[0].time).toBe(0)
    expect(changesToApply[0].changes[0].action).toBe("COPYBOMBS")
  })

  it('should do nothing if PlaceBombs is not an allowed operation and return the passed in board', () => {
    state.allowedOperations.PlaceBombs = false

    placeBombs(state, action)

    let bombCount = 0

    state.revealedBoard.forEach((row) => {
      row.forEach((cell) => {
        if (cell.isBomb) bombCount++
      })
    })

    expect(bombCount).toBe(0)
    expect(state.changesToApply.length).toBe(0)
  })

  it('should have no memory references between the board and revealedBoard', () => {
    expect(state.board[0][0].neighborBombs).toBe(0)
    expect(state.revealedBoard[0][0].neighborBombs).toBe(0)

    state.board[0][0].neighborBombs = 1

    placeBombs(state, action)

    expect(state.board[0][0].neighborBombs).toBe(1)
    expect(state.revealedBoard[0][0].neighborBombs).toBe(0)
  })
})
