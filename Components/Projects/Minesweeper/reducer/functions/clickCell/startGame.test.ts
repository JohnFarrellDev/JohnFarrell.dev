import { ClickCellAction, State } from '../..';
import { startGame } from './startGame';

import { generateBoard } from '../../../functions/generateBoard';
import { calculateNeighborInformation } from './calculateNeighborInformation';
import { placeBombs } from './placeBombs';
import { revealCell } from './revealCell/revealCell';
import { minesweeperStateFactory } from '../../../../../../factories/minesweeperState';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('../../../functions/generateBoard');
vi.mock('./calculateNeighborInformation');
vi.mock('./placeBombs');
vi.mock('./revealCell/revealCell');

const startingState = minesweeperStateFactory.build({});
generateBoard(startingState);

describe('start game', () => {
  let state: State;
  const action: ClickCellAction = {
    type: 'ClickCell',
    columnIndex: 1,
    rowIndex: 1,
  };

  beforeEach(() => {
    state = minesweeperStateFactory.build({});
    generateBoard(state);
    vi.resetAllMocks();
  });

  it('should set isPlaying to true', () => {
    expect(state.isPlaying).toBe(false);

    startGame(state, action);

    expect(state.isPlaying).toBe(true);
  });

  it('should set isWinner to false', () => {
    state.isWinner = true;

    expect(state.isWinner).toBe(true);

    startGame(state, action);

    expect(state.isWinner).toBe(false);
  });

  it('should set isDead to false', () => {
    state.isDead = true;

    expect(state.isDead).toBe(true);

    startGame(state, action);

    expect(state.isDead).toBe(false);
  });

  it('should reset flags placed to 0', () => {
    state.flagsPlaced = 5;

    expect(state.flagsPlaced).toBe(5);

    startGame(state, action);

    expect(state.flagsPlaced).toBe(0);
  });

  it('should call generateBoard, placeBombs, calculateNeighborInformation and revealCell', () => {
    startGame(state, action);

    expect(generateBoard).toHaveBeenCalledTimes(1);
    expect(generateBoard).toHaveBeenCalledWith(state);

    expect(placeBombs).toHaveBeenCalledTimes(1);
    expect(placeBombs).toHaveBeenCalledWith(state, action);

    expect(calculateNeighborInformation).toHaveBeenCalledTimes(1);
    expect(calculateNeighborInformation).toHaveBeenCalledWith(state);

    expect(revealCell).toHaveBeenCalledTimes(1);
    expect(revealCell).toHaveBeenCalledWith(state, action);
  });
});
