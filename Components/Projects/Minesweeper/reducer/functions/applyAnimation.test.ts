import cloneDeep from 'lodash.clonedeep'
import { State } from '..'
import { generateBoard } from '../../functions/generateBoard'
import { applyAnimation } from './applyAnimation'

const startingState: State = {
  animationToApply: [],
  animationTime: 0,
  board: [],
  columns: 5,
  rows: 5,
  customAnimations: {
    CalculateNeighbors: false,
    PlaceBombs: false
  },
  allowedOperations: {
    CalculateNeighbors: false,
    FlagCell: false,
    PlaceBombs: false,
    RevealCell: false
  },
  isDead: false,
  isPlaying: false,
  isWinner: false,
  numberOfBombs: 5,
  borderlessMode: false
}
generateBoard(startingState)

describe('apply animations', () => {

  let state = { ...startingState }

  beforeEach(() => {
    state = {
      ...startingState,
      animationToApply: [],
      board: cloneDeep(startingState.board)
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
      animations: [{ rowIndex: 0, columnIndex: 0, color: '#6699ff' }],
      time: 0,
    })
    expect(state.animationToApply.length).toBe(1)

    applyAnimation(state)
    
    expect(state.animationToApply.length).toBe(0)
    expect(state.board[0][0].color).toBe('#6699ff')

    state.animationToApply.push({ animations: 'WIPE', time: 0 })
    applyAnimation(state)
    expect(state.board[0][0].color).toBeUndefined()
  })

  it('should set the animationTime value based on the animation step', () => {
    const EXPECTED_ANIMATION_TIME = 1000
    expect(state.animationTime).toBe(0)

    state.animationToApply.push({
      animations: [{ rowIndex: 0, columnIndex: 0, color: '#6699ff' }],
      time: EXPECTED_ANIMATION_TIME,
    })
    applyAnimation(state)
    expect(state.animationTime).toBe(EXPECTED_ANIMATION_TIME)

    state.animationToApply.push({
      animations: [{ rowIndex: 0, columnIndex: 0, color: '#6699ff' }],
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
        { rowIndex: 0, columnIndex: 0, color: '#6699ff' },
        { rowIndex: 0, columnIndex: 1, color: '#6699ff' },
        { rowIndex: 1, columnIndex: 0, color: '#6699ff' },
        { rowIndex: 1, columnIndex: 1, color: '#6699ff' },
      ],
      time: 0,
    })

    applyAnimation(state)

    expect(state.board[0][0].color).toBe('#6699ff')
    expect(state.board[0][1].color).toBe('#6699ff')
    expect(state.board[1][0].color).toBe('#6699ff')
    expect(state.board[1][1].color).toBe('#6699ff')
  })
})
