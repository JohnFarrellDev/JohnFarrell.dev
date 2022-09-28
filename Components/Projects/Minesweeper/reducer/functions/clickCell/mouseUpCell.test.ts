import { State } from '../..'
import { FaceType } from '../../../Components/GameTracking/GameTracking'
import { generateBoard } from '../../../functions/generateBoard'
import { mouseUpCell } from './mouseUpCell'

const startingState: State = {
  animationToApply: [],
  animationTime: 0,
  columns: 5,
  rows: 5,
  customAnimations: {
    CalculateNeighbors: true,
    PlaceBombs: false,
    RecursiveReveal: false
  },
  allowedOperations: {
    CalculateNeighbors: true,
    FlagCell: false,
    PlaceBombs: false,
    RevealCell: false,
    RecursiveReveal: false
  },
  isDead: false,
  isPlaying: true,
  isWinner: false,
  numberOfBombs: 5,
  borderlessMode: false,
  board: [],
  isHoldingDown: true,
  faceType: FaceType.Human,
  flagsPlaced: 0
}

describe('mouse up cell', () => {
  let state = { ...startingState }

  beforeEach(() => {
    state = {
      ...startingState,
      animationToApply: [],
      customAnimations: { ...startingState.customAnimations },
      allowedOperations: { ...startingState.allowedOperations },
    }
    generateBoard(state)
  })

  it('should do nothing if isPLaying is false', () => {
    state.isPlaying = false;
    expect(state.isHoldingDown).toBe(true)
    
    mouseUpCell(state)

    expect(state.isHoldingDown).toBe(true)
  })

  it('should do nothing if isDead is true', () => {
    state.isDead = true;
    expect(state.isHoldingDown).toBe(true)
    
    mouseUpCell(state)

    expect(state.isHoldingDown).toBe(true)
  })

  it('should do nothing if isWinner is true', () => {
    state.isWinner = true;
    expect(state.isHoldingDown).toBe(true)
    
    mouseUpCell(state)

    expect(state.isHoldingDown).toBe(true)
  })

  it('should set isHolding to true', () => {
    expect(state.isHoldingDown).toBe(true)
    
    mouseUpCell(state)

    expect(state.isHoldingDown).toBe(false)
  })
})
