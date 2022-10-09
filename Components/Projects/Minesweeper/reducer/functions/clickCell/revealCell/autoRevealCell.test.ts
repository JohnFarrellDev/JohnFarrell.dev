import { State } from '../../..'
import { minesweeperStateFactory } from '../../../../../../../factories/minesweeperState'
import { generateBoard } from '../../../../functions/generateBoard'
import { calculateNeighborInformation } from '../calculateNeighborInformation'
import { autoRevealCells } from './autoRevealCells'

const startingState = minesweeperStateFactory.build({
  allowedOperations: {
    BasicAutoClick: true,
    CalculateNeighbors: true,
  },
  rows: 3,
  columns: 3,
})
generateBoard(startingState)
calculateNeighborInformation(startingState)

describe('auto reveal cell', () => {
  let state: State

  beforeEach(() => {
    state = minesweeperStateFactory.build({
      allowedOperations: {
        BasicAutoClick: true,
        CalculateNeighbors: true,
      },
      rows: 3,
      columns: 3,
    })
    generateBoard(state)
    calculateNeighborInformation(state)
  })

  it('should do nothing if BasicAutoClick is not an allowed operation', () => {
    state.allowedOperations.BasicAutoClick = false

    const repeat = autoRevealCells(state)

    expect(repeat).toBe(false)
  })

  it('should do nothing if the number of flagged neighbor cells is less than the number of neighbor bombs', () => {
    state.revealedBoard[1][1].neighborBombs = 1

    const repeat = autoRevealCells(state)

    expect(repeat).toBe(false)
  })

  it('should uncover all non flagged covered neighbor cells if the number of flags equals number of neighbor bombs', () => {
    state.revealedBoard[0][0].isFlagged = true
    state.revealedBoard[1][1].neighborBombs = 1
    state.revealedBoard[1][1].isCovered = false

    for (let r = 0; r < state.rows; r++) {
      for (let c = 0; c < state.columns; c++) {
        if (r === 1 && c === 1) continue
        expect(state.revealedBoard[r][c].isCovered).toBe(true)
      }
    }

    const repeat = autoRevealCells(state)

    expect(repeat).toBe(true)
    for (let r = 0; r < state.rows; r++) {
      for (let c = 0; c < state.columns; c++) {
        if (r === 0 && c === 0) {
          expect(state.revealedBoard[r][c].isCovered).toBe(true)
        } else {
          expect(state.revealedBoard[r][c].isCovered).toBe(false)
        }
      }
    }
  })

  it('should never automatically reveal a cell that is a bomb due to bad user flagging', () => {
    state.revealedBoard[0][0].isFlagged = true
    state.revealedBoard[1][1].neighborBombs = 1
    state.revealedBoard[1][1].isCovered = false
    state.revealedBoard[0][1].isBomb = true

    for (let r = 0; r < state.rows; r++) {
      for (let c = 0; c < state.columns; c++) {
        if (r === 1 && c === 1) continue
        expect(state.revealedBoard[r][c].isCovered).toBe(true)
      }
    }

    const repeat = autoRevealCells(state)

    expect(repeat).toBe(true)
    for (let r = 0; r < state.rows; r++) {
      for (let c = 0; c < state.columns; c++) {
        if ((r === 0 && c === 0) || (r === 0 && c === 1)) {
          expect(state.revealedBoard[r][c].isCovered).toBe(true)
        } else {
          expect(state.revealedBoard[r][c].isCovered).toBe(false)
        }
      }
    }
  })

  it('should apply no changes if there are no cells automatically revealed', () => {
    state.customAnimations.BasicAutoClick = true
    state.revealedBoard[1][1].neighborBombs = 1

    autoRevealCells(state)

    const changesToApply = state.changesToApply.toArray()

    expect(changesToApply.length).toBe(1)
    expect(changesToApply[0].changes[0].action).toBe('COPYNEIGHBORBOMBCOUNT')
  })

  it('should apply changes with no animation when cells are automatically revealed and custom animation is turned off', () => {
    state.revealedBoard[0][0].isFlagged = true
    state.revealedBoard[1][1].neighborBombs = 1
    state.revealedBoard[1][1].isCovered = false
    state.revealedBoard[0][1].isBomb = true

    autoRevealCells(state)

    const animations = state.changesToApply.toArray()

    expect(animations.length).toBe(2)

    expect(animations[0]).toEqual({
      time: 0,
      changes: [{ action: 'COPYNEIGHBORBOMBCOUNT' }],
    })

    expect(animations[1]).toEqual({
      time: 0,
      changes: [
        {
          action: "REVEALCELLS",
          cells: [
            {
              rowIndex: 0,
              columnIndex: 2,
            },
            {
              rowIndex: 1,
              columnIndex: 0,
            },
            {
              rowIndex: 1,
              columnIndex: 2,
            },
            {
              rowIndex: 2,
              columnIndex: 0,
            },
            {
              rowIndex: 2,
              columnIndex: 1,
            },
            {
              rowIndex: 2,
              columnIndex: 2,
            },
          ],
        },
      ],
    })
  })

  it('should apply changes with animations when cells are automatically revealed and custom animation is turned on', () => {
    state.customAnimations.BasicAutoClick = true
    state.revealedBoard[0][0].isFlagged = true
    state.revealedBoard[1][1].neighborBombs = 1
    state.revealedBoard[1][1].isCovered = false
    state.revealedBoard[0][1].isBomb = true

    autoRevealCells(state)

    const animations = state.changesToApply.toArray()

    expect(animations.length).toBe(9)

    expect(animations[0]).toEqual({
      time: 0,
      changes: [{ action: 'COPYNEIGHBORBOMBCOUNT' }],
    })

    expect(animations[1]).toEqual({
      time: 500,
      changes: [{ action: 'SELECTEDCELL', rowIndex: 1, columnIndex: 1 }],
    })
    expect(animations[2]).toEqual({
      time: 500,
      changes: [{ action: 'REVEALCELLANIMATED', rowIndex: 0, columnIndex: 2 }],
    })
    expect(animations[animations.length - 1]).toEqual({
      time: 500,
      changes: [
        {
          action: 'WIPEANIMATION',
        },
      ],
    })
  })
})
