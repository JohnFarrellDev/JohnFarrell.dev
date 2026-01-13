import { beforeEach, describe, expect, it } from 'vitest';

import { State } from '../..';
import { minesweeperStateFactory } from '../../../../../../factories/minesweeperState';
import { generateBoard } from '../../../functions/generateBoard';
import { mouseUpCell } from './mouseUpCell';

describe('mouse up cell', () => {
  let state: State;

  beforeEach(() => {
    state = minesweeperStateFactory.build({
      isPlaying: true,
      isHoldingDown: true,
    });
    generateBoard(state);
  });

  it('should do nothing if isPLaying is false', () => {
    state.isPlaying = false;
    expect(state.isHoldingDown).toBe(true);

    mouseUpCell(state);

    expect(state.isHoldingDown).toBe(true);
  });

  it('should do nothing if isDead is true', () => {
    state.isDead = true;
    expect(state.isHoldingDown).toBe(true);

    mouseUpCell(state);

    expect(state.isHoldingDown).toBe(true);
  });

  it('should do nothing if isWinner is true', () => {
    state.isWinner = true;
    expect(state.isHoldingDown).toBe(true);

    mouseUpCell(state);

    expect(state.isHoldingDown).toBe(true);
  });

  it('should set isHolding to false', () => {
    expect(state.isHoldingDown).toBe(true);

    mouseUpCell(state);

    expect(state.isHoldingDown).toBe(false);
  });
});
