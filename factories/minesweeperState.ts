import { Factory } from 'fishery'
import { FaceType } from '../Components/Projects/Minesweeper/Components/GameTracking/GameTracking'
import { State } from '../Components/Projects/Minesweeper/reducer'

export const minesweeperStateFactory = Factory.define<State>(() => ({
  rows: 10,
  columns: 10,
  numberOfBombs: 5,
  borderlessMode: false,
  customAnimations: {
    CalculateNeighbors: false,
    PlaceBombs: false,
    RecursiveReveal: false,
  },
  allowedOperations: {
    AutoFlag: false,
    BasicAutoClick: false,
    CalculateNeighbors: false,
    FlagCell: false,
    PlaceBombs: false,
    RecursiveReveal: false,
    RevealCell: false,
  },
  board: [],
  isPlaying: false,
  isDead: false,
  isWinner: false,
  isHoldingDown: false,
  animationToApply: [],
  animationTime: 0,
  faceType: FaceType.Human,
  flagsPlaced: 0,
}))
