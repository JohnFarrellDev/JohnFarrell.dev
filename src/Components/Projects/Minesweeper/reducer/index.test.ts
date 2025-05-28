import { State, Action } from '@/Components/Projects/Minesweeper/reducer';
import { minesweeperReducer } from '@/Components/Projects/Minesweeper/reducer';

import { applyChanges } from '@/Components/Projects/Minesweeper/reducer/functions/applyChanges';
import { changeNumberOfBombs } from '@/Components/Projects/Minesweeper/reducer/functions/changeNumberOfBombs';
import { changeNumberOfColumns } from '@/Components/Projects/Minesweeper/reducer/functions/changeNumberOfColumns';
import { changeNumberOfRows } from '@/Components/Projects/Minesweeper/reducer/functions/changeNumberOfRows';
import { clickCell } from '@/Components/Projects/Minesweeper/reducer/functions/clickCell/clickCell';
import { mouseDownCell } from '@/Components/Projects/Minesweeper/reducer/functions/clickCell/mouseDownCell';
import { mouseUpCell } from '@/Components/Projects/Minesweeper/reducer/functions/clickCell/mouseUpCell';
import { init } from '@/Components/Projects/Minesweeper/reducer/functions/init';
import { flagCell } from '@/Components/Projects/Minesweeper/reducer/functions/flagCell';
import { switchFaceType } from '@/Components/Projects/Minesweeper/reducer/functions/switchFaceType';
import { minesweeperStateFactory } from '@/factories/minesweeperState';

import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('@/Components/Projects/Minesweeper/reducer/functions/applyChanges');
vi.mock('@/Components/Projects/Minesweeper/reducer/functions/changeNumberOfBombs');
vi.mock('@/Components/Projects/Minesweeper/reducer/functions/changeNumberOfColumns');
vi.mock('@/Components/Projects/Minesweeper/reducer/functions/changeNumberOfRows');
vi.mock('@/Components/Projects/Minesweeper/reducer/functions/clickCell/clickCell');
vi.mock('@/Components/Projects/Minesweeper/reducer/functions/clickCell/mouseDownCell');
vi.mock('@/Components/Projects/Minesweeper/reducer/functions/clickCell/mouseUpCell');
vi.mock('@/Components/Projects/Minesweeper/reducer/functions/init');
vi.mock('@/Components/Projects/Minesweeper/reducer/functions/flagCell');
vi.mock('@/Components/Projects/Minesweeper/reducer/functions/switchFaceType');

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
