import React, { useCallback, useEffect, useMemo, useReducer } from 'react'
import styled from 'styled-components'
import { Layout } from '../../Layout'
import { SEO } from '../../SEO'
import { Title } from '../../Utilities/Title'
import { GameCell } from './Components/GameCell'
import { minesweeperReducer, State } from './reducer'

const initialGameState: State = {
  rows: 20,
  columns: 20,
  numberOfBombs: 10,
  board: new Array(20).fill(new Array(20)),
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
      <SEO title="Minesweeper" description="A deep dive into minesweeper" />
    ),
    []
  )

  const title = useMemo(() => <Title title="Minesweeper" />, [])

  const gameCells = useMemo(
    () =>
      gameState.board ? (
        <PlayingContainer>
          <GridContainer columns={gameState.columns}>
            {gameState.board.map((gameCell) => (
              <GameCell
                key={gameCell.id}
                id={gameCell.id}
                isCovered={gameCell.isCovered}
                isBomb={gameCell.isBomb}
                isFlagged={gameCell.isFlagged}
                isWinner={false}
                neighborBombs={gameCell.neighborBombs}
                leftClick={leftClickCell}
              />
            ))}
          </GridContainer>
        </PlayingContainer>
      ) : null,
    [gameState.board, gameState.columns, leftClickCell]
  )

  return (
    <Layout>
      {seo}
      {title}
      <Main>{gameCells}</Main>
    </Layout>
  )
}

const Main = styled.main`
  display: flex;
  justify-content: center;
`

interface GameContainerI {
  columns: number
}

const GameContainer = styled.div`
  border-top: #ccc 3px solid;
  border-right: #ccc 3px solid;
  border-bottom: #777 3px solid;
  border-left: #777 3px solid;
  min-width: 600px;
  width: ${(props: GameContainerI) => `${Number(props.columns) * 30 + 60}px`};
  @media (max-width: 600px) {
    min-width: 500px;
    width: ${(props: GameContainerI) => `${Number(props.columns) * 30 + 5}px`};
  }
  @media (max-width: 500px) {
    min-width: 400px;
    width: ${(props: GameContainerI) => `${Number(props.columns) * 30 + 5}px`};
  }
  @media (max-width: 400px) {
    min-width: 300px;
    width: ${(props: GameContainerI) => `${Number(props.columns) * 30 + 5}px`};
  }
`

interface GridContainerI {
  columns: number
}

// if number of columns * 30px is larger than screen width we have an issue, make cells smaller, make grid vertical
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props: GridContainerI) =>
    `repeat(${props.columns}, 30px)`};
`

const PlayingContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #e5e5e5;
`

export default Minesweeper
