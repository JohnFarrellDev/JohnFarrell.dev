import React, { useCallback, useEffect, useMemo, useReducer } from 'react'
import styled from 'styled-components'
import { Layout } from '../../Layout'
import { SEO } from '../../SEO'
import { Title } from '../../Utilities/Title'
import { GameCell } from './Components/GameCell'
import { minesweeperReducer, State } from './reducer'
import styles from './Minesweeper.module.css'

const initialGameState: State = {
  rows: 20,
  columns: 20,
  numberOfBombs: 10,
  board: [],
  isPlaying: false,
  isDead: false,
  isWinner: false,
}

export const Minesweeper = () => {
  const [gameState, dispatch] = useReducer(minesweeperReducer, initialGameState)

  useEffect(() => {
    dispatch({
      type: 'Init',
    })
  }, [])

  const leftClickCell = useCallback((cellIndex: number) => {
    dispatch({ type: 'ClickCell', cellIndex })
  }, [])

  const seo = useMemo(
    () => (
      <SEO
        title="Minesweeper"
        description="Implementing minesweeper and it's automated solving algorithms visualised."
      />
    ),
    []
  )

  const title = useMemo(() => <Title title="Minesweeper" />, [])

  return (
    <Layout>
      {seo}
      {title}
      <Main>
        <PlayingContainer>
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
        </PlayingContainer>
      </Main>
    </Layout>
  )
}

const Main = styled.main`
  display: flex;
  justify-content: center;
`

const PlayingContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #e5e5e5;
`

export default Minesweeper
