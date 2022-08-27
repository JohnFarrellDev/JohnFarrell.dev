import React, { useCallback, useEffect, useReducer } from 'react'
import { minesweeperReducer } from '../../reducer'
import { GameCell } from '../GameCell'
import styles from './Game.module.css'

interface GameProps {
  columns: number
  rows: number
  numberOfBombs: number
  hasCustomControls: boolean
}

export const Game = ({
  columns,
  rows,
  numberOfBombs,
  hasCustomControls,
}: GameProps) => {
  const [gameState, dispatch] = useReducer(minesweeperReducer, {
    columns,
    rows,
    numberOfBombs,
    board: [],
    isPlaying: false,
    isDead: false,
    isWinner: false,
  })
  console.log('🚀 ~ file: Game.tsx ~ line 28 ~ columns', columns)

  useEffect(() => {
    dispatch({
      type: 'Init',
    })
  }, [])

  const leftClickCell = useCallback((cellIndex: number) => {
    dispatch({ type: 'ClickCell', cellIndex })
  }, [])

  const changeNumberOfColumns = useCallback((newNumberOfColumns: string) => {
    const numberOfColumns = Number(newNumberOfColumns)

    if (!(numberOfColumns >= 3 && numberOfColumns <= 50)) return

    dispatch({
      type: 'ChangeNumberOfColumns',
      newNumberOfColumns: numberOfColumns,
    })
  }, [])

  const changeNumberOfRows = useCallback((newNumberOfRows: string) => {
    const numberOfRows = Number(newNumberOfRows)

    if (!(numberOfRows >= 3 && numberOfRows <= 30)) return

    dispatch({
      type: 'ChangeNumberOfRows',
      newNumberOfRows: numberOfRows,
    })
  }, [])

  const changeNumberOfBombs = useCallback((newNumberOfBombs: string) => {
    const numberOfBombs = Number(newNumberOfBombs)

    if (!(numberOfBombs >= 3 && numberOfBombs <= 30)) return

    dispatch({
      type: 'ChangeNumberOfBombs',
      newNumberOfBombs: numberOfBombs,
    })
  }, [])

  return (
    <>
      {hasCustomControls && (
        <div className={styles.controls}>
          <div className={styles.controlItem}>
            <label >Number of columns</label>
            <input
              type="number"
              value={gameState.columns}
              onChange={(event) => changeNumberOfColumns(event.target.value)}
              min={3}
              max={50}
            />
          </div>
          
          <div className={styles.controlItem}>
            <label>Number of Rows</label>
            <input
              type="number"
              value={gameState.rows}
              onChange={(event) => changeNumberOfRows(event.target.value)}
              min={3}
              max={30}
            />
          </div>

          <div className={styles.controlItem}>
            <label>Number of Bombs</label>
            <input
              type="number"
              value={gameState.numberOfBombs}
              onChange={(event) => changeNumberOfBombs(event.target.value)}
              min={1}
              max={gameState.columns * gameState.rows}
            />
          </div>    
        </div>
      )}

      {gameState.board.map((row, index) => (
        <div className={styles.row} key={index}>
          {row.map((cell) => (
            <GameCell
              key={cell.id}
              id={cell.id}
              isCovered={cell.isCovered}
              isBomb={cell.isBomb}
              isFlagged={cell.isFlagged}
              isWinner={false}
              neighborBombs={cell.neighborBombs}
              leftClick={leftClickCell}
            />
          ))}
        </div>
      ))}
    </>
  )
}
