import React, { useState } from 'react'
import styled from 'styled-components'
import { MinesweeperCustomSettings } from '../../../common/hooks/useLocalStorage'
import { mapDifficultyToGameBoard } from '../constants'
import { GameDifficulty } from '../types'
import { FiChevronsDown, FiChevronsUp } from 'react-icons/fi'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
interface GameOptionsI {
  isPlaying: boolean;
  difficulty: GameDifficulty;
  rows: number;
  columns: number;
  numberOfBombs: number;
  updateDifficulty: (gameDifficulty: GameDifficulty, rows?: number, columns?: number, numberOfBombs?: number) => void;
  customSettings: MinesweeperCustomSettings;
  switchAutoReveal: () => void;
  autoReveal: boolean;
  switchAutoFlag: () => void;
  autoFlag: boolean;
  switchAutoPlay: () => void;
  autoPlay: boolean;
  switchVisualize: () => void;
  visualize: boolean;
}

export const GameOptions = ({
  isPlaying,
  difficulty,
  rows,
  columns,
  numberOfBombs,
  updateDifficulty,
  customSettings,
  switchAutoReveal,
  autoReveal,
  switchAutoFlag,
  autoFlag,
  switchAutoPlay,
  autoPlay,
  visualize,
  switchVisualize
}: GameOptionsI) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleDifficultyChange = ((event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === 'Custom') {
      updateDifficulty(GameDifficulty.Custom, customSettings.rows, customSettings.columns, customSettings.numberOfBombs);
    } else if (event.target.value === 'Beginner') {
      updateDifficulty(GameDifficulty.Beginner);
    } else if (event.target.value === 'Intermediate') {
      updateDifficulty(GameDifficulty.Intermediate);
    } else if (event.target.value === 'Expert') {
      updateDifficulty(GameDifficulty.Expert);
    }
  })

  const changeRows = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rows = Number(event.target.value);
    if (rows < 1 || rows > 99 || difficulty !== GameDifficulty.Custom) return;
    let numberOfBombs: number;
    if (customSettings.numberOfBombs >= rows * customSettings.columns) {
      numberOfBombs = (rows * customSettings.columns) - 1;
    } else {
      numberOfBombs = customSettings.numberOfBombs;
    }
    updateDifficulty(GameDifficulty.Custom, rows, customSettings.columns, numberOfBombs);
  }

  const changeColumns = (event: React.ChangeEvent<HTMLInputElement>) => {
    const columns = Number(event.target.value);
    if (columns < 1 || columns > 99 || difficulty !== GameDifficulty.Custom) return;
    let numberOfBombs: number;
    if (customSettings.numberOfBombs >= customSettings.rows * columns) {
      numberOfBombs = (customSettings.rows * columns) - 1;
    } else {
      numberOfBombs = customSettings.numberOfBombs;
    }
    updateDifficulty(GameDifficulty.Custom, customSettings.rows, columns, numberOfBombs);
  }

  const changeBombs = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numberOfBombs = Number(event.target.value);
    if (numberOfBombs < 1 || numberOfBombs > rows * columns - 1 || difficulty !== GameDifficulty.Custom) return;
    updateDifficulty(GameDifficulty.Custom, customSettings.rows, customSettings.columns, numberOfBombs);
  }

  const handleClickAutoReveal = () => {
    if (isPlaying) return;
    switchAutoReveal();
  }

  const handleClickAutoFlag = () => {
    if (isPlaying) return;
    switchAutoFlag();
  }

  const handleClickAutoPlay = () => {
    if (isPlaying) return;
    switchAutoPlay();
  }

  return (
    <>
      <GameConfiguration>
        <div onClick={() => setIsOpen(!isOpen)}>
          <p>Game Configuration {isOpen ? <FiChevronsUp /> : <FiChevronsDown />}</p>
        </div>
        {
          isOpen ?
            <OptionsContainer>
              <OptionItem>
                <label htmlFor="difficulty">Difficulty</label>
                <select
                  value={mapDifficultyToGameBoard[difficulty].display}
                  onChange={handleDifficultyChange}
                  disabled={isPlaying}
                  name="difficulty"
                  id="difficulty"
                >
                  <option value={"Beginner"}>Beginner</option>
                  <option value={"Intermediate"}>Intermediate</option>
                  <option value={"Expert"}>Expert</option>
                  <option value={"Custom"}>Custom</option>
                </select>
              </OptionItem>
              <OptionItem>
                <label htmlFor="rows">Rows</label>
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={rows}
                  disabled={difficulty !== GameDifficulty.Custom || isPlaying}
                  onChange={changeRows}
                  name="rows"
                  id="rows"
                />
              </OptionItem>
              <OptionItem>
                <label htmlFor="columns">Columns</label>
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={columns}
                  disabled={difficulty !== GameDifficulty.Custom || isPlaying}
                  onChange={changeColumns}
                  name="columns"
                  id="columns"
                />
              </OptionItem>
              <OptionItem>
                <label htmlFor="bombs">Bombs</label>
                <input
                  type="number"
                  min={1}
                  max={(rows * columns) - 1}
                  value={numberOfBombs}
                  disabled={difficulty !== GameDifficulty.Custom || isPlaying}
                  onChange={changeBombs}
                  name="bombs"
                  id="bombs"
                />
              </OptionItem>
              <OptionItem>
                <label htmlFor="auto-reveal">Auto Reveal</label>
                <CheckBox onClick={handleClickAutoReveal} id="auto-flag">
                  {autoReveal ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                </CheckBox>
              </OptionItem>
              <OptionItem>
                <label htmlFor="auto-flag">Auto Flag</label>
                <CheckBox onClick={handleClickAutoFlag} >
                  {autoFlag ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                </CheckBox>
              </OptionItem>
              <OptionItem>
                <label htmlFor="auto-play">Auto Play</label>
                <CheckBox onClick={handleClickAutoPlay} >
                  {autoPlay ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                </CheckBox>
              </OptionItem>
              <OptionItem>
                <label htmlFor="visualize">Visualizer</label>
                <CheckBox onClick={switchVisualize} >
                  {visualize ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                </CheckBox>
              </OptionItem>
            </OptionsContainer>
            : null
        }
      </GameConfiguration>
    </>
  )
}

const CheckBox = styled.div`
  margin: 0 auto;
  font-size: 1.45em;
  color: black;
`

const GameConfiguration = styled.div`
  justify-content: center;
  border-bottom: 2px solid #777;
  background-color: #BDBDBD;
  width: 100%;
  cursor: pointer;
  text-align: center;
  p {
    color: black;
    font-size: 1.25em;
    user-select: none;
    margin: 0 auto;
  }
`

const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px 0px 5px 0px;
`

const OptionItem = styled.div`
  label {
    color: black;
    font-size: 1.25em;
    user-select: none;
  }
  input {
    width: 90px;
    font-size: 1.25em;
    height: 1.75em;
  }
  select {
    font-size: 1em;
    height: 2em;
  }
  height: 70px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: center;
  text-align: center;
`