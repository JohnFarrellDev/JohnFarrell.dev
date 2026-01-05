import { FaceType } from '../Components/Projects/Minesweeper/Components/GameTracking/GameTracking';
import { ChangeStep, State } from '../Components/Projects/Minesweeper/reducer';
import { Queue } from '../Utilities/Queue/queue';

function getDefaultState(): State {
  return {
    rows: 10,
    columns: 10,
    numberOfBombs: 5,
    borderlessMode: false,
    customAnimations: {
      CalculateNeighbors: false,
      PlaceBombs: false,
      RecursiveReveal: false,
      FlagCell: false,
      BasicAutoClick: false,
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
    revealedBoard: [],
    isPlaying: false,
    isDead: false,
    isWinner: false,
    isHoldingDown: false,
    changesToApply: new Queue<ChangeStep>(),
    changeTime: 0,
    faceType: FaceType.Human,
    flagsPlaced: 0,
  };
}

export const minesweeperStateFactory = {
  build: (overrides?: Partial<State>): State => ({
    ...getDefaultState(),
    ...overrides,
  }),
};
