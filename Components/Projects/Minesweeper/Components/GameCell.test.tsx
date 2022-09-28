import { fireEvent, render, screen } from '@testing-library/react'
import { GameCell } from './GameCell'

describe('Game Cell', () => {
  it('should render a flag if the cellIsFlagged', () => {
    render(
      <GameCell
        rowIndex={1}
        columnIndex={1}
        isBomb={false}
        isCovered={true}
        isWinner={false}
        isFlagged={true}
        neighborBombs={0}
        leftClick={jest.fn()}
        rightClick={jest.fn()}
        leftDown={jest.fn()}
        leftUp={jest.fn()}
      />
    )

    expect(screen.getByText('🚩')).toBeInTheDocument()
  })

  it('should display how many neighbors are bombs if the cell is uncovered and not a bomb', () => {
    render(
      <GameCell
        rowIndex={1}
        columnIndex={1}
        isBomb={false}
        isCovered={false}
        isWinner={false}
        isFlagged={false}
        neighborBombs={6}
        leftClick={jest.fn()}
        rightClick={jest.fn()}
        leftDown={jest.fn()}
        leftUp={jest.fn()}
      />
    )

    expect(screen.getByText('6')).toBeInTheDocument()
  })

  it('should render a bombs if the cell is a bomb and uncovered', () => {
    render(
      <GameCell
        rowIndex={1}
        columnIndex={1}
        isBomb={true}
        isCovered={false}
        isWinner={false}
        isFlagged={false}
        neighborBombs={0}
        leftClick={jest.fn()}
        rightClick={jest.fn()}
        leftDown={jest.fn()}
        leftUp={jest.fn()}
      />
    )

    expect(screen.getByText('💣')).toBeInTheDocument()
  })

  it('should call leftClickCell on a left click with the cells row inder and column index', () => {
    const leftClickMock = jest.fn()
    const rowIndex = 1
    const columnIndex = 2
    const neighborBombs = 5

    render(
      <GameCell
        rowIndex={rowIndex}
        columnIndex={columnIndex}
        isBomb={false}
        isCovered={false}
        isWinner={false}
        isFlagged={false}
        neighborBombs={neighborBombs}
        leftClick={leftClickMock}
        rightClick={jest.fn()}
        leftDown={jest.fn()}
        leftUp={jest.fn()}
      />
    )

    fireEvent.click(screen.getByText(neighborBombs))

    expect(leftClickMock).toBeCalledTimes(1)
    expect(leftClickMock).toBeCalledWith(1, 2)
  })

  it('should call rightClickClick on firing contextMenu with the cells row inder and column index', () => {
    const rightClickMock = jest.fn()
    const rowIndex = 1
    const columnIndex = 2
    const neighborBombs = 5

    render(
      <GameCell
        rowIndex={rowIndex}
        columnIndex={columnIndex}
        isBomb={false}
        isCovered={false}
        isWinner={false}
        isFlagged={false}
        neighborBombs={neighborBombs}
        leftClick={jest.fn()}
        rightClick={rightClickMock}
        leftDown={jest.fn()}
        leftUp={jest.fn()}
      />
    )

    fireEvent.contextMenu(screen.getByText(neighborBombs))

    expect(rightClickMock).toBeCalledTimes(1)
    expect(rightClickMock).toBeCalledWith(1, 2)
  })

  it('should call leftDown on mouseDown', () => {
    const leftDownMock = jest.fn()
    const rowIndex = 1
    const columnIndex = 2
    const neighborBombs = 5

    render(
      <GameCell
        rowIndex={rowIndex}
        columnIndex={columnIndex}
        isBomb={false}
        isCovered={false}
        isWinner={false}
        isFlagged={false}
        neighborBombs={neighborBombs}
        leftClick={jest.fn()}
        rightClick={jest.fn()}
        leftDown={leftDownMock}
        leftUp={jest.fn()}
      />
    )

    fireEvent.mouseDown(screen.getByText(neighborBombs))

    expect(leftDownMock).toBeCalledTimes(1)
  })

  it('should call leftUp on mouseUp', () => {
    const leftUpMock = jest.fn()
    const rowIndex = 1
    const columnIndex = 2
    const neighborBombs = 5

    render(
      <GameCell
        rowIndex={rowIndex}
        columnIndex={columnIndex}
        isBomb={false}
        isCovered={false}
        isWinner={false}
        isFlagged={false}
        neighborBombs={neighborBombs}
        leftClick={jest.fn()}
        rightClick={jest.fn()}
        leftDown={jest.fn()}
        leftUp={leftUpMock}
      />
    )

    fireEvent.mouseUp(screen.getByText(neighborBombs))

    expect(leftUpMock).toBeCalledTimes(1)
  })
})
