import { State, Action } from '.';
import { minesweeperReducer } from '.';

import { applyChanges } from './functions/applyChanges';
import { changeNumberOfBombs } from './functions/changeNumberOfBombs';
import { changeNumberOfColumns } from './functions/changeNumberOfColumns';
import { changeNumberOfRows } from './functions/changeNumberOfRows';
import { clickCell } from './functions/clickCell/clickCell';
import { mouseDownCell } from './functions/clickCell/mouseDownCell';
import { mouseUpCell } from './functions/clickCell/mouseUpCell';
import { init } from './functions/init';
import { flagCell } from './functions/flagCell';
import { switchFaceType } from './functions/switchFaceType';
import { minesweeperStateFactory } from '../../../../factories/minesweeperState';

import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('./functions/applyChanges');
vi.mock('./functions/changeNumberOfBombs');
vi.mock('./functions/changeNumberOfColumns');
vi.mock('./functions/changeNumberOfRows');
vi.mock('./functions/clickCell/clickCell');
vi.mock('./functions/clickCell/mouseDownCell');
vi.mock('./functions/clickCell/mouseUpCell');
vi.mock('./functions/init');
vi.mock('./functions/flagCell');
vi.mock('./functions/switchFaceType');

describe('minesweeper reducer', () => {
  let state: State;

  beforeEach(() => {
    state = minesweeperStateFactory.build();
  });

  it.each`
    action                               | passedFunction
    ${{ type: 'ApplyChanges' }}          | ${applyChanges}
    ${{ type: 'ChangeNumberOfBombs' }}   | ${changeNumberOfBombs}
    ${{ type: 'ChangeNumberOfColumns' }} | ${changeNumberOfColumns}
    ${{ type: 'ChangeNumberOfRows' }}    | ${changeNumberOfRows}
    ${{ type: 'ClickCell' }}             | ${clickCell}
    ${{ type: 'MouseDownCell' }}         | ${mouseDownCell}
    ${{ type: 'MouseUpCell' }}           | ${mouseUpCell}
    ${{ type: 'Init' }}                  | ${init}
    ${{ type: 'RightClickCell' }}        | ${flagCell}
    ${{ type: 'SwitchFaceType' }}        | ${switchFaceType}
  `(
    'should call the correct function with the expected params when action type is $actionType',
    ({ action, passedFunction }: { action: Action; passedFunction: (state: State, action: Action) => void }) => {
      minesweeperReducer(state, action);

      expect(passedFunction).toHaveBeenCalledTimes(1);
      expect(passedFunction).toHaveBeenCalledWith(state, action);
    }
  );
});
