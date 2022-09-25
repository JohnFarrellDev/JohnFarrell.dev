import { FaceType } from '../Components/GameTracking/GameTracking'
import { State } from '../reducer'
import { generateBoard } from './generateBoard'

const startingState: State = {
  animationToApply: [],
  animationTime: 0,
  columns: 10,
  rows: 10,
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
  borderlessMode: false,
  board:[],
  isHoldingDown: false,
  faceType: FaceType.Human
}

describe('generate board', () => {

  let state = {...startingState}

  beforeEach(() => {
    state = {...startingState}
    generateBoard(state)
  })


  it('should return as many inner arrays as rows', () => {
    expect(state.board.length).toBe(state.rows)
  })

  it('each inner array length should be equal to the number of columns', () => {
    state.board.forEach((row) => {
      expect(row.length).toBe(state.columns)
    })
  })

  it('should generate each cell as covered', () => {
    state.board.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.isCovered).toBe(true)
      })
    })
  })

  it('should generate each cell without a flag', () => {
    state.board.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.isFlagged).toBe(false)
      })
    })
  })

  it('should generate each cell without a bomb', () => {
    state.board.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.isBomb).toBe(false)
      })
    })
  })

  it('should generate each cell with no neighbors or neighborBombs', () => {
    state.board.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.neighbors.length).toBe(0)
      })
    })

    state.board.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.neighborBombs).toBe(0)
      })
    })
  })

  it('should assign an incremental unique id to each cell', () => {
    expect(state.board[0][0].id).toBe(0)
    expect(state.board[0][9].id).toBe(9)
    expect(state.board[1][0].id).toBe(10)
    expect(state.board[3][7].id).toBe(37)
    expect(state.board[4][9].id).toBe(49)
  })
})
