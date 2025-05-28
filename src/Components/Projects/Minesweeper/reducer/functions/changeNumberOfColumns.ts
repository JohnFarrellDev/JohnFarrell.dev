import { ChangeNumberOfColumnsAction, State } from '..';
import { generateBoard } from '../../functions/generateBoard';

export const changeNumberOfColumns = (state: State, action: ChangeNumberOfColumnsAction) => {
  if (state.isPlaying && !(state.isWinner || state.isDead)) return;

  state.columns = action.newNumberOfColumns;
  generateBoard(state);
};
