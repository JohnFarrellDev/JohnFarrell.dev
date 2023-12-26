import { UseLocalStorage } from '../../../Utilities/UseLocalStorage'
import { DescendingNumberGame } from './DescendingNumberGame'

const NUMBER_OF_SLOTS = 20

export const Game20 = () => {
  const {
    value: highScore,
    setValueLocalStorageNoRerender: setHighScore,
    refetch,
  } = UseLocalStorage('twenty-number-challenge-high-score', 0)

  return (
    <DescendingNumberGame
      numberOfSlots={NUMBER_OF_SLOTS}
      refetch={refetch}
      highScore={highScore}
      setHighScore={setHighScore}
      gameType="set-size"
    />
  )
}
