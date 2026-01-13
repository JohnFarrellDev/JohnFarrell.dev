import { beforeEach, describe, expect, it } from 'vitest';

import { State } from '../..';
import { minesweeperStateFactory } from '../../../../../../factories/minesweeperState';
import { generateBoard } from '../../../functions/generateBoard';
import { calculateNeighborInformation } from './calculateNeighborInformation';

describe('calculate neighbor information', () => {
  let state: State;

  beforeEach(() => {
    state = minesweeperStateFactory.build({
      allowedOperations: { CalculateNeighbors: true },
      customAnimations: { CalculateNeighbors: true },
      rows: 5,
      columns: 5,
    });
    generateBoard(state);
  });

  it('should do nothing if the operation CalculateNeighbors is not provided', () => {
    state.allowedOperations.CalculateNeighbors = false;

    calculateNeighborInformation(state);

    expect(state.revealedBoard[0][0].neighbors).toEqual([]);
    expect(state.changesToApply.length).toBe(0);
  });

  it('should have no animation steps if customAnimations of CalculateNeighbors is not provided', () => {
    state.customAnimations.CalculateNeighbors = false;

    calculateNeighborInformation(state);

    const changesToApply = state.changesToApply.toArray();

    expect(changesToApply.length).toBe(1);
    expect(changesToApply[0]).toEqual({
      time: 0,
      changes: [{ action: 'COPYNEIGHBORBOMBCOUNT' }],
    });
  });

  it('should return animation steps if custom animations is selected for CalculateNeighbors - bordered mode', () => {
    calculateNeighborInformation(state);

    const changesToApply = state.changesToApply.toArray();

    expect(changesToApply.length).toBe(75);

    expect(changesToApply[0].time).toBe(250);
    expect(changesToApply[0].changes.length).toBe(1);
    expect(changesToApply[0].changes[0]).toEqual({
      columnIndex: 0,
      rowIndex: 0,
      action: 'SELECTEDCELL',
    });

    expect(changesToApply[1].time).toBe(400);
    expect(changesToApply[1].changes.length).toBe(4);
    expect(changesToApply[1].changes[0]).toEqual({
      columnIndex: 1,
      rowIndex: 0,
      action: 'SELECTEDNEIGHBORCELL',
    });
    expect(changesToApply[1].changes[1]).toEqual({
      columnIndex: 0,
      rowIndex: 1,
      action: 'SELECTEDNEIGHBORCELL',
    });
    expect(changesToApply[1].changes[2]).toEqual({
      columnIndex: 1,
      rowIndex: 1,
      action: 'SELECTEDNEIGHBORCELL',
    });
    expect(changesToApply[1].changes[3]).toEqual({
      columnIndex: 0,
      rowIndex: 0,
      action: 'APPLYNEIGHBORINFORMATION',
      neighborBombs: 0,
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
    });

    expect(changesToApply[2].time).toBe(0);
    expect(changesToApply[2].changes[0].action).toBe('WIPEANIMATION');
  });

  it('should return animation steps if custom animations is selected for CalculateNeighbors - borderless mode', () => {
    state.borderlessMode = true;

    calculateNeighborInformation(state);

    const changesToApply = state.changesToApply.toArray();

    expect(state.changesToApply.length).toBe(75);

    expect(changesToApply[0].time).toBe(250);
    expect(changesToApply[0].changes.length).toBe(1);
    expect(changesToApply[0].changes[0]).toEqual({
      columnIndex: 0,
      rowIndex: 0,
      action: 'SELECTEDCELL',
    });
    expect(changesToApply[1].time).toBe(400);
    expect(changesToApply[1].changes.length).toBe(9);

    expect(changesToApply[1].changes[0]).toEqual({
      columnIndex: 4,
      rowIndex: 4,
      action: 'SELECTEDNEIGHBORCELL',
    });
    expect(changesToApply[1].changes[1]).toEqual({
      columnIndex: 0,
      rowIndex: 4,
      action: 'SELECTEDNEIGHBORCELL',
    });
    expect(changesToApply[1].changes[2]).toEqual({
      columnIndex: 1,
      rowIndex: 4,
      action: 'SELECTEDNEIGHBORCELL',
    });
    expect(changesToApply[1].changes[3]).toEqual({
      columnIndex: 4,
      rowIndex: 0,
      action: 'SELECTEDNEIGHBORCELL',
    });
    expect(changesToApply[1].changes[4]).toEqual({
      columnIndex: 1,
      rowIndex: 0,
      action: 'SELECTEDNEIGHBORCELL',
    });
    expect(changesToApply[1].changes[5]).toEqual({
      columnIndex: 4,
      rowIndex: 1,
      action: 'SELECTEDNEIGHBORCELL',
    });
    expect(changesToApply[1].changes[6]).toEqual({
      columnIndex: 0,
      rowIndex: 1,
      action: 'SELECTEDNEIGHBORCELL',
    });
    expect(changesToApply[1].changes[7]).toEqual({
      columnIndex: 1,
      rowIndex: 1,
      action: 'SELECTEDNEIGHBORCELL',
    });

    expect(changesToApply[2].time).toBe(0);
    expect(changesToApply[2].changes[0].action).toBe('WIPEANIMATION');
  });

  it('should have an action of SELECTEDNEIGHBORCELLBOMB when the neighbor cell is a bomb (bordered mode)', () => {
    state.revealedBoard[0][1].isBomb = true;

    calculateNeighborInformation(state);

    const changesToApply = state.changesToApply.toArray();

    expect(changesToApply.length).toBe(75);
    expect(changesToApply[1]).toEqual({
      time: 400,
      changes: [
        {
          rowIndex: 0,
          columnIndex: 1,
          action: 'SELECTEDNEIGHBORCELLBOMB',
        },
        {
          rowIndex: 1,
          columnIndex: 0,
          action: 'SELECTEDNEIGHBORCELL',
        },
        {
          rowIndex: 1,
          columnIndex: 1,
          action: 'SELECTEDNEIGHBORCELL',
        },
        {
          action: 'APPLYNEIGHBORINFORMATION',
          neighbors: [
            {
              id: 1,
              isCovered: true,
              isBomb: true,
              isFlagged: false,
              neighbors: [],
              neighborBombs: 0,
            },
            {
              id: 5,
              isCovered: true,
              isBomb: false,
              isFlagged: false,
              neighbors: [],
              neighborBombs: 0,
            },
            {
              id: 6,
              isCovered: true,
              isBomb: false,
              isFlagged: false,
              neighbors: [],
              neighborBombs: 0,
            },
          ],
          neighborBombs: 1,
          rowIndex: 0,
          columnIndex: 0,
        },
      ],
    });
  });

  it('should have an action of SELECTEDNEIGHBORCELLBOMB when the neighbor cell is a bomb (borderless mode)', () => {
    state.revealedBoard[0][1].isBomb = true;
    state.borderlessMode = true;

    calculateNeighborInformation(state);

    const changesToApply = state.changesToApply.toArray();

    expect(changesToApply.length).toBe(75);
    expect(changesToApply[1]).toEqual({
      time: 400,
      changes: [
        {
          rowIndex: 4,
          columnIndex: 4,
          action: 'SELECTEDNEIGHBORCELL',
        },
        {
          rowIndex: 4,
          columnIndex: 0,
          action: 'SELECTEDNEIGHBORCELL',
        },
        {
          rowIndex: 4,
          columnIndex: 1,
          action: 'SELECTEDNEIGHBORCELL',
        },
        {
          rowIndex: 0,
          columnIndex: 4,
          action: 'SELECTEDNEIGHBORCELL',
        },
        {
          rowIndex: 0,
          columnIndex: 1,
          action: 'SELECTEDNEIGHBORCELLBOMB',
        },
        {
          rowIndex: 1,
          columnIndex: 4,
          action: 'SELECTEDNEIGHBORCELL',
        },
        {
          rowIndex: 1,
          columnIndex: 0,
          action: 'SELECTEDNEIGHBORCELL',
        },
        {
          rowIndex: 1,
          columnIndex: 1,
          action: 'SELECTEDNEIGHBORCELL',
        },
        {
          action: 'APPLYNEIGHBORINFORMATION',
          neighbors: [
            {
              id: 24,
              isCovered: true,
              isBomb: false,
              isFlagged: false,
              neighbors: [],
              neighborBombs: 0,
            },
            {
              id: 20,
              isCovered: true,
              isBomb: false,
              isFlagged: false,
              neighbors: [],
              neighborBombs: 0,
            },
            {
              id: 21,
              isCovered: true,
              isBomb: false,
              isFlagged: false,
              neighbors: [],
              neighborBombs: 0,
            },
            {
              id: 4,
              isCovered: true,
              isBomb: false,
              isFlagged: false,
              neighbors: [],
              neighborBombs: 0,
            },
            {
              id: 1,
              isCovered: true,
              isBomb: true,
              isFlagged: false,
              neighbors: [],
              neighborBombs: 0,
            },
            {
              id: 9,
              isCovered: true,
              isBomb: false,
              isFlagged: false,
              neighbors: [],
              neighborBombs: 0,
            },
            {
              id: 5,
              isCovered: true,
              isBomb: false,
              isFlagged: false,
              neighbors: [],
              neighborBombs: 0,
            },
            {
              id: 6,
              isCovered: true,
              isBomb: false,
              isFlagged: false,
              neighbors: [],
              neighborBombs: 0,
            },
          ],
          neighborBombs: 1,
          rowIndex: 0,
          columnIndex: 0,
        },
      ],
    });
  });

  it('should have no memory references between the board and revealedBoard', () => {
    expect(state.board[0][0].neighborBombs).toBe(0);
    expect(state.revealedBoard[0][0].neighborBombs).toBe(0);

    state.board[0][0].neighborBombs = 1;

    calculateNeighborInformation(state);

    expect(state.board[0][0].neighborBombs).toBe(1);
    expect(state.revealedBoard[0][0].neighborBombs).toBe(0);
  });

  it.each`
    testedCell | testedArea               | expectedBombs | borderlessMode | bombsToPlace
    ${[0, 0]}  | ${'top left corner'}     | ${3}          | ${false}       | ${[[0, 1], [0, 4], [1, 0], [1, 1], [1, 4], [4, 0], [4, 1], [4, 4]]}
    ${[0, 0]}  | ${'top left corner'}     | ${8}          | ${true}        | ${[[0, 1], [0, 4], [1, 0], [1, 1], [1, 4], [4, 0], [4, 1], [4, 4]]}
    ${[4, 0]}  | ${'bottom left corner'}  | ${3}          | ${false}       | ${[[4, 1], [3, 0], [3, 1], [0, 0], [0, 1], [4, 4], [3, 4], [0, 4]]}
    ${[4, 0]}  | ${'bottom left corner'}  | ${8}          | ${true}        | ${[[4, 1], [3, 0], [3, 1], [0, 0], [0, 1], [4, 4], [3, 4], [0, 4]]}
    ${[0, 4]}  | ${'top right corner'}    | ${3}          | ${false}       | ${[[0, 3], [1, 3], [1, 4], [0, 0], [1, 0], [4, 0], [4, 3], [4, 4]]}
    ${[0, 4]}  | ${'top right corner'}    | ${8}          | ${true}        | ${[[0, 3], [1, 3], [1, 4], [0, 0], [1, 0], [4, 0], [4, 3], [4, 4]]}
    ${[4, 4]}  | ${'bottom right corner'} | ${3}          | ${false}       | ${[[4, 3], [3, 3], [3, 4], [0, 3], [0, 4], [4, 0], [3, 0], [0, 0]]}
    ${[4, 4]}  | ${'bottom right corner'} | ${8}          | ${true}        | ${[[4, 3], [3, 3], [3, 4], [0, 3], [0, 4], [4, 0], [3, 0], [0, 0]]}
    ${[0, 2]}  | ${'top middle'}          | ${5}          | ${false}       | ${[[0, 1], [0, 3], [1, 1], [1, 2], [1, 3], [4, 1], [4, 2], [4, 3]]}
    ${[0, 2]}  | ${'top middle'}          | ${8}          | ${true}        | ${[[0, 1], [0, 3], [1, 1], [1, 2], [1, 3], [4, 1], [4, 2], [4, 3]]}
    ${[2, 0]}  | ${'left middle'}         | ${5}          | ${false}       | ${[[1, 0], [1, 1], [2, 1], [3, 0], [3, 1], [1, 4], [2, 4], [3, 4]]}
    ${[2, 0]}  | ${'left middle'}         | ${8}          | ${true}        | ${[[1, 0], [1, 1], [2, 1], [3, 0], [3, 1], [1, 4], [2, 4], [3, 4]]}
    ${[2, 4]}  | ${'right middle'}        | ${5}          | ${false}       | ${[[1, 4], [1, 3], [2, 3], [3, 3], [3, 4], [1, 0], [2, 0], [3, 0]]}
    ${[2, 4]}  | ${'right middle'}        | ${8}          | ${true}        | ${[[1, 4], [1, 3], [2, 3], [3, 3], [3, 4], [1, 0], [2, 0], [3, 0]]}
    ${[4, 2]}  | ${'bottom middle'}       | ${5}          | ${false}       | ${[[4, 1], [3, 1], [3, 2], [3, 3], [4, 3], [0, 1], [0, 2], [0, 3]]}
    ${[4, 2]}  | ${'bottom middle'}       | ${8}          | ${true}        | ${[[4, 1], [3, 1], [3, 2], [3, 3], [4, 3], [0, 1], [0, 2], [0, 3]]}
  `(
    'should have $expectedBombs neighbor bombs in the the $testedArea when borderless mode is $borderlessMode',
    ({
      testedCell,

      testedArea,
      expectedBombs,
      borderlessMode,
      bombsToPlace,
    }: {
      testedCell: [number, number];
      testedArea: string;
      expectedBombs: number;
      borderlessMode: boolean;
      bombsToPlace: [number, number][];
    }) => {
      state.customAnimations.CalculateNeighbors = false;
      bombsToPlace.forEach(([row, column]) => {
        state.revealedBoard[row][column].isBomb = true;
      });
      state.borderlessMode = borderlessMode;

      calculateNeighborInformation(state);

      expect(state.revealedBoard[testedCell[0]][testedCell[1]].neighborBombs).toBe(expectedBombs);
    }
  );
});
