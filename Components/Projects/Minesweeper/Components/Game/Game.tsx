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
