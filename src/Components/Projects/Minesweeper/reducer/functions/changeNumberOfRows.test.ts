import { State, ChangeNumberOfRowsAction } from '..';
import { changeNumberOfRows } from './changeNumberOfRows';
import { generateBoard } from '../../functions/generateBoard';
import { minesweeperStateFactory } from '../../../../../factories/minesweeperState';
import { describe, it, expect, beforeEach } from 'vitest';

const startingState = minesweeperStateFactory.build({});
generateBoard(startingState);

const startingAction: ChangeNumberOfRowsAction = {
  type: 'ChangeNumberOfRows',
  newNumberOfRows: 10,
};

describe('change number of rows', () => {
  let state: State;
  let action: ChangeNumberOfRowsAction;

  beforeEach(() => {
    state = minesweeperStateFactory.build({});
    generateBoard(state);
    action = { ...startingAction };
  });

  it('should not allow number of rows to change if isPlaying is true', () => {
    state.isPlaying = true;

    changeNumberOfRows(state, action);

    expect(state.board).toEqual(startingState.board);
  });

  it('should allow number of rows to change if isPlaying is true but isWinner is also true', () => {
    state.isPlaying = true;
    state.isWinner = true;

    changeNumberOfRows(state, action);

    expect(state.rows).toEqual(action.newNumberOfRows);
  });

  it('should allow number of rows to change if isPlaying is true but isDead is also true', () => {
    state.isPlaying = true;
    state.isDead = true;

    changeNumberOfRows(state, action);

    expect(state.rows).toEqual(action.newNumberOfRows);
  });

  it('should allow 3 rows as a minimum', () => {
    expect(state.rows).toBe(startingState.rows);

    action.newNumberOfRows = 3;
    changeNumberOfRows(state, action);

    expect(state.rows).toBe(action.newNumberOfRows);
  });

  it('should allow 30 rows as a maximum', () => {
    expect(state.rows).toBe(startingState.rows);

    action.newNumberOfRows = 30;

    changeNumberOfRows(state, action);

    expect(state.rows).toBe(action.newNumberOfRows);
  });

  it('should not change the number of bombs when the new total cell count is not equal to or less than number of bombs', () => {
    state.numberOfBombs = 14;
    action.newNumberOfRows = 3;

    changeNumberOfRows(state, action);

    expect(state.rows).toBe(action.newNumberOfRows);
    expect(state.numberOfBombs).toBe(14);
  });
});
