import { State, ValidateChangeAction } from '..';
import { minesweeperStateFactory } from '../../../../../factories/minesweeperState';
import { generateBoard } from '../../functions/generateBoard';
import { validateChange } from './validateChange';

const startingState = minesweeperStateFactory.build({});
generateBoard(startingState);

const action: ValidateChangeAction = { type: 'ValidateChangeAction' };

describe('validate changes', () => {
  let state: State;

  beforeEach(() => {
    state = minesweeperStateFactory.build({});
    generateBoard(state);
  });

  it('should not allow less than 3 rows', () => {
    state.rows = 2;

    validateChange(state, action);

    expect(state.rows).toBe(3);
  });

  it('should not allow more than 30 rows', () => {
    state.rows = 31;

    validateChange(state, action);

    expect(state.rows).toBe(30);
  });

  it('should reduce the number of bombs to total game cells minus one if shrinking the board meant number of bombs greater than total cell count', () => {
    state.numberOfBombs = 22;
    state.columns = 5;
    state.rows = 3;

    validateChange(state, action);

    expect(state.numberOfBombs).toBe(14);
  });

  it('should not allow 0 bombs', () => {
    state.numberOfBombs = 0;

    validateChange(state, action);

    expect(state.numberOfBombs).toBe(1);
  });

  it('should not allow less than 3 columns', () => {
    state.columns = 2;

    validateChange(state, action);

    expect(state.columns).toBe(3);
  });

  it('should not allow more than 50 columns', () => {
    state.columns = 51;

    validateChange(state, action);

    expect(state.columns).toBe(50);
  });
});
