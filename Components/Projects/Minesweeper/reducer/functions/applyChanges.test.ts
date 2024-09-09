import { AnimationColor, ChangeNumberOfBombsAction } from '..';
import { minesweeperStateFactory } from '../../../../../factories/minesweeperState';
import { generateBoard } from '../../functions/generateBoard';
import { applyChanges } from './applyChanges';
import { describe, it, expect, beforeEach } from 'vitest';

const startingState = minesweeperStateFactory.build({});
generateBoard(startingState);

const startingAction: ChangeNumberOfBombsAction = {
  type: 'ChangeNumberOfBombs',
  newNumberOfBombs: 10,
};

describe('apply changes', () => {
  let state = { ...startingState };
  let action: ChangeNumberOfBombsAction;

  beforeEach(() => {
    state = minesweeperStateFactory.build({});
    generateBoard(state);
    action = { ...startingAction };
  });

  it('should do nothing if the changes to apply has a length of 0', () => {
    expect(state.changesToApply.length).toBe(0);

    applyChanges(state, action);

    expect(state.board).toEqual(startingState.board);
  });

  it('should remove all color if the changes step is WIPEANIMATION', () => {
    expect(state.changesToApply.length).toBe(0);
    expect(state.board[0][0].color).toBeUndefined();

    state.changesToApply.enqueue({
      changes: [
        {
          action: 'PLACEBOMB',
          columnIndex: 0,
          rowIndex: 0,
        },
      ],
      time: 0,
    });
    expect(state.changesToApply.length).toBe(1);

    applyChanges(state, action);

    expect(state.changesToApply.length).toBe(0);
    expect(state.board[0][0].color).toBe(AnimationColor.PlaceBombColor);

    state.changesToApply.enqueue({
      changes: [{ action: 'WIPEANIMATION' }],
      time: 0,
    });
    applyChanges(state, action);
    expect(state.board[0][0].color).toBeUndefined();
  });

  it('should set the changeTime value based on the animation step', () => {
    const EXPECTED_CHANGE_TIME = 1000;
    expect(state.changeTime).toBe(0);

    state.changesToApply.enqueue({
      changes: [],
      time: EXPECTED_CHANGE_TIME,
    });
    applyChanges(state, action);
    expect(state.changeTime).toBe(EXPECTED_CHANGE_TIME);

    state.changesToApply.enqueue({
      changes: [],
      time: 0,
    });
    applyChanges(state, action);
    expect(state.changeTime).toBe(0);
  });

  it('should be able to apply multiple changes with one step', () => {
    expect(state.board[0][0].color).toBeUndefined();
    expect(state.board[0][1].color).toBeUndefined();
    expect(state.board[1][0].color).toBeUndefined();
    expect(state.board[1][1].color).toBeUndefined();

    state.changesToApply.enqueue({
      changes: [
        { rowIndex: 0, columnIndex: 0, action: 'PLACEBOMB' },
        { rowIndex: 0, columnIndex: 1, action: 'PLACEBOMB' },
        { rowIndex: 1, columnIndex: 0, action: 'PLACEBOMB' },
        { rowIndex: 1, columnIndex: 1, action: 'PLACEBOMB' },
      ],
      time: 0,
    });

    applyChanges(state, action);

    expect(state.board[0][0].color).toBe(AnimationColor.PlaceBombColor);
    expect(state.board[0][1].color).toBe(AnimationColor.PlaceBombColor);
    expect(state.board[1][0].color).toBe(AnimationColor.PlaceBombColor);
    expect(state.board[1][1].color).toBe(AnimationColor.PlaceBombColor);
  });

  it('should update the cell to have a bomb when change applied action is PLACEBOMB', () => {
    expect(state.board[0][0].isBomb).toBe(false);

    state.changesToApply.enqueue({
      changes: [{ rowIndex: 0, columnIndex: 0, action: 'PLACEBOMB' }],
      time: 0,
    });

    applyChanges(state, action);

    expect(state.board[0][0].isBomb).toBe(true);
  });

  it("should update all the board cell's bomb status to match the revealed board bombs when the action is COPYBOMBS", () => {
    expect(state.board[0][0].isBomb).toBe(false);
    expect(state.board[2][2].isBomb).toBe(false);
    state.revealedBoard[0][0].isBomb = true;
    state.revealedBoard[2][2].isBomb = true;

    state.changesToApply.enqueue({
      changes: [
        {
          action: 'COPYBOMBS',
          cells: [
            { rowIndex: 0, columnIndex: 0 },
            { rowIndex: 2, columnIndex: 2 },
          ],
        },
      ],
      time: 0,
    });

    applyChanges(state, action);

    expect(state.board[0][0].isBomb).toBe(true);
    expect(state.board[2][2].isBomb).toBe(true);
  });

  it('should update the cell to not have a bomb when change applied action is REMOVEBOMB', () => {
    state.board[0][0].isBomb = true;
    expect(state.board[0][0].isBomb).toBe(true);

    state.changesToApply.enqueue({
      changes: [{ rowIndex: 0, columnIndex: 0, action: 'REMOVEBOMB' }],
      time: 0,
    });

    applyChanges(state, action);

    expect(state.board[0][0].isBomb).toBe(false);
  });

  it('should update the cell color with SELECTEDCELL', () => {
    expect(state.board[0][0].color).toBeUndefined();

    state.changesToApply.enqueue({
      changes: [{ rowIndex: 0, columnIndex: 0, action: 'SELECTEDCELL' }],
      time: 0,
    });

    applyChanges(state, action);

    expect(state.board[0][0].color).toBe(AnimationColor.SelectedCell);
  });

  it('should update the cell color with SELECTEDNEIGHBORCELL', () => {
    expect(state.board[0][0].color).toBeUndefined();

    state.changesToApply.enqueue({
      changes: [{ rowIndex: 0, columnIndex: 0, action: 'SELECTEDNEIGHBORCELL' }],
      time: 0,
    });

    applyChanges(state, action);

    expect(state.board[0][0].color).toBe(AnimationColor.SelectedNeighborCell);
  });

  it('should update the cell color with SELECTEDNEIGHBORCELLBOMB', () => {
    expect(state.board[0][0].color).toBeUndefined();

    state.changesToApply.enqueue({
      changes: [{ rowIndex: 0, columnIndex: 0, action: 'SELECTEDNEIGHBORCELLBOMB' }],
      time: 0,
    });

    applyChanges(state, action);

    expect(state.board[0][0].color).toBe(AnimationColor.SelectedNeighborCellBomb);
  });

  it("should update the cell's neighbor and bomb information with APPLYNEIGHBORINFORMATION", () => {
    expect(state.board[0][0].neighborBombs).toBe(0);
    expect(state.board[0][0].neighbors).toEqual([]);

    state.changesToApply.enqueue({
      changes: [
        {
          rowIndex: 0,
          columnIndex: 0,
          action: 'APPLYNEIGHBORINFORMATION',
          neighborBombs: 3,
          neighbors: [
            {
              id: 1,
              isBomb: false,
              isCovered: true,
              isFlagged: false,
              neighborBombs: 0,
              neighbors: [],
            },
            {
              id: 5,
              isBomb: false,
              isCovered: true,
              isFlagged: false,
              neighborBombs: 0,
              neighbors: [],
            },
            {
              id: 6,
              isBomb: false,
              isCovered: true,
              isFlagged: false,
              neighborBombs: 0,
              neighbors: [],
            },
          ],
        },
      ],
      time: 0,
    });

    applyChanges(state, action);

    expect(state.board[0][0].neighborBombs).toBe(3);
    expect(state.board[0][0].neighbors.length).toBe(3);
    expect(state.board[0][0].neighbors[0]).toEqual({
      id: 1,
      isBomb: false,
      isCovered: true,
      isFlagged: false,
      neighborBombs: 0,
      neighbors: [],
    });
  });

  it('should reveal a cell and apply the animated color when the action is REVEALCELLANIMATED', () => {
    expect(state.board[0][1].isCovered).toBe(true);
    expect(state.board[0][1].color).toBeUndefined();

    state.changesToApply.enqueue({
      changes: [
        {
          action: 'REVEALCELLANIMATED',
          rowIndex: 0,
          columnIndex: 1,
        },
      ],
      time: 0,
    });

    applyChanges(state, action);

    expect(state.board[0][1].isCovered).toBe(false);
    expect(state.board[0][1].color).toBe(AnimationColor.SelectedCell);
  });

  it('should copy the neighbor bomb count from revealed board to normal board when the action is COPYNEIGHBORBOMBCOUNT', () => {
    expect(state.board[0][0].neighborBombs).toBe(0);
    expect(state.board[2][2].neighborBombs).toBe(0);

    state.revealedBoard[0][0].neighborBombs = 3;
    state.revealedBoard[2][2].neighborBombs = 5;

    state.changesToApply.enqueue({
      changes: [
        {
          action: 'COPYNEIGHBORBOMBCOUNT',
        },
      ],
      time: 0,
    });

    applyChanges(state, action);

    expect(state.board[0][0].neighborBombs).toBe(3);
    expect(state.board[2][2].neighborBombs).toBe(5);
  });

  it('should apply all changes in one go if applyAll is set to true', () => {
    expect(state.changesToApply.length).toBe(0);

    state.changesToApply.enqueue({
      changes: [{ action: 'WIPEANIMATION' }],
      time: 0,
    });
    state.changesToApply.enqueue({
      changes: [{ action: 'WIPEANIMATION' }],
      time: 0,
    });

    expect(state.changesToApply.length).toBe(2);

    applyChanges(state, action, true);

    expect(state.changesToApply.length).toBe(0);
  });

  it("should only apply one change at a time when applyAll is it's default value as false", () => {
    expect(state.changesToApply.length).toBe(0);

    state.changesToApply.enqueue({
      changes: [{ action: 'WIPEANIMATION' }],
      time: 0,
    });
    state.changesToApply.enqueue({
      changes: [{ action: 'WIPEANIMATION' }],
      time: 0,
    });

    expect(state.changesToApply.length).toBe(2);

    applyChanges(state, action);

    expect(state.changesToApply.length).toBe(1);
  });

  it('should reveal a cell with no animation when the action is REVEALCELL', () => {
    expect(state.board[0][0].isCovered).toBe(true);

    state.changesToApply.enqueue({
      changes: [{ action: 'REVEALCELL', rowIndex: 0, columnIndex: 0 }],
      time: 0,
    });

    applyChanges(state, action);

    expect(state.board[0][0].isCovered).toBe(false);
  });

  it('should reveal cells with no animation when the action is REVEALCELLS', () => {
    expect(state.board[0][0].isCovered).toBe(true);
    expect(state.board[0][1].isCovered).toBe(true);

    state.changesToApply.enqueue({
      changes: [
        {
          action: 'REVEALCELLS',
          cells: [
            { rowIndex: 0, columnIndex: 0 },
            { rowIndex: 0, columnIndex: 1 },
          ],
        },
      ],
      time: 0,
    });

    applyChanges(state, action);

    expect(state.board[0][0].isCovered).toBe(false);
    expect(state.board[0][1].isCovered).toBe(false);
  });

  it('should flag cells with no animation when the action is FLAGCELLS', () => {
    expect(state.board[0][0].isFlagged).toBe(false);
    expect(state.board[0][1].isFlagged).toBe(false);

    state.changesToApply.enqueue({
      changes: [
        {
          action: 'FLAGCELLS',
          cells: [
            { rowIndex: 0, columnIndex: 0 },
            { rowIndex: 0, columnIndex: 1 },
          ],
        },
      ],
      time: 0,
    });

    applyChanges(state, action);

    expect(state.board[0][0].isFlagged).toBe(true);
    expect(state.board[0][1].isFlagged).toBe(true);
  });

  it('should flag the cell with animation when the action is FLAGCELL', () => {
    expect(state.board[0][0].isFlagged).toBe(false);
    expect(state.board[0][0].color).toBe(undefined);

    state.changesToApply.enqueue({
      changes: [
        {
          action: 'FLAGCELL',
          rowIndex: 0,
          columnIndex: 0,
        },
      ],
      time: 0,
    });

    applyChanges(state, action);

    expect(state.board[0][0].isFlagged).toBe(true);
    expect(state.board[0][0].color).toBe(AnimationColor.PlaceBombColor);
  });

  it('should set the changeTime to 0 after the last change is applied', () => {
    expect(state.changesToApply.length).toBe(0);

    state.changesToApply.enqueue({
      changes: [{ action: 'WIPEANIMATION' }],
      time: 2000,
    });
    state.changesToApply.enqueue({
      changes: [{ action: 'WIPEANIMATION' }],
      time: 1000,
    });

    applyChanges(state, action);

    expect(state.changeTime).toBe(2000);

    applyChanges(state, action);

    expect(state.changeTime).toBe(1000);

    applyChanges(state, action);

    expect(state.changeTime).toBe(0);
  });
});
