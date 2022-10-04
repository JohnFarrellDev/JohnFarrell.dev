import { AnimationColor } from '..'
import { minesweeperStateFactory } from '../../../../../factories/minesweeperState'
import { generateBoard } from '../../functions/generateBoard'
import { applyChanges } from './applyChanges'

const startingState = minesweeperStateFactory.build({})
generateBoard(startingState)

describe('apply changes', () => {
  let state = { ...startingState }

  beforeEach(() => {
    state = minesweeperStateFactory.build({})
    generateBoard(state)
  })

  it('should do nothing if the animations to apply has a length of 0', () => {
    expect(state.changesToApply.length).toBe(0)

    applyChanges(state)

    expect(state.board).toEqual(startingState.board)
  })

  it('should remove all color if the animation step is WIPE', () => {
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

    applyChanges(state)

    expect(state.changesToApply.length).toBe(0)
    expect(state.board[0][0].color).toBe(AnimationColor.PlaceBombColor)

    state.changesToApply.enqueue({
      changes: [{ action: 'WIPEANIMATION' }],
      time: 0,
    })
    applyChanges(state)
    expect(state.board[0][0].color).toBeUndefined()
  })

  it('should set the animationTime value based on the animation step', () => {
    const EXPECTED_ANIMATION_TIME = 1000
    expect(state.animationTime).toBe(0)

    state.changesToApply.enqueue({
      changes: [],
      time: EXPECTED_ANIMATION_TIME,
    })
    applyChanges(state)
    expect(state.animationTime).toBe(EXPECTED_ANIMATION_TIME)

    state.changesToApply.enqueue({
      changes: [],
      time: 0,
    })
    applyChanges(state)
    expect(state.animationTime).toBe(0)
  })

  it('should be able to apply multiple animations with one step', () => {
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

    applyChanges(state)

    expect(state.board[0][0].color).toBe(AnimationColor.PlaceBombColor)
    expect(state.board[0][1].color).toBe(AnimationColor.PlaceBombColor)
    expect(state.board[1][0].color).toBe(AnimationColor.PlaceBombColor)
    expect(state.board[1][1].color).toBe(AnimationColor.PlaceBombColor)
  })
})
