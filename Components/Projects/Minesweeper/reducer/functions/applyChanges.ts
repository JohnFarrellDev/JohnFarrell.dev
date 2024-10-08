import { Action, AnimationColor, ChangeStep, State } from '..';
import { determineHasWon } from './clickCell/revealCell/determineHasWon';

export const applyChanges = (state: State, _: Action, applyAll = false) => {
  const changeStep = state.changesToApply.dequeue();

  if (!changeStep) {
    state.changeTime = 0;
    return;
  }

  applyChange(state, changeStep);

  if (applyAll) {
    let curr = state.changesToApply.dequeue();
    while (curr) {
      applyChange(state, curr);
      curr = state.changesToApply.dequeue();
    }
  }

  determineHasWon(state);
};

const applyChange = (state: State, changeStep: ChangeStep) => {
  state.changeTime = changeStep.time;

  changeStep.changes.forEach((change) => {
    if (change.action === 'WIPEANIMATION') {
      state.board.forEach((row) => {
        row.forEach((cell) => {
          cell.color = AnimationColor.NoColor;
        });
      });
    }
    if (change.action === 'PLACEBOMB') {
      state.board[change.rowIndex][change.columnIndex].isBomb = true;
      state.board[change.rowIndex][change.columnIndex].color = AnimationColor.PlaceBombColor;
    }
    if (change.action === 'REMOVEBOMB') {
      state.board[change.rowIndex][change.columnIndex].isBomb = false;
      state.board[change.rowIndex][change.columnIndex].color = AnimationColor.NoColor;
    }
    if (change.action === 'COPYBOMBS') {
      change.cells.forEach(({ rowIndex, columnIndex }) => {
        state.board[rowIndex][columnIndex].isBomb = true;
      });
    }
    if (change.action === 'COPYNEIGHBORBOMBCOUNT') {
      state.revealedBoard.forEach((row, rowIndex) => {
        row.forEach((cell, columnIndex) => {
          state.board[rowIndex][columnIndex].neighborBombs = cell.neighborBombs;
        });
      });
    }
    if (change.action === 'SELECTEDCELL') {
      state.board[change.rowIndex][change.columnIndex].color = AnimationColor.SelectedCell;
    }
    if (change.action === 'SELECTEDNEIGHBORCELL') {
      state.board[change.rowIndex][change.columnIndex].color = AnimationColor.SelectedNeighborCell;
    }
    if (change.action === 'SELECTEDNEIGHBORCELLBOMB') {
      state.board[change.rowIndex][change.columnIndex].color = AnimationColor.SelectedNeighborCellBomb;
    }
    if (change.action === 'APPLYNEIGHBORINFORMATION') {
      state.board[change.rowIndex][change.columnIndex].neighbors = change.neighbors;
      state.board[change.rowIndex][change.columnIndex].neighborBombs = change.neighborBombs;
    }
    if (change.action === 'REVEALCELLANIMATED') {
      state.board[change.rowIndex][change.columnIndex].color = AnimationColor.SelectedCell;
      state.board[change.rowIndex][change.columnIndex].isCovered = false;
    }
    if (change.action === 'REVEALCELL') {
      state.board[change.rowIndex][change.columnIndex].isCovered = false;
    }
    if (change.action === 'REVEALCELLS') {
      change.cells.forEach(({ rowIndex, columnIndex }) => {
        state.board[rowIndex][columnIndex].isCovered = false;
      });
    }
    if (change.action === 'FLAGCELLS') {
      state.flagsPlaced += change.cells.length;
      change.cells.forEach(({ rowIndex, columnIndex }) => {
        state.board[rowIndex][columnIndex].isFlagged = true;
      });
    }
    if (change.action === 'FLAGCELL') {
      state.flagsPlaced++;
      state.board[change.rowIndex][change.columnIndex].isFlagged = true;
      state.board[change.rowIndex][change.columnIndex].color = AnimationColor.PlaceBombColor;
    }
  });
};
