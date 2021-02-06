import React, { useCallback, useEffect, useMemo, useReducer } from "react";
import styled from "styled-components";

import useInterval from "../../common/hooks/useInterval";
import { MinesweeperCustomSettings } from "../../common/hooks/useLocalStorage";
import Layout from "../Layout";
import SEO from "../SEO";
import Title from "../Title";
import { GameCell, GameStatus, GameOptions, PreviousResults } from "./components";
import { generateBoard, getAutoReveal, getCustomBoardConfig, getFaceType, getGameDifficulty } from "./functions";
import { getAutoFlag, getAutoPlay, getVisualize } from "./functions/getLocalStorage";
import { minesweeperReducer } from "./reducer";
import { Faces, FaceType, GameDifficulty } from "./types";

interface MinesweeperI {
  localStorage: {
    difficulty: GameDifficulty;
    setDifficulty: React.Dispatch<React.SetStateAction<GameDifficulty>>;
    faceType: FaceType;
    setFaceType: React.Dispatch<React.SetStateAction<FaceType>>;
    customSettings: MinesweeperCustomSettings;
    setCustomSettings: React.Dispatch<React.SetStateAction<MinesweeperCustomSettings>>;
    autoReveal: boolean;
    setAutoReveal: React.Dispatch<React.SetStateAction<boolean>>;
    autoFlag: boolean;
    setAutoFlag: React.Dispatch<React.SetStateAction<boolean>>;
    autoPlay: boolean;
    setAutoPlay: React.Dispatch<React.SetStateAction<boolean>>;
    visualize: boolean;
    setVisualize: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

const initialGameState = {
  gameDifficulty: GameDifficulty.Beginner,
  rows: 10,
  columns: 10,
  numberOfBombs: 10,
  board: generateBoard(10, 10),
  isPlaying: false,
  isDead: false,
  isWinner: false,
  face: Faces.Blank,
  faceType: FaceType.Regular,
  timer: 0,
  flagsPlaced: 0,
  display: false,
  autoReveal: true,
  autoFlag: false,
  autoPlay: false,
  visualize: false
};

export const Minesweeper = ({ localStorage }: MinesweeperI) => {

  const [gameState, dispatch] = useReducer(minesweeperReducer, initialGameState);

  useEffect(() => {

    const gameDifficulty = getGameDifficulty(localStorage.difficulty);

    if (gameDifficulty === GameDifficulty.Custom) {
      dispatch({
        type: 'Init',
        gameDifficulty,
        customDifficulty: getCustomBoardConfig(gameDifficulty, localStorage.customSettings),
        faceType: getFaceType(localStorage.faceType),
        autoReveal: getAutoReveal(localStorage.autoReveal),
        autoFlag: getAutoFlag(localStorage.autoFlag),
        autoPlay: getAutoPlay(localStorage.autoPlay),
        visualize: getVisualize(localStorage.visualize)
      })
    } else {
      dispatch({
        type: 'Init',
        gameDifficulty,
        faceType: getFaceType(localStorage.faceType),
        autoReveal: getAutoReveal(localStorage.autoFlag),
        autoFlag: getAutoFlag(localStorage.autoFlag),
        autoPlay: getAutoPlay(localStorage.autoPlay),
        visualize: getVisualize(localStorage.visualize)
      })
    }
  }, []);

  useInterval(() => dispatch({ type: 'UpdateTimer' }), 1000);

  const leftClickCell = useCallback((cellIndex: number) => {
    dispatch({ type: 'ClickCell', cellIndex })
  }, []);

  const rightClickCell = useCallback((cellIndex: number) => {
    dispatch({ type: 'PlaceFlag', cellIndex })
  }, []);

  const holdCell = useCallback((cellIndex: number) => {
    dispatch({ type: 'HoldCell', cellIndex })
  }, []);

  const updateDifficulty = useCallback((gameDifficulty: GameDifficulty, rows?: number, columns?: number, numberOfBombs?: number) => {
    localStorage.setDifficulty(gameDifficulty);
    if (gameDifficulty === GameDifficulty.Custom) {
      if (rows && columns && numberOfBombs) {
        localStorage.setCustomSettings({
          rows,
          columns,
          numberOfBombs
        });
        dispatch({ type: 'UpdateConfiguration', gameDifficulty, rows, columns, numberOfBombs });
      }
    } else {
      dispatch({ type: 'UpdateConfiguration', gameDifficulty });
    }
  }, []);

  const rightClickFace = useCallback(() => {
    localStorage.setFaceType(gameState.faceType === FaceType.Regular ? FaceType.Cat : FaceType.Regular);
    dispatch({ type: 'UpdateFaceType' });
  }, []);

  const switchAutoReveal = useCallback(() => {
    localStorage.setAutoReveal((prev) => !prev);
    dispatch({ type: 'AutoReveal' });
  }, []);

  const switchAutoFlag = useCallback(() => {
    localStorage.setAutoFlag((prev) => !prev);
    dispatch({ type: 'AutoFlag' })
  }, [])

  const switchAutoPlay = useCallback(() => {
    localStorage.setAutoPlay((prev) => !prev);
    dispatch({ type: 'AutoPlay' })
  }, []);

  const switchVisualize = useCallback(() => {
    localStorage.setVisualize((prev) => !prev);
    dispatch({ type: 'Visualize' })
  }, [])

  const gameCells = useMemo(() => gameState.display ?
    <PlayingContainer>
      <GridContainer columns={gameState.columns}>
        {
          gameState.board.map((gameCell) => (
            <GameCell
              isCovered={gameCell.isCovered}
              isBomb={gameCell.isBomb}
              isFlagged={gameCell.isFlagged}
              isWinner={gameState.isWinner}
              neighborBombs={gameCell.neighborBombs}
              id={gameCell.id}
              leftClick={leftClickCell}
              rightClick={rightClickCell}
              holdCell={holdCell}
              key={gameCell.id}
            />
          ))
        }
      </GridContainer>
    </PlayingContainer>
    : null, [gameState.board])

  const seo = useMemo(() => (
    <SEO title="Minesweeper" description="Simple Minesweeper Clone" />
  ), []);

  const title = useMemo(() => (
    <Title title="Minesweeper" />
  ), []);

  const gameOptions = useMemo(() => (
    <GameOptions
      isPlaying={gameState.isPlaying}
      difficulty={gameState.gameDifficulty}
      rows={gameState.rows}
      columns={gameState.columns}
      numberOfBombs={gameState.numberOfBombs}
      updateDifficulty={updateDifficulty}
      customSettings={localStorage.customSettings}
      switchAutoReveal={switchAutoReveal}
      autoReveal={localStorage.autoReveal}
      switchAutoFlag={switchAutoFlag}
      autoFlag={localStorage.autoFlag}
      switchAutoPlay={switchAutoPlay}
      autoPlay={localStorage.autoPlay}
      switchVisualize={switchVisualize}
      visualize={localStorage.visualize}
    />
  ), [
    gameState.isPlaying,
    gameState.rows,
    gameState.columns,
    gameState.numberOfBombs,
    gameState.autoReveal,
    gameState.autoFlag,
    gameState.autoPlay,
    gameState.visualize
  ]);

  const previousResults = useMemo(() => gameState.gameDifficulty !== GameDifficulty.Custom ?
    <PreviousResults
      isWinner={gameState.isWinner}
      gameDifficulty={gameState.gameDifficulty}
      timer={gameState.timer}
    /> :
    null
    , [gameState.isWinner, gameState.gameDifficulty]);

  return (
    <Layout>
      {seo}
      {title}
      <Main>
        <GameContainer columns={gameState.columns}>
          {gameOptions}
          <GameStatus
            bombsLeft={gameState.numberOfBombs - gameState.board.filter((el) => el.isFlagged).length}
            totalBombs={gameState.numberOfBombs}
            faceType={gameState.faceType}
            face={gameState.face}
            timePlayed={gameState.timer}
            rightClickFace={rightClickFace}
          />
          {gameCells}
          {previousResults}
        </GameContainer>
      </Main>
    </Layout>
  )
};

const Main = styled.main`
  display: flex;
  justify-content: center;
`

interface GameContainerI {
  columns: number;
}

const GameContainer = styled.div`
  border-top: #ccc 3px solid;
  border-right: #ccc 3px solid;
  border-bottom: #777 3px solid;
  border-left: #777 3px solid;
  min-width: 600px;
  width: ${(props: GameContainerI) => `${(Number(props.columns) * 30) + 60}px`};

  @media(max-width: 600px) {
    min-width: 500px;
    width: ${(props: GameContainerI) => `${(Number(props.columns) * 30) + 5}px`};
  }

  @media(max-width: 500px) {
    min-width: 400px;
    width: ${(props: GameContainerI) => `${(Number(props.columns) * 30) + 5}px`};
  }

  @media(max-width: 400px) {
    min-width: 300px;
    width: ${(props: GameContainerI) => `${(Number(props.columns) * 30) + 5}px`};
  }
`

interface GridContainerI {
  columns: number;
}

// if number of columns * 30px is larger than screen width we have an issue, make cells smaller, make grid vertical
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props: GridContainerI) => `repeat(${props.columns}, 30px)`};
`

const PlayingContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #E5E5E5;
`