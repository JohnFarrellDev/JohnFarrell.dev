import { State } from '..'
import { FaceType } from '../../Components/GameTracking/GameTracking'
import { generateBoard } from '../../functions/generateBoard'
import { switchFaceType } from './switchFaceType'

const startingState: State = {
  animationToApply: [],
  animationTime: 0,
  board: [],
  columns: 5,
  rows: 5,
  customAnimations: {
    CalculateNeighbors: false,
    PlaceBombs: false,
    RecursiveReveal: false
  },
  allowedOperations: {
    FlagCell: false,
    CalculateNeighbors: false,
    PlaceBombs: false,
    RevealCell: false,
    RecursiveReveal: false,
  },
  isDead: false,
  isPlaying: true,
  isWinner: false,
  isHoldingDown: false,
  numberOfBombs: 5,
  borderlessMode: false,
  faceType: FaceType.Human,
  flagsPlaced: 0,
}

describe('switch face type', () => {
  let state = { ...startingState }

  beforeEach(() => {
    state = {
      ...startingState,
      animationToApply: [],
      allowedOperations: {
        ...startingState.allowedOperations,
      },
      customAnimations: {
        ...startingState.customAnimations,
      },
    }
    generateBoard(state)
  })

  it('should switch face type from human to cat', () => {
    state.faceType = FaceType.Human

    switchFaceType(state)

    expect(state.faceType).toBe(FaceType.Cat)
  })

  it('should switch face type from cat to human', () => {
    state.faceType = FaceType.Cat

    switchFaceType(state)

    expect(state.faceType).toBe(FaceType.Human)
  })
})
