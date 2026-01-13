import { beforeEach, describe, expect, it } from 'vitest';

import { generateBoard } from '@/Components/Projects/Minesweeper/functions/generateBoard';
import { State } from '@/Components/Projects/Minesweeper/reducer';
import { minesweeperStateFactory } from '@/factories/minesweeperState';

describe('generate board', () => {
  let state: State;

  beforeEach(() => {
    state = minesweeperStateFactory.build({});
    generateBoard(state);
  });

  it('should return as many inner arrays as rows', () => {
    expect(state.board.length).toBe(state.rows);
    expect(state.revealedBoard.length).toBe(state.rows);
  });

  it('each inner array length should be equal to the number of columns', () => {
    state.board.forEach((row) => {
      expect(row.length).toBe(state.columns);
    });
    state.revealedBoard.forEach((row) => {
      expect(row.length).toBe(state.columns);
    });
  });

  it('should generate each cell as covered', () => {
    state.board.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.isCovered).toBe(true);
      });
    });
    state.revealedBoard.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.isCovered).toBe(true);
      });
    });
  });

  it('should generate each cell without a flag', () => {
    state.board.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.isFlagged).toBe(false);
      });
    });
    state.revealedBoard.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.isFlagged).toBe(false);
      });
    });
  });

  it('should generate each cell without a bomb', () => {
    state.board.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.isBomb).toBe(false);
      });
    });
    state.revealedBoard.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.isBomb).toBe(false);
      });
    });
  });

  it('should generate each cell with no neighbors or neighborBombs', () => {
    state.board.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.neighbors.length).toBe(0);
      });
    });

    state.board.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.neighborBombs).toBe(0);
      });
    });

    state.revealedBoard.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.neighbors.length).toBe(0);
      });
    });

    state.revealedBoard.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.neighborBombs).toBe(0);
      });
    });
  });

  it('should assign an incremental unique id to each cell', () => {
    expect(state.board[0][0].id).toBe(0);
    expect(state.board[0][9].id).toBe(9);
    expect(state.board[1][0].id).toBe(10);
    expect(state.board[3][7].id).toBe(37);
    expect(state.board[4][9].id).toBe(49);

    expect(state.revealedBoard[0][0].id).toBe(0);
    expect(state.revealedBoard[0][9].id).toBe(9);
    expect(state.revealedBoard[1][0].id).toBe(10);
    expect(state.revealedBoard[3][7].id).toBe(37);
    expect(state.revealedBoard[4][9].id).toBe(49);
  });

  it('should have no memory references between the board and revealedBoard', () => {
    expect(state.board[0][0].neighborBombs).toBe(0);
    expect(state.revealedBoard[0][0].neighborBombs).toBe(0);

    state.board[0][0].neighborBombs = 1;

    expect(state.board[0][0].neighborBombs).toBe(1);
    expect(state.revealedBoard[0][0].neighborBombs).toBe(0);
  });
});
