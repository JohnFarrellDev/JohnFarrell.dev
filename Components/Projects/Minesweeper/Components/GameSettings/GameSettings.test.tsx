import {
  fireEvent,
  getByDisplayValue,
  render,
  screen,
} from '@testing-library/react'
import { GameSettings } from './GameSettings'

describe('game settings', () => {
  it('should display how many rows there currently are', () => {
    render(
      <GameSettings
        rows={5}
        columns={10}
        numberOfBombs={15}
        changeNumberOfRows={jest.fn()}
        changeNumberOfColumns={jest.fn()}
        changeNumberOfBombs={jest.fn()}
      />
    )

    expect(screen.getByDisplayValue(5)).toBeInTheDocument()
  })

  it('should call changeNumberOfRows with the event when we change the number of rows', () => {
    const changeNumberOfRowsMock = jest.fn()

    render(
      <GameSettings
        rows={5}
        columns={10}
        numberOfBombs={15}
        changeNumberOfRows={changeNumberOfRowsMock}
        changeNumberOfColumns={jest.fn()}
        changeNumberOfBombs={jest.fn()}
      />
    )

    fireEvent.change(screen.getByDisplayValue(5), { target: { value: 6 } })

    expect(changeNumberOfRowsMock).toBeCalledTimes(1)
  })

  it('should display how many columns there currently are', () => {
    render(
      <GameSettings
        rows={5}
        columns={10}
        numberOfBombs={15}
        changeNumberOfRows={jest.fn()}
        changeNumberOfColumns={jest.fn()}
        changeNumberOfBombs={jest.fn()}
      />
    )

    expect(screen.getByDisplayValue(10)).toBeInTheDocument()
  })

  it('should call changeNumberOfColumns with the event when we change the number of columns', () => {
    const changeNumberOfColumnsMock = jest.fn()

    render(
      <GameSettings
        rows={5}
        columns={10}
        numberOfBombs={15}
        changeNumberOfRows={jest.fn()}
        changeNumberOfColumns={changeNumberOfColumnsMock}
        changeNumberOfBombs={jest.fn()}
      />
    )

    fireEvent.change(screen.getByDisplayValue(10), { target: { value: 11 } })

    expect(changeNumberOfColumnsMock).toBeCalledTimes(1)
  })

  it('should display how many bombs there currently are', () => {
    render(
      <GameSettings
        rows={5}
        columns={10}
        numberOfBombs={15}
        changeNumberOfRows={jest.fn()}
        changeNumberOfColumns={jest.fn()}
        changeNumberOfBombs={jest.fn()}
      />
    )

    expect(screen.getByDisplayValue(15)).toBeInTheDocument()
  })

  it('should call changeNumberOfBombs with the event when we change the number of bombs', () => {
    const changeNumberOfBombsMock = jest.fn()

    render(
      <GameSettings
        rows={5}
        columns={10}
        numberOfBombs={15}
        changeNumberOfRows={jest.fn()}
        changeNumberOfColumns={jest.fn()}
        changeNumberOfBombs={changeNumberOfBombsMock}
      />
    )

    fireEvent.change(screen.getByDisplayValue(15), { target: { value: 16 } })

    expect(changeNumberOfBombsMock).toBeCalledTimes(1)
  })
})
