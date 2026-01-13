import { beforeEach, describe, expect, it } from 'vitest';

import { ClickCellAction, State } from '../../..';
import { minesweeperStateFactory } from '../../../../../../../factories/minesweeperState';
import { generateBoard } from '../../../../functions/generateBoard';
import { Cell } from '../../../../types';
import { calculateNeighborInformation } from '../calculateNeighborInformation';
import { recursiveRevealCell } from './recursiveRevealCell';

const countUncoveredCells = (board: Cell[][]): number => {
  let count = 0;

  board.forEach((row) => {
    row.forEach((cell) => {
      count += Number(!cell.isCovered);
    });
  });
  return count;
};

const startingAction: ClickCellAction = {
  type: 'ClickCell',
  columnIndex: 1,
  rowIndex: 1,
};

describe('recursive reveal cell', () => {
  let state: State;
  let action = { ...startingAction };

  beforeEach(() => {
    state = minesweeperStateFactory.build({
      allowedOperations: {
        RevealCell: true,
        RecursiveReveal: true,
        CalculateNeighbors: true,
      },
      customAnimations: { RecursiveReveal: true },
      rows: 5,
      columns: 5,
    });
    generateBoard(state);
    calculateNeighborInformation(state);
    action = { ...action };
  });

  it('should do nothing if RecursiveReveal is not an allowed operation', () => {
    state.allowedOperations.RecursiveReveal = false;

    recursiveRevealCell(state, action);

    const count = countUncoveredCells(state.revealedBoard);
    expect(count).toBe(0);
  });

  it('should reveal recursively every cell', () => {
    recursiveRevealCell(state, action);

    const count = countUncoveredCells(state.revealedBoard);
    expect(count).toBe(state.columns * state.rows - 1);
  });

  it('should not recursively reveal a cell if it has bombs for neighbors', () => {
    state.revealedBoard[0][0].isBomb = true;
    calculateNeighborInformation(state);

    recursiveRevealCell(state, action);

    const count = countUncoveredCells(state.revealedBoard);
    expect(count).toBe(0);
  });

  it('should recursively reveal cells until the cell has a bomb', () => {
    state.revealedBoard[1][1].isBomb = true;
    state.revealedBoard[4][4].isBomb = true;
    action.rowIndex = 2;
    action.columnIndex = 3;
    calculateNeighborInformation(state);

    recursiveRevealCell(state, action);

    const count = countUncoveredCells(state.revealedBoard);
    expect(count).toBe(19);
  });

  it('should apply a change of REVEALCELLS if RecursiveReveal animation is false', () => {
    state.customAnimations.RecursiveReveal = false;
    recursiveRevealCell(state, action);

    expect(state.changesToApply.length).toBe(2);
    expect(state.changesToApply.head?.value.changes[0].action).toBe('COPYNEIGHBORBOMBCOUNT');
    expect(state.changesToApply.tail?.value.changes[0].action).toBe('REVEALCELLS');
    expect(
      (
        state.changesToApply.tail?.value.changes[0] as {
          action: 'REVEALCELLS';
          cells: { rowIndex: number; columnIndex: number }[];
        }
      ).cells.length
    ).toBe(state.rows * state.columns);
  });

  it('should apply a change of REVEALCELL if RecursiveReveal animation is true and only one cell is visited', () => {
    state.revealedBoard[action.rowIndex][action.columnIndex].neighborBombs = 1;

    recursiveRevealCell(state, action);

    expect(state.changesToApply.length).toBe(2);
    expect(state.changesToApply.head?.value.changes[0].action).toBe('COPYNEIGHBORBOMBCOUNT');
    expect(state.changesToApply.tail?.value).toEqual({
      time: 0,
      changes: [
        {
          action: 'REVEALCELL',
          rowIndex: action.rowIndex,
          columnIndex: action.columnIndex,
        },
      ],
    });
  });

  it('should apply a change of REVEALCELLANIMATED(s) and WIPEANIMATION is RecursiveReveal animation is true', () => {
    recursiveRevealCell(state, action);

    const changesToApply = state.changesToApply.toArray();

    expect(changesToApply.length).toBe(27);
    expect(changesToApply[0]).toEqual({
      time: 0,
      changes: [
        {
          action: 'COPYNEIGHBORBOMBCOUNT',
        },
      ],
    });
    expect(changesToApply[1]).toEqual({
      changes: [
        {
          action: 'REVEALCELLANIMATED',
          rowIndex: 2,
          columnIndex: 3,
        },
      ],
      time: 100,
    });
    expect(changesToApply[changesToApply.length - 1]).toEqual({
      time: 1000,
      changes: [
        {
          action: 'WIPEANIMATION',
        },
      ],
    });
  });
});
