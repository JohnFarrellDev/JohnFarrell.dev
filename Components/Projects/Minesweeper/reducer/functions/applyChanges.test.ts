import { AnimationColor, ChangeNumberOfBombsAction } from '..'
import { minesweeperStateFactory } from '../../../../../factories/minesweeperState'
import { generateBoard } from '../../functions/generateBoard'
import { applyChanges } from './applyChanges'

const startingState = minesweeperStateFactory.build({})
generateBoard(startingState)

const startingAction: ChangeNumberOfBombsAction = {
  type: 'ChangeNumberOfBombs',
  newNumberOfBombs: 10,
}

describe('apply changes', () => {
  let state = { ...startingState }
  let action: ChangeNumberOfBombsAction

  beforeEach(() => {
    state = minesweeperStateFactory.build({})
    generateBoard(state)
    action = { ...startingAction }
  })

  it('should do nothing if the changes to apply has a length of 0', () => {
    expect(state.changesToApply.length).toBe(0)

    applyChanges(state, action)

    expect(state.board).toEqual(startingState.board)
  })

  it('should remove all color if the changes step is WIPEANIMATION', () => {
    expect(state.changesToApply.length).toBe(0)
    expect(state.board[0][0].color).toBeUndefined()

    state.changesToApply.enqueue({
      changes: [
        {
          action: 'PLACEBOMB',
          columnIndex: 0,
          rowIndex: 0,
        },
      ],
      time: 0,
    })
    expect(state.changesToApply.length).toBe(1)

    applyChanges(state, action)

    expect(state.changesToApply.length).toBe(0)
    expect(state.board[0][0].color).toBe(AnimationColor.PlaceBombColor)

    state.changesToApply.enqueue({
      changes: [{ action: 'WIPEANIMATION' }],
      time: 0,
    })
    applyChanges(state, action)
    expect(state.board[0][0].color).toBeUndefined()
  })

  it('should set the changeTime value based on the animation step', () => {
    const EXPECTED_CHANGE_TIME = 1000
    expect(state.changeTime).toBe(0)

    state.changesToApply.enqueue({
      changes: [],
      time: EXPECTED_CHANGE_TIME,
    })
    applyChanges(state, action)
    expect(state.changeTime).toBe(EXPECTED_CHANGE_TIME)

    state.changesToApply.enqueue({
      changes: [],
      time: 0,
    })
    applyChanges(state, action)
    expect(state.changeTime).toBe(0)
  })

  it('should be able to apply multiple changes with one step', () => {
    expect(state.board[0][0].color).toBeUndefined()
    expect(state.board[0][1].color).toBeUndefined()
    expect(state.board[1][0].color).toBeUndefined()
    expect(state.board[1][1].color).toBeUndefined()

    state.changesToApply.enqueue({
      changes: [
        { rowIndex: 0, columnIndex: 0, action: 'PLACEBOMB' },
        { rowIndex: 0, columnIndex: 1, action: 'PLACEBOMB' },
        { rowIndex: 1, columnIndex: 0, action: 'PLACEBOMB' },
        { rowIndex: 1, columnIndex: 1, action: 'PLACEBOMB' },
      ],
      time: 0,
    })

    applyChanges(state, action)

    expect(state.board[0][0].color).toBe(AnimationColor.PlaceBombColor)
    expect(state.board[0][1].color).toBe(AnimationColor.PlaceBombColor)
    expect(state.board[1][0].color).toBe(AnimationColor.PlaceBombColor)
    expect(state.board[1][1].color).toBe(AnimationColor.PlaceBombColor)
  })

  it('should update the cell to have a bomb when change applied action is PLACEBOMB', () => {
    expect(state.board[0][0].isBomb).toBe(false)

    state.changesToApply.enqueue({
      changes: [{ rowIndex: 0, columnIndex: 0, action: 'PLACEBOMB' }],
      time: 0,
    })

    applyChanges(state, action)

    expect(state.board[0][0].isBomb).toBe(true)
  })

  it('should update the cell to not have a bomb when change applied action is REMOVEBOMB', () => {
    state.board[0][0].isBomb = true
    expect(state.board[0][0].isBomb).toBe(true)

    state.changesToApply.enqueue({
      changes: [{ rowIndex: 0, columnIndex: 0, action: 'REMOVEBOMB' }],
      time: 0,
    })

    applyChanges(state, action)

    expect(state.board[0][0].isBomb).toBe(false)
  })
})
