import { Factory } from 'fishery'
import { FaceType } from '../Components/Projects/Minesweeper/Components/GameTracking/GameTracking'
import { AnimationStep, State } from '../Components/Projects/Minesweeper/reducer'
import { Queue } from '../Utilities/Queue'

export const minesweeperStateFactory = Factory.define<State>(() => ({
  rows: 10,
  columns: 10,
  numberOfBombs: 5,
  borderlessMode: false,
  customAnimations: {
    CalculateNeighbors: false,
    PlaceBombs: false,
    RecursiveReveal: false,
    FlagCell: false,
    BasicAutoClick: false
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
  animationToApply: new Queue<AnimationStep>(),
  animationTime: 0,
  faceType: FaceType.Human,
  flagsPlaced: 0,
}))
