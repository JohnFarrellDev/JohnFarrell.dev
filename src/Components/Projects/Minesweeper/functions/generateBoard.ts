import { State } from '../reducer';
import { Cell } from '../types';

function createBoardObject(state: State) {
  const board: Cell[][] = [];
  for (let i = 0; i < state.rows; i++) {
    const row: Cell[] = [];
    for (let j = 0; j < state.columns; j++) {
      row.push({
        id: j + i * state.columns,
        isCovered: true,
        isBomb: false,
        isFlagged: false,
        neighbors: [],
        neighborBombs: 0,
      });
    }

    board.push(row);
  }
  return board;
}

export function generateBoard(state: State) {
  state.board = createBoardObject(state);
  state.revealedBoard = createBoardObject(state);
}
