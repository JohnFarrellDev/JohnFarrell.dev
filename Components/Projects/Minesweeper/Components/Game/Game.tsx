import React, { useCallback, useEffect, useReducer } from 'react'
import { minesweeperReducer } from '../../reducer'
import { GameCell } from '../GameCell'
import { GameSettings } from '../GameSettings'
import styles from './Game.module.css'

export type CustomAnimations = 'PlaceBombs'
export type Operations = 'PlaceBombs' | 'CalculateNeighbors'

interface GameProps {
  columns: number
  rows: number
  numberOfBombs: number
  hasCustomControls: boolean
  transparentSideView: boolean
  customAnimations: Map<CustomAnimations, boolean>
  allowedOperations: Map<Operations, boolean>
}

export const Game = ({
  columns,
  rows,
  numberOfBombs,
  hasCustomControls,
  transparentSideView,
  customAnimations,
  allowedOperations
}: GameProps) => {
  const [gameState, dispatch] = useReducer(minesweeperReducer, {
    columns,
    rows,
    numberOfBombs,
    customAnimations,
    allowedOperations,
    board: [],
    isPlaying: false,
    isDead: false,
    isWinner: false,
    animationToApply: [],
    animationTime: 0
  })

  useEffect(() => {
    if (gameState.animationToApply.length > 0) {
      setTimeout(() => {
        dispatch({
          type: 'Animation',
        })
      }, gameState.animationTime)
    }
  }, [gameState.animationToApply.length, gameState.animationToApply, gameState.animationTime])

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

  const changeCustomAnimations = useCallback((animationOption: CustomAnimations | "All") => {
    dispatch({
      type: "ChangeAnimations",
      animationOption
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
          customAnimations={customAnimations}
          changeCustomAnimations={changeCustomAnimations}
        />
      )}

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ margin: '5px' }}>
          {gameState.board.map((column, rowIndex) => (
            <div className={styles.row} key={rowIndex}>
              {column.map((cell, columnIndex) => (
                <GameCell
                  key={`${columnIndex}, ${rowIndex}`}
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
            {gameState.board.map((column, rowIndex) => (
              <div className={styles.row} key={rowIndex}>
                {column.map((cell, columnIndex) => (
                  <GameCell
                    key={`${columnIndex}, ${rowIndex}`}
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
