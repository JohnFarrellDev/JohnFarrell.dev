import { MouseEvent, useCallback } from 'react'
import styled from 'styled-components'
import { AnimationColorsRecord } from '../reducer'
import { CustomAnimations } from './Game/Game'

interface GameCellI {
  rowIndex: number
  columnIndex: number
  isCovered: boolean
  isBomb: boolean
  isFlagged: boolean
  isWinner: boolean
  neighborBombs: number
  color?: AnimationColorsRecord extends Map<CustomAnimations, infer I>
    ? I
    : never
  leftClick: (rowIndex: number, columnIndex: number) => void
  rightClick: (rowIndex: number, columnIndex: number) => void
  leftDown: (event: MouseEvent<HTMLDivElement>) => void
  leftUp: (event: MouseEvent<HTMLDivElement>) => void
}

export const GameCell = ({
  rowIndex,
  columnIndex,
  isCovered,
  isBomb,
  isFlagged,
  isWinner,
  neighborBombs,
  color,
  leftClick,
  rightClick,
  leftDown,
  leftUp
}: GameCellI) => {
  const clickCell = useCallback(() => {
    leftClick(rowIndex, columnIndex)
  }, [rowIndex, columnIndex, leftClick])

  const rightClickCell = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault()
      rightClick(rowIndex, columnIndex)
    },
    [rightClick, columnIndex, rowIndex]
  )

  return (
    <CellContainer
      isCovered={isCovered}
      isBomb={isBomb}
      onClick={clickCell}
      onContextMenuCapture={(e) => rightClickCell(e)}
      color={color}
      onMouseDown={leftDown}
      onMouseUp={leftUp}
    >
      <CellDisplay neighborBombs={neighborBombs}>
        {isFlagged && '🚩'}
        {!isCovered && !isFlagged && !isWinner && isBomb && '💣'}
        {!isCovered && !isBomb && neighborBombs !== 0 && neighborBombs}
      </CellDisplay>
    </CellContainer>
  )
}

interface CellContainerI {
  isCovered: boolean
  isBomb: boolean
  color?: string
}

const CellContainer = styled.div`
  width: 30px;
  height: 30px;
  user-select: none;
  border-top: ${(props: CellContainerI) =>
    props.isCovered ? '2px solid white' : '1px solid #7B7B7B'};
  border-right: ${(props: CellContainerI) =>
    props.isCovered ? '2px solid #7B7B7B' : '1px solid #7B7B7B'};
  border-left: ${(props: CellContainerI) =>
    props.isCovered ? '2px solid white' : '1px solid #7B7B7B'};
  border-bottom: ${(props: CellContainerI) =>
    props.isCovered ? '2px solid 7B7B7B' : '1px solid #7B7B7B'};
  background-color: ${(props: CellContainerI) =>
    props.color
      ? props.color
      : props.isCovered
      ? '#BDBDBD'
      : props.isBomb
      ? '#FF6666'
      : '#C2C2C2'};
  :hover {
    background-color: ${(props: CellContainerI) =>
      props.isCovered ? '#5C5C5C' : props.isBomb ? '#FF6666' : '#C2C2C2'};
  }
  display: flex;
  justify-content: center;
  cursor: pointer;
  line-height: 30px;
`

interface CellDisplayI {
  neighborBombs: number
}

const CellDisplay = styled.p`
  vertical-align: middle;
  line-height: 30px;
  font-size: 1.5em;
  font-style: bold;
  color: ${(props: CellDisplayI) =>
    props.neighborBombs === 1
      ? '#0000FF'
      : props.neighborBombs === 2
      ? '#006400'
      : props.neighborBombs === 3
      ? '#FF0000'
      : props.neighborBombs === 4
      ? '#FF8C00'
      : props.neighborBombs === 5
      ? '#8B4513'
      : props.neighborBombs === 6
      ? '#FF00FF'
      : props.neighborBombs === 7
      ? '#000000'
      : '#FFFFFF'};
`
