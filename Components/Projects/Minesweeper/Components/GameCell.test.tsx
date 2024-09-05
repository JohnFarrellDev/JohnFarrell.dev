import { fireEvent, render, screen } from '@testing-library/react';
import { GameCell } from './GameCell';
import { vi } from 'vitest';

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
        leftClick={vi.fn()}
        rightClick={vi.fn()}
        leftDown={vi.fn()}
        leftUp={vi.fn()}
      />
    );

    expect(screen.getByTestId('red-flag')).toBeInTheDocument();
  });

  it.each`
    neighborBombs
    ${1}
    ${2}
    ${3}
    ${4}
    ${5}
    ${6}
    ${7}
    ${8}
  `(
    'it should display the total numbers  of neighbor bombs - ($neighborBombs)',
    ({ neighborBombs }: { neighborBombs: number }) => {
      render(
        <GameCell
          rowIndex={1}
          columnIndex={1}
          isBomb={false}
          isCovered={false}
          isWinner={false}
          isFlagged={false}
          neighborBombs={neighborBombs}
          leftClick={vi.fn()}
          rightClick={vi.fn()}
          leftDown={vi.fn()}
          leftUp={vi.fn()}
        />
      );

      expect(screen.getByText(neighborBombs)).toBeInTheDocument();
    }
  );

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
        leftClick={vi.fn()}
        rightClick={vi.fn()}
        leftDown={vi.fn()}
        leftUp={vi.fn()}
      />
    );

    expect(screen.getByText('6')).toBeInTheDocument();
  });

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
        leftClick={vi.fn()}
        rightClick={vi.fn()}
        leftDown={vi.fn()}
        leftUp={vi.fn()}
      />
    );

    expect(screen.getByTestId('bomb')).toBeInTheDocument();
  });

  it('should call leftClickCell on a left click with the cells row inder and column index', () => {
    const leftClickMock = vi.fn();
    const rowIndex = 1;
    const columnIndex = 2;
    const neighborBombs = 5;

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
        rightClick={vi.fn()}
        leftDown={vi.fn()}
        leftUp={vi.fn()}
      />
    );

    fireEvent.click(screen.getByText(neighborBombs));

    expect(leftClickMock).toHaveBeenCalledTimes(1);
    expect(leftClickMock).toHaveBeenCalledWith(1, 2);
  });

  it('should call rightClickClick on firing contextMenu with the cells row inder and column index', () => {
    const rightClickMock = vi.fn();
    const rowIndex = 1;
    const columnIndex = 2;
    const neighborBombs = 5;

    render(
      <GameCell
        rowIndex={rowIndex}
        columnIndex={columnIndex}
        isBomb={false}
        isCovered={false}
        isWinner={false}
        isFlagged={false}
        neighborBombs={neighborBombs}
        leftClick={vi.fn()}
        rightClick={rightClickMock}
        leftDown={vi.fn()}
        leftUp={vi.fn()}
      />
    );

    fireEvent.contextMenu(screen.getByText(neighborBombs));

    expect(rightClickMock).toHaveBeenCalledTimes(1);
    expect(rightClickMock).toHaveBeenCalledWith(1, 2);
  });

  it('should call leftDown on mouseDown', () => {
    const leftDownMock = vi.fn();
    const rowIndex = 1;
    const columnIndex = 2;
    const neighborBombs = 5;

    render(
      <GameCell
        rowIndex={rowIndex}
        columnIndex={columnIndex}
        isBomb={false}
        isCovered={false}
        isWinner={false}
        isFlagged={false}
        neighborBombs={neighborBombs}
        leftClick={vi.fn()}
        rightClick={vi.fn()}
        leftDown={leftDownMock}
        leftUp={vi.fn()}
      />
    );

    fireEvent.mouseDown(screen.getByText(neighborBombs));

    expect(leftDownMock).toHaveBeenCalledTimes(1);
  });

  it('should call leftUp on mouseUp', () => {
    const leftUpMock = vi.fn();
    const rowIndex = 1;
    const columnIndex = 2;
    const neighborBombs = 5;

    render(
      <GameCell
        rowIndex={rowIndex}
        columnIndex={columnIndex}
        isBomb={false}
        isCovered={false}
        isWinner={false}
        isFlagged={false}
        neighborBombs={neighborBombs}
        leftClick={vi.fn()}
        rightClick={vi.fn()}
        leftDown={vi.fn()}
        leftUp={leftUpMock}
      />
    );

    fireEvent.mouseUp(screen.getByText(neighborBombs));

    expect(leftUpMock).toHaveBeenCalledTimes(1);
  });
});
