import { State } from '..'
import { FaceType } from '../../Components/GameTracking/GameTracking'
import { generateBoard } from '../../functions/generateBoard'
import { init } from './init'

const state: State = {
  animationToApply: [],
  animationTime: 0,
  columns: 5,
  rows: 5,
  customAnimations: {
    CalculateNeighbors: true,
    PlaceBombs: false,
  },
  allowedOperations: {
    CalculateNeighbors: true,
    FlagCell: false,
    PlaceBombs: false,
    RevealCell: false,
  },
  isDead: false,
  isPlaying: true,
  isWinner: false,
  numberOfBombs: 5,
  borderlessMode: false,
  board: [],
  isHoldingDown: true,
  faceType: FaceType.Human,
}

jest.mock('../../functions/generateBoard')

describe('init', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should call generate board with our state', () => {
    init(state)
    expect(generateBoard).toBeCalledWith(state)
    expect(generateBoard).toBeCalledTimes(1)
  })
})
