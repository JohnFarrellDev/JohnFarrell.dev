import { RightClickCellAction, State } from '..';
import { minesweeperStateFactory } from '../../../../../factories/minesweeperState';
import { generateBoard } from '../../functions/generateBoard';
import { flagCell } from './flagCell';
import { describe, it, expect, beforeEach, vi } from 'vitest';

const startingAction: RightClickCellAction = {
  type: 'RightClickCell',
  rowIndex: 0,
  columnIndex: 0,
};

describe('right click cell', () => {
  let state: State;
  let action: RightClickCellAction;

  beforeEach(() => {
    state = minesweeperStateFactory.build({
      allowedOperations: {
        FlagCell: true,
        CalculateNeighbors: false,
        PlaceBombs: false,
        RevealCell: false,
        RecursiveReveal: false,
        AutoFlag: false,
        BasicAutoClick: false,
      },
      isPlaying: true,
    });
    generateBoard(state);
    action = { ...startingAction };
    vi.resetAllMocks();
  });

  it('should do nothing if the state isPlaying is not true', () => {
    state.isPlaying = false;

    flagCell(state, action);

    expect(state.board[action.rowIndex][action.columnIndex].isFlagged).toBe(false);
    expect(state.revealedBoard[action.rowIndex][action.columnIndex].isFlagged).toBe(false);
  });

  it('should do nothing if the state isDead is true', () => {
    state.isDead = true;

    flagCell(state, action);

    expect(state.board[action.rowIndex][action.columnIndex].isFlagged).toBe(false);
    expect(state.revealedBoard[action.rowIndex][action.columnIndex].isFlagged).toBe(false);
  });

  it('should do nothing if the state isWinner is true', () => {
    state.isWinner = true;

    flagCell(state, action);

    expect(state.board[action.rowIndex][action.columnIndex].isFlagged).toBe(false);
    expect(state.revealedBoard[action.rowIndex][action.columnIndex].isFlagged).toBe(false);
  });

  it('should do nothing if the state operation for FlagCell is not true', () => {
    state.allowedOperations.FlagCell = false;

    flagCell(state, action);

    expect(state.board[action.rowIndex][action.columnIndex].isFlagged).toBe(false);
    expect(state.revealedBoard[action.rowIndex][action.columnIndex].isFlagged).toBe(false);
  });

  it('should do nothing if the cell is already uncovered', () => {
    state.revealedBoard[0][0].isCovered = false;

    flagCell(state, action);

    expect(state.board[action.rowIndex][action.columnIndex].isFlagged).toBe(false);
    expect(state.revealedBoard[action.rowIndex][action.columnIndex].isFlagged).toBe(false);
  });

  it('should do nothing if there are changes to apply', () => {
    state.changesToApply.enqueue({ time: 0, changes: [{ action: 'WIPEANIMATION' }] });

    flagCell(state, action);

    expect(state.board[action.rowIndex][action.columnIndex].isFlagged).toBe(false);
    expect(state.revealedBoard[action.rowIndex][action.columnIndex].isFlagged).toBe(false);
  });

  it('should be able to flag a cell', () => {
    expect(state.board[0][0].isFlagged).toBe(false);

    flagCell(state, action);

    expect(state.board[0][0].isFlagged).toBe(true);
  });

  it('should be able to unflag a cell', () => {
    expect(state.revealedBoard[0][0].isFlagged).toBe(false);
    state.revealedBoard[0][0].isFlagged = true;
    expect(state.revealedBoard[0][0].isFlagged).toBe(true);

    flagCell(state, action);

    expect(state.revealedBoard[0][0].isFlagged).toBe(false);
    expect(state.board[0][0].isFlagged).toBe(false);
  });
});
