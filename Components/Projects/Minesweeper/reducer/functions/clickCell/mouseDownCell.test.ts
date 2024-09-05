import { State } from '../..';
import { minesweeperStateFactory } from '../../../../../../factories/minesweeperState';
import { generateBoard } from '../../../functions/generateBoard';
import { mouseDownCell } from './mouseDownCell';

describe('mouse down cell', () => {
  let state: State;

  beforeEach(() => {
    state = minesweeperStateFactory.build({ isPlaying: true });
    generateBoard(state);
  });

  it('should do nothing if isPLaying is false', () => {
    state.isPlaying = false;
    expect(state.isHoldingDown).toBe(false);

    mouseDownCell(state);

    expect(state.isHoldingDown).toBe(false);
  });

  it('should do nothing if isDead is true', () => {
    state.isDead = true;
    expect(state.isHoldingDown).toBe(false);

    mouseDownCell(state);

    expect(state.isHoldingDown).toBe(false);
  });

  it('should do nothing if isWinner is true', () => {
    state.isWinner = true;
    expect(state.isHoldingDown).toBe(false);

    mouseDownCell(state);

    expect(state.isHoldingDown).toBe(false);
  });

  it('should set isHolding to true', () => {
    expect(state.isHoldingDown).toBe(false);

    mouseDownCell(state);

    expect(state.isHoldingDown).toBe(true);
  });
});
