import { MouseEvent, useCallback } from 'react'
import { Bomb } from './SVGs/Bomb'
import { RedFlag } from './SVGs/RedFlag'
import styles from './GameCell.module.css'

interface GameCellI {
  rowIndex: number
  columnIndex: number
  isCovered: boolean
  isBomb: boolean
  isFlagged: boolean
  isWinner: boolean
  neighborBombs: number
  color?: string
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
  leftClick,
  rightClick,
  leftDown,
  leftUp,
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
    <div
      onClick={clickCell}
      onContextMenuCapture={rightClickCell}
      onMouseDown={leftDown}
      onMouseUp={leftUp}
      className={styles.container}
      data-is-covered={isCovered}
      data-is-bomb={isBomb}
      data-number-of-neighbor-bombs={neighborBombs}
    >
      <span>
        {isFlagged && <RedFlag />}
        {!isCovered && !isFlagged && !isWinner && isBomb && <Bomb />}
        {!isCovered && !isBomb && neighborBombs !== 0 && neighborBombs}
      </span>
    </div>
  )
}
