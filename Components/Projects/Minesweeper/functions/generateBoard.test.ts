import { generateBoard } from './generateBoard'

describe('generate board', () => {
  const numberOfRows = 5
  const numberOfColumns = 10
  const { board } = generateBoard(numberOfRows, numberOfColumns)

  it('should return as many inner arrays as rows', () => {
    expect(board.length).toBe(numberOfRows)
  })

  it('each inner array length should be equal to the number of columns', () => {
    board.forEach((row) => {
      expect(row.length).toBe(numberOfColumns)
    })
  })

  it('should generate each cell as covered', () => {
    board.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.isCovered).toBe(true)
      })
    })
  })

  it('should generate each cell without a flag', () => {
    board.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.isFlagged).toBe(false)
      })
    })
  })

  it('should generate each cell without a bomb', () => {
    board.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.isBomb).toBe(false)
      })
    })
  })

  it('should generate each cell with no neighbors or neighborBombs', () => {
    board.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.neighbors.length).toBe(0)
      })
    })

    board.forEach((row) => {
        row.forEach((cell) => {
          expect(cell.neighborBombs).toBe(0)
        })
      })
  })

  it('should assign an incremental unique id to each cell', () => {
    expect(board[0][0].id).toBe(0)
    expect(board[0][9].id).toBe(9)
    expect(board[1][0].id).toBe(10)
    expect(board[3][7].id).toBe(37)
    expect(board[4][9].id).toBe(49)
  })
})
