import { RightClickCellAction, State } from '..';

export const flagCell = (state: State, action: RightClickCellAction) => {
  if (state.changesToApply.length > 0) return;

  if (!state.isPlaying || state.isDead || state.isWinner) return;

  if (!state.revealedBoard[action.rowIndex][action.columnIndex].isCovered) return;

  if (!state.allowedOperations.FlagCell) return;

  if (state.revealedBoard[action.rowIndex][action.columnIndex].isFlagged) {
    state.revealedBoard[action.rowIndex][action.columnIndex].isFlagged = false;
    state.board[action.rowIndex][action.columnIndex].isFlagged = false;
    state.flagsPlaced--;
  } else {
    state.revealedBoard[action.rowIndex][action.columnIndex].isFlagged = true;
    state.board[action.rowIndex][action.columnIndex].isFlagged = true;
    state.flagsPlaced++;
  }
};
