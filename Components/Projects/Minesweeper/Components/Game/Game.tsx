import React, { useCallback, useEffect, useReducer } from 'react'
import { minesweeperReducer } from '../../reducer'
import { GameCell } from '../GameCell'
import { GameSettings } from '../GameSettings'
import styles from './Game.module.css'

interface GameProps {
  columns: number
  rows: number
  numberOfBombs: number
  hasCustomControls: boolean
  transparentSideView: boolean
}

export const Game = ({
  columns,
  rows,
  numberOfBombs,
  hasCustomControls,
  transparentSideView,
}: GameProps) => {
  const [gameState, dispatch] = useReducer(minesweeperReducer, {
    columns,
    rows,
    numberOfBombs,
    board: [],
    isPlaying: false,
    isDead: false,
    isWinner: false,
    animations: [],
  })

  useEffect(() => {
    dispatch({
      type: 'Init',
    })
  }, [])

  const leftClickCell = useCallback((rowIndex: number, columnIndex: number) => {
    dispatch({ type: 'ClickCell', rowIndex, columnIndex })
  }, [])

  const changeNumberOfColumns = useCallback((newNumberOfColumns: string) => {
    dispatch({
      type: 'ChangeNumberOfColumns',
      newNumberOfColumns: Number(newNumberOfColumns),
    })
  }, [])

  const changeNumberOfRows = useCallback((newNumberOfRows: string) => {
    dispatch({
      type: 'ChangeNumberOfRows',
      newNumberOfRows: Number(newNumberOfRows),
    })
  }, [])

  const changeNumberOfBombs = useCallback((newNumberOfBombs: string) => {
    dispatch({
      type: 'ChangeNumberOfBombs',
      newNumberOfBombs: Number(newNumberOfBombs),
    })
  }, [])

  return (
    <>
      {hasCustomControls && (
        <GameSettings
          columns={gameState.columns}
          changeNumberOfColumns={changeNumberOfColumns}
          rows={gameState.rows}
          changeNumberOfRows={changeNumberOfRows}
          numberOfBombs={gameState.numberOfBombs}
          changeNumberOfBombs={changeNumberOfBombs}
        />
      )}

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ margin: '5px' }}>
          {gameState.board.map((row, rowIndex) => (
            <div className={styles.row} key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <GameCell
                  key={`${rowIndex}, ${columnIndex}`}
                  rowIndex={rowIndex}
                  columnIndex={columnIndex}
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
        </div>

        {transparentSideView && (
          <div style={{ margin: '5px' }}>
            {gameState.board.map((row, rowIndex) => (
              <div className={styles.row} key={rowIndex}>
                {row.map((cell, columnIndex) => (
                  <GameCell
                    key={`${rowIndex}, ${columnIndex}`}
                    rowIndex={rowIndex}
                    columnIndex={columnIndex}
                    isCovered={false}
                    isBomb={cell.isBomb}
                    isFlagged={cell.isFlagged}
                    isWinner={false}
                    neighborBombs={cell.neighborBombs}
                    leftClick={leftClickCell}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
