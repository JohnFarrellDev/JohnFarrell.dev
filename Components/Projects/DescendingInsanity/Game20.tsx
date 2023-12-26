import { useState } from 'react'
import { UseLocalStorage } from '../../../Utilities/UseLocalStorage'
import { Game } from './Game'

const numberOfSlots = 20

export const Game20 = () => {
  const {
    value: highScore,
    setValueLocalStorageNoRerender: setHighScore,
    refetch,
  } = UseLocalStorage('twenty-number-challenge-high-score', 0)

  const [slots, setSlots] = useState<(number | null)[]>(Array(numberOfSlots).fill(null))

  return (
    <Game
      slots={slots}
      setSlots={setSlots}
      refetch={refetch}
      highScore={highScore}
      setHighScore={setHighScore}
      gameType="set-size"
    />
  )
}
