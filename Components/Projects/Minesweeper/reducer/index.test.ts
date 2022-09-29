import { State, Action } from '.'
import { minesweeperReducer } from '.'

import { applyAnimation } from './functions/applyAnimation'
import { changeNumberOfBombs } from './functions/changeNumberOfBombs'
import { changeNumberOfColumns } from './functions/changeNumberOfColumns'
import { changeNumberOfRows } from './functions/changeNumberOfRows'
import { clickCell } from './functions/clickCell/clickCell'
import { mouseDownCell } from './functions/clickCell/mouseDownCell'
import { mouseUpCell } from './functions/clickCell/mouseUpCell'
import { init } from './functions/init'
import { flagCell } from './functions/flagCell'
import { switchFaceType } from './functions/switchFaceType'
import { minesweeperStateFactory } from '../../../../factories/minesweeperState'

jest.mock('./functions/applyAnimation')
jest.mock('./functions/changeNumberOfBombs')
jest.mock('./functions/changeNumberOfColumns')
jest.mock('./functions/changeNumberOfRows')
jest.mock('./functions/clickCell/clickCell')
jest.mock('./functions/clickCell/mouseDownCell')
jest.mock('./functions/clickCell/mouseUpCell')
jest.mock('./functions/init')
jest.mock('./functions/flagCell')
jest.mock('./functions/switchFaceType')

describe('minesweeper reducer', () => {
  let state: State

  beforeEach(() => {
    state = minesweeperStateFactory.build()
  })

  it.each`
    action                               | passedFunction
    ${{ type: 'ApplyAnimation' }}        | ${applyAnimation}
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
    ({
      action,
      passedFunction,
    }: {
      action: Action
      passedFunction: (state: State, action: Action) => void
    }) => {
      minesweeperReducer(state, action)

      expect(passedFunction).toBeCalledTimes(1)
      expect(passedFunction).toBeCalledWith(state, action)
    }
  )
})
