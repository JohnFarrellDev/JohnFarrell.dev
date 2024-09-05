import { State } from '../../..';
import { minesweeperStateFactory } from '../../../../../../../factories/minesweeperState';
import { generateBoard } from '../../../../functions/generateBoard';
import { calculateNeighborInformation } from '../calculateNeighborInformation';
import { autoFlagCells } from './autoFlagCells';

const startingState = minesweeperStateFactory.build({
  allowedOperations: {
    AutoFlag: true,
    CalculateNeighbors: true,
  },
  rows: 3,
  columns: 3,
});
generateBoard(startingState);
calculateNeighborInformation(startingState);

describe('auto flag cell', () => {
  let state: State;

  beforeEach(() => {
    state = minesweeperStateFactory.build({
      allowedOperations: {
        AutoFlag: true,
        CalculateNeighbors: true,
      },
      rows: 3,
      columns: 3,
      numberOfBombs: 0,
    });
    generateBoard(state);
    calculateNeighborInformation(state);
  });

  it('should do nothing if AutoFlag is not an allowed operation', () => {
    state.allowedOperations.AutoFlag = false;

    autoFlagCells(state);

    expect(state.revealedBoard).toEqual(startingState.revealedBoard);
  });

  it('should flag cells that must be a bomb', () => {
    for (let r = 0; r < state.rows; r++) {
      for (let c = 0; c < state.columns; c++) {
        expect(state.revealedBoard[r][c].isFlagged).toBe(false);
      }
    }

    state.revealedBoard[1][1].isCovered = false;
    state.revealedBoard[1][1].neighborBombs = 8;
    autoFlagCells(state);

    for (let r = 0; r < state.rows; r++) {
      for (let c = 0; c < state.columns; c++) {
        if (r === 1 && c === 1) {
          expect(state.revealedBoard[r][c].isFlagged).toBe(false);
        } else {
          expect(state.revealedBoard[r][c].isFlagged).toBe(true);
        }
      }
    }
  });

  it('should not flag cells when there are more uncovered cells that known neighbor bombs', () => {
    for (let r = 0; r < state.rows; r++) {
      for (let c = 0; c < state.columns; c++) {
        expect(state.revealedBoard[r][c].isFlagged).toBe(false);
      }
    }

    state.revealedBoard[1][1].isCovered = false;
    state.revealedBoard[1][1].neighborBombs = 7;
    autoFlagCells(state);

    for (let r = 0; r < state.rows; r++) {
      for (let c = 0; c < state.columns; c++) {
        expect(state.revealedBoard[r][c].isFlagged).toBe(false);
      }
    }
  });

  it('should apply no animation steps when there are no cells to automatically flag', () => {
    expect(state.changesToApply.length).toBe(1);

    state.customAnimations.FlagCell = true;
    state.revealedBoard[1][1].isCovered = false;
    state.revealedBoard[1][1].neighborBombs = 7;

    autoFlagCells(state);

    expect(state.changesToApply.length).toBe(1);
  });

  it('should apply a single change step of cells to flag when animation is turned off', () => {
    expect(state.changesToApply.length).toBe(1);

    state.revealedBoard[1][1].isCovered = false;
    state.revealedBoard[1][1].neighborBombs = 8;

    autoFlagCells(state);

    const changesToApply = state.changesToApply.toArray();

    expect(changesToApply.length).toBe(2);
    expect(changesToApply[1]).toEqual({
      time: 0,
      changes: [
        {
          action: 'FLAGCELLS',
          cells: [
            { rowIndex: 0, columnIndex: 0 },
            { rowIndex: 0, columnIndex: 1 },
            { rowIndex: 0, columnIndex: 2 },
            { rowIndex: 1, columnIndex: 0 },
            { rowIndex: 1, columnIndex: 2 },
            { rowIndex: 2, columnIndex: 0 },
            { rowIndex: 2, columnIndex: 1 },
            { rowIndex: 2, columnIndex: 2 },
          ],
        },
      ],
    });
  });

  it('should apply multiple change steps when animation is turned on', () => {
    state.customAnimations.FlagCell = true;
    state.revealedBoard[1][1].isCovered = false;
    state.revealedBoard[1][1].neighborBombs = 8;

    autoFlagCells(state);

    const animations = state.changesToApply.toArray();

    expect(animations.length).toBe(11);
    expect(animations[1]).toEqual({
      time: 500,
      changes: [
        {
          rowIndex: 1,
          columnIndex: 1,
          action: 'SELECTEDCELL',
        },
      ],
    });
    expect(animations[2]).toEqual({
      time: 500,
      changes: [
        {
          rowIndex: 0,
          columnIndex: 0,
          action: 'FLAGCELL',
        },
      ],
    });
    expect(animations[animations.length - 1]).toEqual({
      time: 500,
      changes: [
        {
          action: 'WIPEANIMATION',
        },
      ],
    });
  });
});
