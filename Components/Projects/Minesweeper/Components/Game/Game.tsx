import React, { useCallback, useEffect, useReducer, MouseEvent } from 'react'
import { minesweeperReducer } from '../../reducer'
import { GameCell } from '../GameCell'
import { GameSettings } from '../GameSettings'
import { GameTracking } from '../GameTracking'
import { FaceType } from '../GameTracking/GameTracking'
import styles from './Game.module.css'

export type CustomAnimations = 'PlaceBombs' | 'CalculateNeighbors' | 'RecursiveReveal'
export type Operations =
  | 'PlaceBombs'
  | 'CalculateNeighbors'
  | 'RevealCell'
  | 'RecursiveReveal'
  | 'FlagCell'
  | 'AutoFlag'
  | 'BasicAutoClick'

interface GameProps {
  columns: number
  rows: number
  numberOfBombs: number
  hasCustomControls: boolean
  transparentSideView: boolean
  customAnimations: Record<CustomAnimations, boolean>
  allowedOperations: Record<Operations, boolean>
  borderlessMode: boolean
}

export const Game = ({
  columns,
  rows,
  numberOfBombs,
  hasCustomControls,
  transparentSideView,
  customAnimations,
  allowedOperations,
  borderlessMode,
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
    animationTime: 0,
    borderlessMode,
    isHoldingDown: false,
    faceType: FaceType.Human,
    flagsPlaced: 0
  })

  useEffect(() => {
    if (gameState.animationToApply.length > 0) {
      setTimeout(() => {
        dispatch({
          type: 'ApplyAnimation',
        })
      }, gameState.animationTime)
    }
  }, [
    gameState.animationToApply.length,
    gameState.animationToApply,
    gameState.animationTime,
  ])

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

  const rightClickCell = useCallback(
    (rowIndex: number, columnIndex: number) => {
      dispatch({ type: 'RightClickCell', rowIndex, columnIndex })
    },
    []
  )

  const mouseDownCell = useCallback((event: MouseEvent<HTMLDivElement>) => {
    if(event.nativeEvent.button === 2) return
    dispatch({ type: 'MouseDownCell' })
  }, [])

  const mouseUpCell = useCallback(() => {
    dispatch({ type: 'MouseUpCell' })
  }, [])

  const switchFaceType = useCallback(() => {
    dispatch({type: 'SwitchFaceType'})
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

      <GameTracking
        isDead={gameState.isDead}
        isHoldingDown={gameState.isHoldingDown}
        faceType={gameState.faceType}
        isPlaying={gameState.isPlaying}
        isWinner={gameState.isWinner}
        switchFaceType={switchFaceType}
        totalBombs={gameState.numberOfBombs}
        flagsPlaced={gameState.flagsPlaced}
      />

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
                  rightClick={rightClickCell}
                  color={cell.color}
                  leftDown={mouseDownCell}
                  leftUp={mouseUpCell}
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
                    rightClick={rightClickCell}
                    leftDown={mouseDownCell}
                    leftUp={mouseUpCell}
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
