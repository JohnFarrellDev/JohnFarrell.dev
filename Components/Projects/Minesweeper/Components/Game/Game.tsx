import React, { useCallback, useEffect, useReducer } from 'react'
import { minesweeperReducer } from '../../reducer'
import { GameCell } from '../GameCell'
import { GameSettings } from '../GameSettings'
import styles from './Game.module.css'

export type CustomAnimations = 'PlaceBombs'

interface GameProps {
  columns: number
  rows: number
  numberOfBombs: number
  hasCustomControls: boolean
  transparentSideView: boolean
  customAnimations: Map<CustomAnimations, boolean>
}

export const Game = ({
  columns,
  rows,
  numberOfBombs,
  hasCustomControls,
  transparentSideView,
  customAnimations,
}: GameProps) => {
  const [gameState, dispatch] = useReducer(minesweeperReducer, {
    columns,
    rows,
    numberOfBombs,
    customAnimations,
    board: [],
    isPlaying: false,
    isDead: false,
    isWinner: false,
    animations: [],
  })

  useEffect(() => {
    if (gameState.animations.length > 0) {
      // timeout might be incorrect due to off by one error!
      setTimeout(() => {
        dispatch({
          type: 'Animation',
        })
      }, gameState.animations[gameState.animations.length - 1].time)
    }
  }, [gameState.animations.length, gameState.animations])

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
          {gameState.board.map((column, columnIndex) => (
            <div className={styles.row} key={columnIndex}>
              {column.map((cell, rowIndex) => (
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
                  color={cell.color}
                />
              ))}
            </div>
          ))}
        </div>

        {transparentSideView && (
          <div style={{ margin: '5px' }}>
            {gameState.board.map((column, columnIndex) => (
              <div className={styles.row} key={columnIndex}>
                {column.map((cell, rowIndex) => (
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
