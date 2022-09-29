import cloneDeep from 'lodash.clonedeep'
import { AnimationColor } from '..'
import { minesweeperStateFactory } from '../../../../../factories/minesweeperState'
import { generateBoard } from '../../functions/generateBoard'
import { applyAnimation } from './applyAnimation'

const startingState = minesweeperStateFactory.build({})
generateBoard(startingState)

describe('apply animations', () => {
  let state = { ...startingState }

  beforeEach(() => {
    state = {
      ...startingState,
      animationToApply: [],
      board: cloneDeep(startingState.board),
    }
  })

  it('should do nothing if the animations to apply has a length of 0', () => {
    expect(state.animationToApply.length).toBe(0)

    applyAnimation(state)

    expect(state.board).toEqual(startingState.board)
  })

  it('should remove all color if the animation step is WIPE', () => {
    expect(state.animationToApply.length).toBe(0)
    expect(state.board[0][0].color).toBeUndefined()

    state.animationToApply.push({
      animations: [
        { rowIndex: 0, columnIndex: 0, color: AnimationColor.SelectedCell },
      ],
      time: 0,
    })
    expect(state.animationToApply.length).toBe(1)

    applyAnimation(state)

    expect(state.animationToApply.length).toBe(0)
    expect(state.board[0][0].color).toBe(AnimationColor.SelectedCell)

    state.animationToApply.push({ animations: 'WIPE', time: 0 })
    applyAnimation(state)
    expect(state.board[0][0].color).toBeUndefined()
  })

  it('should set the animationTime value based on the animation step', () => {
    const EXPECTED_ANIMATION_TIME = 1000
    expect(state.animationTime).toBe(0)

    state.animationToApply.push({
      animations: [
        { rowIndex: 0, columnIndex: 0, color: AnimationColor.SelectedCell },
      ],
      time: EXPECTED_ANIMATION_TIME,
    })
    applyAnimation(state)
    expect(state.animationTime).toBe(EXPECTED_ANIMATION_TIME)

    state.animationToApply.push({
      animations: [
        { rowIndex: 0, columnIndex: 0, color: AnimationColor.SelectedCell },
      ],
      time: 0,
    })
    applyAnimation(state)
    expect(state.animationTime).toBe(0)
  })

  it('should be able to apply multiple animations with one step', () => {
    expect(state.board[0][0].color).toBeUndefined()
    expect(state.board[0][1].color).toBeUndefined()
    expect(state.board[1][0].color).toBeUndefined()
    expect(state.board[1][1].color).toBeUndefined()

    state.animationToApply.push({
      animations: [
        { rowIndex: 0, columnIndex: 0, color: AnimationColor.SelectedCell },
        { rowIndex: 0, columnIndex: 1, color: AnimationColor.SelectedCell },
        { rowIndex: 1, columnIndex: 0, color: AnimationColor.SelectedCell },
        { rowIndex: 1, columnIndex: 1, color: AnimationColor.SelectedCell },
      ],
      time: 0,
    })

    applyAnimation(state)

    expect(state.board[0][0].color).toBe(AnimationColor.SelectedCell)
    expect(state.board[0][1].color).toBe(AnimationColor.SelectedCell)
    expect(state.board[1][0].color).toBe(AnimationColor.SelectedCell)
    expect(state.board[1][1].color).toBe(AnimationColor.SelectedCell)
  })
})
