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
})
