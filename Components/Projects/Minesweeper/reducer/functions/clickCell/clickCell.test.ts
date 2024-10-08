import { State, ClickCellAction } from '../..';
import { minesweeperStateFactory } from '../../../../../../factories/minesweeperState';
import { generateBoard } from '../../../functions/generateBoard';
import { clickCell } from './clickCell';
import { revealCell } from './revealCell/revealCell';
import { startGame } from './startGame';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('./revealCell/revealCell');
vi.mock('./startGame');

describe('click cell', () => {
  let state: State;
  const action: ClickCellAction = {
    type: 'ClickCell',
    columnIndex: 1,
    rowIndex: 1,
  };

  beforeEach(() => {
    state = minesweeperStateFactory.build({
      allowedOperations: { RevealCell: true },
    });
    generateBoard(state);
    vi.resetAllMocks();
  });

  it('should apply all changes if there are changes to apply and the user clicks', () => {
    state.changesToApply.enqueue({ changes: [], time: 0 });
    state.changesToApply.enqueue({ changes: [], time: 0 });
    state.changesToApply.enqueue({ changes: [], time: 0 });

    expect(state.changesToApply.length).toBe(3);

    clickCell(state, action);
    expect(startGame).toBeCalledTimes(0);
    expect(revealCell).toBeCalledTimes(0);

    expect(state.changesToApply.length).toBe(0);
  });

  it('should call to start game if isPlaying is false', () => {
    state.isPlaying = false;

    clickCell(state, action);

    expect(startGame).toBeCalledTimes(1);
    expect(revealCell).toBeCalledTimes(0);
  });

  it('should call to start game if isDead is true', () => {
    state.isDead = true;

    clickCell(state, action);

    expect(startGame).toBeCalledTimes(1);
    expect(revealCell).toBeCalledTimes(0);
  });

  it('should call to start game if isWinner is true', () => {
    state.isWinner = true;

    clickCell(state, action);

    expect(startGame).toBeCalledTimes(1);
    expect(revealCell).toBeCalledTimes(0);
  });

  it('should call reveal cell if the state isPlaying is true and isWinner and isDead is false', () => {
    state.isPlaying = true;

    clickCell(state, action);

    expect(startGame).toBeCalledTimes(0);
    expect(revealCell).toBeCalledTimes(1);
  });
});
